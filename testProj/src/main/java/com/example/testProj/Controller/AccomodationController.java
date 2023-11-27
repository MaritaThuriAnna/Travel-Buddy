package com.example.testProj.Controller;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Service.AccomodationServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/Accomodation")
public class AccomodationController {

    private final AccomodationServiceImplementation accomodationServiceImplementation;
    @GetMapping("/GetData")
    public String getMessage(){
        return "Accomodation";
    }

    @PostMapping("/Print")
    public void prinMessage(@RequestBody Accomodation data){
        System.out.println(data);
    }

    @PostMapping("/Insert")
    public void Insert(@RequestBody Accomodation a){
        System.out.println(a);
        accomodationServiceImplementation.Insert(a);
    }
}
