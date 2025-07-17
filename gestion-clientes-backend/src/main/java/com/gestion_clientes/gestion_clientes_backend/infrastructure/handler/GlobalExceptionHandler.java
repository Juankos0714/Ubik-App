package com.gestion_clientes.gestion_clientes_backend.infrastructure.handler;


import com.gestion_clientes.gestion_clientes_backend.domain.exception.UserAlreadyExistsException;
import com.gestion_clientes.gestion_clientes_backend.domain.exception.UserNotFoundException;
import com.gestion_clientes.gestion_clientes_backend.infrastructure.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Map<String, String>>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        logger.warn("Validation failed: {}", errors);
        // La inferencia de tipo aquí para <Map<String, String>> es correcta
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ApiResponse.error("VALIDATION_FAILED", "Errores de validación", errors));
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ApiResponse<Void>> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
        logger.warn("User already exists: {}", ex.getMessage());
        // La inferencia de tipo aquí para <Void> es correcta
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ApiResponse.error("USER_ALREADY_EXISTS", ex.getMessage()));
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiResponse<Void>> handleUserNotFoundException(UserNotFoundException ex) {
        logger.warn("User not found: {}", ex.getMessage());
        // La inferencia de tipo aquí para <Void> es correcta
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ApiResponse.error("USER_NOT_FOUND", ex.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGlobalException(Exception ex) {
        logger.error("An unexpected error occurred: {}", ex.getMessage(), ex);
        // La inferencia de tipo aquí para <Void> es correcta
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ApiResponse.error("INTERNAL_SERVER_ERROR", "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde."));
    }
}
