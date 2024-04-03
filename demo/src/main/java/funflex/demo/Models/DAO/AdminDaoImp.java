package funflex.demo.Models.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import funflex.demo.Models.Entity.Admin;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository

public class AdminDaoImp implements IAdminDao{

    @PersistenceContext
    
    private EntityManager em;

    @SuppressWarnings("unchecked")
    @Transactional(readOnly = true)
    @Override
    public List<Admin> findAll() 
    { 
      return em.createQuery("from Admin").getResultList();
    }

    @Override
    @Transactional
    public void save(Admin admin)
    {
        if(admin.getIdAdmin() != null && admin.getIdAdmin() > 0)
        {
          em.merge(admin);
        }
        else
        {
          em.persist(admin); 
        }
        
    }


    @Override
    @Transactional(readOnly = true)
    public Admin findOne(Long IdAdmin) {




      return em.find(Admin.class, IdAdmin);
    }

    @Override
    @Transactional
    public void delete(Long IdAdmin) {
      
      Admin admin = findOne(IdAdmin);

      em.remove(admin);

    }


}