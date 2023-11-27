package com.example.testProj.Service;

import com.example.testProj.Model.Destination;
import com.example.testProj.Repository.DestinationRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationServiceImplementation implements DestinationService{

    @Autowired
    private DestinationRepository destinationRepository;

    @Override
    public void Insert(Destination d) {
        destinationRepository.save(d);
    }

    //    @Override
//    public Destination findFirstByDestinationId(Integer id) {
//        return destinationRepository.findFirstByDestinationId(id);
//    }
    @Override
    public List<Destination> ReadAll() {
        return (List<Destination>) destinationRepository.findAll();
    }

    @Override
    public Destination Update(Destination destination) {
        return destinationRepository.save(destination);
    }

    public Destination findFirstByDestinationId(Integer id){
        return destinationRepository.findFirstByDestinationId(id);
    }

    @Override
    public Destination Delete(Integer id) {
        Destination destToDelete = destinationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Destnation not found!"));
        destinationRepository.delete(destToDelete);
        return destToDelete;

    }

    public String generateImageUrl(String destinationName) {
        // Assuming images are stored in a directory named "destination_images" with a .jpg extension
        // Convert destination name to lowercase and replace spaces with underscores
        String imageName = destinationName.toLowerCase().replace(" ", "_");
        return String.format("/destination_images/%s.jpg", imageName);
    }

    @Override
    public Destination getDestinationById(Integer id) {
        return destinationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Destination not found!"));
    }

}