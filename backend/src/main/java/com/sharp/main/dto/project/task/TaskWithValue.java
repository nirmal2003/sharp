package com.sharp.main.dto.project.task;

import com.sharp.main.project.tasks.task.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskWithValue {
    private Task task;
}
