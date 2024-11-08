---
title: 'Cómo estructurar la carpeta "public"'
description: 'Una guía para organizar la carpeta "public" en proyectos web, incluyendo estructura recomendada, pautas de nombrado y consideraciones adicionales.'
date: '2024-09-09T20:00:00-06:00'
image: '/assets/images/post/como-estructurar-tu-carpeta-public/banner.webp'
author: 'Mariano García'
category: 'Desarrollo Web'
keywords:
  [
    'Estructura de carpetas',
    'Recursos estáticos',
    'Optimización web',
    'Desarrollo web',
    'Organización de archivos',
    'Gestión de recursos',
    'Buenas prácticas web',
    'Estrategia de archivos',
    'Performance web',
    'Diseño de archivos',
    'Mantenimiento web',
    'Arquitectura de proyectos',
    'Archivos estáticos',
    'Optimización de imágenes',
    'Gestión de contenido',
    'Arquitectura de carpetas',
    'Estructuración de proyectos',
    'Carga de recursos',
    'Eficiencia en desarrollo',
  ]
excerpt: 'Aprende a estructurar la carpeta "public" de manera eficiente con esta guía que cubre la organización de archivos, pautas de nombrado y consideraciones para el rendimiento.'
status: 'published'
---

## Estructura de la Carpeta public para Páginas Web

Para estructurar la carpeta `public` de tu página web de manera eficiente, es importante que consideres la organización lógica y la facilidad de acceso a los recursos estáticos. Aquí te dejo una estrategia que puedes seguir:

![banner del post](/assets/images/post/como-estructurar-tu-carpeta-public/banner.webp)

### 1. Estructura Base

Crea subcarpetas dentro de la carpeta `public` para organizar diferentes tipos de archivos. Una estructura común podría verse así:

```plaintext
public/
├── /assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── videos/
├── css/
├── js/
├── media/
└── uploads/
```

### 2. Explicación de cada subcarpeta

- **`/assets/`**: Para recursos estáticos generales, subdividida en:

  - **`images/`**: Imágenes estáticas como logotipos, fondos, banners, etc.
  - **`icons/`**: Iconos que se usen en la página.
  - **`fonts/`**: Tipografías personalizadas.
  - **`videos/`**: Videos estáticos que se cargan directamente.

- **`css/`**: Archivos CSS, como `styles.css`.

- **`js/`**: Contiene archivos JavaScript, como scripts personalizados.

- **`media/`**: Archivos multimedia adicionales, como GIFs o audios.

- **`uploads/`**: Para archivos subidos por usuarios, como imágenes de perfil.

### 3. Pautas para nombrar archivos

- **Nombres descriptivos**: Usa nombres de archivos en minúsculas, separados por guiones (`-`). Ejemplo: `logo-main.png`.
- **Estructura de versiones**: Considera incluir un número de versión o fecha en el nombre del archivo.

### 4. Consideraciones adicionales

- **Cacheo**: Usa nombres únicos o con hash (e.g., `style.abc123.css`) para evitar problemas de caché.
- **Compresión**: Considera comprimir imágenes para mejorar la velocidad de carga.
- **Optimización**: Usa herramientas para optimizar tus imágenes y minimizar tus archivos CSS/JS.

### 5. Ejemplo final

Aquí un ejemplo de cómo podría verse la estructura de tu carpeta `public/`:

```plaintext
public/
├── /assets/
│   ├── images/
│   │   ├── logo-main.png
│   │   ├── background-hero.jpg
│   │   └── team-photo.jpg
│   ├── icons/
│   │   └── icon-facebook.svg
│   ├── fonts/
│   │   └── roboto-regular.woff2
│   └── videos/
│       └── intro.mp4
├── css/
│   ├── style.css
│   └── reset.css
├── js/
│   ├── main.js
│   └── analytics.js
├── media/
│   └── animation.gif
└── uploads/
    └── user-uploads/
        ├── profile-picture.jpg
        └── document.pdf
```

Esta estructura te ayudará a mantener la organización y facilitará el mantenimiento y escalabilidad de tu proyecto.
