package com.sharp.main.project.tasks.values;

import com.sharp.main.dto.project.task.CreateOptionsRequest;
import com.sharp.main.dto.project.task.OptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/project/values")
@RequiredArgsConstructor
public class ValuesController {
    private final OptionService selectService;

    @PostMapping(path = "/options/{projectId}")
    public OptionResponse createOption(@PathVariable("projectId") Long projectId, @RequestParam("global") Boolean isGlobal, @RequestBody CreateOptionsRequest requestBody) {
        return selectService.createOption(projectId, isGlobal, requestBody);
    }

    @GetMapping(path = "/options/project/{projectId}")
    public List<OptionResponse> getOptionsByProject(@PathVariable("projectId") Long projectId) {
        return selectService.getOptionsByProject(projectId);
    }

    @GetMapping(path = "/options/global")
    public List<OptionResponse> getGlobalOptions() {
        return selectService.getGlobalOptions();
    }
}
