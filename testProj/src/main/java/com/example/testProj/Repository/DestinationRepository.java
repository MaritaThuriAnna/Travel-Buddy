package com.example.testProj.Repository;

import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface DestinationRepository extends CrudRepository<Destination, Integer> {
    Destination findFirstByDestinationId(Integer id);

//    String generateImageUrl(String destinationName);

}
