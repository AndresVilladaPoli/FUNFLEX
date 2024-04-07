package funflex.demo.Models.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import funflex.demo.Controllers.LoginController.CustomerLoginDTO;
import funflex.demo.Models.Entity.Customer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;




@Repository

public class CustomerDaoImp implements ICustomerDao{

    @PersistenceContext
    
    private EntityManager em;

    @SuppressWarnings("unchecked")
   @Transactional //(readOnly = true)
    @Override
    public List<Customer> findAll() 
    { 
      return em.createQuery("from Customer").getResultList();
    }

    @Override
    @Transactional
    public void save(Customer customer)
    {
        if(customer.getIdCustomer() != null)
        {
          em.merge(customer);
        }
        else
        {
          em.persist(customer); 
        }
        
    }


    @Override
    @Transactional  //(readOnly = true)
    public Customer findOne(String IdCustomer) {




      return em.find(Customer.class, IdCustomer);
    }

    public Customer findByCustomerName(String Name){

      return em.find(Customer.class, Name);
    }


    @Override
    @Transactional
    public void delete(String IdCustomer) {
      
      Customer customer = findOne(IdCustomer);

      em.remove(customer);

    }

    @Override
    public boolean login(CustomerLoginDTO customerLoginDTO) {
     
      return true; 
    }

}