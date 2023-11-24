package com.sharp.main.utils.colors;

import com.sharp.main.dto.utils.ColorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/colors")
@RequiredArgsConstructor
public class ColorController {
    private final ColorService colorService;

    @PostMapping
    public void addColor(@RequestParam("color") String color) {
        colorService.addColor(color);
    }

    @GetMapping
    public List<ColorResponse> getColors() {
        return colorService.getColors();
    }
}
