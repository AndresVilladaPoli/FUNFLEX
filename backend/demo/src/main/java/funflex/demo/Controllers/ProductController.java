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

import funflex.demo.Models.DAO.IProductDao;
import funflex.demo.Models.Entity.Product;




@Controller
@SessionAttributes("product")

public class ProductController{

    @Autowired
    private IProductDao productDao;

    @RequestMapping(value = "/listproduct",method = RequestMethod.GET)

    @GetMapping("/formproduct")
    public String CreateProduct(Model model) 
    {

        Product product = new Product();

        model.addAttribute("Title", "Products form");
        model.addAttribute("product", product);


        return "formproduct";
    }

    @RequestMapping(value = "/formproduct",method = RequestMethod.POST)
    public String SaveProduct(Product product,SessionStatus status)
    {
       productDao.save(product);
        status.setComplete();
        return "redirect:listproduct";

    }

    @GetMapping("/formproduct/{IdProduct}")   
    public String EditProduct(@PathVariable(value = "IdProduct") Long IdProduct ,Model model)
    {

        Product product = null;

        if(IdProduct > 0)
        {
            product = productDao.findOne(IdProduct);
        }
        else
        {
            return "redirect:/listproduct";
        }

        model.addAttribute("Title", "Edit product");
        model.addAttribute("product", product);


        return "formproduct";
    }

    @GetMapping("/delete/{IdProduct}")
    public String DeleteProduct(@PathVariable Long IdProduct)
    {
       if(IdProduct>0)
       {
         productDao.delete(IdProduct);
       }

       return "redirect:/listproduct";
    }

}
