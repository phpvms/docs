---
id: docker
title: Installing with Docker
---

phpVMS includes a `docker-compose.dev.yml` which is used by Laravel Sail. This
works great for local development. For production, a sample `docker-compose.yml`
is included, with a few points below:

```yml
app:
    container_name: phpvms-app
    user: "${WWWUSER:-1000}:${WWWGROUP:-1000}"
    image: phpvms:app
    build:
      context: .
      args:
        WWWUSER: ${WWWUSER:-1000}
        WWWGROUP: ${WWWGROUP:-1000}
    restart: unless-stopped
    environment:
      PHP_OPCACHE_ENABLE: 1
      # some basic laravel stuff
      AUTORUN_ENABLED: true
    env_file: .env
    volumes:
      - ./modules:/var/www/html/modules:ro
      - ./public/uploads:/var/www/html/public/uploads:rw
      - ./storage:/var/www/html/storage:rw
    depends_on:
      - caddy
      - mariadb
      - redis
    networks:
      - phpvms

  task:
    container_name: phpvms-task
    user: "${WWWUSER:-1000}:${WWWGROUP:-1000}"
    image: phpvms:app
    restart: unless-stopped
    command: ["php", "/var/www/html/artisan", "schedule:work"]
    environment:
      PHP_OPCACHE_ENABLE: 1
    healthcheck:
      # This is our native healthcheck script for the scheduler
      test: [ "CMD", "healthcheck-schedule" ]
      start_period: 10s
    env_file: .env
    volumes:
      - ./modules:/var/www/html/modules:ro
      - ./public/uploads:/var/www/html/public/uploads:rw
      - ./storage:/var/www/html/storage:rw
    networks:
      - phpvms

  queue:
    container_name: phpvms-queue
    user: "${WWWUSER:-1000}:${WWWGROUP:-1000}"
    image: phpvms:app
    restart: unless-stopped
    command: [ "php", "/var/www/html/artisan", "queue:work", "--tries=3" ]
    environment:
      PHP_OPCACHE_ENABLE: 1
    healthcheck:
      # This is our native healthcheck script for the queue
      test: [ "CMD", "healthcheck-queue" ]
      start_period: 10s
    env_file: .env
    volumes:
      - ./modules:/var/www/html/modules:ro
      - ./public/uploads:/var/www/html/public/uploads:rw
      - ./storage:/var/www/html/storage:rw
    networks:
      - phpvms

  caddy:
    container_name: phpvms-caddy
    image: caddy:2
    restart: unless-stopped
    env_file: .env
    ports:
      - "${FORWARD_HTTP_PORT:-80}:80"
      - "${FORWARD_HTTPS_PORT:-443}:443"
    volumes:
      - ./public/:/var/www/html/public
      - ./resources/docker/Caddyfile:/etc/caddy/Caddyfile
      - caddy_config:/config
      - caddy_data:/data
    networks:
      - phpvms

  mariadb:
    container_name: phpvms-mariadb
    image: mariadb:11
    restart: unless-stopped
    # If someone need to access db from the outside
    ports:
      - '${FORWARD_DB_PORT:-3306}:3306'
    environment:
      MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
      MYSQL_DATABASE: '${DB_DATABASE}'
      MYSQL_USER: '${DB_USERNAME}'
      MYSQL_PASSWORD: '${DB_PASSWORD}'
      MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
    volumes:
      - mariadb:/var/lib/mysql
    networks:
      - phpvms
    healthcheck:
      test: ["CMD", "healthcheck.sh", "--connect", "--innodb_initialized"]
      start_period: 10s
      interval: 10s
      timeout: 5s
      retries: 3

  redis:
    container_name: phpvms-redis
    image: redis:alpine
    restart: unless-stopped
    volumes:
      - redis:/data
    networks:
      - phpvms
    healthcheck:
      test: [ "CMD", "redis-cli", "ping" ]
      retries: 3
      timeout: 5s

volumes:
  caddy_data:
  caddy_config:
  mariadb:
  redis:

networks:
  phpvms:
    driver: bridge
```
