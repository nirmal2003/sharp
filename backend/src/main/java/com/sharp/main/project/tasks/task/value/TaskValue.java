package com.sharp.main.project.tasks.task.value;

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
public class TaskValue {
    @Id
    @GeneratedValue
    private Long id;
    private Long projectId;
    private Long taskId;
    private Long columnId;
    private Integer index;
    private String stringValue;
    private LocalDateTime dateTimeStartValue;
    private LocalDateTime dateTimeEndValue;
    private Long personValue;
    private Long optionValue;
    private Integer type;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime createdAt;
}
