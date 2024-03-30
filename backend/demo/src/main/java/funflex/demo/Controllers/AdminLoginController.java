package main.java.funflex.demo.Controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Adminlogin")
public class AdminLoginController {
    
    private AdminService adminService;

	public AdminLoginController(AdminService adminService) {
		this.adminService = adminService;
	}
	
	@ModelAttribute("admin")
	public AdminLoginDTO returnNewAdminLoginDTO() {
		return new AdminLoginDTO();
	}

	@GetMapping
	public String ShowLoginForm() {
		return "AdminLogin"; 
	}
	
	
	@PostMapping
	public String ProcessLoginForm(@ModelAttribute("admin") AdminLoginDTO loginDTO) {
		boolean loginSuccessful = adminService.login(loginDTO);
		if (loginSuccessful) {
			return "redirect:/Successfull"; 
		} else {
			return "redirect:/Adminlogin?error"; 
		}
	}
}
