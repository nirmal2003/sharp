package com.sharp.main.dto.project.task;

import com.sharp.main.project.tasks.task.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskResponse {
    private Task task;
    private List<TaskValueDTO> taskValueList;
}
