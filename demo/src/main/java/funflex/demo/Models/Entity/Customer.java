package funflex.demo.Models.Entity;

import java.io.Serializable;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
 


@Entity
@Table(name = "Customer")
public class Customer implements Serializable {


    private String Name,Email,Direction,TelephoneContact;

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String IdCustomer;

    public Customer() {
    }

    public String getIdCustomer() {
        return IdCustomer;
    }

    public void setIdCustomer(String id) {
        this.IdCustomer = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getDirection() {
        return Direction;
    }

    public void setDirection(String direction) {
        Direction = direction;
    }

    public String getTelephoneContact() {
        return TelephoneContact;
    }

    public void setTelephoneContact(String telephoneContact) {
        TelephoneContact = telephoneContact;
    }



}