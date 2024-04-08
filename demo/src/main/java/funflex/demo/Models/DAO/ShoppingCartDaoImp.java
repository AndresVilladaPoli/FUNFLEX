package funflex.demo.Models.DAO;

import funflex.demo.Models.Entity.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShoppingCartDaoImp {

    private final IShoppingCartDao iShoppingCartDao;

    @Autowired
    public ShoppingCartDaoImp(IShoppingCartDao iShoppingCartDao) {
        this.iShoppingCartDao = iShoppingCartDao;
    }

    public List<ShoppingCart> getListByCustomer(String userName){
        return this.iShoppingCartDao.findByCustomerName(userName);
    }
    

    public void cleanShoppingCart(String IdCustomer){
        this.iShoppingCartDao.deleteByCustomerId(IdCustomer);
    }

    public void removeProduct(String IdProduct){
        this.iShoppingCartDao.deleteById(IdProduct);
    }

    public void addProduct(ShoppingCart shoppingCart){
        this.iShoppingCartDao.save(shoppingCart);
    }

    public Long getCountByCustomers(String IdCustomer){
        return this.iShoppingCartDao.countByCustomerId(IdCustomer);
    }

}
