package main.java.funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.Detail;
import funflex.demo.Models.DAO.IDetailDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DetailDaoImp {
    
    private final IDetailDao iDetailDao;

    @Autowired
    public DetailDaoImp(main.java.funflex.demo.Models.DAO.IDetailDao iDetailDao) {
        this.iDetailDao = iDetailDao;
    }

    public void createDetail(){
        this.iDetailDao.save(detail);
    }

    public List<Detail> getDetailBySale(long IdSale){
        return this.iDetailDao.findBySaleId(IdSale);
    }



   
}
