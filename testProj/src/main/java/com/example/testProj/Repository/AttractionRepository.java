package com.example.testProj.Repository;

import com.example.testProj.Model.Attraction;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface AttractionRepository extends CrudRepository<Attraction, Integer> {
    Attraction findFirstByAttractionId(Integer id);
}
