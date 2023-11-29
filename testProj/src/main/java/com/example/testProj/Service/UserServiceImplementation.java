package com.example.testProj.Service;

import com.example.testProj.Model.User;
import com.example.testProj.Repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    public UserRepository userRepository;

    @Override
    public void Insert(User u){
        userRepository.save(u);
    }

    @Override
    public List<User> ReadAll(){
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User Update(User b) {
        return userRepository.save(b);
    }

    public User findFirstByUserId(Integer id){
        return userRepository.findFirstByUserId(id);
    }

    @Override
    public User Delete(Integer id) {
        User userToDelete = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        userRepository.delete(userToDelete);
        return userToDelete;
    }

    @Override
    public User findById(Integer id) {
        return userRepository.findByUserId(id);
    }

    @Override
    public User findByUserId(Integer userId) {
        return null;
    }


    @Override
    public User getUserById(Integer userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id"));
    }

    @Override
    public User findByUserEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail);
    }

//    public void Insert(String userEmail, String userPassword) {
//        userRepository.save(userEmail, userPassword);
//    }
}
