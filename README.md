# GameVault — Proyecto Next.js (App Router)

Proyecto individual para practicar **Next.js con App Router**, enrutamiento por carpetas, componentes reutilizables con props y **Bootstrap** como framework CSS.

## 📋 Descripción

Catálogo/portafolio personal de videojuegos favoritos. Permite agregar, editar y visualizar juegos con detalles como plataforma, género, año y puntuación. Todos los datos se almacenan localmente en el proyecto (sin backend).

**Características:**
- ✅ Enrutamiento dinámico por carpetas (App Router)
- ✅ Componentes reutilizables con props
- ✅ Datos almacenados localmente (JSON)
- ✅ Integración con Bootstrap 5
- ✅ Interfaz responsive
- ✅ Sistema de agregar y editar juegos
- ✅ Muestra plataforma de cada juego

## 📁 Estructura

```
app/
  layout.js            # Layout raíz (Navbar + Footer + Bootstrap)
  page.js              # Página inicio (hero + juegos destacados)
  globals.css          # Estilos globales complementarios a Bootstrap
  juegos/
    page.js            # Listado de todos los juegos
    [slug]/
      page.js          # Detalle dinámico de un juego
  sobre-mi/
    page.js            # Página "Sobre mí"
components/
  Navbar.js            # Navegación con Bootstrap
  Footer.js            # Pie de página
  GameCard.js          # Card reutilizable, recibe `game` por props
  Badge.js             # Badge reutilizable, recibe `text` y `color` por props
  GameForm.js          # Formulario para agregar/editar juegos
  GameManager.js       # Gestor de juegos (CRUD)
data/
  games.js             # Datos locales del catálogo de juegos
```

## 🚀 Instalación

```bash
# Clonar o descargar el proyecto
cd frontend

# Instalar dependencias
npm install
```

## 🎮 Cómo ejecutar

```bash
npm run dev
```

El proyecto se ejecutará en **[http://localhost:3000](http://localhost:3000)**

Para compilar para producción:
```bash
npm run build
npm start
```

## 🛠 Tecnologías

- **Next.js 15** (App Router)
- **React 19**
- **Bootstrap 5** (CSS framework)
- **JavaScript** (ES6+)

## 📚 Requisitos cumplidos

✅ Proyecto creado con `create-next-app` usando **App Router**
✅ Configurado con **Bootstrap** en lugar de Tailwind CSS
✅ Dos rutas principales (`/juegos` y `/sobre-mi`) con enrutamiento por carpetas
✅ Componentes reutilizables (`GameCard`, `Badge`) con props
✅ Datos almacenados localmente (sin backend)
✅ Menú de navegación gestionado con componente `Navbar`
✅ Funcionalidad para agregar y editar juegos
✅ Campo plataforma integrado en cada juego

## 👨‍💻 Autor

Proyecto académico para **PON0** — Programación Orientada a la Nube
