# Stefa Store

Landing page moderna y responsive para **Stefa Store**, una tienda de productos personalizados. La página centraliza sus redes sociales, tienda online, cupón de descuento y canales de contacto en una experiencia visual propia.

El proyecto está construido con **React, TypeScript y Vite**, siguiendo una arquitectura basada en componentes reutilizables y manteniendo la identidad visual de la marca.

## ✨ Características

- 🎨 Diseño moderno con fondo oscuro y efectos visuales
- 📱 Interfaz responsive para móviles y escritorio
- 🔗 Acceso directo a las redes sociales de Stefa Store
- 🛍️ Acceso independiente a la tienda online
- 🎁 Sección de cupón de descuento para mugs blancos
- 📋 Botón para copiar el cupón con confirmación visual
- 💬 Contacto directo mediante WhatsApp
- ✉️ Contacto por correo electrónico
- 🖼️ Logo y favicon personalizados
- ♿ Elementos interactivos con etiquetas accesibles
- ✨ Efectos y animaciones sutiles para mejorar la experiencia

## 🌐 Redes y enlaces

La página centraliza actualmente:

- Instagram — [@stefastore18](https://www.instagram.com/stefastore18/)
- Facebook — [Stefa Store](https://www.facebook.com/stefastore18)
- Threads — [@stefastore18](https://www.threads.net/@stefastore18)
- TikTok — [@stefastore18](https://www.tiktok.com/@stefastore18)
- Tienda online — [Stefa Store](https://stefastore2.mitiendanube.com/)
- WhatsApp
- Correo electrónico

## 🎁 Cupón de descuento

La página incluye una sección especial para promocionar mugs blancos:

**Código:** `MUGSREGALO26`

El código puede copiarse directamente desde la interfaz. El componente incluye un mecanismo alternativo de copiado para navegadores donde `navigator.clipboard` no está disponible.

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Construcción de la interfaz |
| TypeScript 6 | Tipado y desarrollo |
| Vite 8 | Desarrollo y build |
| React Icons | Iconos de redes sociales |
| Lucide React | Iconos de interfaz |
| ESLint | Análisis y calidad del código |
| GitHub Actions | Build y despliegue |
| GitHub Pages | Hosting del sitio |

## 📁 Estructura

```text
stefastore/
├── .github/
│   └── workflows/
│       └── static.yml
├── public/
│   └── assets/
│       ├── favicon.svg
│       └── logo-stefa-store.png
├── src/
│   ├── components/
│   │   ├── Coupon.tsx
│   │   ├── Footer.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── Shopping.tsx
│   │   ├── SocialLink.tsx
│   │   └── SocialLinks.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── App.css
│   ├── App.css.backup
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Arquitectura

La aplicación mantiene una separación sencilla entre presentación y contenido:

- `App.tsx` — composición principal de la página.
- `ProfileHeader.tsx` — identidad, logo y presentación de Stefa Store.
- `SocialLinks.tsx` / `SocialLink.tsx` — enlaces a redes sociales.
- `Coupon.tsx` — cupón de descuento y funcionalidad de copiado.
- `Shopping.tsx` — acceso independiente a la tienda online.
- `Footer.tsx` — pie de página.
- `profile.ts` — datos centralizados de la marca, enlaces y contacto.
- `App.css` e `index.css` — estilos y diseño visual.

Esta estructura permite reutilizar la arquitectura para otras páginas de enlaces manteniendo la identidad propia de cada marca.

## 🚀 Instalación

### Requisitos

- Node.js 22 o superior
- npm

### Clonar el repositorio

```bash
git clone https://github.com/GomezDJasson/stefastore.git
cd stefastore
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para acceder al proyecto.

## 📦 Scripts disponibles

### Desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
```

El comando ejecuta primero la comprobación de TypeScript y después genera la versión optimizada mediante Vite.

### Lint

```bash
npm run lint
```

### Vista previa del build

```bash
npm run preview
```

## 🚀 Deploy

El proyecto utiliza **GitHub Actions** para generar y desplegar automáticamente la aplicación en **GitHub Pages**.

El workflow `static.yml` se ejecuta cuando hay cambios en la rama `main` y también puede ejecutarse manualmente.

El proceso es:

```text
Checkout
   ↓
Instalación de dependencias
   ↓
Build
   ↓
Generación del artifact
   ↓
GitHub Pages
```

La configuración de Vite utiliza `/stefastore/` como base para que los recursos funcionen correctamente en GitHub Pages.

## 🌍 Demo

**[Visitar Stefa Store](https://gomezdjasson.github.io/stefastore/)**

## 🎯 Objetivo del proyecto

El objetivo es ofrecer a Stefa Store una página de enlaces propia, rápida y visualmente diferenciada, que funcione como punto central para sus redes sociales, tienda y canales de contacto.

El proyecto forma parte de una familia de páginas de enlaces desarrolladas con una arquitectura común, adaptando la identidad visual, contenido y funcionalidades a cada marca.

## 👨‍💻 Autor

Diseñado y desarrollado por **Gomez D. Jasson**.

- GitHub: [@GomezDJasson](https://github.com/GomezDJasson)
- Portfolio: [portafolio-jasson.vercel.app](https://portafolio-jasson.vercel.app/)

---

© 2026 Stefa Store. Todos los derechos reservados.
