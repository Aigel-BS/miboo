FROM php:7.4-cli

# Install dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libicu-dev \
    && docker-php-ext-install -j$(nproc) pdo_mysql mysqli intl

WORKDIR /var/www/html

CMD ["php", "-S", "0.0.0.0:8000", "-t", "app/webroot"]
