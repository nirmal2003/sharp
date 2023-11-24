package com.sharp.main.project.tasks.values;

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
public class Option {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Long projectId;
    private Long userId;
    private Long color;

    @Column(columnDefinition = "boolean default false")
    private Boolean isGlobal;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;
}
