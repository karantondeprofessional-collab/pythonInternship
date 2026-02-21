package com.estimate.estimate_manegment.repository;

import com.estimate.estimate_manegment.entity.Estimate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstimateRepository extends JpaRepository<Estimate, Long> {
}

