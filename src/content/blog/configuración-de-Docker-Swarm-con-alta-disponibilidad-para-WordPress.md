---
title: 'Configuración de Docker Swarm con Alta Disponibilidad para WordPress'
description: 'Aprende a configurar un clúster Docker Swarm con alta disponibilidad para WordPress. Paso a paso con ejemplos y respaldo.'
date: '2024-12-04'
image: '/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/banner.webp'
author: 'Mariano Ismael García Guzmán'
category: 'DevOps'
keywords: ['Docker', 'Swarm', 'Alta Disponibilidad', 'WordPress', 'Cluster', 'DevOps']
excerpt: 'Descubre cómo implementar un clúster Docker Swarm con alta disponibilidad para desplegar WordPress con tres réplicas y respaldo de datos.'
status: 'published'
---

¡Bienvenidos a esta guía donde aprenderemos a configurar un clúster Docker Swarm con alta disponibilidad (HA) para desplegar un servicio de CMS (WordPress) con tres réplicas! Esta práctica está diseñada para ayudarte a entender cómo implementar y gestionar servicios en un entorno de clúster.

## Tabla de Contenidos

1. [Instalación de los Docker Hosts](#1-instalación-de-los-docker-hosts)
2. [Despliegue del CMS con Réplicas](#2-despliegue-del-cms-con-réplicas)
3. [Habilitación de Alta Disponibilidad (HA)](#3-habilitación-de-alta-disponibilidad-ha)
4. [Diagrama de Red del Clúster](#4-diagrama-de-red-del-clúster)
5. [Funcionamiento del Clúster](#5-funcionamiento-del-clúster)
6. [Respaldo y Recuperación del Servicio](#6-respaldo-y-recuperación-del-servicio)
7. [Ventajas y Desventajas Observadas](#7-ventajas-y-desventajas-observadas)

---

## 1. Instalación de los Docker Hosts

### Requisitos Previos

- **Tres servidores** con sistema operativo Linux (Ubuntu 20.04 recomendado).
- Acceso con privilegios de **sudo** en cada nodo.
- **Conectividad de red** entre los nodos.

### Pasos de Instalación

#### a. Actualizar los Paquetes en Cada Nodo

```bash
sudo apt update
sudo apt upgrade -y
````

#### b. Instalar Docker en Cada Nodo

Ejecuta en cada nodo:

```bash
sudo apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

#### c. Verificar la Instalación de Docker

```bash
sudo docker version
```

#### d. Configurar Docker Swarm

##### i. Inicializar el Nodo Manager

En el **nodo1**, inicializa el swarm:

```bash
sudo docker swarm init --advertise-addr <IP_DEL_NODO1>
```

Anota el comando `docker swarm join` que se muestra; lo necesitarás para agregar los otros nodos.

![Comando Swarm Join](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204175325.png)

##### ii. Agregar Nodos Workers al Swarm

En **nodo2** y **nodo3**, ejecuta:

```bash
sudo docker swarm join --token <TOKEN_DEL_SWARM> <IP_DEL_NODO1>:2377
```

![Nodos Workers Agregados](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204175639.png)

#### e. Verificar el Estado del Swarm

En el **nodo1**, ejecuta:

```bash
sudo docker node ls
```

Deberías ver algo como esto:

![Estado del Swarm](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204175716.png)

---

## 2. Despliegue del CMS con Réplicas

### a. Crear una Red Overlay

```bash
sudo docker network create -d overlay --attachable my-overlay
```

### b. Desplegar el Servicio de Base de Datos (MySQL)

```bash
sudo docker service create \
  --name mysql \
  --network my-overlay \
  --env MYSQL_ROOT_PASSWORD=<TU_CONTRASEÑA> \
  --env MYSQL_DATABASE=wordpress \
  --env MYSQL_USER=wordpress_user \
  --env MYSQL_PASSWORD=<TU_CONTRASEÑA> \
  --replicas 1 \
  mysql:5.7
```

### c. Desplegar el Servicio de WordPress con 3 Réplicas

```bash
sudo docker service create \
  --name wordpress \
  --network my-overlay \
  --publish 80:80 \
  --replicas 3 \
  --env WORDPRESS_DB_HOST=mysql \
  --env WORDPRESS_DB_USER=wordpress_user \
  --env WORDPRESS_DB_PASSWORD=<TU_CONTRASEÑA> \
  --env WORDPRESS_DB_NAME=wordpress \
  wordpress:latest
```

### d. Verificar los Servicios

Comprueba que los servicios están en ejecución:

```bash
sudo docker service ls
```

Para ver detalles de un servicio específico:

```bash
sudo docker service ps wordpress
```

---

## 3. Habilitación de Alta Disponibilidad (HA)

Docker Swarm ofrece HA de forma nativa al gestionar las réplicas y distribuirlas entre los nodos.

### a. Configurar Almacenamiento Persistente

Para asegurar la persistencia de datos, es recomendable utilizar volúmenes.

#### i. Servicio MySQL con Volumen

Elimina el servicio MySQL existente:

```bash
sudo docker service rm mysql
```

Crea el servicio MySQL con volumen:

```bash
sudo docker service create \
  --name mysql \
  --network my-overlay \
  --env MYSQL_ROOT_PASSWORD=<TU_CONTRASEÑA> \
  --env MYSQL_DATABASE=wordpress \
  --env MYSQL_USER=wordpress_user \
  --env MYSQL_PASSWORD=<TU_CONTRASEÑA> \
  --mount type=volume,source=mysql-data,target=/var/lib/mysql \
  --replicas 1 \
  mysql:5.7
```

#### ii. Servicio WordPress con Volumen

Elimina el servicio WordPress existente:

```bash
sudo docker service rm wordpress
```

Crea el servicio WordPress con volumen:

```bash
sudo docker service create \
  --name wordpress \
  --network my-overlay \
  --publish 80:80 \
  --replicas 3 \
  --env WORDPRESS_DB_HOST=mysql \
  --env WORDPRESS_DB_USER=wordpress_user \
  --env WORDPRESS_DB_PASSWORD=<TU_CONTRASEÑA> \
  --env WORDPRESS_DB_NAME=wordpress \
  --mount type=volume,source=wp-data,target=/var/www/html \
  wordpress:latest
```

---

## 4. Diagrama de Red del Clúster

A continuación, se presenta un diagrama simplificado de la arquitectura del clúster:

- **Nodos:** Nodo1 (Manager), Nodo2 y Nodo3 (Workers).
- **Red Overlay:** `my-overlay` que conecta todos los servicios.
- **Servicios:** MySQL y WordPress distribuidos en los nodos.
- **Acceso de Usuarios:** A través del puerto 80, balanceado entre las réplicas de WordPress.

![Respaldos](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/diagrama_red.png)


---

## 5. Funcionamiento del Clúster

### a. Acceder a WordPress

Desde un navegador web, visita:

```
http://<IP_DE_CUALQUIER_NODO>
```

Deberías ver algo como esto:

![Página de WordPress](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204181230.png)

### b. Verificar la Distribución de las Réplicas

En el nodo manager:

```bash
sudo docker service ps wordpress
```

![Distribución de Réplicas](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204181430.png)

### c. Simular un Fallo

Para probar la HA, detén Docker en uno de los nodos:

```bash
sudo systemctl stop docker
```

Verifica que las réplicas se redistribuyen:

![Fallo en Nodo3](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204182901.png)

Los otros nodos siguen operativos:

![Nodo1](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204183008.png)

![Nodo2](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204182954.png)

---

## 6. Respaldo y Recuperación del Servicio

### a. Respaldar Volúmenes

Para MySQL:

```bash
sudo docker run --rm \
  -v mysql-data:/data \
  -v $(pwd):/backup \
  ubuntu tar cvf /backup/mysql-data-backup.tar /data
```

Para WordPress:

```bash
sudo docker run --rm \
  -v wp-data:/data \
  -v $(pwd):/backup \
  ubuntu tar cvf /backup/wp-data-backup.tar /data
```

![Respaldos](/assets/images/post/configuración-de-Docker-Swarm-con-alta-disponibilidad-para-WordPress/Pasted_image_20241204192944.png)

### b. Restaurar Volúmenes

Para MySQL:

```bash
sudo docker run --rm \
  -v mysql-data:/data \
  -v $(pwd):/backup \
  ubuntu tar xvf /backup/mysql-data-backup.tar -C /
```

Para WordPress:

```bash
sudo docker run --rm \
  -v wp-data:/data \
  -v $(pwd):/backup \
  ubuntu tar x
```

```bash
vf /backup/wp-data-backup.tar -C /

```

## 7. Ventajas y Desventajas Observadas

### Ventajas

- Alta disponibilidad (HA).
- Escalabilidad sencilla.
- Balanceo de carga integrado.
- Gestión centralizada.

### Desventajas

- Configuración inicial compleja.
- Dependencia del nodo manager.
- Persistencia de datos limitada sin almacenamiento distribuido.
- Configuraciones adicionales necesarias para redes avanzadas.
