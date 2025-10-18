## Renderizdo de Datos en Next.js 15 (App Router)

## Data Fetching Moderno

# En Next.js 15 con App Router tenemos 3 formas principales:

1. **Server Components**: - Fetch directo en el servidor
2. **Client Components** - useEffect en el client
3. **Route Handlers** - APIs propias

### Cuándo usar cada uno?

| Método | Cuándo | Ejemplo
|**Server Component**| Datos iniciales, SEO | Productos, blogs, posts |
|**Client Component**| Interactividad, filtros| Búsquedas, Formularios |
|**Route Handlers** | APIs propias | Autenticación, CRUD |
