package com.ezsales.controllers;

import com.ezsales.models.Product;
import com.ezsales.services.BusinessService;
import com.ezsales.services.ProductService;

import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;
    private final BusinessService businessService;

    public ProductController(ProductService productService, BusinessService businessService) {
        this.productService = productService;
        this.businessService = businessService;
    }


    @PostMapping("/add/{id}")
    public void create(@PathVariable("id") Long id, @RequestBody Product product) {
        product.setBusiness(businessService.findById(id));
        productService.create(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable("id")Long id) {
        productService.deleteOne(id);
    }
}
