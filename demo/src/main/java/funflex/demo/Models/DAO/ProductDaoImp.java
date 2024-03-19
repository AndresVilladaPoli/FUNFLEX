package funflex.demo.Models.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import funflex.demo.Models.Entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository

public class ProductDaoImp implements IProductDao{
    
   @PersistenceContext
    
    private EntityManager em;

    @SuppressWarnings("unchecked")
   // @Transactional(readOnly = true)
    @Override
    public List<Product> findAll() 
    { 
      return em.createQuery("from Product").getResultList();
    }

    @Override
  //  @Transactional
    public void save(Product product)
    {
        if(product.getIdProduct() != null && product.getIdProduct() > 0)
        {
          em.merge(product);
        }
        else
        {
          em.persist(product); 
        }
        
    }


    @Override
   // @Transactional(readOnly = true)
    public Product findOne(Long IdProduct) {




      return em.find(Product.class, IdProduct);
    }


    @Override
  //  @Transactional
    public void delete(Long IdProduct) {
      
      Product product = findOne(IdProduct);

      em.remove(product);

    }
 
}
