package com.example.testProj.Repository;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Booking;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface AccomodationRepository extends CrudRepository<Accomodation, Integer> {
    Accomodation findFirstByAccomodationId(Integer id);
}
