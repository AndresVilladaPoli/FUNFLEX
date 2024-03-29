package main.java.funflex.demo.Models.Entity;

import funflex.demo.Models.Entity.Customer;
import funflex.demo.Models.Entity.Product;

@Entity

public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private Product product;
    private Customer Client;
    private int Amount;
    
    public long getId() {
        return Id;
    }
    public void setId(long id) {
        Id = id;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public Customer getClient() {
        return Client;
    }
    public void setClient(Customer client) {
        Client = client;
    }
    public int getAmount() {
        return Amount;
    }
    public void setAmount(int amount) {
        Amount = amount;
    }
}
