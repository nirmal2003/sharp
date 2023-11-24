package com.sharp.main.dto.employees.roles;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
public class RoleResponse {
    private Long id;
    private String name;
    private String color;
}
