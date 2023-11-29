package com.example.testProj.Service;

import com.example.testProj.Model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

    void Insert(User u);

    List<User> ReadAll();

    User Update(User b);

    User findFirstByUserId(Integer id);

    User Delete(Integer id);
    User findById(Integer id);

    User findByUserId(Integer userId);

    User findByUserEmail(String userEmail);

    User getUserById(Integer id);
}
