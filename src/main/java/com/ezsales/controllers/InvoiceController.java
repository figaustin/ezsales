package com.ezsales.controllers;

import com.ezsales.models.Invoice;
import com.ezsales.services.InvoiceService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService invoiceService;

    public InvoiceController(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @PostMapping("/create")
    public void create(@RequestBody Invoice invoice) {

    }
}
