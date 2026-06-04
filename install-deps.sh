#!/bin/bash
echo "Instalando dependencias en el directorio principal..."
docker-compose exec -T web composer config audit.block-insecure false
docker-compose exec -T web composer install

echo "Instalando dependencias de la app..."
docker-compose exec -T web bash -c "cd app && composer config audit.block-insecure false && composer install"

echo "¡Dependencias instaladas!"
