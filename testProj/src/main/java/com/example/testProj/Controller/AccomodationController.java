package com.example.testProj.Controller;

import com.example.testProj.Model.Accomodation;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
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

    @GetMapping("/{destinationId}")
    public ResponseEntity<List<Accomodation>> getAccommodationsByDestinationId(@PathVariable Integer destinationId) {
        List<Accomodation> accommodations = accomodationServiceImplementation.getAccommodationsByDestinationId(destinationId);
        return ResponseEntity.status(HttpStatus.OK).body(accommodations);
    }
    @PutMapping("/Update")
    public ResponseEntity<Accomodation> update(@RequestBody Accomodation accomodation){
        Accomodation updateAccom = accomodationServiceImplementation.Update(accomodation);
        return ResponseEntity.status(HttpStatus.OK).body(updateAccom);
    }

    @GetMapping("/id")
    public ResponseEntity<Accomodation> getAccomodationById(@PathVariable("id") Integer id){
        Accomodation accomodation = accomodationServiceImplementation.getAccomodationById(id);

        if(accomodation != null){
            return ResponseEntity.ok(accomodation);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Accomodation> delete(@PathVariable("id")Integer id){
        Accomodation result = accomodationServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

}
