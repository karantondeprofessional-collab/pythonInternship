package com.estimate.estimate_manegment.repository;

import com.estimate.estimate_manegment.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

