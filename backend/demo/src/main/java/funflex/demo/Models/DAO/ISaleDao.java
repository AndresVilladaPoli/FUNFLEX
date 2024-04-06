package main.java.funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public class ISaleDao extends JpaRepository<Sale, long[]> {
    
    List<Sale> findByCustomer_UserName(String userName);
}