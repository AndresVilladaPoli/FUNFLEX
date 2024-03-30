package main.java.funflex.demo.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


public class LoginController {
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private AdminService adminService;
    
    @GetMapping("/login")
    public String SignUp() {
        return "login";
    }
    
    @GetMapping("/")
    public String ViewLogin(Model model) {
        model.addAttribute("customers", customerServicio.listCustomer());
        model.addAttribute("admins", adminServicio.listAdmin());
        return "index";
    }
}


