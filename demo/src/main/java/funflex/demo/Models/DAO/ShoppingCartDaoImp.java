package main.java.funflex.demo.Models.DAO;

//import funflex.demo.Models.Entity.ShoppingCart;
import main.java.funflex.demo.Models.Entity.ShoppingCart;
import funflex.demo.Models.DAO.IShoppingCartDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShoppingCartDaoImp {

    private final IShoppingCartDao iShoppingCartDao;

    @Autowired
    public ShoppingCartDaoImp(main.java.funflex.demo.Models.DAO.IShoppingCartDao iShoppingCartDao) {
        this.iShoppingCartDao = iShoppingCartDao;
    }

    public List<ShoppingCart> getListByCustomerId(long IdCustomer){
        return this.iShoppingCartDao.findByClientId(IdCustomer);
    }

    public void cleanShoppingCart(long IdCustomer){
        this.iShoppingCartDao.deleteByCustomerId(IdCustomer);
    }

    public void removeProduct(long IdProduct){
        this.iShoppingCartDao.deleteByProductId(IdProduct);
    }

    public void addProduct(ShoppingCart shoppingCart){
        this.iShoppingCartDao.save(shoppingCart);
    }

    public Long getCountByCustomers(long IdCustomer){
        return this.iShoppingCartDao.countByCustomers(IdCustomer);
    }

}
