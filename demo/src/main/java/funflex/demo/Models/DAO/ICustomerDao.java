package funflex.demo.Models.DAO;

import java.util.List;

import funflex.demo.Controllers.LoginController.CustomerLoginDTO;
import funflex.demo.Models.Entity.Customer;

public interface ICustomerDao {
    public List<Customer> findAll();       
    
    public void save(Customer customer);

    public Customer findOne(String IdCustomer);

    public Customer findByCustomerName(String Name);

    public void delete(String IdCustomer);

     boolean login(CustomerLoginDTO customerLoginDTO);
}
