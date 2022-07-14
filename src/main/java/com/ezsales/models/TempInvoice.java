package com.ezsales.models;

import java.util.List;

public class TempInvoice {

    private Double total;

    private List<Product> products;

    public TempInvoice(){}

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
