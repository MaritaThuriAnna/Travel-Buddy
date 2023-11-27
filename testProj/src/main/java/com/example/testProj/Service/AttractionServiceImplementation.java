package com.example.testProj.Service;

import com.example.testProj.Model.Attraction;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
import com.example.testProj.Repository.AttractionRepository;
import com.example.testProj.Repository.DestinationRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttractionServiceImplementation implements AttractionService{
    @Autowired
    private AttractionRepository attractionRepository;
    @Autowired
    private DestinationRepository destinationRepository;

    @Override
    public void Insert(Attraction attraction) {
        attractionRepository.save(attraction);
    }

    @Override
    @Transactional
    public Attraction findFirstByAttractionId(Integer id) {
        return attractionRepository.findFirstByAttractionId(id);
    }

    public Attraction createAttraction(Integer destinationId, Attraction attraction){
        Destination destination = destinationRepository.findById(destinationId)
                .orElseThrow(() -> new EntityNotFoundException("Destination not found with id: " + destinationId));
        attraction.setDestination(destination);
        return attractionRepository.save(attraction);
    }

}
