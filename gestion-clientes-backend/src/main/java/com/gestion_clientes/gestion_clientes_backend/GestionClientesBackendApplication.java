package com.gestion_clientes.gestion_clientes_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.gestion_clientes.gestion_clientes_backend.infrastructure.jpa") // Corrected package name
@EnableJpaAuditing
public class GestionClientesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionClientesBackendApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration()
				.setMatchingStrategy(MatchingStrategies.STRICT)
				.setFieldMatchingEnabled(true)
				.setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE);
		return mapper;
	}

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}