package funflex.demo.Models.Entity;
import java.io.Serializable;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "Product")

public class Product implements Serializable {
    
    private String NameProduct,Description,UnitsAvailable,Price;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdProduct;
    public String getNameProduct() {
        return NameProduct;
    }
    public void setNameProduct(String nameProduct) {
        NameProduct = nameProduct;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public String getUnitsAvailable() {
        return UnitsAvailable;
    }
    public void setUnitsAvailable(String unitsAvailable) {
        UnitsAvailable = unitsAvailable;
    }
    public String getPrice() {
        return Price;
    }
    public void setPrice(String price) {
        Price = price;
    }
    public Long getIdProduct() {
        return IdProduct;
    }
    public void setIdProduct(Long idProduct) {
        IdProduct = idProduct;
    }

    
}
