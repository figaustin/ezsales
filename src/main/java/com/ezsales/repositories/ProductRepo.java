package com.ezsales.repositories;

import com.ezsales.models.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProductRepo extends CrudRepository<Product, Long> {

    public ArrayList<Product> findAll();

    public Product findByName(String name);
}
