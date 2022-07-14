package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.Product;
import com.ezsales.services.BusinessService;
import com.ezsales.services.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.io.FileNotFoundException;


@Controller
@RequestMapping("/inventory")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private BusinessService businessService;

    @GetMapping("")
    public String products(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));
        return "inventory";
    }

    @GetMapping("/add")
    public String addForm(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));
        model.addAttribute("product", new Product());
        return "addproduct";
    }
    @PostMapping("/add")
    public String create(@Valid @ModelAttribute("product") Product product, BindingResult res, HttpSession session) {
        if(res.hasErrors()){
            return "inventory";
        }
        productService.create(product);
        return "redirect:/inventory";
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable("id")Long id) {
        productService.deleteOne(id);
    }
}
