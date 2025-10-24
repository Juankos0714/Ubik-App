package com.ubik.usermanagement.domain.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("motel")
public record User(
        @Id Long id, 
        String username,
        String address,
        String phoneNumber
        String description,
        String city,
        Long property_id,
        String resetToken,
        java.time.LocalDateTime data_created
) {
}

