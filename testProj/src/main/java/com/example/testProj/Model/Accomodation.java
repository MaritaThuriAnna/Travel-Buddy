package com.example.testProj.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Accomodation {
    @Id
    private Integer accomodationId;
    @ManyToOne
    @JoinColumn(name = "destination_id")
    private Destination destination;
    private String accomodationName;
    private String accomodationType;
    private Integer accomodationPricePerNight;
}