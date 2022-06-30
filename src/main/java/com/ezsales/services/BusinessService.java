package com.ezsales.services;

import com.ezsales.models.Business;
import com.ezsales.models.LoginBusiness;
import com.ezsales.repositories.BusinessRepo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import javax.servlet.http.HttpSession;


@Service
public class BusinessService {

    @Autowired
    private BusinessRepo businessRepo;

    public Business register(Business newBusiness, BindingResult res) {

        if (businessRepo.findByEmail(newBusiness.getEmail()) != null) {
            res.rejectValue("email", "email invalid", "A user with this email already exists!");
            return null;
        }
        if(!newBusiness.getPassword().equals(newBusiness.getConfirm())) {
            res.rejectValue("password", "pass_no_match", "Password and confirmation must match!");
            res.rejectValue("confirm", "pass_no_match", "Password and confirmation must match!");
            return null;
        }

        String form_password = newBusiness.getPassword();
        String hash = BCrypt.hashpw(form_password, BCrypt.gensalt(8));
        newBusiness.setPassword(hash);
        businessRepo.save(newBusiness);
        return newBusiness;
    }

    public Business login(LoginBusiness loginBusiness, BindingResult res) {
        Business db_business = businessRepo.findByEmail(loginBusiness.getEmail());

        if(db_business == null) {
            res.rejectValue("email", "email_not_found", "Invalid Email");
            return null;
        }

        boolean isMatch = BCrypt.checkpw(loginBusiness.getPassword(), db_business.getPassword());

        if(!isMatch) {
            res.rejectValue("password", "pass_no_match", "Password is invalid");
            return null;
        }

        return db_business;
    }

    public void logout(HttpSession session) {

        if(session.getAttribute("user")!= null) {
            session.removeAttribute("user");
        }
    }

    public Business findById(Long id) {
        return businessRepo.findById(id).orElse(null);
    }

}
