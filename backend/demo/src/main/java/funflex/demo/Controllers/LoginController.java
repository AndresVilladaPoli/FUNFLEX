package main.java.funflex.demo.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private AdminService adminService;
    
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
        } else if (adminLoginDTO.getAdminEmail() != null) {
            email = adminLoginDTO.getAdminEmail();
        }

        if (email.endsWith("gmail.com")) {
            if (customerService.login(customerLoginDTO)) {
                return "redirect:/customerSuccess"; 
            }
        } else if (email.endsWith("funflex.com")) {
            if (adminService.login(adminLoginDTO)) {
                return "redirect:/adminSuccess"; 
            }
        }
        
        return "redirect:/login?error";
    }
    
    @GetMapping("/")
    public String viewLogin(Model model) {
        model.addAttribute("customers", customerService.findAll());
        model.addAttribute("admins", adminService.findAll());
        return "index";
    }
}
