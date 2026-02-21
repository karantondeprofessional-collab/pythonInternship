package com.cainmanagmant.demo.service;



import com.cainmanagmant.demo.dto.ChainRequestDTO;
import com.cainmanagmant.demo.entity.Chain;
import com.cainmanagmant.demo.exception.DuplicateResourceException;
import com.cainmanagmant.demo.exception.ResourceNotFoundException;
import com.cainmanagmant.demo.repository.ChainRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChainServiceImpl implements ChainService {

    private final ChainRepository repository;

    public ChainServiceImpl(ChainRepository repository) {
        this.repository = repository;
    }

    @Override
    public Chain addChain(ChainRequestDTO dto) {

        if (repository.findByGstnNo(dto.getGstnNo()).isPresent()) {
            throw new DuplicateResourceException("GSTN already exists");
        }

        Chain chain = new Chain();
        chain.setCompanyName(dto.getCompanyName());
        chain.setGstnNo(dto.getGstnNo());
        chain.setIsActive(true);

        return repository.save(chain);
    }

    @Override
    public Chain updateChain(Integer chainId, ChainRequestDTO dto) {

        Chain chain = repository.findById(chainId)
                .orElseThrow(() -> new ResourceNotFoundException("Chain not found"));

        chain.setCompanyName(dto.getCompanyName());
        chain.setGstnNo(dto.getGstnNo());

        return repository.save(chain);
    }

    @Override
    public void deleteChain(Integer chainId) {

        Chain chain = repository.findById(chainId)
                .orElseThrow(() -> new ResourceNotFoundException("Chain not found"));

        // Soft delete
        chain.setIsActive(false);
        repository.save(chain);
    }

    @Override
    public List<Chain> getAllActiveChains() {
        return repository.findByIsActiveTrue();
    }
}

