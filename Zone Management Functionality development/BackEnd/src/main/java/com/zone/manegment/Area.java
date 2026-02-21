package com.zone.manegment;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String areaName;
    private String pincode;

    @ManyToOne
    @JoinColumn(name="zone_id")
    private Zone zone;
}

