package com.sharp.main.dto.project.dashboard.charts;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TasksPieChart {
    private Long completedTasks;
    private Long inCompleteTasks;
}
