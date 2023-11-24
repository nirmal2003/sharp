package com.sharp.main.dto.project.task;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChangeTaskValue {
    private String stringValue;
    private LocalDateTime dateTimeStartDate;
    private LocalDateTime dateTimeEndDate;
    private Long personValue;
    private Long optionValue;
}
