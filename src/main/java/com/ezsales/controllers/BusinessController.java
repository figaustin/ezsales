package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.LoginBusiness;
import com.ezsales.services.BusinessService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/business")
public class BusinessController {

    private final BusinessService businessService;

    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @PostMapping("/register")
    public Business register(@RequestBody Business business, BindingResult res) {
        return businessService.register(business, res);
    }

    @PostMapping("/login")
    public Business login(@RequestBody LoginBusiness newLogin, BindingResult res, HttpSession session) {
        Business db_business = businessService.login(newLogin, res);
        if(!res.hasErrors()) {
            session.setAttribute("business", db_business);
        }
        session.setAttribute("business", db_business);
        System.out.println("DOES THIS WORK???");
        return db_business;
    }

}
