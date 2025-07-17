package com.gestion_clientes.gestion_clientes_backend.domain.exception;


public class UserNotFoundException extends DomainException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
