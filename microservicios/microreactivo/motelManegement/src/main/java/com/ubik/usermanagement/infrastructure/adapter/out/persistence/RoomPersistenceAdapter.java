package com.ubik.usermanagement.infrastructure.adapter.out.persistence;

import com.ubik.usermanagement.domain.model.Room;
import com.ubik.usermanagement.domain.port.out.RoomRepositoryPort;
import com.ubik.usermanagement.infrastructure.adapter.out.persistence.mapper.RoomMapper;
import com.ubik.usermanagement.infrastructure.adapter.out.persistence.repository.RoomR2dbcRepository;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Adaptador de persistencia para Room
 * Implementa el puerto de salida utilizando R2DBC
 * Parte de la arquitectura hexagonal - Adaptador secundario
 */
@Component
public class RoomPersistenceAdapter implements RoomRepositoryPort {

    private final RoomR2dbcRepository roomR2dbcRepository;
    private final RoomMapper roomMapper;

    public RoomPersistenceAdapter(RoomR2dbcRepository roomR2dbcRepository, RoomMapper roomMapper) {
        this.roomR2dbcRepository = roomR2dbcRepository;
        this.roomMapper = roomMapper;
    }

    @Override
    public Mono<Room> save(Room room) {
        return Mono.just(room)
                .map(roomMapper::toEntity)
                .flatMap(roomR2dbcRepository::save)
                .map(roomMapper::toDomain);
    }

    @Override
    public Mono<Room> findById(Long id) {
        return roomR2dbcRepository.findById(id)
                .map(roomMapper::toDomain);
    }

    @Override
    public Flux<Room> findAll() {
        return roomR2dbcRepository.findAll()
                .map(roomMapper::toDomain);
    }

    @Override
    public Flux<Room> findByMotelId(Long motelId) {
        return roomR2dbcRepository.findByMotelId(motelId)
                .map(roomMapper::toDomain);
    }

    @Override
    public Flux<Room> findAvailableByMotelId(Long motelId) {
        return roomR2dbcRepository.findByMotelIdAndIsAvailable(motelId, true)
                .map(roomMapper::toDomain);
    }

    @Override
    public Mono<Room> update(Room room) {
        return Mono.just(room)
                .map(roomMapper::toEntity)
                .flatMap(roomR2dbcRepository::save)
                .map(roomMapper::toDomain);
    }

    @Override
    public Mono<Void> deleteById(Long id) {
        return roomR2dbcRepository.deleteById(id);
    }

    @Override
    public Mono<Boolean> existsById(Long id) {
        return roomR2dbcRepository.existsById(id);
    }
}