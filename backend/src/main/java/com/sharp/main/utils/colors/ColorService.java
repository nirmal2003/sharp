package com.sharp.main.utils.colors;

import com.sharp.main.dto.utils.ColorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ColorService {
    private final ColorRepository colorRepository;

    public List<ColorResponse> getColors() {
        List<Color> colors = colorRepository.findAll();

        return colors.stream().map(this::getColor).toList();
    }

    private ColorResponse getColor(Color color) {
        return ColorResponse.builder()
                .id(color.getId())
                .color(color.getColor())
                .build();
    }

    public void addColor(String color) {
        colorRepository.save(Color.builder().color(color).build());
    }
}
