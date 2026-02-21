package com.estimate.estimate_manegment.service;

import com.estimate.estimate_manegment.*;
import com.estimate.estimate_manegment.entity.Estimate;
import com.estimate.estimate_manegment.entity.EstimateItem;
import com.estimate.estimate_manegment.repository.EstimateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EstimateService {

    private final EstimateRepository estimateRepo;

    public Estimate saveEstimate(Estimate estimate){

        double total = 0;
        double taxTotal = 0;

        for(EstimateItem item : estimate.getItems()){

            double amount = item.getPrice() * item.getQuantity();
            double tax = amount * item.getProduct().getGst() / 100;

            item.setAmount(amount);
            item.setTax(tax);
            item.setEstimate(estimate);

            total += amount;
            taxTotal += tax;
        }

        estimate.setTotalAmount(total);
        estimate.setTaxAmount(taxTotal);
        estimate.setGrandTotal(total + taxTotal);

        return estimateRepo.save(estimate);
    }

    public List<Estimate> getAll(){
        return estimateRepo.findAll();
    }
}
