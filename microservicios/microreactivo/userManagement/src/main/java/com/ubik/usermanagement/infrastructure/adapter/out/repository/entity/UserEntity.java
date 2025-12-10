package com.ubik.usermanagement.infrastructure.adapter.out.repository.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("users")
public record UserEntity(
        @Id Long id,
        String username,
        String password,
        String email,
        String phoneNumber,
        LocalDateTime createdAt,
        boolean anonymous,
        String role,
        String resetToken,
        LocalDateTime resetTokenExpiry
) {
}
