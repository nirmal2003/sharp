package com.sharp.main.project.tasks.values;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
    List<Option> findAllByUserIdAndIsGlobalOrderByCreatedAtDesc(Long userId, Boolean isGlobal);
    List<Option> findAllByProjectIdOrderByCreatedAtDesc(Long projectId);
}
