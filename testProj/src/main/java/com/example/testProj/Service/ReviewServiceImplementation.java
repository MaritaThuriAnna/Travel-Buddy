package com.example.testProj.Service;

import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Review;
import com.example.testProj.Repository.ReviewRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImplementation implements ReviewService{
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<Review> ReadAll() {
        return (List<Review>) reviewRepository.findAll();
    }

    public Booking findFirstByReviewId(Integer id){
        return reviewRepository.findFirstByReviewId(id);
    }
    @Override
    public void Insert(Review r) {
        reviewRepository.save(r);
    }

    @Override
    public Review Update(Review r) {
        return reviewRepository.save(r);
    }

    @Override
    public Review Delete(Integer id) {
        Review reviewToDelete = reviewRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Review not found with id: " + id));


        reviewRepository.delete(reviewToDelete);
        return reviewToDelete;
    }

    @Override
    public Review findById(Integer id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));
    }


}
