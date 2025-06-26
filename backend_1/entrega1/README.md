# Programación Backend I: Desarrollo Avanzado de Backend => Entrega 1

Detalles de configuración, instalación e implementación LOCAL del proyecto Entrega 1 del curso Programación Backend I: Desarrollo Avanzado de Backend correspondiente a la carrera de Desarrollo Web Fullstack de Coderhouse.


## Requisitos previos

- Node.js (versión 18 o superior)
- npm o pnpm como gestor de paquetes

## Configuración

Copie el archivo `.env.example` a `.env` y ajuste las variables según sea necesario:

```bash
cp .env.example .env
```

## Instalación y ejecución

### Clonar el repositorio:
```bash
git clone https://github.com/jpaddeo/coderhouse-fullstack.git
```

### Navegar al directorio del proyecto:
```bash
cd coderhouse-fullstack/backend_1/entrega1
```

### Instalar las dependencias y ejecutar la aplicación

#### Usando pnpm
```bash
pnpm install && pnpm dev
```

#### Usando npm
```bash
npm install && npm run dev
```

## Estructura de carpetas

```
entrega1/
│
├── src/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── package.json
├── README.md
├── CONSIGNA.md
└── .env.example
```

## Scripts disponibles

- `npm start` o `pnpm start`: Inicia la aplicación
- `npm run dev` o `pnpm dev`: Inicia la aplicación en modo desarrollo con recarga automática usando `nodemon`
- `npm run dev:experimental` o `pnpm dev:experimentañ`: Inicia la aplicación en modo desarrollo con recarga automática usando el comando experimental `--watch` de node.

