package com.sharp.main.auth;

import com.sharp.main.dto.auth.LoginRequest;
import com.sharp.main.dto.auth.RegisterRequest;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.user.UserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping(path = "/register")
    public void register(@RequestBody RegisterRequest registerRequest, HttpServletResponse response) {
        authService.register(registerRequest, response);
    }

    @PostMapping(path = "/login")
    public void login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        authService.login(loginRequest, response);
    }
}
