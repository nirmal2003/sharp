package com.sharp.main.project.tasks.board;

import com.sharp.main.project.tasks.task.TaskService;
import com.sharp.main.project.tasks.task.value.TaskValueService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final TaskService taskService;
    private final TaskValueService taskValueService;
}
