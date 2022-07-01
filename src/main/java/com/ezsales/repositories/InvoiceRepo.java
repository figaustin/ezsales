package com.ezsales.repositories;

import com.ezsales.models.Invoice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface InvoiceRepo extends CrudRepository<Invoice, Long> {

    public ArrayList<Invoice> findAll();
}
