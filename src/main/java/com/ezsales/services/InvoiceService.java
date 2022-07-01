package com.ezsales.services;

import com.ezsales.models.Invoice;
import com.ezsales.repositories.InvoiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepo invoiceRepo;

    public ArrayList<Invoice> findall() {
        return (ArrayList<Invoice>) invoiceRepo.findAll();
    }

    public Invoice findById(Long id) {
        return invoiceRepo.findById(id).orElse(null);
    }

    public void create(Invoice invoice) {
        invoiceRepo.save(invoice);
    }

    
}
