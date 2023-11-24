package com.sharp.main.project.members;

import com.sharp.main.dto.project.members.ProjectMemberDTO;
import com.sharp.main.project.tasks.task.TaskRepository;
import com.sharp.main.project.tasks.task.value.TaskValueRepository;
import com.sharp.main.user.User;
import com.sharp.main.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectMemberService {
    private final ProjectMemberRepository projectMemberRepository;
    private final UserRepository userRepository;
    private final TaskRepository taskRepository;
    private final TaskValueRepository taskValueRepository;

    public List<ProjectMemberDTO> getProjectMembers(Long projectId) {
        try {
            Pageable pageable = PageRequest.of(0, 20);

            List<ProjectMember> projectMemberList = projectMemberRepository.findAllByProjectIdOrderByCreatedAtDesc(projectId, pageable);

            return projectMemberList.stream().map(this::getProjectMemberDetails).toList();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    private ProjectMemberDTO getProjectMemberDetails(ProjectMember projectMember) {
        User user = userRepository.findById(projectMember.getUserId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NO_CONTENT));

        return ProjectMemberDTO.builder()
                .id(projectMember.getId())
                .name(user.getName())
                .image(user.getImage())
                .build();
    }
}
