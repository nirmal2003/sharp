package com.sharp.main.dto.project.table;

import com.sharp.main.project.tasks.Tables;
import com.sharp.main.project.tasks.column.TableColumn;
import com.sharp.main.project.tasks.task.Task;
import com.sharp.main.project.tasks.task.value.TaskValue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreatedTableResponse {
    private TableResponse table;
    private List<TableColumn> tableColumnList;
    private Task task;
    private List<TaskValue> taskValueList;
}
