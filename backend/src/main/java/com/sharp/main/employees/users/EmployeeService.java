package com.sharp.main.employees.users;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.employees.users.EmployeeInviteResponse;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.employees.roles.Role;
import com.sharp.main.employees.roles.RoleRepository;
import com.sharp.main.employees.users.invites.EmployeeInvite;
import com.sharp.main.employees.users.invites.EmployeeInviteRepository;
import com.sharp.main.utils.colors.Color;
import com.sharp.main.utils.colors.ColorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeInviteRepository employeeInviteRepository;
    private final AuthService authService;
    private final RoleRepository roleRepository;
    private final ColorRepository colorRepository;


    public EmployeeInviteResponse createInvite(Long roleId) {
        Role role = roleRepository.findById(roleId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "employee role not found"));
        Color color = colorRepository.findById(role.getColorId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "color not found"));

        UserDTO user = authService.getCurrentUser();

        Optional<EmployeeInvite> employeeInvite1 = employeeInviteRepository.findByCompanyIdAndRoleId(user.getId(), roleId);

        if (employeeInvite1.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invitation already exits");
        }

        EmployeeInvite employeeInvite = employeeInviteRepository.save(EmployeeInvite.builder()
                .companyId(user.getId())
                .roleId(role.getId())
                .build());


        return EmployeeInviteResponse.builder()
                .id(employeeInvite.getId())
                .roleName(role.getName())
                .color(color.getColor())
                .build();
    }

    public List<EmployeeInviteResponse> getInvites(Integer page) {
        try {
            Pageable pageable = PageRequest.of(0, 20);

            UserDTO user = authService.getCurrentUser();

            return employeeInviteRepository.findAllByCompanyId(user.getId(), pageable);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "something went wrong try again");
        }
    }

    public void deleteInvite(Long inviteId) {

        UserDTO user = authService.getCurrentUser();

        EmployeeInvite invite = employeeInviteRepository.findByIdAndCompanyId(inviteId, user.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "employee role not found"));

        employeeInviteRepository.delete(invite);
    }
}
