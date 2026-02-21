package com.invoice.manegment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository repo;

    public Invoice createInvoice(Invoice invoice) {

        double subTotal = 0;

        for (InvoiceItem item : invoice.getItems()) {
            item.setInvoice(invoice);
            item.setAmount(item.getPrice() * item.getQuantity());
            subTotal += item.getAmount();
        }

        double tax = subTotal * 0.18;
        double total = subTotal + tax;

        invoice.setSubTotal(subTotal);
        invoice.setTax(tax);
        invoice.setTotal(total);

        return repo.save(invoice);
    }

    public List<Invoice> getAll() {
        return repo.findAll();
    }

    public Invoice getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}

