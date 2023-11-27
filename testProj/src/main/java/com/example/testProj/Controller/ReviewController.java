package com.example.testProj.Controller;

import com.example.testProj.DTO.ObiectNou;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Review;
import com.example.testProj.Service.ReviewServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/Review")
public class ReviewController {
    private final ReviewServiceImplementation reviewServiceImplementation;

    @GetMapping("/GetData")
    public String getMessage(){
        return "Review";
    }

    @PostMapping("/Print")
    public void prinMessage(@RequestBody Review data){
        System.out.println(data);
    }

    @GetMapping("/ReadData")
    public String getData() {
        return "miau";
    }
    @PostMapping("/Insert")
    public void insert(@RequestBody Review review){
        System.out.println(review);
        reviewServiceImplementation.Insert(review);
    }
    @GetMapping("/ReadAll")
    public ResponseEntity<List<Review>> readAll(){
        List<Review> reviews = reviewServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }
    @PutMapping("/Update")
    public ResponseEntity<Review> update(@RequestBody Review review){
        Review updatedReview = reviewServiceImplementation.Update(review);
        return ResponseEntity.status(HttpStatus.OK).body(updatedReview);
    }
    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Review> delete(@PathVariable("id")Integer id){
        Review result = reviewServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}