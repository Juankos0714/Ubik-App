package com.gestion_clientes.gestion_clientes_backend.application.usecase.impl;


import com.gestion_clientes.gestion_clientes_backend.application.dto.UserResponseDto;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.CreateUserCommand;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.CreateUserUseCase;
import com.gestion_clientes.gestion_clientes_backend.domain.exception.UserAlreadyExistsException;
import com.gestion_clientes.gestion_clientes_backend.domain.port.output.UserRepositoryPort;
import com.gestion_clientes.gestion_clientes_backend.model.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder; // Importante para BCrypt
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CreateUserUseCaseImpl implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDto createUser(CreateUserCommand command) {
        // 1. Verificar si ya existe un usuario con el mismo username o email
        if (userRepositoryPort.findByUsername(command.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("Ya existe un usuario con el nombre de usuario: " + command.getUsername());
        }
        if (userRepositoryPort.findByEmail(command.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("Ya existe un usuario con el correo electrónico: " + command.getEmail());
        }

        // 2. Hashear la contraseña con BCrypt
        String hashedPassword = passwordEncoder.encode(command.getPassword());

        // 3. Construir la entidad de dominio User
        User user = User.builder()
                .username(command.getUsername())
                .email(command.getEmail())
                .passwordHash(hashedPassword)
                .firstName(command.getFirstName())
                .lastName(command.getLastName())
                .phoneNumber(command.getPhoneNumber())
                .role("USER")
                .isActive(true)
                .emailVerified(false)
                .build();

        // 4. Guardar el usuario usando el puerto de salida
        User savedUser = userRepositoryPort.save(user);

        // 5. Convertir y devolver el DTO de respuesta
        return UserResponseDto.from(savedUser);
    }
}
