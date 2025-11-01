-- Tabla de servicios disponibles
CREATE TABLE IF NOT EXISTS service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255),
    icon VARCHAR(50) COMMENT 'Nombre del icono para el frontend',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla intermedia para la relación muchos-a-muchos
CREATE TABLE IF NOT EXISTS room_service (
    room_id INT NOT NULL,
    service_id INT NOT NULL,
    PRIMARY KEY (room_id, service_id),
    FOREIGN KEY (room_id) REFERENCES room(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES service(id) ON DELETE CASCADE,
    INDEX idx_service_id (service_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar servicios predefinidos
INSERT INTO service (name, description, icon) VALUES
('Jacuzzi', 'Jacuzzi privado en la habitación', 'hot_tub'),
('Spa', 'Acceso a spa y sauna', 'spa'),
('WiFi', 'Internet de alta velocidad', 'wifi'),
('TV Cable', 'Televisión por cable premium', 'tv'),
('Minibar', 'Minibar completamente equipado', 'local_bar'),
('Aire Acondicionado', 'Climatización completa', 'ac_unit'),
('Estacionamiento', 'Garaje privado', 'local_parking'),
('Room Service', 'Servicio a la habitación 24/7', 'room_service'),
('Cama King', 'Cama tamaño King', 'king_bed'),
('Vista al Mar', 'Habitación con vista al mar', 'beach_access'),
('Balcón', 'Balcón privado', 'balcony'),
('Cocina', 'Cocina equipada', 'kitchen')
ON DUPLICATE KEY UPDATE name=name;
