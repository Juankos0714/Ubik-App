package com.ubik.usermanagement.application.port.out;

import io.jsonwebtoken.Claims;

public interface JwtPort {
    String generateToken(String username, String role);
    Claims getClaims(String token);
    boolean isTokenValid(String token, String username);
}
