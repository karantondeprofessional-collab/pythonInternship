package com.brandManagment.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "chain")
@Data
public class Chain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer chainId;

    private String companyName;
}
