package funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.Detail;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
@Transactional
public class DetailDaoImp {
    
    private final IDetailDao iDetailDao;

    @Autowired
    public DetailDaoImp(funflex.demo.Models.DAO.IDetailDao iDetailDao) {
        this.iDetailDao = iDetailDao;
    }

    public void createDetail(Detail detail){
        this.iDetailDao.save(detail);
    }

    public List<Detail> getDetailBySale(String IdSale){
        return this.iDetailDao.findBySaleId(IdSale);
    }



   
}
