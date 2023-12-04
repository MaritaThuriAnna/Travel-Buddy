package com.example.testProj.Controller;

import com.example.testProj.DTO.ObiectNou;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.Destination;
import com.example.testProj.Model.User;
import com.example.testProj.Service.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/User")
public class UserController {

    private final UserServiceImplementation userServiceImplementation;
    @GetMapping("/GetData")
    public String getMessage(){
        return "Users class";
    }

    @PostMapping("/Print")
    public void prinMessage(@RequestBody User data){
        System.out.println(data);
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody User u){
        System.out.println(u);
        userServiceImplementation.Insert(u);
    }

    @GetMapping("/ReadAll")
    public ResponseEntity<List<User>> readAll(){
        List<User> users = userServiceImplementation.ReadAll();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @PutMapping("/Update")
    public ResponseEntity<User> update(@RequestBody User user){
        User updatedUser = userServiceImplementation.Update(user);
        return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<User> delete(@PathVariable("id")Integer id){
        User result = userServiceImplementation.Delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/Login")
    public  ResponseEntity<User> login(@RequestParam String userEmail, @RequestParam String userPassword){
        User user = userServiceImplementation.findByUserEmail(userEmail);
        if(user != null && user.getUserPassword().equals(userPassword)){
            return ResponseEntity.status(HttpStatus.OK).body(user);
//            return ResponseEntity.ok("Login successful");
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @PostMapping("/findUserById/{id}")
    public ResponseEntity<User> findUserById(@PathVariable Integer id) {
        User user = userServiceImplementation.findByUserId(id);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }


    @GetMapping("/{id}")
    public ResponseEntity<User> getDestinationById(@PathVariable("id") Integer id) {
        User user = userServiceImplementation.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/Register")
    public ResponseEntity<String> register(@RequestBody User newUser){
        User user = userServiceImplementation.findByUserEmail(newUser.getUserEmail());

        if(user != null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists");
        }else{
            userServiceImplementation.Insert(newUser);
            return ResponseEntity.status(HttpStatus.CREATED).body("user registered succesfully!");
        }
    }

}
