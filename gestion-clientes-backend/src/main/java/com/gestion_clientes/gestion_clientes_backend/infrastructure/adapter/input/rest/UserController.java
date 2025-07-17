package com.gestion_clientes.gestion_clientes_backend.infrastructure.adapter.input.rest;


import com.gestion_clientes.gestion_clientes_backend.application.dto.UserResponseDto;
import com.gestion_clientes.gestion_clientes_backend.application.usecase.UserManagementUseCase;
import com.gestion_clientes.gestion_clientes_backend.infrastructure.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserManagementUseCase userManagementUseCase;

    @GetMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ApiResponse<UserResponseDto>> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = null;
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            username = ((UserDetails) authentication.getPrincipal()).getUsername();
        } else if (authentication != null && authentication.getPrincipal() instanceof String) {
            username = (String) authentication.getPrincipal();
        }

        if (username == null || "anonymousUser".equals(username)) {
            logger.warn("No authenticated user found for /api/user/me request or user is anonymous.");
            // La inferencia de tipo aquí para <UserResponseDto> es correcta
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(ApiResponse.error("UNAUTHORIZED", "No hay usuario autenticado."));
        }

        logger.info("Fetching details for authenticated user: {}", username);
        UserResponseDto userDto = userManagementUseCase.getCurrentUser(username);
        return ResponseEntity.ok(ApiResponse.success(userDto, "Detalles del usuario autenticado."));
    }
}