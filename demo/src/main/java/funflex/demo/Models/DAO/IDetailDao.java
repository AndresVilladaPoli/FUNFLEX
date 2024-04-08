package funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.Detail;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IDetailDao extends JpaRepository<Detail,String> {
    List<Detail> findBySaleId(String IdSale);
}
