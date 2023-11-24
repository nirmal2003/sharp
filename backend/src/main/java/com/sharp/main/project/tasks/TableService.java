package com.sharp.main.project.tasks;

import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.table.ColumnNameAndTypeDTO;
import com.sharp.main.dto.project.table.TableResponse;
import com.sharp.main.dto.project.table.CreatedTableResponse;
import com.sharp.main.project.tasks.column.TableColumn;
import com.sharp.main.project.tasks.column.TableColumnService;
import com.sharp.main.project.tasks.task.Task;
import com.sharp.main.project.tasks.task.TaskService;
import com.sharp.main.project.tasks.task.value.TaskValue;
import com.sharp.main.project.tasks.task.value.TaskValueService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TableService {
    private final TableRepository tableRepository;
    private final TableColumnService tableColumnService;
    private final TaskValueService taskValueService;
    private final TaskService taskService;

    public CreatedTableResponse createTable(RequestName requestName, Long projectId) {
        Tables table = Tables.builder()
                .name(requestName.getName())
                .projectId(projectId)
                .build();

        Tables savedTable = tableRepository.save(table);

        List<ColumnNameAndTypeDTO> columns = List.of(
                ColumnNameAndTypeDTO.builder().name("Assignee").type(1).build(),
                ColumnNameAndTypeDTO.builder().name("Due").type(2).build(),
                ColumnNameAndTypeDTO.builder().name("Status").type(3).build()
        );

        List<TableColumn> tableColumns = tableColumnService.createTableColumns(savedTable.getId(), columns);

        Task task = taskService.createTask(savedTable.getId(), RequestName.builder().name("First task").build(), projectId);

        List<TaskValue> taskValues = taskValueService.createDefaultTaskValues(task.getId(), savedTable.getId(), projectId);

        return CreatedTableResponse.builder()
                .table(TableResponse.builder()
                        .id(savedTable.getId())
                        .name(savedTable.getName())
                        .columns(tableColumns)
                        .build())
                .tableColumnList(tableColumns)
                .task(task)
                .taskValueList(taskValues)
                .build();
    }

    public List<TableResponse> getTables(Long projectId) {

        Pageable pageable = PageRequest.of(0, 5);

        List<Tables> tables = tableRepository.findAllByProjectIdOrderByCreatedAtAsc(projectId, pageable);

        return tables.stream().map(this::getTableWithColumns).toList();
    }

    private TableResponse getTableWithColumns(Tables table) {
        List<TableColumn> columnList = tableColumnService.getTableColumns(table.getId());

        return TableResponse.builder()
                .id(table.getId())
                .name(table.getName())
                .columns(columnList)
                .build();
    }

    public void changeTableName(RequestName requestName, Long tableId) {
        Tables table = tableRepository.findById(tableId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        table.setName(requestName.getName());

        tableRepository.save(table);
    }

    public void deleteTable(Long tableId) {
        tableRepository.deleteById(tableId);
    }
}
