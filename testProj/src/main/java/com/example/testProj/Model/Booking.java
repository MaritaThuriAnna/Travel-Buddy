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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "destination_id")
    private Destination desinationId;
    private Integer accomodationId;
    private Date checkIn;
    private Date checkOut;
}
