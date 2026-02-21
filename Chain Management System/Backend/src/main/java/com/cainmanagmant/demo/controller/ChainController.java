package com.cainmanagmant.demo.controller;


import com.cainmanagmant.demo.dto.ChainRequestDTO;
import com.cainmanagmant.demo.entity.Chain;
import com.cainmanagmant.demo.service.ChainService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chains")
@CrossOrigin(origins = "*")
public class ChainController {

    private final ChainService chainService;

    public ChainController(ChainService chainService) {
        this.chainService = chainService;
    }

    // Add Chain
    @PostMapping
    public Chain addChain(@Valid @RequestBody ChainRequestDTO dto) {
        return chainService.addChain(dto);
    }

    // Update Chain
    @PutMapping("/{id}")
    public Chain updateChain(@PathVariable Integer id,
                             @Valid @RequestBody ChainRequestDTO dto) {
        return chainService.updateChain(id, dto);
    }

    // Soft Delete Chain
    @DeleteMapping("/{id}")
    public void deleteChain(@PathVariable Integer id) {
        chainService.deleteChain(id);
    }

    // Dashboard View
    @GetMapping
    public List<Chain> getAllChains() {
        return chainService.getAllActiveChains();
    }
}

