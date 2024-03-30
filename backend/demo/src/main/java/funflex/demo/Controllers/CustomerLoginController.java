package main.java.funflex.demo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Customerlogin")
public class CustomerLoginController {
    
    private CustomerService customerService;

	public CustomerLoginController(CustomerService customerService) {
		this.customerService = customerService;
	}
	
	@ModelAttribute("customer")
	public CustomerLoginDTO returnNewCustomerLoginDTO() {
		return new CustomerLoginDTO();
	}

	@GetMapping
	public String ShowLoginForm() {
		return "CustomerLogin"; 
	}
	
	
	@PostMapping
	public String ProcessLoginForm(@ModelAttribute("customer") CustomerLoginDTO loginDTO) {
		boolean loginSuccessful = customerService.login(loginDTO);
		if (loginSuccessful) {
			return "redirect:/Successfull"; 
		} else {
			return "redirect:/Customerlogin?error"; 
		}
	}
}
