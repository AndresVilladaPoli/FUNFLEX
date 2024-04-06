package main.java.funflex.demo.Controllers;

import javax.validation.constraints.Null;
import java.util.List;

import main.java.funflex.demo.Models.Entity.Message;
import main.java.funflex.demo.Models.Entity.Sale;
import main.java.funflex.demo.Models.DAO.SaleDaoImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/sale")
public class SaleController {

    private final SaleDaoImp saleDaoImp;

    @Autowired
    public SaleController(SaleDaoImp saleDaoImp) {
        this.saleDaoImp = saleDaoImp;
    }

    @GetMapping("/customer")
    public ResponseEntity<List<Sale>> getByClient(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String userName = userDetails.getUsername();
        return new ResponseEntity<>(this.saleDaoImp.getSalesByClient(userName), HttpStatus.OK);
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Message> createSale(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
        String userName = userDetails.getUsername();
        this.saleDaoImp.createSale(userName);
        return new ResponseEntity<>(new Message("Compra exitosa"), HttpStatus.OK);
    }
    
}
