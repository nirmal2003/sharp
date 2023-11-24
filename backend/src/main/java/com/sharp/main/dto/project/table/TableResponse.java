package com.sharp.main.dto.project.table;

import com.sharp.main.project.tasks.column.TableColumn;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TableResponse {
    private Long id;
    private String name;
    private List<TableColumn> columns;
}
