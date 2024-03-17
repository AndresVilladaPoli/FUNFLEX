package funflex.demo.Models.Entity;

import java.io.Serializable;
 

@package packageName;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@Table("Customer")
class Customer implements Serializable {


    private String Name,Email,Direction,TelephoneContact;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private entityIdType id;

    public Customer() {
    }

    public entityIdType getId() {
        return id;
    }

    public void setId(entityIdType id) {
        this.id = id;
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