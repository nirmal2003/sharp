package com.sharp.main.project.tasks;

import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.table.CreateColumnResponse;
import com.sharp.main.dto.project.table.TableResponse;
import com.sharp.main.dto.project.table.CreatedTableResponse;
import com.sharp.main.project.tasks.column.TableColumnService;
import com.sharp.main.project.tasks.task.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/project/tasks/table")
@RequiredArgsConstructor
public class TableController {
    private final TableService tableService;
    private final TableColumnService tableColumnService;

    @PostMapping(path = "/{projectId}")
    public CreatedTableResponse createTable(@RequestBody RequestName requestName, @PathVariable("projectId") Long projectId) {
        return tableService.createTable(requestName, projectId);
    }

    @GetMapping(path = "/{projectId}")
    public List<TableResponse> getTables(@PathVariable("projectId") Long projectId) {
        return tableService.getTables(projectId);
    }

    @PutMapping(path = "/name/{tableId}")
    public void changeTableName(@PathVariable("tableId") Long tableId, @RequestBody RequestName requestName) {
        tableService.changeTableName(requestName, tableId);
    }

    @DeleteMapping(path = "/{tableId}")
    public void deleteTable(@PathVariable("tableId") Long tableId) {
        tableService.deleteTable(tableId);
    }

    @PostMapping(path = "/columns/{tableId}")
    public CreateColumnResponse createNewColumn(@PathVariable Long tableId, @RequestBody RequestName requestName, @RequestParam Integer type) {
        return tableColumnService.createNewColumn(requestName.getName(), tableId, type);
    }
}
