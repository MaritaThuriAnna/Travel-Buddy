package com.example.testProj.Service;
import com.example.testProj.Model.Attraction;
import com.example.testProj.Model.Booking;
import org.springframework.stereotype.Component;
import org.w3c.dom.Attr;

@Component
public interface AttractionService {
    void Insert(Attraction attraction);

    Attraction findFirstByAttractionId(Integer id);
}
