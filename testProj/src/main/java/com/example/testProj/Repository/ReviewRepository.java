package com.example.testProj.Repository;

import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Review;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ReviewRepository extends CrudRepository<Review, Integer> {

    Booking findFirstByReviewId(Integer id);
}
