package com.example.gateway.domain.port.out;

import java.util.Map;

public interface JwtValidatorPort {
    Map<String, Object> validateToken(String token);
}
