# 🌾 Sistema de Gestión de Productos - Sector Agropecuario

> Solución Full Stack profesional para la gestión de inventario de productos agropecuarios.  
> Desarrollado con **NestJS + MongoDB** (Backend) y **Angular 17 + NgRx + Tailwind CSS** (Frontend).

---

## 📐 Decisiones Arquitectónicas

### Backend – Patrón por Capas Desacopladas

La arquitectura del backend sigue estrictamente el patrón de la imagen proporcionada:  
**Client → Controller → Service → DAO (Repository) → DB**

| Capa | Responsabilidad | Implementación |
|------|----------------|----------------|
| **Entidades** | Modelado de datos y esquemas MongoDB | Decoradores `@Schema()` y `@Prop()` de `@nestjs/mongoose` |
| **Repositorios (Interfaces)** | Contrato de acceso a datos | `IProductoRepositorio`, `IUsuarioRepositorio` |
| **Repositorios (Implementaciones)** | Lógica de persistencia con Mongoose | `ProductoRepositorio`, `UsuarioRepositorio` |
| **Servicios (Interfaces)** | Contrato de lógica de negocio | `IProductosServicio`, `IAutenticacionServicio` |
| **Servicios (Implementaciones `.impl.ts`)** | Lógica de negocio con validaciones | `ProductosServicioImpl`, `AutenticacionServicioImpl` |
| **DTOs** | Validación de entrada con `class-validator` | Mensajes 100% en español |
| **Controladores** | Rutas REST documentadas con Swagger | Protegidos con JWT |

#### ¿Por qué Mongoose en lugar de TypeORM?

> TypeORM tiene soporte **limitado y no recomendado** para MongoDB. Mongoose es el ODM (Object Data Modeling) oficial mantenido por el equipo de NestJS, con soporte completo para esquemas, hooks, middleware, agregaciones, índices y queries avanzadas. Se **mantiene** el patrón Repositorio solicitado usando inyección de dependencias con tokens personalizados.

#### Principios SOLID Aplicados

- **S** - Cada clase tiene una única responsabilidad (controlador, servicio, repositorio)
- **O** - Las entidades y DTOs son extensibles sin modificar código existente
- **L** - Las implementaciones son sustituibles gracias a las interfaces
- **I** - Interfaces de repositorio y servicio segregadas por dominio
- **D** - Los servicios dependen de abstracciones (interfaces), no de implementaciones concretas

### Frontend – Clean Architecture Angular

La arquitectura del frontend sigue el patrón de arquitectura limpia:

| Carpeta | Responsabilidad |
|---------|----------------|
| `core/` | Interceptores (JWT), Guards de rutas, Modelos globales |
| `servicios/` | Comunicación HTTP con la API usando `HttpClient` |
| `estado/` | State Management con NgRx (acciones, efectos, reductores, selectores) |
| `componentes/` | Componentes funcionales organizados por dominio |
| `shared/` | Componentes reutilizables (modal, toast, skeleton, layout) |

### Reglas de Negocio Implementadas

1. **Unicidad de SKU**: Cada producto debe tener un código SKU único en todo el sistema
2. **Estado automático por stock**: Si la cantidad llega a 0, el estado cambia a "agotado" automáticamente
3. **Reactivación de stock**: Si un producto "agotado" recibe stock > 0, se reactiva automáticamente
4. **Precio positivo para activos**: Productos con estado "activo" deben tener precio > 0
5. **Hash seguro de contraseñas**: Bcrypt con factor de costo 12
6. **Token JWT con expiración**: 24 horas por defecto

---

## 🚀 Ejecución del Proyecto

### Opción 1: Docker Compose (Recomendado)

```bash
# Levantar todo el entorno (MongoDB + Backend + Frontend)
docker-compose up --build

# Acceder a:
# - Frontend: http://localhost:4200
# - Backend API: http://localhost:3000/api
# - Swagger: http://localhost:3000/api/documentacion
```

### Opción 2: Desarrollo Local

#### Backend
```bash
cd backend
npm install
# Asegúrese de tener MongoDB corriendo en localhost:27017
npm run start:dev
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🛡️ Seguridad

- **JWT**: Tokens firmados con secreto configurable, expiración de 24h
- **Bcrypt**: Hashing de contraseñas con factor de costo 12
- **Validación**: Todos los inputs validados con `class-validator` (backend) y `Validators` (frontend)
- **CORS**: Configurado para aceptar solo orígenes autorizados
- **Guard de rutas**: Rutas del frontend protegidas con `CanActivateFn`
- **Interceptor HTTP**: Token JWT adjuntado automáticamente a todas las solicitudes

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas
- **Antigravity** (Claude): Asistente de codificación para generación de la estructura completa

### Prompt Principal
> "Actúa como un Arquitecto de Software Senior. Desarrolla una solución Full Stack profesional con NestJS + MongoDB (backend) y Angular 17 + NgRx + Tailwind CSS (frontend) para gestión de productos, siguiendo el patrón por capas: Entidades → Repositorios → Servicios (interfaces + impl) → DTOs → Controladores."

### Validación y Ajustes
1. Se verificó que Mongoose es la mejor práctica para MongoDB con NestJS (en lugar de TypeORM)
2. Se implementó el patrón Repositorio con inyección de dependencias por tokens personalizados
3. Se ajustaron las reglas de negocio para el contexto agropecuario
4. Se validó la estructura de Clean Architecture para Angular

---

## 📁 Estructura del Proyecto

```
prueba-fullstack/
├── backend/
│   └── src/
│       ├── autenticacion/          # Módulo de autenticación JWT
│       │   ├── controladores/
│       │   ├── dtos/
│       │   ├── entidades/
│       │   ├── estrategias/
│       │   ├── guardias/
│       │   ├── repositorios/
│       │   └── servicios/
│       │       ├── interfaces/
│       │       └── impl/
│       ├── productos/              # Módulo de productos CRUD
│       │   ├── controladores/
│       │   ├── dtos/
│       │   ├── entidades/
│       │   ├── repositorios/
│       │   └── servicios/
│       │       ├── interfaces/
│       │       └── impl/
│       └── comun/                  # Filtros globales, interceptores
├── frontend/
│   └── src/app/
│       ├── core/                   # Interceptores, guards, modelos
│       ├── servicios/              # Comunicación HTTP con API
│       ├── estado/                 # NgRx (acciones, efectos, reductores)
│       ├── componentes/            # Componentes funcionales
│       └── shared/                 # Componentes reutilizables
├── docker-compose.yml
└── README.md
```

---

## 🎨 UI/UX

- **Tailwind CSS** con paleta de colores personalizada (tema oscuro premium)
- **Tipografía**: Inter (Google Fonts)
- **Estética SaaS** tipo Vercel/Stripe: bordes redondeados, sombras sutiles, espacios amplios
- **Responsive**: Mobile-first con sidebar colapsable
- **Skeletons de carga**: Animaciones shimmer para estados de loading
- **Toasts**: Notificaciones flotantes para feedback de acciones
- **Modales**: Confirmación de acciones destructivas con animación

---

## 📚 Documentación API (Swagger)

Disponible en: `http://localhost:3000/api/documentacion`

### Endpoints

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| POST | `/api/autenticacion/registrar` | Registrar usuario | ❌ |
| POST | `/api/autenticacion/iniciar-sesion` | Iniciar sesión | ❌ |
| GET | `/api/productos` | Listar productos (paginado) | ✅ JWT |
| GET | `/api/productos/:id` | Obtener producto por ID | ✅ JWT |
| POST | `/api/productos` | Crear producto | ✅ JWT |
| PUT | `/api/productos/:id` | Actualizar producto | ✅ JWT |
| DELETE | `/api/productos/:id` | Eliminar producto | ✅ JWT |
