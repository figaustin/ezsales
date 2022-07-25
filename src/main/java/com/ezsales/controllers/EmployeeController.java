package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.Employee;
import com.ezsales.models.Product;
import com.ezsales.services.BusinessService;
import com.ezsales.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private BusinessService businessService;

    @GetMapping("")
    public String employees(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));
        return "employees";
    }

    @GetMapping("/add")
    public String addForm(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));
        model.addAttribute("employee", new Employee());
        return "addemployee";
    }

    @PostMapping("/add")
    public String create(@Valid @ModelAttribute("employee") Employee employee, BindingResult res, HttpSession session) {
        if(res.hasErrors()){
            return "employees";
        }
        employeeService.create(employee);
        return "redirect:/employees";
    }




}
