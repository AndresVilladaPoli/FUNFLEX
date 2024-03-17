
@Controller
@SessionAttributes("customer")

public class CustomerController{

    @Autowired
    private ICustomerDao customerDao;

  //  @RequestMapping(value = "/listar",method = RequestMethod.GET)

 //   @GetMapping("/form")
    public String CreateCustomer(Model model) 
    {

        Customer customer = new Customer();

        model.addAttribute("Title", "Customers form");
        model.addAttribute("customer", customer);


        return "form";
    }

   //  @RequestMapping(value = "/form",method = RequestMethod.POST)
    public String SaveCustomer(Customer customer,SessionStatus status)
    {
       customerDao.save(customer);
        status.setComplete();
    //   return "redirect:listar";

    }

   // @GetMapping("/form/{Id}")   
    public String EditCustomer(@PathVariable(value = "Id") Long Id ,Model model)
    {

        Customer customer = null;

        if(Id > 0)
        {
            customer = customerDao.findOne(Id);
        }
        else
        {
    //        return "redirect:/listar";
        }

        model.addAttribute("Title", "Edit customers");
        model.addAttribute("customer", customer);


        return "form";
    }

}