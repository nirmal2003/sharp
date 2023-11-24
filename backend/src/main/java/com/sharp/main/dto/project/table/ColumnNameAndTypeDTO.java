package com.sharp.main.dto.project.table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ColumnNameAndTypeDTO {
    private String name;
    private Integer type;
}
