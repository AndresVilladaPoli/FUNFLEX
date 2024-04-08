package funflex.demo.Models.DAO;

import java.util.List;

import funflex.demo.Models.Entity.Product;


public interface IProductDao { 
    
    public List<Product> findAll();       
    
    public void save(Product product);

    public Product findOne(Long IdProduct);

    public void delete(Long IdProduct);
}
