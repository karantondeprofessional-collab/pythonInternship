package com.cainmanagmant.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chain")
public class Chain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chainId;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false, unique = true, length = 15)
    private String gstnNo;

    private Boolean isActive = true;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters & Setters
}
