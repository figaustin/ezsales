package com.ezsales.controllers;

import com.ezsales.models.Employee;
import com.ezsales.services.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.create(employee);
    }

    @GetMapping("")
    public List<Employee> getAllEmployees() {
        return employeeService.findAll();
    }

    @PostMapping("/clockin/{id}")
    public void clockIn(@PathVariable("id") Long id)  {
        Employee employee = employeeService.findById(id);
        employee.setClockedIn(true);
    }

    @PostMapping("/clockout/{id}")
    public void clockOut(@PathVariable("id") Long id)  {
        Employee employee = employeeService.findById(id);
        employee.setClockedIn(false);
    }



}
