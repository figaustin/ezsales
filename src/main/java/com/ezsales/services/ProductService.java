package com.ezsales.services;

import com.ezsales.models.Product;
import com.ezsales.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public ArrayList<Product> findAll() {
        return (ArrayList<Product>) productRepo.findAll();
    }

    public Product findById(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    public void create(Product product) {
        productRepo.save(product);
    }

    public void update(Product product) {
        productRepo.save(product);
    }

    public void deleteOne(Long id) {
        productRepo.deleteById(id);
    }
}
