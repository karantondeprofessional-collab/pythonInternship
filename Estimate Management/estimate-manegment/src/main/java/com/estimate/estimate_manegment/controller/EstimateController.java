package com.estimate.estimate_manegment.controller;


import com.estimate.estimate_manegment.entity.Estimate;
import com.estimate.estimate_manegment.service.EstimateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/estimates")
@RequiredArgsConstructor
@CrossOrigin
public class EstimateController {

    private final EstimateService service;

    @PostMapping
    public Estimate save(@RequestBody Estimate e){
        return service.saveEstimate(e);
    }

    @GetMapping
    public List<Estimate> getAll(){
        return service.getAll();
    }
}

