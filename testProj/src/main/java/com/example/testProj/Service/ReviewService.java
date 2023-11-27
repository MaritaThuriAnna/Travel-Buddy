package com.example.testProj.Service;

import com.example.testProj.Model.Review;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ReviewService {
    void Insert(Review r);
    List<Review> ReadAll();
    Review Update(Review r);
    Review Delete(Integer id);

    Review findById(Integer id);
}
