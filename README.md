# Interactive Quiz

Sitio estatico interactivo para practicar conocimientos de desarrollo web.
El proyecto funciona completamente en el navegador con HTML, CSS, JavaScript, jQuery y Bootstrap.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- jQuery 3.7.1
- Bootstrap 4.3.1

## Estructura

```text
interactive_quiz/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
```

## Funcionalidades

- seleccion de categoria
- seleccion de dificultad
- temporizador por pregunta
- puntaje en tiempo real
- barra de progreso
- retroalimentacion inmediata
- resumen final de resultados

## Vista previa

![Pantalla inicial](quiz_01.png)
![Pantalla del quiz](quiz_02.png)

## Ejecutar localmente

Como es un sitio estatico, puedes abrir `index.html` directamente en el navegador.

Si prefieres usar un servidor local:

```bash
cd interactive_quiz
python3 -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```

## Subir a GitHub

Si vas a subir solo esta carpeta como proyecto independiente:

```bash
cd interactive_quiz
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/interactive_quiz.git
git push -u origin main
```

## Desplegar en Render

Este proyecto se publica en Render como `Static Site`.

Configuracion recomendada:

- Branch: `main`
- Build Command: dejar vacio
- Publish Directory: `.`

Si subes todo `DESARROLLO_WEB` a un solo repositorio y no este proyecto por separado:

- Root Directory: `interactive_quiz`
- Build Command: dejar vacio
- Publish Directory: `.`

## Publicacion recomendada

Para dejar el proyecto mas limpio en GitHub:

- usa un repositorio dedicado para `interactive_quiz`
- agrega una descripcion corta del repo
- publica el sitio en Render como `Static Site`
- usa este `README.md` como portada del proyecto

## Notas

- no requiere backend
- no requiere base de datos
- no necesita proceso de build
- el contenido se sirve como sitio estatico con interaccion del lado del cliente
