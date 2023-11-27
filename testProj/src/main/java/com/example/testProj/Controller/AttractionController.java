package com.example.testProj.Controller;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Attraction;
import com.example.testProj.Service.AccomodationServiceImplementation;
import com.example.testProj.Service.AttractionServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
}
