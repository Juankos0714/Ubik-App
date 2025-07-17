package com.gestion_clientes.gestion_clientes_backend.infrastructure.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import jakarta.persistence.EntityManagerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.sql.DataSource;
import java.util.Optional;

@Configuration
@EnableJpaAuditing // Habilita la auditoría de JPA para campos como @CreatedDate, @LastModifiedDate
public class DatabaseConfig {

    // Bean para la auditoría, que permite a JPA saber quién realizó la acción (ej. en @CreatedBy)
    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return Optional.of("system"); // Usuario por defecto si no hay autenticación
            }
            // Retorna el nombre de usuario del principal autenticado
            return Optional.of(authentication.getName());
        };
    }

    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }


}