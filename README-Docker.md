# Guía de Dockerización - Gestión de Clientes

Esta guía te ayudará a configurar y ejecutar la aplicación completa usando Docker y Docker Compose.

## Prerrequisitos

- Docker (versión 20.10 o superior)
- Docker Compose (versión 2.0 o superior)

## Estructura del Proyecto

```
proyecto/
├── gestion-clientes-backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── ... (código del backend)
├── ubik-app/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── ... (código del frontend)
├── docker-compose.yml
└── init-db/ (opcional)
```

## Configuración Inicial

### 1. Crear los archivos Docker

Crea los siguientes archivos en sus respectivos directorios:

- `gestion-clientes-backend/Dockerfile`
- `gestion-clientes-backend/.dockerignore`
- `ubik-app/Dockerfile`
- `ubik-app/.dockerignore`
- `docker-compose.yml` (en la raíz del proyecto)

### 2. Actualizar application.properties

Reemplaza el contenido de `gestion-clientes-backend/src/main/resources/application.properties` con la configuración proporcionada.

### 3. Crear directorio para inicialización de BD (opcional)

```bash
mkdir init-db
```

Puedes agregar scripts SQL de inicialización en este directorio si es necesario.

## Comandos para Ejecutar la Aplicación

### Ejecutar todos los servicios

```bash
# Construir y ejecutar todos los servicios
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

### Ejecutar servicios individualmente

```bash
# Solo la base de datos
docker-compose up postgres

# Solo el backend
docker-compose up backend

# Solo el frontend
docker-compose up frontend
```

### Detener los servicios

```bash
# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v
```

### Ver logs

```bash
# Logs de todos los servicios
docker-compose logs

# Logs de un servicio específico
docker-compose logs backend
docker-compose logs frontend
docker-compose logs postgres

# Seguir logs en tiempo real
docker-compose logs -f backend
```

## Acceso a la Aplicación

Una vez que todos los servicios estén ejecutándose:

- **Frontend React**: http://localhost:3000
- **Backend Spring Boot**: http://localhost:8080
- **Base de datos PostgreSQL**: localhost:5432

## Comandos Útiles

### Reconstruir un servicio específico

```bash
# Reconstruir solo el backend
docker-compose build backend

# Reconstruir solo el frontend
docker-compose build frontend
```

### Ejecutar comandos dentro de los contenedores

```bash
# Acceder al contenedor del backend
docker-compose exec backend bash

# Acceder al contenedor del frontend
docker-compose exec frontend sh

# Acceder a PostgreSQL
docker-compose exec postgres psql -U postgres -d gestion_clientes
```

### Limpiar recursos Docker

```bash
# Eliminar contenedores, redes e imágenes no utilizadas
docker system prune

# Eliminar volúmenes no utilizados
docker volume prune

# Eliminar imágenes de la aplicación
docker-compose down --rmi all
```

## Solución de Problemas

### Backend no se conecta a la base de datos

1. Verifica que el servicio de postgres esté ejecutándose:
   ```bash
   docker-compose ps
   ```

2. Revisa los logs del backend:
   ```bash
   docker-compose logs backend
   ```

### Frontend no puede conectarse al backend

1. Verifica que el backend esté ejecutándose en el puerto 8080
2. Asegúrate de que la variable `REACT_APP_API_URL` esté correctamente configurada

### Problemas de permisos

Si tienes problemas de permisos con Maven:
```bash
# Ejecutar desde el directorio del backend
chmod +x mvnw
```

### Cambios en el código no se reflejan

Para desarrollo, los volúmenes están configurados para sincronizar cambios, pero si hay problemas:

```bash
# Reconstruir el servicio
docker-compose build [servicio]
docker-compose up [servicio]
```

## Desarrollo

### Modo Desarrollo

El archivo `docker-compose.yml` está configurado para desarrollo con:
- Volúmenes que sincronizan cambios del código
- Recarga automática del frontend
- Logs visibles

### Modo Producción

Para producción, puedes crear un `docker-compose.prod.yml` con:
- Construcción optimizada del frontend
- Variables de entorno de producción
- Configuración de seguridad adicional

## Variables de Entorno

Las principales variables de entorno que puedes personalizar:

```env
# Backend
SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/gestion_clientes
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=postgres

# Frontend
REACT_APP_API_URL=http://localhost:8080

# PostgreSQL
POSTGRES_DB=gestion_clientes
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

## Backup y Restauración

### Crear backup de la base de datos

```bash
docker-compose exec postgres pg_dump -U postgres gestion_clientes > backup.sql
```

### Restaurar backup

```bash
docker-compose exec -T postgres psql -U postgres gestion_clientes < backup.sql
```