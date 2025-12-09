package com.example.gateway.application.filter;

import com.example.gateway.domain.port.out.JwtValidatorPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import java.util.Map;

@Component
public class JwtAuthenticationFilter implements WebFilter {

    private final JwtValidatorPort jwtValidatorPort;

    public JwtAuthenticationFilter(JwtValidatorPort jwtValidatorPort) {
        this.jwtValidatorPort = jwtValidatorPort;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {

        String path = exchange.getRequest().getPath().value();

        // 1. Rutas públicas
        if (isPublicPath(path)) {
            return chain.filter(exchange);
        }

        // 2. Extraer token
        String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return unauthorized(exchange);
        }

        String token = authHeader.substring(7);

        try {
            // 3. Validar token
            Map<String, Object> claims = jwtValidatorPort.validateToken(token);

            // 4. Propagar claims a los microservicios
            ServerHttpRequest mutatedRequest = exchange.getRequest()
                    .mutate()
                    .header("X-User-Id", claims.getOrDefault("id", "").toString())
                    .header("X-User-Email", claims.getOrDefault("email", "").toString())
                    .header("X-User-Roles", claims.getOrDefault("roles", "").toString())
                    .build();

            return chain.filter(
                    exchange.mutate().request(mutatedRequest).build()
            );

        } catch (Exception e) {
            return unauthorized(exchange);
        }
    }

    private boolean isPublicPath(String path) {
        return path.startsWith("/api/auth/");
    }

    private Mono<Void> unauthorized(ServerWebExchange exchange) {
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        return exchange.getResponse().setComplete();
    }
}

