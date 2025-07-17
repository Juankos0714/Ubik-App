package com.gestion_clientes.gestion_clientes_backend.domain.port.output;


import com.gestion_clientes.gestion_clientes_backend.model.user.User;

import java.util.Optional;

public interface UserRepositoryPort {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

}
