
package funflex.demo.Models.Entity;
import java.io.Serializable;


import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table(name = "Admin")
public class Admin implements Serializable {


    private String AdminName,AdminEmail,AdminTelephone,DocumentType,DocumentNumber;

    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long IdAdmin;

    public Admin() {
    }

    public String getAdminName() {
        return AdminName;
    }

    public void setAdminName(String adminName) {
        AdminName = adminName;
    }

    public String getAdminEmail() {
        return AdminEmail;
    }

    public void setAdminEmail(String adminEmail) {
        AdminEmail = adminEmail;
    }

    public String getAdminTelephone() {
        return AdminTelephone;
    }

    public void setAdminTelephone(String adminTelephone) {
        AdminTelephone = adminTelephone;
    }

    public String getDocumentType() {
        return DocumentType;
    }

    public void setDocumentType(String documentType) {
        DocumentType = documentType;
    }

    public String getDocumentNumber() {
        return DocumentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        DocumentNumber = documentNumber;
    }

    public Long getIdAdmin() {
        return IdAdmin;
    }

    public void setIdAdmin(Long idAdmin) {
        IdAdmin = idAdmin;
    }

    

}
    
    

   
