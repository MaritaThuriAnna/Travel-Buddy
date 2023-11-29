package com.example.testProj.Repository;

import com.example.testProj.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<User, Integer> {
    User findFirstByUserId(Integer id);
    User findByUserId(Integer userId);

    User findByUserEmail(String userEmail);
}