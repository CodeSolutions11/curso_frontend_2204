# Guia: E-commerce con HTML, CSS y JavaScript

## Introducción
Esta guia enseña la estructura del proyecto

## Tecnologias Utilizadas 
    - HTML5 (estructura semantica)
    - CSS3 (grid, flexbox, Variables CSS)
    - JavaScript ES6+ (async/await, fetch api)
    - Fake Store API (datos de productos)
---

## Paso 1: Estructura HTML Base

Archivo index.html

**Conceptos Clave** 

- Estructura Semántica con `header`, `main`, `footer`


## Paso 2: Reset, Variables CSS y body 
Archivo index.css

**Conceptos claves**
- Reset CSS para consistencia entre navegadores
- Variables CSS para mantenimiento fácil
- Estilos base para body (tipografía, colores)

## Paso 3: Estilos del header 
Archivo index.css
**Conceptos Clave**
- Flexbox para layout horizontal
- Transiciones CSS para efectos suaves
- Pseudo-clases (:hover)

## Paso 4: sistema de Filtros
Archivo index.css
**Conceptos Clave**
- Estados de botones (normal, hover, active)
- Box-shadow para profundidad visual
- Transiciones para UX fluida


## Paso 5: Grid de Productos
Archivo index.css
**Conceptos Clave**
- CSS Grid con auto-fit para responsividad
- Transform para efectos del hover
- Object-fit para control de imagenes
- Flexbox para layout interno de tarjetas


## Paso 6: Footer y Responsive
Archivo index.css
**Conceptos Clave**
- Media queries para responsive design
- Mobile-firts (Aplicar porque se ve fatal)

## Paso 7: JavaScript - Configuracion inicial
Archivo index.js
**Conceptos Claves**
    - Constantes para las URL's de la API
    - Seleccion de elementos del DOM
    - Variables de estado global


## Paso 8: Función para obtener datos
Archivo index.js
**Conceptos Clave:**
- Async/await para manejar promesas
- fetch API para peticiones http
- Funcion reutilizable

## Paso 9: Sistema de  categorías
Archivo index.js
**Conceptos Clave:**
- Manipulación del DOM 
- Manejo de Eventos para eficiencia
- Manipulacion de Strings


## Paso 10: Carga y Filtrado de los productos
Archivo index.js
**Conceptos Clave:**
- Filtrado de productos por categoría
- Actualización dinámica del DOM
- Uso de funciones para modularidad


## Paso 11: Creacion de tarjetas de productos
Archivo index.js
**Conceptos Clave:**
- Creación de elementos HTML dinámicamente
- Uso de plantillas literales para HTML
- Inserción de productos en el DOM

## Paso 12: Funciones de estado
Archivo index.js
**Conceptos Clave:**
- querySelectoAll para la seleccion multiple
- classList.toggle() con condicion
- Comparación de atributos data-category (data-*)


## Paso 13: Inicialización
Archivo index.js
**Conceptos Clave:**
- Llamadas de inicializacion
- Carga paralela ed datos