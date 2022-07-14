package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.Invoice;
import com.ezsales.services.BusinessService;
import com.ezsales.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


@Controller
@RequestMapping("/invoice")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private BusinessService businessService;

    @GetMapping("")
    public String invoice(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));
        model.addAttribute("invoice", new Invoice());

        return "invoice";
    }

}


