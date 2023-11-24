package com.sharp.main.user;

import com.sharp.main.auth.AuthService;
import com.sharp.main.dto.user.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final AuthService authService;


    public UserDTO userDetails() {
        return authService.getCurrentUser();
    }
}
