package com.estimate.estimate_manegment.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "estimate_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EstimateItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer quantity;
    private Double price;
    private Double tax;
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "estimate_id")
    private Estimate estimate;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
