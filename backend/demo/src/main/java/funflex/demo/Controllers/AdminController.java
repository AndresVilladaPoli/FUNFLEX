package funflex.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import funflex.demo.Models.DAO.IAdminDao;
import funflex.demo.Models.Entity.Admin;



@Controller
@SessionAttributes("admin")

public class AdminController{

    @Autowired
    private IAdminDao adminDao;

    @RequestMapping(value = "/listadmin",method = RequestMethod.GET)

    @GetMapping("/formadmin")
    public String CreateAdmin(Model model) 
    {

        Admin admin = new Admin();

        model.addAttribute("Title", "Admins form");
        model.addAttribute("admin", admin);


        return "formadmin";
    }

    @RequestMapping(value = "/formadmin",method = RequestMethod.POST)
    public String SaveAdmin(Admin admin,SessionStatus status)
    {
       adminDao.save(admin);
        status.setComplete();
        return "redirect:listadmin";

    }

    @GetMapping("/formadmin/{IdAdmin}")   
    public String EditAdmin(@PathVariable(value = "IdAdmin") Long IdAdmin ,Model model)
    {

        Admin admin = null;

        if(IdAdmin > 0)
        {
            admin = adminDao.findOne(IdAdmin);
        }
        else
        {
            return "redirect:/listadmin";
        }

        model.addAttribute("Title", "Edit admins");
        model.addAttribute("admin", admin);


        return "formadmin";
    }

    @GetMapping("/delete/{IdAdmin}")
    public String DeleteAdmin(@PathVariable Long IdAdmin)
    {
       if(IdAdmin>0)
       {
         adminDao.delete(IdAdmin);
       }

       return "redirect:/listadmin";
    }

}
