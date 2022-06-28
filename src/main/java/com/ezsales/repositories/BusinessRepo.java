package com.ezsales.repositories;

import com.ezsales.models.Business;
import com.ezsales.models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface BusinessRepo extends CrudRepository<Business, Long> {

    public ArrayList<Business> findAll();

    public Business findByName(String name);

    public Business findByEmail(String email);

}
