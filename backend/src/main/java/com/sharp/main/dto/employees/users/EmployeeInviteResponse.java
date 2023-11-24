package com.sharp.main.dto.employees.users;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeInviteResponse {
    private Long id;
    private String roleName;
    private String color;
}
