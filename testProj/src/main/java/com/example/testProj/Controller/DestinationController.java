package com.example.testProj.Controller;

import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
import com.example.testProj.Service.DestinationServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/Destination")
public class DestinationController {
    private final DestinationServiceImplementation destinationServiceImplementation;

    @GetMapping("/GetData")
    public String getMessage(){
        return "miauuuuu";
    }

    @GetMapping("/ReadData")
    public String getData() {
        return "adgaiuai";
    }

    @PostMapping("/Insert")
    public void Insert(@RequestBody Destination d){
        System.out.println(d);
        destinationServiceImplementation.Insert(d);
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<Destination>> readAll(){
        List<Destination> destinations= destinationServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(destinations);
    }

    @PutMapping("/Update")
    public ResponseEntity<Destination> update(@RequestBody Destination destination){
        Destination updateDestination = destinationServiceImplementation.Update(destination);
        return ResponseEntity.status(HttpStatus.OK).body(updateDestination);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Destination> delete(@PathVariable("id")Integer id){
        Destination result = destinationServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Destination> getDestinationById(@PathVariable("id") Integer id) {
        Destination destination = destinationServiceImplementation.getDestinationById(id);

        if (destination != null) {
            return ResponseEntity.ok(destination);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}