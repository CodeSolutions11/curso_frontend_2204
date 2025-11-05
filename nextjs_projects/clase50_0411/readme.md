### Proyecto completo: Next.js 15.5 - Tialwind v4 + MariaDB

## Proyecto: Task Manager - Sistema de Gestión de tareas

### Crear Proyecto

```bash
# instalar pnpm
npm install -g pnpm

# Crear Proyecto con Next.js 15.5 especificamente
pnpm create next-app@15.5 task_manager --js --tailwind --app --src-dir
cd task_manager

## Instalar las dependencias
pnpm add mysql2 clsx
```

## Arquitectura del Proyecto

```
task_manager/
    |-- src/
         |-- app/
              |-- api/task/
              |-- task/
              |-- layout.js
         |-- lib/
              |-- db.js
         |-- components/
              |-- ui/
              |-- layout/
              |-- features/
         |-- hooks/
|-- public/
```

## Configurar MariaDB/MySQL

```sql
CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM("pending", "in_progress", "completed") DEFAULT "pending",
  priority ENUM("low", "medium", "high") DEFAULT "medium",
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
