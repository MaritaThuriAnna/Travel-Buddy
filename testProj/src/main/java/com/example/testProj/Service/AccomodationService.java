package com.example.testProj.Service;

import com.example.testProj.Model.Accomodation;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface AccomodationService {

    void Insert(Accomodation a);

    Accomodation findFirstByAccomodationId(Integer id);


    Accomodation createAccommodation(Integer destinationId, Accomodation accommodation);

    List<Accomodation> ReadAll();

//    List<Accomodation> getAccomodationsByDestination(Integer destinationId);
}
