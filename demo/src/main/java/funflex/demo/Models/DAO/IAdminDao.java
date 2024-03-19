import java.util.List;

import funflex.demo.Models.Entity.Admin;

public interface IAdminDao {
    public List<Admin> findAll();       
    
    public void save(Admin admin);

    public Admin findOne(Long IdAdmin);

    public void delete(Long IdAdmin);
}