package com.example.testProj.Controller;

import com.example.testProj.DTO.ObiectNou;
import com.example.testProj.Model.Booking;
import com.example.testProj.Repository.UserRepository;
import com.example.testProj.Service.BookingServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/Bookings")
public class BookingController {
    private final BookingServiceImplementation bookingsServiceImplementation;
    private final UserRepository userrepo;
    @GetMapping("/GetData")
    public ResponseEntity getMessage(){
        return ResponseEntity.status(HttpStatus.OK).body("miau");
    }

    @PostMapping("/Print")
    public void prinMessage(@RequestBody ObiectNou data){
        System.out.println(data);
    }

    @GetMapping("/ReadData")
    public String getData() {
        return "adgaiuai";
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Booking b){
        System.out.println(b);
        bookingsServiceImplementation.Insert(b);
    }
    @GetMapping("/ReadAll")
    public ResponseEntity<List<Booking>> readAll(){
        List<Booking> bookings = bookingsServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(bookings);
    }

    @PutMapping("/Update")
    public ResponseEntity<Booking> update(@RequestBody Booking booking){
        Booking updatedBooking = bookingsServiceImplementation.Update(booking);
        return ResponseEntity.status(HttpStatus.OK).body(updatedBooking);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<Booking> delete(@PathVariable("id")Integer id){
        Booking result = bookingsServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/Details/{bookingId}")
    public ResponseEntity<Booking> getBookingDetails(@PathVariable Integer bookingId) {
        try {
            // Call the service method to get booking details
            Booking booking = bookingsServiceImplementation.getBookingDetails(bookingId);

            // Return the booking details in the response
            return ResponseEntity.ok(booking);
        } catch (Exception e) {
            // Handle exceptions and return an error response
            return ResponseEntity.status(500).body(null); // Adjust the status and body as needed
        }
    }

    @GetMapping("/FindByUserId/{userId}")
    public ResponseEntity<List<Booking>> getBookingsByUserId(@PathVariable Integer userId) {
        try {
            // Call the service method to get bookings by user ID
            List<Booking> bookings = userrepo.findByUserId(userId).getBookings();

            // Return the bookings in the response
            return ResponseEntity.ok(bookings);
        } catch (Exception e) {
            // Handle exceptions and return an error response
            return ResponseEntity.status(500).body(null); // Adjust the status and body as needed
        }
    }

}
