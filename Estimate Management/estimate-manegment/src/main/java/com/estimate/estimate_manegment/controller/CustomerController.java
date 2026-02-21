package com.estimate.estimate_manegment.controller;

import com.estimate.estimate_manegment.entity.Customer;
import com.estimate.estimate_manegment.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
@CrossOrigin
public class CustomerController {

    private final CustomerService service;

    @PostMapping
    public Customer save(@RequestBody Customer c){
        return service.save(c);
    }

    @GetMapping
    public List<Customer> getAll(){
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
