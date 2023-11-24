package com.sharp.main.project.tasks.task;

import com.sharp.main.dto.member.MemberDTO;
import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.task.*;
import com.sharp.main.project.tasks.task.value.TaskValue;
import com.sharp.main.project.tasks.task.value.TaskValueService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/project/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;
    private final TaskValueService taskValueService;

    @PostMapping(path = "/{tableId}")
    public TaskResponse createATask(@PathVariable("tableId") Long tableId, @RequestBody RequestName requestName) {
        return taskService.createATask(tableId, requestName);
    }

    @GetMapping(path = "/{tableId}")
    public List<TaskResponse> getTasks(@PathVariable("tableId") Long tableId) {
        return taskService.getTasks(tableId);
    }

    @GetMapping(path = "/{tableId}/status")
    public List<TaskResponse> getTasks(@PathVariable("tableId") Long tableId, @RequestParam(name = "status", required = false, defaultValue = "true") Boolean status) {
        return taskService.getTasksByStatus(tableId, status);
    }

    @DeleteMapping(path = "/{taskId}")
    public void deleteTask(@PathVariable("taskId") Long taskId) {
        taskService.deleteTask(taskId);
    }

    @PutMapping(path = "/name/{taskId}")
    public void updateTaskName(@PathVariable("taskId") Long taskId, @RequestBody RequestName requestName) {
        taskService.updateName(taskId, requestName);
    }

    @PutMapping(path = "/{taskId}/complete")
    public void changeTaskStatus(@PathVariable("taskId") Long taskId) {
        taskService.changeTaskStatus(taskId);
    }

    @PutMapping(path = "/{taskId}/priority")
    public void changeTaskPriority(@PathVariable Long taskId, @RequestParam(name = "priority", required = false, defaultValue = "1") Integer priority) {
        taskService.changeTaskPriority(taskId, priority);
    }

    @PutMapping(path = "/value/{taskId}/{taskValueId}")
    public TaskValue changeTaskValue(@PathVariable("taskId") Long taskId, @PathVariable("taskValueId") Long taskValueId, @RequestBody ChangeTaskValue changeTaskValue) {
        return taskValueService.changeTaskValue(taskId, taskValueId, changeTaskValue);
    }

    @PutMapping(path = "/value/option/{taskValueId}/{optionValueId}")
    public OptionResponse changeTaskOptionValue(@PathVariable("taskValueId") Long taskValueId, @PathVariable("optionValueId") Long optionValue) {
        return taskValueService.changeTaskOptionValue(taskValueId, optionValue);
    }

    @PutMapping(path = "/value/assignee/{taskValueId}/{memberId}")
    public MemberDTO changeTaskPersonValue(@PathVariable("taskValueId") Long taskValueId, @PathVariable("memberId") Long memberId) {
        return taskValueService.changeTaskPersonValue(taskValueId, memberId);
    }

    @PutMapping(path = "/value/date/{taskValueId}")
    public void changeDateValue(@PathVariable("taskValueId") Long taskValueId, @RequestBody DateValueDTO dateValue) {
        taskValueService.changeDateValue(taskValueId, dateValue);
    }
}
