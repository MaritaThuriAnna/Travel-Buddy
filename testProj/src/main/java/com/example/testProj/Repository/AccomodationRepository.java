package com.example.testProj.Repository;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface AccomodationRepository extends JpaRepository<Accomodation, Integer> {
    Accomodation findFirstByAccomodationId(Integer id);

//    List<Accomodation> findByDestinationId(Integer destinationId);
//    List<Accomodation> ReadAll();

}
