package com.example.testProj.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Destination {
    @Id
    private Integer destinationId;
    private String destinationName;
    private String destinationLanguage;
    private String destinationCurrency;
    private String destinationTimezone;

    @OneToMany(mappedBy = "destination")
    @JsonIgnore
    private List<Accomodation> accomodations;
    @OneToMany(mappedBy = "destination")
    @JsonIgnore
    private List<Attraction> attractions;
}
