package main.java.funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IShoppingCartDao extends JpaRepository<ShoppingCart, long[]> {
    List<ShoppingCart> findByCustomerId(String IdCustomer);
    void deleteByCustomerId(long IdCustomer);
    Long countByCustomerId(long id);
}
