### Sistema de enrutamiento por archivos

```
src/app/
      |-- page.js
      |-- about/
            |-- page.js
      |-- productos/
            |-- page.js
            |-- [id]/
                  |-- page.jsx
      |-- contacto/
            |-- page.js
```

### Conceptos Claves

- **Next.js**: Framework de React para aplicaciones de producción
- **SSR**: Renderizado en servidor (mejor SEO, corga rápida)
- **SSG**: Generación estática (máximo rendimiento)
- **Enrutamiento por archivos**: Rutas dinámicas basadas en estructura de carpetas

### Comandos importantes

```bash
pnpm create next-app@latest nombre_proyecto
pnpm dev # Desarrollo
pnpm build # Build para producción
```
