package com.sharp.main.dto.project.dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Numbers {
    private Long completedTasks;
    private Long inCompletedTasks;
    private Long overDueTasks;
}
