package com.brandManagment.demo.repository;

import com.brandManagment.demo.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer> {

    List<Brand> findByIsActiveTrue();

    List<Brand> findByChain_ChainIdAndIsActiveTrue(Integer chainId);
}
