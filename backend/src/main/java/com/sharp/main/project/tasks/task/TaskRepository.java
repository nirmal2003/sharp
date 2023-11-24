package com.sharp.main.project.tasks.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByTableIdOrderByCreatedAtAsc(Long tableId);
    List<Task> findAllByTableIdAndIsCompletedOrderByCreatedAtAsc(Long tableId, Boolean isCompleted);
    Long countByProjectIdAndIsCompleted(Long projectId, Boolean isCompleted);

    Long countByProjectIdAndPriority(Long projectId, Integer priority);
}
