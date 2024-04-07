package funflex.demo.Models.DAO;

import java.util.List;

import funflex.demo.Controllers.LoginController.CustomerLoginDTO;
import funflex.demo.Models.Entity.Customer;

public interface ICustomerDao {
    public List<Customer> findAll();       
    
    public void save(Customer customer);

    public Customer findOne(Long Id);

    public void delete(Long Id);

     boolean login(CustomerLoginDTO customerLoginDTO);
}
