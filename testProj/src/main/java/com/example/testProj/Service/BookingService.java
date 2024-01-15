package com.example.testProj.Service;

import com.example.testProj.Model.Booking;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookingService {
    void Insert(Booking b);
    List<Booking> ReadAll();
    Booking Update(Booking b);
    Booking findFirstByBookingId(Integer id);
    Booking Delete(Integer id);
    Booking findById(Integer id);

//    Booking getBookingDetails(Long bookingId);

    Booking getBookingDetails(Integer bookingId);

//    List<Booking> getBookingsByUserId(Integer userId);
}