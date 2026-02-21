package com.estimate.estimate_manegment.service;

import com.estimate.estimate_manegment.entity.Product;
import com.estimate.estimate_manegment.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repo;

    public Product save(Product p){
        return repo.save(p);
    }

    public List<Product> getAll(){
        return repo.findAll();
    }

    public void delete(Long id){
        repo.deleteById(id);
    }
}
