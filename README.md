# GameVault — Proyecto Next.js (App Router)

Proyecto individual para practicar **Next.js con App Router**, enrutamiento por carpetas y componentes reutilizables con props.

## Tema

Catálogo/portafolio personal de videojuegos favoritos. Sin backend: todos los datos viven en `data/games.js`.

## Estructura

```
app/
  layout.js            # Layout raíz (Navbar + Footer)
  page.js               # Inicio
  juegos/
    page.js              # Listado de todos los juegos
    [slug]/
      page.js             # Detalle de un juego (ruta dinámica)
  sobre-mi/
    page.js              # Página "Sobre mí"
components/
  Navbar.js
  Footer.js
  GameCard.js            # Reutilizable, recibe `game` por props
  Badge.js               # Reutilizable, recibe `text` y `color` por props
data/
  games.js               # Datos locales del catálogo
```

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Tecnologías

- Next.js 15 (App Router)
- React
- CSS propio (sin frameworks)
