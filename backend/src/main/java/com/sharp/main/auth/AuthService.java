package com.sharp.main.auth;

import com.sharp.main.config.auth.JwtService;
import com.sharp.main.dto.auth.LoginRequest;
import com.sharp.main.dto.auth.RegisterRequest;
import com.sharp.main.dto.user.UserDTO;
import com.sharp.main.members.Member;
import com.sharp.main.members.MemberRepository;
import com.sharp.main.user.User;
import com.sharp.main.user.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final MemberRepository memberRepository;

    public void register(RegisterRequest registerRequest, HttpServletResponse response) {
        try {
            Optional<User> user = userRepository.findByEmail(registerRequest.getEmail());

            if (user.isPresent()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "user already exits");
            }

            User user1 = User.builder()
                    .name(registerRequest.getUsername())
                    .email(registerRequest.getEmail())
                    .password(passwordEncoder.encode(registerRequest.getPassword()))
                    .build();

            User savedUser = userRepository.save(user1);

            Member member = Member.builder()
                    .userId(savedUser.getId())
                    .memberId(savedUser.getId())
                    .build();

            memberRepository.save(member);

            String token = jwtService.generateToken(user1);

            Cookie cookie = new Cookie("sharp_token", token);
            cookie.setMaxAge(3600 * 24 * 50);
            cookie.setHttpOnly(true);
            cookie.setPath("/");

            response.addCookie(cookie);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    public void login(LoginRequest loginRequest, HttpServletResponse response) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());

            if (user.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "user not found");
            }

            String token = jwtService.generateToken(user.get());

            Cookie cookie = new Cookie("sharp_token", token);
            cookie.setMaxAge(3600 * 24 * 50);
            cookie.setHttpOnly(true);
            cookie.setPath("/");

            response.addCookie(cookie);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    }

    public UserDTO getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getName())
                .email(user.getEmail())
                .image(user.getImage())
                .description(user.getDescription())
                .build();
    }
}
