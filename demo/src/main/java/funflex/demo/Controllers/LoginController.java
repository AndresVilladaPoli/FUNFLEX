package funflex.demo.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import funflex.demo.Models.DAO.IAdminDao;
import funflex.demo.Models.DAO.ICustomerDao;

@Controller
public class LoginController {
    
   @Autowired
    private ICustomerDao customerDao;

    @Autowired
    private IAdminDao adminDao;

    public class CustomerLoginDTO {
        private String Email;
        private String Password;
        public String getEmail() {
            return Email;
        }
        public void setEmail(String email) {
            Email = email;
        }
        public String getPassword() {
            return Password;
        }
        public void setPassword(String password) {
            Password = password;
        }    
    }
    
    public class AdminLoginDTO {
        private String AdminEmail;
        private String AdminPassword;
        public String getAdminEmail() {
            return AdminEmail;
        }
        public void setAdminEmail(String adminEmail) {
            AdminEmail = adminEmail;
        }
        public String getAdminPassword() {
            return AdminPassword;
        }
        public void setAdminPassword(String adminPassword) {
            AdminPassword = adminPassword;
        }
        
    }
    
    
    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("customer", new CustomerLoginDTO());
        model.addAttribute("admin", new AdminLoginDTO());
        return "login";
    }
    
    @PostMapping("/login")
public String processLoginForm(@ModelAttribute("customer") CustomerLoginDTO customerLoginDTO, 
                               @ModelAttribute("admin") AdminLoginDTO adminLoginDTO) {
    String email = "";
    if (customerLoginDTO.getEmail() != null) {
        email = customerLoginDTO.getEmail();
        if (!email.endsWith("@gmail.com")) {
            return "redirect:/login?error"; 
        }
        if (customerDao.login(customerLoginDTO)) {
            return "redirect:/customerSuccess"; 
        }
    } else if (adminLoginDTO.getAdminEmail() != null) {
        email = adminLoginDTO.getAdminEmail();
        if (!email.endsWith("@funflex.com")) {
            return "redirect:/login?error"; 
        }
        if (adminDao.login(adminLoginDTO)) {
            return "redirect:/adminSuccess"; 
        }
    }
    
    return "redirect:/login?error";
}
    
    @GetMapping("/customerSuccess")
    public String customerSuccess() {
    return "redirect:/listproduct";
    }

    @GetMapping("/adminSuccess")
    public String adminSuccess() {
    return "redirect:/listproduct";
}


     
    @GetMapping("/")
    public String viewLogin(Model model) {
        model.addAttribute("customers", customerDao.findAll());
        model.addAttribute("admins", adminDao.findAll());
        return "index";
    }
}
