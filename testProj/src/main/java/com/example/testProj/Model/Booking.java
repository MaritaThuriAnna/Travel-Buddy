package com.example.testProj.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {
    //@OneToOne pt foreign key si instanitezi un obiect al clasei!!!!
    @Id
    private Integer bookingId;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToOne
    private Destination desinationId;
    private Integer accomodationId;
    private Date checkIn;
    private Date checkOut;
}
