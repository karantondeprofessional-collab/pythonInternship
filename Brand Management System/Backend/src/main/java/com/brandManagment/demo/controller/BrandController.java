package com.brandManagment.demo.controller;

import com.brandManagment.demo.entity.Brand;
import com.brandManagment.demo.service.BrandService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/brands")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BrandController {

    private final BrandService brandService;

    @PostMapping
    public ResponseEntity<Brand> addBrand(@RequestBody Brand brand) {
        return ResponseEntity.ok(brandService.addBrand(brand));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Brand> updateBrand(
            @PathVariable Integer id,
            @RequestBody Brand brand) {
        return ResponseEntity.ok(brandService.updateBrand(id, brand));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBrand(@PathVariable Integer id) {
        brandService.deleteBrand(id);
        return ResponseEntity.ok("Brand deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<Brand>> getBrands() {
        return ResponseEntity.ok(brandService.getAllBrands());
    }
}
