package com.example.testProj.Service;

import com.example.testProj.Model.Destination;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DestinationService {
    void Insert(Destination d);
    List<Destination> ReadAll();

    Destination Update(Destination destination);

    Destination findFirstByDestinationId(Integer id);

    Destination Delete(Integer id);


    Destination getDestinationById(Integer id);
}
