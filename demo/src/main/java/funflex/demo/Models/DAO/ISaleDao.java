package funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.Sale;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISaleDao extends JpaRepository<Sale,String> {

    List<Sale> findByCustomerName(String Name);
}
