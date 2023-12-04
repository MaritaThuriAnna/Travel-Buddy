package com.example.testProj.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    private String userName;
    private String userPassword;
//    @Column(nullable = false, unique = true)
    private String userEmail;
    @OneToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Booking> bookings;


}
