package com.cainmanagmant.demo.service;


import com.cainmanagmant.demo.dto.ChainRequestDTO;
import com.cainmanagmant.demo.entity.Chain;

import java.util.List;

public interface ChainService {

    Chain addChain(ChainRequestDTO dto);

    Chain updateChain(Integer chainId, ChainRequestDTO dto);

    void deleteChain(Integer chainId);

    List<Chain> getAllActiveChains();
}
