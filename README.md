# 🎨 ColorFly Studio - Generador de Paletas Interactivo

Una aplicación web desarrollada con **HTML, CSS y JavaScript Vanilla** que permite generar paletas de colores aleatorias para proyectos de diseño, desarrollo web e interfaces.

🔗 **Demo en vivo:** https://paul-m-corrales.github.io/ProyectoM1_PaulCorrales-/

## ✨ Características

- 🎲 Generación aleatoria de paletas de **6, 8 o 9 colores**.
- 🎨 Colores generados en formato **HEX**.
- 🔄 Conversión dinámica entre **HEX** y **HSL**.
- 📋 Copiar cualquier código de color al portapapeles con un solo clic.
- 🔒 Bloquear colores para conservarlos al generar una nueva paleta.
- 💾 Guardar paletas favoritas utilizando **LocalStorage**.
- 📱 Diseño responsive para computadoras, tablets y dispositivos móviles.
- ✨ Animaciones suaves para mejorar la experiencia del usuario.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6
- LocalStorage API
- Clipboard API

## 📂 Estructura del proyecto

```text
ColorFly-Studio
│
├── assets
│   ├── images
│   │   ├── preview1.png
│   │   ├── preview2.png
│   │   └── preview3.png
│   │
│   └── docs
│       └── guia.pdf
│
├── css
│   └── styles.css
│
├── js
│   └── script.js
│
├── index.html
└── README.md
```

## 🚀 Cómo ejecutar el proyecto de forma local

1. Clonar el repositorio:

```bash
git clone https://github.com/paul-m-corrales/ProyectoM1_PaulCorrales-.git
```

2. Ingresar a la carpeta del proyecto:

```bash
cd ProyectoM1_PaulCorrales-
```

3. Abrir el archivo `index.html` en el navegador.

También podés usar la extensión **Live Server** en VS Code.

## 🧭 Cómo usar la aplicación

![Gif](./assets/video.gif)

1. Seleccionar la cantidad de colores: **6, 8 o 9**.
2. Presionar **Generar paleta**.
3. Elegir si visualizar los códigos en **HEX** o **HSL**.
4. Hacer clic sobre un código para copiarlo.
5. Bloquear los colores que se quieran conservar utilizando el candado.
6. Generar nuevas paletas manteniendo los colores bloqueados.
7. Guardar las paletas favoritas para utilizarlas más adelante.

## 📸 Uso de la aplicación

### Pantalla de inicio

![Generación de paleta](./assets/pantallaDeInicio.png)

### Generación de paleta

![Generación de paleta](./assets/paletaGenerada.png)

### Cambio a HSL

![Generación de paleta](./assets/codigoHsl.png)

### Bloqueo de colores

![Bloqueo de colores](./assets/colorBloqueado.png)

### Guardado de paletas

![Guardado de paletas](./assets/paletaGuardada.png)

## 🤖 Prompts utilizados con IA

Durante el desarrollo se utilizaron prompts para mejorar funcionalidades y resolver problemas:

- "Convertir colores HEX a HSL en JavaScript"
- "Cómo guardar datos en LocalStorage y recuperarlos"
- "Cómo limpiar LocalStorage al recargar la página"

### Si quieres seguir leyendo sobre esto, ve al siguiente link

📖 [Ver documentación de Prompting](./assets/docs/promptings.md)

## 💡 Objetivo del proyecto

Este proyecto fue realizado como práctica de JavaScript enfocada en el desarrollo Front-End, aplicando conceptos como:

- Manipulación del DOM.
- Eventos.
- Arrays y objetos.
- Funciones.
- LocalStorage.
- Clipboard API.
- Diseño responsive.
- Conversión de espacios de color.
- Renderizado dinámico de componentes.

## 📈 Próximas mejoras

- 🌈 Selector de colores manual.
- ❤️ Sistema de favoritos.
- 📤 Exportar paletas en formato JSON.
- 🎯 Exportar paletas como imagen PNG.
- 🔗 Compartir paletas mediante un enlace.
- 🌙 Modo oscuro.
- 🎨 Generación de paletas armónicas.
- 🎛️ Personalización de saturación y luminosidad.

## 👨‍💻 Autor

**Paúl Matás Corrales**

Desarrollador Full Stack en formación, apasionado por crear aplicaciones útiles, intuitivas y con un diseño moderno.

⭐ Si te gustó este proyecto, no olvides dejar una estrella en el repositorio.
