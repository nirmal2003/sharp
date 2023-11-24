package com.sharp.main.project.tasks;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TableRepository extends JpaRepository<Tables, Long> {
    List<Tables> findAllByProjectIdOrderByCreatedAtAsc(Long projectId, Pageable pageable);
}
