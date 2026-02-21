package com.invoice.manegment;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private Integer quantity;
    private Double price;
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "invoice_id")
    private Invoice invoice;
}

