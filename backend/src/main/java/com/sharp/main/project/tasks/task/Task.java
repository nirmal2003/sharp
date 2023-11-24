package com.sharp.main.project.tasks.task;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Task {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Long tableId;
    private Long projectId;

    @Column(columnDefinition = "boolean default false")
    private Boolean isCompleted;

    private Integer priority;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;
}
