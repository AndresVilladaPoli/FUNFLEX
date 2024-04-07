package funflex.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import funflex.demo.Models.DAO.ICustomerDao;
import funflex.demo.Models.Entity.Customer;



@Controller
@SessionAttributes("customer")

public class CustomerController{

    @Autowired
    private ICustomerDao customerDao;

    @RequestMapping(value = "/listcustomer",method = RequestMethod.GET)

    @GetMapping("/formcustomer")
    public String CreateCustomer(Model model) 
    {

        Customer customer = new Customer();

        model.addAttribute("Title", "Customers form");
        model.addAttribute("customer", customer);


        return "formcustomer";
    }

    @RequestMapping(value = "/formcustomer",method = RequestMethod.POST)
    public String SaveCustomer(Customer customer,SessionStatus status)
    {
       customerDao.save(customer);
        status.setComplete();
        return "redirect:listcustomer";

    }

    @GetMapping("/formcustomer/{Id}")   
    public String EditCustomer(@PathVariable(value = "IdCustomer") String IdCustomer ,Model model)
    {

        Customer customer = null;

        if(IdCustomer != null)
        {
            customer = customerDao.findOne(IdCustomer);
        }
        else
        {
            return "redirect:/listcustomer";
        }

        model.addAttribute("Title", "Edit customers");
        model.addAttribute("customer", customer);


        return "formcustomer";
    }

    @GetMapping("/delete/{Id}")
    public String DeleteCustomer(@PathVariable String IdCustomer)
    {
       if(IdCustomer != null)
       {
         customerDao.delete(IdCustomer);
       }

       return "redirect:/listcustomer";
    }

}