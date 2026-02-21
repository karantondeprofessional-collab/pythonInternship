package com.estimate.estimate_manegment.controller;


import com.estimate.estimate_manegment.entity.User;
import com.estimate.estimate_manegment.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody User user){
        return authService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String,String> body){
        return authService.login(body.get("email"), body.get("password"));
    }
}

