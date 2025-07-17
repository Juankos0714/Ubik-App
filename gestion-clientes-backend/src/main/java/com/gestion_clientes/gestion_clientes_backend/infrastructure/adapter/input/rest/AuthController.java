package com.gestion_clientes.gestion_clientes_backend.infrastructure.adapter.input.rest;


import com.gestion_clientes.gestion_clientes_backend.application.dto.UserResponseDto;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.CreateUserCommand;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.CreateUserUseCase;
import com.gestion_clientes.gestion_clientes_backend.infrastructure.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private final CreateUserUseCase createUserUseCase;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserResponseDto>> registerUser(
            @Valid @RequestBody CreateUserCommand request) {
        logger.info("Received registration request for username: {}", request.getUsername());
        UserResponseDto response = createUserUseCase.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success(response, "Usuario registrado exitosamente"));
    }
    // para otros endpoints de autenticación, como /login, /refresh-token, /forgot-password
}
