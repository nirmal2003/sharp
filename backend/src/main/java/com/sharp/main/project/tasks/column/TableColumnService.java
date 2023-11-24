package com.sharp.main.project.tasks.column;

import com.sharp.main.dto.project.table.ColumnNameAndTypeDTO;
import com.sharp.main.dto.project.table.CreateColumnResponse;
import com.sharp.main.project.tasks.TableRepository;
import com.sharp.main.project.tasks.Tables;
import com.sharp.main.project.tasks.task.Task;
import com.sharp.main.project.tasks.task.TaskRepository;
import com.sharp.main.project.tasks.task.value.TaskValue;
import com.sharp.main.project.tasks.task.value.TaskValueRepository;
import com.sharp.main.project.tasks.task.value.TaskValueService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TableColumnService {
    private final ColumnRepository columnRepository;
    private final TableRepository tableRepository;
    private final TaskRepository taskRepository;
    private final TaskValueService taskValueService;

    public List<TableColumn> createTableColumns(Long tableId, List<ColumnNameAndTypeDTO> columns) {

        return columns.stream().map((value) -> createAColumn(value, tableId)).toList();
    }

    private TableColumn createAColumn(ColumnNameAndTypeDTO column, Long tableId) {
        Integer count = columnRepository.countByTableId(tableId);
        TableColumn tableColumn = TableColumn.builder()
                .name(column.getName())
                .tableId(tableId)
                .index(count + 1)
                .type(column.getType())
                .build();

        return columnRepository.save(tableColumn);
    }

    public CreateColumnResponse createNewColumn(String name, Long tableId, Integer type) {
        Tables table = tableRepository.findById(tableId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task table not found"));
        List<Task> taskList = taskRepository.findAllByTableIdOrderByCreatedAtAsc(tableId);

        TableColumn column = createAColumn(
                ColumnNameAndTypeDTO.builder()
                        .name(name)
                        .type(type)
                        .build(),
                tableId);

        List<TaskValue> taskValueList = taskList.stream().map((task) -> taskValueService.createTaskValue(task.getId(), column.getId(), type != null ? type : 3, table.getProjectId())).toList();

        return CreateColumnResponse.builder()
                .column(column)
                .taskValueList(taskValueList)
                .build();
    }

    public TableColumn createTableColumn(String name, Long tableId, Integer type) {
        Integer count = columnRepository.countByTableId(tableId);
        TableColumn tableColumn = TableColumn.builder()
                .name(name)
                .tableId(tableId)
                .index(count + 1)
                .build();

        TableColumn savedColumn = columnRepository.save(tableColumn);

        return savedColumn;
    }

    public List<TableColumn> getTableColumns(Long tableId) {
        Pageable pageRequest = PageRequest.of(0, 20, Sort.by("index").ascending());

        return columnRepository.findAllByTableId(tableId, pageRequest);
    }

    public void deleteColumn(Long columnId) {
        columnRepository.deleteById(columnId);
    }
}
