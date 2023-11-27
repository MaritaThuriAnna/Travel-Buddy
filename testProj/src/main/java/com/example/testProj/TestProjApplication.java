package com.example.testProj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories

public class TestProjApplication {

    //private final BookingsRepo bookingsRepo;
    public static void main(String[] args) {
        SpringApplication.run(TestProjApplication.class, args);

        //Bookings booking = new Bookings(1, 2);

    }
    //@Bean //face ca o metoda sa ruleze cand rulez proi Spring
}
