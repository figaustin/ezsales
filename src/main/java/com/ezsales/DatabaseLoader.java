package com.ezsales;

import com.ezsales.models.Business;
import com.ezsales.models.Employee;
import com.ezsales.repositories.BusinessRepo;
import com.ezsales.repositories.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepo employeeRepo;

    @Autowired
    public DatabaseLoader(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.employeeRepo.save((new Employee("Austin", "Figueroa", "123456", true)));
    }
}
