package com.gestion_clientes.gestion_clientes_backend.infrastructure.config.security;


import com.gestion_clientes.gestion_clientes_backend.domain.port.output.UserRepositoryPort;
import com.gestion_clientes.gestion_clientes_backend.model.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepositoryPort userRepositoryPort;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepositoryPort.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con username: " + username));

        // Aquí construyes el objeto UserDetails a partir de tu entidad User
        // UserDetails es una interfaz de Spring Security.
        // Puedes crear una clase UserPrincipal que implemente UserDetails si necesitas más campos.
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getUsername())
                .password(user.getPasswordHash()) // Aquí va el password hasheado
                .roles(user.getRole().split(",")) // Asume roles separados por coma si es String
                .accountExpired(!user.getIsActive()) // Ejemplo de cómo mapear campos
                .accountLocked(!user.getIsActive())
                .credentialsExpired(!user.getIsActive())
                .disabled(!user.getIsActive())
                .build();
    }
}
