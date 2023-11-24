package com.sharp.main.dto.project.task;

import com.sharp.main.dto.member.MemberDTO;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class TaskValueDTO {
    private Long id;
    private Integer index;
    private String stringValue;
    private LocalDateTime dateTimeStartValue;
    private LocalDateTime dateTimeEndValue;
    private MemberDTO personValue;
    private OptionResponse optionValue;
    private Integer type;
}
