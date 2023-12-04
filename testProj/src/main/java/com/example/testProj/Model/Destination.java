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
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer destinationId;
    private String destinationName;
    private String destinationLanguage;
    private String destinationCurrency;
    private String destinationTimezone;

    @OneToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Accomodation> accomodations;
    @OneToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Attraction> attractions;
}
