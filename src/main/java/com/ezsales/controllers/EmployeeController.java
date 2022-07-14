package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.Employee;
import com.ezsales.services.BusinessService;
import com.ezsales.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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




}
