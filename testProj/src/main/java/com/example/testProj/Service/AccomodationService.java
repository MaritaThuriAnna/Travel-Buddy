package com.example.testProj.Service;

import com.example.testProj.Model.Accomodation;
import org.springframework.stereotype.Component;

@Component
public interface AccomodationService {
    /**
     * Inserts a new Accommodation record.
     *
     * @param a The Accommodation object to be inserted.
     */
    void Insert(Accomodation a);
    /**
     * Retrieves accommodation by its ID.
     *
     * @param id The ID of the Accommodation to be retrieved.
     * @return The retrieved Accommodation object.
     */
    Accomodation findFirstByAccomodationId(Integer id);

    /**
     * Creates new Accommodation associated with a specific Destination.
     *
     * @param destinationId The ID of the associated Destination.
     * @param accommodation The Accommodation object to be created.
     * @return The created Accommodation object.
     */
    Accomodation createAccommodation(Integer destinationId, Accomodation accommodation);
}
