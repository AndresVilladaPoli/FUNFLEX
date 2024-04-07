package funflex.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import funflex.demo.Models.DAO.ShoppingCartDaoImp;
import funflex.demo.Models.Entity.Message;
import funflex.demo.Models.Entity.ShoppingCart;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/shoppingList")
public class ShoppingCartController {
    
    private final ShoppingCartDaoImp shoppingCartDaoImp;

    @Autowired
    public ShoppingCartController(ShoppingCartDaoImp shoppingCartDaoImp) {
        this.shoppingCartDaoImp = shoppingCartDaoImp;
    }

     @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getListByCustomer(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String userName = userDetails.getUsername();
        return new ResponseEntity<>(this.shoppingCartDaoImp.getListByCustomer(userName), HttpStatus.OK);
    }

    @GetMapping("/count/{IdClient}")
    public ResponseEntity<Long> countByClient(@PathVariable("IdClient")String IdCustomer){
        return new ResponseEntity<>(this.shoppingCartDaoImp.getCountByCustomers(IdCustomer),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Message> addProduct(@Validated @RequestBody ShoppingCart shoppingCart,
                                              BindingResult bindingResult){
        if (bindingResult.hasErrors())
            return new ResponseEntity<>(new Message("Revise los campos"),HttpStatus.BAD_REQUEST);
        this.shoppingCartDaoImp.addProduct(shoppingCart);
        return new ResponseEntity<>(new Message("Producto agregado"),HttpStatus.OK);
    }

    @DeleteMapping("/clean/{IdItem}")
    public ResponseEntity<Message> removeProduct(@PathVariable("IdItem")String IdProduct){
        this.shoppingCartDaoImp.removeProduct(IdProduct);
        return new ResponseEntity<>(new Message("Eliminado"),HttpStatus.OK);
    }
    

}
