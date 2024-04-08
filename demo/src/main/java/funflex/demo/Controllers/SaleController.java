package funflex.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import funflex.demo.Models.DAO.SaleDaoImp;
import funflex.demo.Models.Entity.Message;
import funflex.demo.Models.Entity.Sale;

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
        return new ResponseEntity<>(new Message("Successfully purchased"), HttpStatus.OK);
    }
    
}
