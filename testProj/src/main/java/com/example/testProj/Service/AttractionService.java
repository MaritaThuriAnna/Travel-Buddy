package com.example.testProj.Service;
import com.example.testProj.Model.Attraction;
import com.example.testProj.Model.Booking;
import org.springframework.stereotype.Component;
import org.w3c.dom.Attr;

import java.util.List;

@Component
public interface AttractionService {
    void Insert(Attraction attraction);

    Attraction findFirstByAttractionId(Integer id);

    Attraction getAttractionById(Integer attractionId);

    List<Attraction> ReadAll();

    Attraction Update(Attraction attraction);

    Attraction Delete(Integer id);
}
