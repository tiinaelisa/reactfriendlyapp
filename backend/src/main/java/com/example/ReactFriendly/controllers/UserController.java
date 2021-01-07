package com.example.ReactFriendly.controllers;

import com.example.ReactFriendly.entities.Users;
import com.example.ReactFriendly.repositories.UserRepository;
import com.example.ReactFriendly.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    //list all users in the database by saving them in the list "allUsers", then return the list
    //access the endpoint from ./users/listAll
    @CrossOrigin
    @GetMapping("/listAll")
    public List<Users> listAllUsers(){
        List<Users> allUsers = (List<Users>) userRepository.findAll();
        return allUsers;
    }

    }


