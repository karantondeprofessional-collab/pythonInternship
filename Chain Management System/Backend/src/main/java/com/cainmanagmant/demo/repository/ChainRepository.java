package com.cainmanagmant.demo.repository;

import com.cainmanagmant.demo.entity.Chain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChainRepository extends JpaRepository<Chain, Integer> {

    Optional<Chain> findByGstnNo(String gstnNo);

    List<Chain> findByIsActiveTrue();
}
