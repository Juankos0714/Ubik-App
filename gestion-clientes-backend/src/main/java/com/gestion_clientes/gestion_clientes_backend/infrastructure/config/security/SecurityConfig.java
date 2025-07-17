package com.gestion_clientes.gestion_clientes_backend.infrastructure.config.security;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Importante para BCrypt
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity // Habilita la seguridad a nivel de método con @PreAuthorize
@RequiredArgsConstructor
public class SecurityConfig {

    // Necesitarás implementar un UserDetailsService personalizado para cargar usuarios
    // Esto se haría típicamente en infrastructure.security.UserDetailsServiceImpl
    private final UserDetailsServiceImpl userDetailsService;
    private final JwtAuthenticationEntryPoint unauthorizedHandler; // Para manejar errores de autenticación

    // Inyecta el filtro JWT que crearemos
    private final JwtAuthenticationFilter authTokenFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCryptPasswordEncoder con una fuerza de 12 (valor recomendado entre 10 y 12 para producción)
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Deshabilita CSRF para APIs sin estado (JWT)
                .exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler)) // Manejo de errores de autenticación
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Sesiones sin estado para JWT
                .authorizeHttpRequests(auth -> auth
                        // Permite acceso público al endpoint de registro y otros de autenticación
                        .requestMatchers("/api/auth/**").permitAll()
                        // Permite acceso público a la búsqueda de moteles (ejemplo)
                        .requestMatchers(HttpMethod.GET, "/api/motels/**").permitAll()
                        // Cualquier otra solicitud requiere autenticación
                        .anyRequest().authenticated()
                );

        http.authenticationProvider(authenticationProvider());
        // Agrega el filtro JWT antes del filtro de autenticación de usuario y contraseña
        http.addFilterBefore(authTokenFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
