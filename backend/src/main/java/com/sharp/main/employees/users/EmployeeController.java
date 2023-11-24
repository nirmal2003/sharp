package com.sharp.main.employees.users;

import com.sharp.main.dto.employees.users.EmployeeInviteResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/employees/invites")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;


    @PostMapping(path = "/{roleId}")
    public EmployeeInviteResponse createInvite(@PathVariable("roleId") Long roleId) {
        return employeeService.createInvite(roleId);
    }

    @GetMapping
    public List<EmployeeInviteResponse> getInvites(@RequestParam(name = "page", required = false, defaultValue = "0") Integer page) {
        return employeeService.getInvites(page);
    }

    @DeleteMapping(path = "/{inviteId}")
    public void deleteInvite(@PathVariable("inviteId") Long inviteId) {
        employeeService.deleteInvite(inviteId);
    }
}
