package com.example.testProj.Controller;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Attraction;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
import com.example.testProj.Service.AccomodationServiceImplementation;
import com.example.testProj.Service.AttractionServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/Attraction")
public class AttractionController {
    private final AttractionServiceImplementation attractionServiceImplementation;

    @GetMapping("/GetData")
    public String getMessage(){
        return "Attractions";
    }

    @PostMapping("/Print")
    public void prinMessage(@RequestBody Attraction data){
        System.out.println(data);
    }

    @PostMapping("/Insert")
    public void Insert(@RequestBody Attraction a){
        System.out.println(a);
        attractionServiceImplementation.Insert(a);
    }

    @PutMapping("/Update")
    public ResponseEntity<Attraction> update(@RequestBody Attraction attraction){
        Attraction updateAttraction = attractionServiceImplementation.Update(attraction);
        return ResponseEntity.status(HttpStatus.OK).body(updateAttraction);
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Attraction>> readAll(){
        List<Attraction> users = attractionServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Attraction> delete(@PathVariable("id")Integer id){
        Attraction result = attractionServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Attraction> getAttractionById(@PathVariable("id") Integer attractionId) {
        Attraction attraction = attractionServiceImplementation.getAttractionById(attractionId);

        if (attraction != null) {
            return ResponseEntity.ok(attraction);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
