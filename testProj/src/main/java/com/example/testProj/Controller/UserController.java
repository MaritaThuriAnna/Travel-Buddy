package com.example.testProj.Controller;

import com.example.testProj.DTO.ObiectNou;
import com.example.testProj.Model.Booking;
import com.example.testProj.Model.User;
import com.example.testProj.Service.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
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

//    @PostMapping("/signUp")
//    public void signUp(@RequestParam String userEmail, @RequestParam String userPassword){
//        //System.out.println(u);
//        userServiceImplementation.Insert(userEmail, userPassword);
//    }

}
