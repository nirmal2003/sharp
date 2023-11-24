package com.sharp.main.project.tasks.column;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColumnRepository extends JpaRepository<TableColumn, Long> {
    Integer countByTableId(Long tableId);
    List<TableColumn> findAllByTableId(Long tableId, Pageable pageable);
}
