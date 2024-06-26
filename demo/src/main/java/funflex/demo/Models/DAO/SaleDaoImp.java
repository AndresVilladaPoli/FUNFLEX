package funflex.demo.Models.DAO;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.List;
import java.util.Locale;
import java.util.Date;

import funflex.demo.Models.Entity.ShoppingCart;
import funflex.demo.Models.Entity.Detail;
import funflex.demo.Models.Entity.Sale;
import funflex.demo.Models.Entity.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class SaleDaoImp {

    private final ISaleDao iSaleDao;
    private final CustomerDaoImp customerDaoImp;
    private final ShoppingCartDaoImp shoppingCartDaoImp;
    private final DetailDaoImp detailDaoimp;

    @Autowired
    public SaleDaoImp(ISaleDao iSaleDao, CustomerDaoImp customerDaoImp, ShoppingCartDaoImp shoppingCartDaoImp,
            DetailDaoImp detailDaoimp) {
        this.iSaleDao = iSaleDao;
        this.customerDaoImp = customerDaoImp;
        this.shoppingCartDaoImp = shoppingCartDaoImp;
        this.detailDaoimp = detailDaoimp;
    }
    
    

    public List<Sale> getSalesByClient(String userName){
        return this.iSaleDao.findByCustomerName(userName);
    }

    public void createSale(String Name){
        Customer client = this.customerDaoImp.findByCustomerName(Name);
        List<ShoppingCart> shoppingCartList = this.shoppingCartDaoImp.getListByCustomer(client.getName());
        
        DecimalFormat decimalFormat = new DecimalFormat("0.00", new DecimalFormatSymbols(Locale.US));
        decimalFormat.setRoundingMode(RoundingMode.DOWN);
        double total = shoppingCartList.stream().mapToDouble(shoppingCartItem -> shoppingCartItem.getProduct().getPrice() * shoppingCartItem.getAmount()).sum();
               
        Sale sale = new Sale(Double.parseDouble(decimalFormat.format(total)), new Date(), client);
        
        Sale saveSale = this.iSaleDao.save(sale);
        for (ShoppingCart shoppingCart : shoppingCartList) {
            Detail detail = new Detail();
            detail.setProduct(shoppingCart.getProduct());
            detail.setAmount(shoppingCart.getAmount());
            detail.setSale(saveSale);
            this.detailDaoimp.createDetail(detail);
        }
        this.shoppingCartDaoImp.cleanShoppingCart(client.getIdCustomer());
    }
}
