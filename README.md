# GameVault — Proyecto Next.js (App Router)

Proyecto individual para practicar **Next.js con App Router**, enrutamiento por carpetas, componentes reutilizables con props y **Bootstrap** como framework CSS.

## 📋 Descripción

Catálogo/portafolio personal de videojuegos favoritos. Además de listar y consultar productos y usuarios desde DummyJSON, el proyecto incorpora operaciones de edición mediante verbos HTTP para administrar un catálogo de productos en la interfaz.

## DummyJSON y Next.js

DummyJSON es una API pública que proporciona datos de prueba en formato JSON, incluyendo productos y usuarios. En este proyecto, Next.js utiliza sus componentes y rutas del App Router para presentar el listado, detalle y operaciones CRUD simuladas del recurso producto. React gestiona los estados de carga, envío, éxito y error en cada operación.

**Características:**
- ✅ Enrutamiento dinámico por carpetas (App Router)
- ✅ Componentes reutilizables con props
- ✅ Datos almacenados localmente (JSON)
- ✅ Integración con Bootstrap 5
- ✅ Interfaz responsive
- ✅ Sistema de agregar y editar juegos
- ✅ Muestra plataforma de cada juego
- ✅ Listado de productos desde `https://dummyjson.com/products`
- ✅ Detalle de producto desde `https://dummyjson.com/products/{id}`
- ✅ Listado y detalle de usuarios desde DummyJSON
- ✅ Inserción de productos con `POST` en `https://dummyjson.com/products/add`
- ✅ Actualización de productos con `PUT` en `https://dummyjson.com/products/{id}`
- ✅ Eliminación de productos con `DELETE` en `https://dummyjson.com/products/{id}`
- ✅ Confirmación previa antes de borrar y mensajes claros de éxito/error
- ✅ DummyJSON simula la operación sin persistir cambios reales en el servidor

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
  productos/
    page.js            # Listado de productos (GET all)
    [id]/page.js       # Detalle de producto (GET id)
  usuarios/
    page.js            # Listado de usuarios (GET all)
    [id]/page.js       # Detalle de usuario (GET id)
components/
  Navbar.js            # Navegación con Bootstrap
  Footer.js            # Pie de página
  GameCard.js          # Card reutilizable, recibe `game` por props
  Badge.js             # Badge reutilizable, recibe `text` y `color` por props
  GameForm.js          # Formulario para agregar/editar juegos
  GameManager.js       # Gestor de juegos (CRUD)
  ProductList.js / ProductDetail.js
  UserList.js / UserDetail.js
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

Las rutas disponibles para verificar la integración son `/productos`, `/productos/1`, `/usuarios` y `/usuarios/1`.

## 🛠 Tecnologías

- **Next.js 16** (App Router)
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
✅ CRUD de productos con DummyJSON mediante `POST`, `PUT` y `DELETE`
✅ Botón de alta en la parte superior del listado y acciones de edición/eliminación por registro
✅ README actualizado con la documentación de los verbos incorporados

## 👨‍💻 Autor

Proyecto académico para **PON0** — Programación Orientada a la Nube
