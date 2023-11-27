package com.example.testProj.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private Integer userId;
    private String userName;
    private String userPassword;
//    @Column(nullable = false, unique = true)
    private String userEmail;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Booking> bookings;
}
