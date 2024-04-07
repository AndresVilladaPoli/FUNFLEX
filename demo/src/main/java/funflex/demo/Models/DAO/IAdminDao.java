package funflex.demo.Models.DAO;

import java.util.List;

import funflex.demo.Controllers.LoginController.AdminLoginDTO;
import funflex.demo.Models.Entity.Admin;

public interface IAdminDao {
    public List<Admin> findAll();       
    
    public void save(Admin admin);

    public Admin findOne(Long IdAdmin);

    public void delete(Long IdAdmin);

    boolean login(AdminLoginDTO adminLoginDTO);
}