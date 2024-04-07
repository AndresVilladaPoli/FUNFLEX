package funflex.demo.Models.Entity;

import java.util.Date;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity

@Table(name = "Sale")
public class Sale {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String IdSale;

    private Date date;
    private Double Total;

    public Sale(Double total, Date date, Customer client) {
        Total = total;
        this.date = date;
        Client = client;
    }
    

    @ManyToOne(optional = false, cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    private Customer Client;

    public String getIdSale() {
        return IdSale;
    }
    public void setIdSale(String idSale) {
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
