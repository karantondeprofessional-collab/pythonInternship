package com.estimate.estimate_manegment.controller;

import com.estimate.estimate_manegment.entity.Product;
import com.estimate.estimate_manegment.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService service;

    @PostMapping
    public Product save(@RequestBody Product p){
        return service.save(p);
    }

    @GetMapping
    public List<Product> getAll(){
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}

