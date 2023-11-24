package com.sharp.main.project;

import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.ProjectResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/project")
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping
    public Project createProject(@RequestBody RequestName projectRequest) {
        return projectService.createProject(projectRequest);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping(path = "/{projectId}")
    public ProjectResponse getProjectDetails(@PathVariable("projectId") Long projectId) {
        return projectService.getProjectDetails(projectId);
    }
}
