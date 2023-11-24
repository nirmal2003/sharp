package com.sharp.main.employees.roles;

import com.sharp.main.dto.employees.roles.RoleRequest;
import com.sharp.main.dto.employees.roles.RoleResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/employees/roles")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;


    @PostMapping
    public Role createRole(@RequestBody RoleRequest roleRequest) {
        return roleService.createRole(roleRequest);
    }

    @GetMapping
    public List<RoleResponse> getRoles(@RequestParam(name = "page", required = false, defaultValue = "0") Integer page) {
        return roleService.getRoles(page);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteRole(@PathVariable("id") Long id) {
        roleService.deleteRole(id);
    }
}
