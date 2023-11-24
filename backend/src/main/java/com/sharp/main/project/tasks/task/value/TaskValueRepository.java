package com.sharp.main.project.tasks.task.value;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskValueRepository extends JpaRepository<TaskValue, Long> {
    List<TaskValue> findAllByTaskId(Long taskId, Pageable pageable);
}
