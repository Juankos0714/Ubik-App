package com.gestion_clientes.gestion_clientes_backend.domain.exception;


public class UserAlreadyExistsException extends DomainException {
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}
