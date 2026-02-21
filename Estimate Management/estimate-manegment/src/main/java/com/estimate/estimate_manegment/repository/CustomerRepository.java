package com.estimate.estimate_manegment.repository;

import com.estimate.estimate_manegment.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
