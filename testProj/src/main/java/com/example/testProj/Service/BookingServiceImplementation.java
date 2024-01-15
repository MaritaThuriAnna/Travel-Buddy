package com.example.testProj.Service;

import com.example.testProj.Model.Booking;
import com.example.testProj.Repository.BookingRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImplementation implements BookingService {
    @Autowired
    private BookingRepository bookingsRepository;

    @Override
    public void Insert(Booking b) {
        bookingsRepository.save(b);
    }

    @Override
    public List<Booking> ReadAll() {
        return (List<Booking>) bookingsRepository.findAll();
    }

    @Override
    public Booking Update(Booking b) {
        return bookingsRepository.save(b);
    }

    public Booking findFirstByBookingId(Integer id){
        return bookingsRepository.findFirstByBookingId(id);
    }

    @Override
    public Booking Delete(Integer id) {
        Booking bookingToDelete = bookingsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));

        bookingsRepository.delete(bookingToDelete);
        return bookingToDelete;
    }

    @Override
    public Booking findById(Integer id) {
        return bookingsRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + id));
    }

//    @Override
//    public Booking getBookingDetails(Long bookingId) {
//        return null;
//    }


    @Override
    public Booking getBookingDetails(Integer bookingId) {
        Optional<Booking> optionalBooking = bookingsRepository.findById(bookingId);
        return optionalBooking.orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + bookingId));
    }

}
