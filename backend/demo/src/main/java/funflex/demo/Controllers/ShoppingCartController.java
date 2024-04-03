package main.java.funflex.demo.Controllers;

import java.util.List;

import main.java.funflex.demo.Models.Entity.shoppingCart;
import main.java.funflex.demo.Models.DAO.ShoppingCartDaoImp;
import main.java.funflex.demo.Models.Entity.Message;
import main.java.funflex.demo.Models.Entity.ShoppingCart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/shoppingList")
public class ShoppingCartController {
    private final ShoppingCartDaoImp shoppCartDaoImp;

    @Autowired
    public ShoppingCartController(ShoppingCartDaoImp shoppCartDaoImp) {
        this.shoppCartDaoImp = shoppCartDaoImp;
    }

     @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getListByCustomer(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String userName = userDetails.getUsername();
        return new ResponseEntity<>(this.ShoppingCartDaoImp.getListByClient(userName), HttpStatus.OK);
    }

    @GetMapping("/count/{IdClient}")
    public ResponseEntity<Long> countByClient(@PathVariable("IdClient")long id){
        return new ResponseEntity<>(this.shoppCartDaoImp.getCountByClient(id),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Message> addProduct(@Valid @RequestBody ShoppingCart shoppingCart,
                                              BindingResult bindingResult){
        if (bindingResult.hasErrors())
            return new ResponseEntity<>(new Message("Revise los campos"),HttpStatus.BAD_REQUEST);
        this.shoppCartDaoImp.addProduct(shoppingCart);
        return new ResponseEntity<>(new Message("Producto agregado"),HttpStatus.OK);
    }

    @DeleteMapping("/clean/{IdItem}")
    public ResponseEntity<Message> removeProduct(@PathVariable("IdItem")long id){
        this.shoppCartDaoImp.removeProduct(id);
        return new ResponseEntity<>(new Message("Eliminado"),HttpStatus.OK);
    }
    

}
