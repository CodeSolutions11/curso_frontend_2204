### Comandos para instalar next.js

pnpm create next-app@latest my-app --yes
cd my-app
pnpm dev

Teoría fundamental de Next.js
Es un framework de React que proporciona herramientas y configuraciones adicionales para crear apps web de producción. Desarrollado por vercel

- Server-Side rendering (SSR)
- Static site Generation (SSG)
- Enrutamiento autómatico basado en archivos
- Optimazación autómatica de imágenes
- API Routes integradas\*\*\*

SSR vs CSR (client side rendering)

CSR ( React Tradicional )

1. Navegador solicita página => 2. Servidor envía HTML vacío + JS
   => 3. JS se ejecuta => 4. Contenido se renderiza en el cliente

**Problemas**

- SEO limitado (contenido no visible para crawlers)
- Carga inicial lenta
- Pantalla en blanco hasta que el JS se carga

SSR

1. Navegador solicita la página => 2. Servidor ejecuta React
   => 3. Servidor envía HTML completo => 4. Hidratación en el cliente

**Ventajas**

- Mejor SEO (contenido visible inmediatamente)
- Carga inicial es mas rápida
- Mejor rendimiento percibido

SSG: pre-renderiza páginas en tiempo de build, generando archivos HTML estáticos

Build time: Datos + React => HTML estático
Runtime: Servidor envía HTML pre-generado

**Ventajas**

- Máximo rendimiento (archivo estáticos)
- Excelente SEO
- Menor carga del servidor
- Ideal para CDN

**Cuando usar cada uno**
-- SSG: Blogs, documentación, landing pages.
-- SSR: E-commerce, dashboards  
-- CSR: Dashboards privamos, aplicaciones interactivas
