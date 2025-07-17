package com.gestion_clientes.gestion_clientes_backend.application.usecase.impl;


import com.gestion_clientes.gestion_clientes_backend.application.dto.UserResponseDto;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.UserManagementUseCase;
import com.gestion_clientes.gestion_clientes_backend.domain.exception.UserNotFoundException;
import com.gestion_clientes.gestion_clientes_backend.domain.port.output.UserRepositoryPort;
import com.gestion_clientes.gestion_clientes_backend.model.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserManagementUseCaseImpl implements UserManagementUseCase {

    private final UserRepositoryPort userRepositoryPort;

    @Override
    public UserResponseDto getCurrentUser(String username) {
        User user = userRepositoryPort.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("Usuario no encontrado con username: " + username));
        return UserResponseDto.from(user);
    }
}
