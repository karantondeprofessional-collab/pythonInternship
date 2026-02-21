package com.estimate.estimate_manegment.service;

import com.estimate.estimate_manegment.entity.Customer;
import com.estimate.estimate_manegment.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository repo;

    public Customer save(Customer c){
        return repo.save(c);
    }

    public List<Customer> getAll(){
        return repo.findAll();
    }

    public void delete(Long id){
        repo.deleteById(id);
    }
}
