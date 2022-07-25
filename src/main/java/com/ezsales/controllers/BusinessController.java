package com.ezsales.controllers;

import com.ezsales.models.Business;
import com.ezsales.models.LoginBusiness;
import com.ezsales.models.Product;
import com.ezsales.services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    private BusinessService businessService;


    @GetMapping("/login")
    public String loginSend(Model model) {
        model.addAttribute("businessLogin", new LoginBusiness());
        return "login";
    }

    @PostMapping("/login")
    public String loginReceive(@Valid @ModelAttribute("businessLogin") LoginBusiness newLogin, BindingResult res, Model model, HttpSession session) {
        if(res.hasErrors()) {
            model.addAttribute("businessLogin", new LoginBusiness());
            return "login";
        }

        Business db_business = businessService.login(newLogin, res);
        if(db_business == null) {
            return "login";
        }
        session.setAttribute("business", db_business);

        return "redirect:/business/dashboard";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("businessRegister", new Business());
        return "register";
    }

    @PostMapping("/register")
    public String registerSend(@Valid @ModelAttribute("businessRegister") Business newBusiness, BindingResult res, Model model, HttpSession session) {
        if(res.hasErrors()) {
            model.addAttribute("businessLogin", new LoginBusiness());
            return "register";
        }

        Business db_business = businessService.register(newBusiness, res);
        if(db_business == null) {
            model.addAttribute("businessLogin", new LoginBusiness());
            return "register";
        }
        return "redirect:/business/login";
    }

    @GetMapping("/dashboard")
    public String dashboard(Model model, HttpSession session) {
        Business business = (Business) session.getAttribute("business");
        model.addAttribute("business", businessService.findById(business.getId()));

        List<Product> productList = business.getProducts();
        List<Product> lowList = new ArrayList<>();

        for(Product product : productList) {
            if(product.getAmount() < 10) {
                lowList.add(product);
            }
        }

        model.addAttribute("lowStockList", lowList);

        return "dashboard";
    }

}
