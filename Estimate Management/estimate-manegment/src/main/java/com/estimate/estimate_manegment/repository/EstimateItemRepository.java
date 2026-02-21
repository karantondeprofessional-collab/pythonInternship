package com.estimate.estimate_manegment.repository;


import com.estimate.estimate_manegment.entity.EstimateItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstimateItemRepository extends JpaRepository<EstimateItem, Long> {
}

