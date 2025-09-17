# Proyecto final de react.js

## Finance Tracker

React.js -> con hooks modernos y suspense
React Router - para navegacion SPA
Zustand -> para manejo de estado global - New
TailwindCSS -> estilos y diseño responsive
Reacr Hook Form -> para formularios - New
Chart.js -> para visualizacion de datos (gráficos) - New
LocalStorage -> para persistencia

### Core Features

- **Dashboard** con resumen de balence y transacciones recientes
- **Gestión de transacciones** agregar, eliminar, filtros
- **Categorizacion** de ingresos y gastos
- **Analytics** con estidisticas y gráficos
- **Exportación** a CSV
- **Persistencia** automatica en LocalStorage

### UI/UX Moderna

- **Sidebar Responsive**
- **Paleta colores**
- **Gradientes**
- **Animaciones**

## Stack Tecnologico

```json
{
  "frontend": "React 19",
  "build": "vite 5.4",
  "styling": "TailwindCSS 4.1",
  "routing": "react router 5.4",
  "build": "vite 5.4"
}
```

## Fase 1. *Setup del proyecto*

### **Objetivos**

- Config el proyecto con vite
- Instalar depencias necesarias
- Configurar TailwindCSS
- Crear estruturas de carpetas

### Comandos de desarrollo

- Creación del proyecto
  _pnpm create vite finance_tracker --template react_
- Ir a la carpeta del proyecto
  _cd finance_tracker_

- Instalacion de las dependencias base
  _pnpm install_

- Instalar dependencias del proyecto
  _pnpm add react-router-dom zustand chart.js react-chartjs-2 date-fns react-icons react-hook-form_
- Instalación de TailwindCSS 4.1
  _pnpm add -D tailwindcss @tailwindcss/vite_
- Ejecutar proyecto
  _pnpm run dev_

## Estructura del Proyecto

```
finance_tracker/
|-src/
|    |- components/
        |-- dashboard/
        |-- forms/
        |-- layout/
        |-- ui/
|    |- pages/
|    |- stores/
|    |- lib/
|    |    |-- categories.js
|    |    |-- utils.js
|    |- App.jsx
|    |- main.jsx
|    |- index.css
|- package.json
|- vite.config.js
|- README.md
```

### **Crear categorías**

```
  export const CATEGORIES = {
      income: [
          { id: 'salary', name: 'Salario', icon: "💼"},
          { id: 'freelance', name: 'Freelance', icon: "💼"},
          { id: 'investment', name: 'Inversiones', icon: "💼"},
          { id: 'other-income', name: 'Otro', icon: "💼"},
      ],
      expense:[
          { id: 'food', name: 'Comida', icon: '🍕'},
          { id: 'transport', name: 'Transporte', icon: '🍕'},
          { id: 'entertaiment', name: 'Entretenimiento', icon: '🍕'},
          { id: 'shopping', name: 'Compras', icon: '🍕'},
          { id: 'bills', name: 'Servicios', icon: '🍕'},
          { id: 'health', name: 'Salud', icon: '🍕'},
          { id: 'other-expense', name: 'Otro', icon: '🍕'},
      ]
  }
```

### **Utilidades**
```
  export const cn = (...inputs) => inputs.filter(Boolean).join(" ");

  export const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-VE", {
      style: "currency",
      currency: "VES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  export const formatDate = date => {
      return new Intl.DateTimeFormat("es-VE", {
          day: "2-digit",
          month: "short",
          year: "numeric"
      }).format(new Date(date))
  }

  export const exportCSV = transactions =>{
      const headers = ['Fecha', 'Tipo', 'Description', 'Categoria', 'Monto']
      const csvContent = [
          headers.join(","),
          ...transactions.map(t => [
              t.date,
              t.type === "income" ? "Ingreso" : "Gasto",
              `"${t.description}"`,
              t.category,
              t.amount
          ].join(','))
      ].join('\n')
      
      const blob = new Blob([csvContent], {type: "text/csv;charset=utf-8;"})
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = `transacciones-${new Date().toISOString().split("T")[0]}.csv`
  }
```