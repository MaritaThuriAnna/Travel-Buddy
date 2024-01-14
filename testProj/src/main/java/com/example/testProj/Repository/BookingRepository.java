package com.example.testProj.Repository;

import com.example.testProj.Model.Booking;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface BookingRepository extends CrudRepository<Booking, Integer> {
     Booking findFirstByBookingId(Integer id);


    List<Booking> findByUserUserId(Integer userId);
}
