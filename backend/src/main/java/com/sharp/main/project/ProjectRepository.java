package com.sharp.main.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findAllByCreatorId(Long creatorId);
    Optional<Project> findByIdAndCreatorId(Long id, Long creatorId);
}
