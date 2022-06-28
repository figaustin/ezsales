package com.ezsales.services;

import com.ezsales.models.Employee;
import com.ezsales.repositories.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    public ArrayList<Employee> findAll() {
        return (ArrayList<Employee>) employeeRepo.findAll();
    }

    public Employee findById(Long id) {
        return employeeRepo.findById(id).orElse(null);
    }

    public Employee create(Employee employee) {

        employeeRepo.save(employee);
        return employee;
    }

    public void update(Employee employee) {
        employeeRepo.save(employee);
    }

    public void delete(Long id) {
        employeeRepo.deleteById(id);
    }
}
