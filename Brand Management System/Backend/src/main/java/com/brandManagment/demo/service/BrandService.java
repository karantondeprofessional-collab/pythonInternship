package com.brandManagment.demo.service;

import com.brandManagment.demo.entity.Brand;
import com.brandManagment.demo.repository.BrandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandService {

    private final BrandRepository brandRepository;

    public Brand addBrand(Brand brand) {
        return brandRepository.save(brand);
    }

    public Brand updateBrand(Integer id, Brand updatedBrand) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));

        brand.setBrandName(updatedBrand.getBrandName());
        brand.setChain(updatedBrand.getChain());

        return brandRepository.save(brand);
    }

    // Soft Delete
    public void deleteBrand(Integer id) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brand not found"));

        // Zone check logic goes here (future)
        brand.setIsActive(false);
        brandRepository.save(brand);
    }

    public List<Brand> getAllBrands() {
        return brandRepository.findByIsActiveTrue();
    }
}

