package com.ezsales.repositories;

import com.ezsales.models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, Long> {

    public ArrayList<Employee> findAll();

    public Employee findByFirstName(String firstName);

}
