package com.sharp.main.project.dashboard;

import com.sharp.main.dto.project.dashboard.Numbers;
import com.sharp.main.dto.project.dashboard.charts.DefaultCharts;
import com.sharp.main.dto.project.dashboard.charts.PriorityPieChart;
import com.sharp.main.dto.project.dashboard.charts.TasksPieChart;
import com.sharp.main.project.members.ProjectMemberRepository;
import com.sharp.main.project.tasks.task.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class DashboardService {
    private final TaskRepository taskRepository;
    private final ProjectMemberRepository projectMemberRepository;

    public Numbers getNumbers(Long projectId) {
        Long completedTasks = taskRepository.countByProjectIdAndIsCompleted(projectId, true);
        Long inCompleteTasks = taskRepository.countByProjectIdAndIsCompleted(projectId, false);

        return Numbers.builder()
                .completedTasks(completedTasks)
                .inCompletedTasks(inCompleteTasks)
                .build();
    }

    public DefaultCharts getDefaultCharts(Long projectId) {
        Long completedTasks = taskRepository.countByProjectIdAndIsCompleted(projectId, true);
        Long inCompleteTasks = taskRepository.countByProjectIdAndIsCompleted(projectId, false);

        TasksPieChart tasksPieChart = TasksPieChart.builder()
                .completedTasks(completedTasks)
                .inCompleteTasks(inCompleteTasks)
                .build();


        Long high = taskRepository.countByProjectIdAndPriority(projectId, 1);
        Long medium = taskRepository.countByProjectIdAndPriority(projectId, 2);
        Long low = taskRepository.countByProjectIdAndPriority(projectId, 3);

        PriorityPieChart priorityPieChart = PriorityPieChart.builder()
                .high(high)
                .medium(medium)
                .low(low)
                .build();

        return DefaultCharts.builder()
                .tasksPieChart(tasksPieChart)
                .priorityPieChart(priorityPieChart)
                .build();
    }
}
