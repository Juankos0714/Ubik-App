package com.gestion_clientes.gestion_clientes_backend.infrastructure.jpa;


import com.gestion_clientes.gestion_clientes_backend.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
