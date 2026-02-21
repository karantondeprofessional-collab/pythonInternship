package com.estimate.estimate_manegment.service;

import com.estimate.estimate_manegment.entity.User;
import com.estimate.estimate_manegment.repository.UserRepository;
import com.estimate.estimate_manegment.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;

    // REGISTER
    public String register(User user){

        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("ADMIN");

        userRepo.save(user);

        return "User Registered Successfully";
    }

    // LOGIN
    public String login(String email, String password){

        Optional<User> user = userRepo.findByEmail(email);

        if(user.isEmpty())
            return "User Not Found";

        if(!encoder.matches(password, user.get().getPassword()))
            return "Invalid Password";

        return JwtUtil.generateToken(email);
    }
}
