package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.LoginBusiness;
import com.ezsales.services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.naming.Binding;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@RequestMapping("/business")
public class BusinessController {


    @Autowired
    private BusinessService businessService;

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addAttribute("businessLogin", new LoginBusiness());
        return "login";
    }
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("businessLogin") LoginBusiness newLogin, BindingResult res, Model model, HttpSession session) {
        if(res.hasErrors()) {
            model.addAttribute("businessLogin", new Business());
            return "login";
        }

        Business db_business = businessService.login(newLogin, res);
        if(db_business == null) {
            model.addAttribute("businessRegister", new Business());
            return "login";
        }

        session.setAttribute("business", db_business);

        return "redirect:/business/dashboard";
    }

    @GetMapping("/register")
    public String registerPage(Model model) {
        model.addAttribute("businessRegister", new Business());

        return "register";
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("businessRegister") Business newBusiness, BindingResult res, Model model, HttpSession session) {
       if(res.hasErrors()) {
           model.addAttribute("businessLogin", new Business());
           return "register";
       }

       Business db_business = businessService.register(newBusiness, res);
       if(db_business == null) {
           model.addAttribute("businessLogin", new LoginBusiness());
           return "register";
       }

       return "redirect:/";
    }


}
