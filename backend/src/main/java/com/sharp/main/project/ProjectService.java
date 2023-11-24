package com.sharp.main.project;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.ProjectResponse;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.project.members.ProjectMember;
import com.sharp.main.project.members.ProjectMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final AuthService authService;
    private final ProjectMemberRepository projectMemberRepository;

    public Project createProject(RequestName projectRequest) {
        UserDTO user = authService.getCurrentUser();

        Project project = Project.builder()
                .name(projectRequest.getName())
                .creatorId(user.getId())
                .build();

        Project project1 = projectRepository.save(project);

        projectMemberRepository.save(ProjectMember.builder()
                        .projectId(project1.getId())
                        .userId(user.getId())
                .build()
        );

        return project1;
    }

    public List<Project> getAllProjects() {
        UserDTO userDTO = authService.getCurrentUser();

        return projectRepository.findAllByCreatorId(userDTO.getId());
    }

    public ProjectResponse getProjectDetails(Long projectId) {

        UserDTO user = authService.getCurrentUser();

        Project project = projectRepository.findByIdAndCreatorId(projectId, user.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "project not found"));

        return ProjectResponse.builder()
                .id(project.getId())
                .name(project.getName())
                .createdAt(project.getCreatedAt())
                .build();
    }
}
