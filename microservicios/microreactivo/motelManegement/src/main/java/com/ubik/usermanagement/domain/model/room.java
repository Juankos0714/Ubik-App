package com.ubik.usermanagement.domain.model;

public record Room(
        @id Long id, 
        Long motel_id,
        String number,
        String roomType,
        double price,
        String description
){
}
