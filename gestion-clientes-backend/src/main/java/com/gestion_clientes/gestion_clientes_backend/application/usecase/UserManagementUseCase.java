package com.gestion_clientes.gestion_clientes_backend.application.usecase;


import com.gestion_clientes.gestion_clientes_backend.application.dto.UserResponseDto;

public interface UserManagementUseCase {
    UserResponseDto getCurrentUser(String username);
}
