package com.example.gateway.application.filter;

import com.example.gateway.domain.port.out.JwtValidatorPort;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class JwtAuthenticationFilter implements GlobalFilter, Ordered {

    private final JwtValidatorPort jwtValidatorPort;

    public JwtAuthenticationFilter(JwtValidatorPort jwtValidatorPort) {
        this.jwtValidatorPort = jwtValidatorPort;
    }

    @Override
    public int getOrder() {
        return -1; // Se ejecuta antes del enrutamiento
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        String path = exchange.getRequest().getPath().value();

        // Rutas públicas (NO requieren token)
        if (isPublicPath(path)) {
            return chain.filter(exchange);
        }

        String authHeader = exchange.getRequest()
                .getHeaders()
                .getFirst("Authorization");

        // No envió el header Authorization
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return unauthorized(exchange);
        }

        String token = authHeader.substring(7);

        // Validación del token vía puerto hexagonal
        try {
            jwtValidatorPort.validateToken(token);
            return chain.filter(exchange); // Permite continuar
        } catch (Exception e) {
            return unauthorized(exchange);
        }
    }

    /**
     * Define aquí todas las rutas que NO requieren autenticación.
     */
    private boolean isPublicPath(String path) {
        return path.startsWith("/api/auth/"); // login, register, resetPassword, etc.
    }

    /**
     * Respuesta centralizada para 401.
     */
    private Mono<Void> unauthorized(ServerWebExchange exchange) {
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        return exchange.getResponse().setComplete();
    }
}
