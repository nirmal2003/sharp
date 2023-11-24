package com.sharp.main.project.members;

import com.sharp.main.dto.project.members.ProjectMemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/project/members")
@RequiredArgsConstructor
public class ProjectMemberController {
    private final ProjectMemberService projectMemberService;


    @GetMapping(path = "/{projectId}")
    public List<ProjectMemberDTO> getProjectMembers(@PathVariable Long projectId) {
        return projectMemberService.getProjectMembers(projectId);
    }
}
