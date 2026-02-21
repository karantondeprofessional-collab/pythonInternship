package com.estimate.estimate_manegment.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "estimates")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Estimate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String estimateNumber;
    private LocalDate date;

    private Double totalAmount;
    private Double taxAmount;
    private Double grandTotal;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "estimate", cascade = CascadeType.ALL)
    private List<EstimateItem> items;
}
