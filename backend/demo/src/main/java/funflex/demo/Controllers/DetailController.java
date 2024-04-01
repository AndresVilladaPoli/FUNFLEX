package main.java.funflex.demo.Controllers;

import java.util.List;

import main.java.funflex.demo.Models.DAO.DetailDaoImp;
import main.java.funflex.demo.Models.Entity.Detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/saleDetail")
public class DetailController {
    private final DetailDaoImp detailDaoImp;

    @Autowired
    public ShoppingCartController(DetailDaoImp detailDaoImp) {
        this.detailDaoImp = detailDaoImp;
    }

    @GetMapping("/{IdSale}")
    public ResponseEntity<List<Detail>> getDetailsBySale(@PathVariable("IdSale")long id){
        return new ResponseEntity<>(this.detailDaoImp.getDetailBySale(id), HttpStatus.OK);
    }
}
