package com.example.testProj.Service;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Destination;
import com.example.testProj.Repository.AccomodationRepository;
import com.example.testProj.Repository.DestinationRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccomodationServiceImplementation implements AccomodationService{
    @Autowired
    private AccomodationRepository accomodationRepository;

    @Autowired
    private DestinationRepository destinationRepository;
    @Override
    public void Insert(Accomodation a) {
        accomodationRepository.save(a);
    }
    @Override
    @Transactional
    public Accomodation findFirstByAccomodationId(Integer id) {
        return accomodationRepository.findFirstByAccomodationId(id);
    }
    @Override
    @Transactional
    public Accomodation createAccommodation(Integer destinationId, Accomodation accommodation){
        Destination destination = destinationRepository.findById(destinationId)
                .orElseThrow(()->  new EntityNotFoundException("Destination not found with id: " + destinationId));

        accommodation.setDestination(destination);
        return accomodationRepository.save(accommodation);
    }

    @Override
    public List<Accomodation> ReadAll() {
        return (List<Accomodation>) accomodationRepository.findAll();
    }

    @Override
    public List<Accomodation> getAccommodationsByDestinationId(Integer destinationId) {
        Destination destination = destinationRepository.findById(destinationId)
                .orElseThrow(() -> new EntityNotFoundException("Destination not found with id: " + destinationId));

        return accomodationRepository.findByDestination(destination);
    }

    public Accomodation getAccomodationById(Integer id) {
        return  accomodationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Accom not found!"));
    }
    @Override
    public Accomodation Update(Accomodation accomodation) {
        return accomodationRepository.save(accomodation);
    }
    @Override
    public Accomodation Delete(Integer id) {
        Accomodation accomToDelete = accomodationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Accom not found!"));
        accomodationRepository.delete(accomToDelete);
        return accomToDelete;
    }
}
