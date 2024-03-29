package main.java.funflex.demo.Models.Entity;

import funflex.demo.Models.Entity.Customer;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Sale")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdSale;


    private Date date;
    private Double Total;
    private Customer Client;

    public long getIdSale() {
        return IdSale;
    }
    public void setIdSale(long idSale) {
        IdSale = idSale;
    }

    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public Double getTotal() {
        return Total;
    }
    public void setTotal(Double total) {
        Total = total;
    }
    public Customer getClient() {
        return Client;
    }
    public void setClient(Customer client) {
        Client = client;
    }
}
