package funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IShoppingCartDao extends JpaRepository<ShoppingCart,String> {
    
    List<ShoppingCart> findByCustomerId(String IdCustomer);
    List<ShoppingCart> findByCustomerName(String Name);
    
    void deleteByCustomerId(String Id);
    Long countByCustomerId(String id);
}
