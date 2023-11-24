package com.sharp.main.project.dashboard;

import com.sharp.main.dto.project.dashboard.Numbers;
import com.sharp.main.dto.project.dashboard.charts.DefaultCharts;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/project/dashboard/{projectId}")
@RequiredArgsConstructor
public class DashboardController {
    private final DashboardService dashboardService;


    @GetMapping(path = "/numbers")
    public Numbers getStatNumbers(@PathVariable Long projectId) {
        return dashboardService.getNumbers(projectId);
    }

    @GetMapping(path = "/charts/default")
    public DefaultCharts getDefaultCharts(@PathVariable Long projectId) {
        return dashboardService.getDefaultCharts(projectId);
    }
}
