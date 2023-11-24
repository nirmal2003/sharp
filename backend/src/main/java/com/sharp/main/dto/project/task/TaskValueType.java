package com.sharp.main.dto.project.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskValueType {
    private Boolean isString;
    private Boolean isSelect;
    private Boolean isDate;
    private Boolean isPeople;
}
