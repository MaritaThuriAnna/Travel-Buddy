package com.example.testProj.Controller;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.User;
import com.example.testProj.Service.AccomodationServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Accomodation>> readAll(){
        List<Accomodation> users = accomodationServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

//    @GetMapping("/ByDestination/{destinationId}")
//    public ResponseEntity<List<Accomodation>> getAccomodationsByDestination(@PathVariable("destinationId") Integer id) {
//        List<Accomodation> accomodations = accomodationServiceImplementation.getAccomodationsByDestination(id);
//
//        if (accomodations != null) {
//            return ResponseEntity.ok(accomodations);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}
