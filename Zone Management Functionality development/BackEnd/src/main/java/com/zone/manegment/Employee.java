package com.zone.manegment;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String mobile;
    private String email;

    @ManyToOne
    @JoinColumn(name="zone_id")
    private Zone zone;
}

