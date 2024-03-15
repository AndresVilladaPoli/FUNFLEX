package funflex.demo.Models.Entity;

import java.io.Serializable;
 

@Entity
@Table("Customer")


public class Customer implements Serializable {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long Id;

    private String Name,Email,Direction,TelephoneContact;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
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
