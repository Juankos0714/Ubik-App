package com.ubik.usermanagement.domain.model;


public record Motel(
        Long id, 
        String username,
        String address,
        String phoneNumber
        String description,
        String city,
        Long property_id,
        java.time.LocalDateTime data_created
) {
}

