package com.gestion_clientes.gestion_clientes_backend.infrastructure.adapter.output.persistence;


import com.gestion_clientes.gestion_clientes_backend.domain.port.output.UserRepositoryPort;
import com.gestion_clientes.gestion_clientes_backend.infrastructure.jpa.UserJpaRepository;
import com.gestion_clientes.gestion_clientes_backend.model.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class JpaUserRepositoryAdapter implements UserRepositoryPort {

    private final UserJpaRepository jpaRepository;

    @Override
    public User save(User user) {
        return jpaRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return jpaRepository.findById(id);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return jpaRepository.findByUsername(username);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return jpaRepository.findByEmail(email);
    }
}
