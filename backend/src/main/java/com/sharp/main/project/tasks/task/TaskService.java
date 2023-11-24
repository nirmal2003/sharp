package com.sharp.main.project.tasks.task;

import com.sharp.main.dto.project.RequestName;
import com.sharp.main.dto.project.task.TaskResponse;
import com.sharp.main.dto.project.task.TaskValueDTO;
import com.sharp.main.project.tasks.TableRepository;
import com.sharp.main.project.tasks.Tables;
import com.sharp.main.project.tasks.task.value.TaskValue;
import com.sharp.main.project.tasks.task.value.TaskValueService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final TaskValueService taskValueService;
    private final TableRepository tableRepository;

    public Task createTask(Long tableId, RequestName requestName, Long projectId) {
        Task task = Task.builder()
                .name(requestName.getName())
                .tableId(tableId)
                .projectId(projectId)
                .isCompleted(false)
                .priority(1)
                .build();

        return taskRepository.save(task);
    }

    public TaskResponse createATask(Long tableId, RequestName requestName) {
        Tables table = tableRepository.findById(tableId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "table not found"));
        Task task = taskRepository.save(Task.builder()
                .name(requestName.getName())
                .tableId(tableId)
                .projectId(table.getProjectId())
                .isCompleted(false)
                .priority(1)
                .build());

        List<TaskValue> taskValueList = taskValueService.createTaskValues(task.getId(), tableId, table.getProjectId());

        List<TaskValueDTO> taskValueDTOList = taskValueList.stream().map(taskValueService::getTaskValueDetails).toList();

        return TaskResponse.builder()
                .task(task)
                .taskValueList(taskValueDTOList)
                .build();
    }

    public List<TaskResponse> getTasks(Long tableId) {
        try {
            List<Task> taskList = taskRepository.findAllByTableIdOrderByCreatedAtAsc(tableId);

            return taskList.stream().map(taskValueService::getTaskWithValue).toList();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<TaskResponse> getTasksByStatus(Long tableId, Boolean status) {
        try {
            List<Task> taskList = taskRepository.findAllByTableIdAndIsCompletedOrderByCreatedAtAsc(tableId, status);

            return taskList.stream().map(taskValueService::getTaskWithValue).toList();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public void updateName(Long taskId, RequestName requestName) {
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        task.setName(requestName.getName());

        taskRepository.save(task);
    }

    public void changeTaskStatus(Long taskId) {
        try {
            Task task = taskRepository.findById(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "task not found"));

            task.setIsCompleted(task.getIsCompleted() == null || !task.getIsCompleted());

            taskRepository.save(task);
        } catch (Exception e) {
            System.out.println(e);
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    public void changeTaskPriority(Long taskId, Integer priority) {
        System.out.println("\n" + priority);
        Task task = taskRepository.findById(taskId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));

        task.setPriority(priority == null ? 1 : priority);

        taskRepository.save(task);
    }
}
