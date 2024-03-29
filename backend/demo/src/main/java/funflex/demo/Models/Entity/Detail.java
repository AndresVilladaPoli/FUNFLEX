package main.java.funflex.demo.Models.Entity;

import funflex.demo.Models.Entity.Product;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Detail")

public class Detail {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdDetail;

    private Product product;
    private Sale sale;
    private int amount;

    public long getIdDetail() {
        return IdDetail;
    }
    public void setIdDetail(long idDetail) {
        IdDetail = idDetail;
    }
    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }
    public Sale getSale() {
        return sale;
    }
    public void setSale(Sale sale) {
        this.sale = sale;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
}