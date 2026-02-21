package com.invoice.manegment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin("*")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService service;

    @PostMapping
    public ResponseEntity<Invoice> create(@RequestBody Invoice invoice){
        return ResponseEntity.ok(service.createInvoice(invoice));
    }

    @GetMapping
    public List<Invoice> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Invoice getOne(@PathVariable Long id){
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}

