package com.sharp.main.dto.utils;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ColorResponse {
    private Long id;
    private String color;
}
