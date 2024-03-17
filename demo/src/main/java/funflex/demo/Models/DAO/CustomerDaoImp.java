
@Repository

public Class CustomerDaoImp implements ICustomerDao{

    @PersistenceContext
    
    private EntityManager em;

    @SuppressWarnings("unchecked")
    @Transactional(readOnly = true)
    @Override
    public List<Customer> findAll() 
    { 
      return em.createQuery("from Customer").getResultList();
    }

    @Override
    @Transactional
    public void save(Customer customer)
    {
        if(customer.getId() != null && customer.getId() > 0)
        {
          em.merge(customer);
        }
        else
        {
          em.persist(customer); 
        }
        
    }


    @Override
    @Transactional(readOnly = true)
    public Customer findOne(Long Id) {




      return em.find(Customer.class, Id);
    }


    @Override
    @Transactional
    public void delete(Long Id) {
      
      Customer customer = findOne(Id);

      em.remove(customer);

    }

}