package com.sharp.main.employees.roles;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.employees.roles.RoleRequest;
import com.sharp.main.dto.employees.roles.RoleResponse;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.utils.colors.Color;
import com.sharp.main.utils.colors.ColorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RoleService {
    private final RoleRepository roleRepository;
    private final ColorRepository colorRepository;
    private final AuthService authService;


    public Role createRole(RoleRequest roleRequest) {
        UserDTO user = authService.getCurrentUser();

        Color color = colorRepository.findById(roleRequest.getColor()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "color not found!"));

        return roleRepository.save(Role.builder()
                .name(roleRequest.getName())
                .colorId(color.getId())
                .color(color.getColor())
                .companyId(user.getId())
                .build());
    }

    public List<RoleResponse> getRoles(Integer page) {
        try {
            Pageable pageable = PageRequest.of(page, 30);

            UserDTO user = authService.getCurrentUser();

            return roleRepository.findAllByCompanyId(user.getId(), pageable);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Something went wrong, try again");
        }
    }

    public void deleteRole(Long roleId) {
        UserDTO user = authService.getCurrentUser();

        Role role = roleRepository.findByIdAndCompanyId(roleId, user.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "role not found"));

        roleRepository.delete(role);
    }
}
