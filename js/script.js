/* =============================================
   Interactive Quiz Game
   js/script.js
   jQuery 3.7.1 + Bootstrap 4.3.1
   ============================================= */

var QUESTIONS = {
  javascript: {
    nombre: "JavaScript",
    easy: [
      {
        pregunta: "¿Cuál es el tipo de dato de typeof null?",
        opciones: ["null", "undefined", "object", "string"],
        correcta: 2
      },
      { pregunta: "¿Qué método agrega un elemento al final de un array?", opciones: ["push()", "pop()", "shift()", "unshift()"], correcta: 0 },
      { pregunta: "¿Cómo se declara una variable constante en JS moderno?", opciones: ["var", "let", "const", "def"], correcta: 2 },
      { pregunta: "¿Qué imprime console.log(2 + '2')?", opciones: ["4", "22", "NaN", "Error"], correcta: 1 },
      { pregunta: "¿Cuál es el operador de igualdad estricta?", opciones: ["==", "=", "===", "!=="], correcta: 2 }
    ],
    medium: [
      { pregunta: "¿Qué devuelve [1,2,3].map(x => x * 2)?", opciones: ["[1,2,3]", "[2,4,6]", "[3,4,5]", "undefined"], correcta: 1 },
      { pregunta: "¿Qué es un closure en JavaScript?", opciones: ["Una clase cerrada", "Funcion con acceso a su scope exterior", "Un objeto inmutable", "Un metodo privado"], correcta: 1 },
      { pregunta: "¿Cuál método convierte un JSON string a objeto?", opciones: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"], correcta: 0 },
      { pregunta: "¿Qué es el event loop?", opciones: ["Un ciclo for especial", "Mecanismo de concurrencia de JS", "Una API del DOM", "Un tipo de promesa"], correcta: 1 },
      { pregunta: "¿Qué hace Array.prototype.filter()?", opciones: ["Ordena elementos", "Elimina duplicados", "Retorna elementos que cumplen condicion", "Suma elementos"], correcta: 2 }
    ],
    hard: [
      { pregunta: "¿Qué imprime console.log(0.1 + 0.2 === 0.3)?", opciones: ["true", "false", "NaN", "Error"], correcta: 1 },
      { pregunta: "¿Cuál es el resultado de typeof typeof 1?", opciones: ["number", "string", "undefined", "object"], correcta: 1 },
      { pregunta: "¿Qué es el prototype chain?", opciones: ["Herencia por prototipos", "Un array de clases", "Una cadena de promesas", "El historial del call stack"], correcta: 0 },
      { pregunta: "¿Qué hace Object.freeze()?", opciones: ["Elimina propiedades", "Hace el objeto inmutable", "Serializa el objeto", "Clona el objeto"], correcta: 1 },
      { pregunta: "¿Qué es un WeakMap?", opciones: ["Un mapa con menos metodos", "Mapa con claves debilmente referenciadas", "Un Map para strings", "Un objeto inmutable"], correcta: 1 }
    ]
  },
  html: {
    nombre: "HTML",
    easy: [
      { pregunta: "¿Qué significa HTML?", opciones: ["HyperText Markup Language", "High Text Modern Language", "HyperText Modern Links", "Hyper Transfer Markup Language"], correcta: 0 },
      { pregunta: "¿Cuál etiqueta define el cuerpo del documento?", opciones: ["<head>", "<main>", "<body>", "<html>"], correcta: 2 },
      { pregunta: "¿Qué etiqueta crea un hipervínculo?", opciones: ["<link>", "<a>", "<href>", "<nav>"], correcta: 1 },
      { pregunta: "¿Cuál etiqueta inserta una imagen?", opciones: ["<picture>", "<media>", "<img>", "<image>"], correcta: 2 },
      { pregunta: "¿Qué atributo define la ruta de un enlace?", opciones: ["src", "href", "url", "link"], correcta: 1 }
    ],
    medium: [
      { pregunta: "¿Qué etiqueta HTML5 define una seccion de navegacion?", opciones: ["<menu>", "<nav>", "<header>", "<section>"], correcta: 1 },
      { pregunta: "¿Cuál es la diferencia entre div y span?", opciones: ["Ninguna", "div es block, span es inline", "span es block, div es inline", "div es HTML5, span es HTML4"], correcta: 1 },
      { pregunta: "¿Para qué sirve el atributo data-*?", opciones: ["CSS animations", "Almacenar datos personalizados", "Vincular scripts", "Definir estilos"], correcta: 1 },
      { pregunta: "¿Qué hace el atributo defer en un script?", opciones: ["Ejecuta el script primero", "Ejecuta el script tras cargar el DOM", "Ignora el script", "Carga el script async"], correcta: 1 },
      { pregunta: "¿Qué elemento representa contenido independiente y auto-contenido?", opciones: ["<section>", "<aside>", "<article>", "<main>"], correcta: 2 }
    ],
    hard: [
      { pregunta: "¿Cuál es la diferencia semantica entre b y strong?", opciones: ["Son identicos", "b es semantico, strong es visual", "strong es semantico, b es visual", "Ninguna diferencia en HTML5"], correcta: 2 },
      { pregunta: "¿Qué atributo activa el autocomplete del navegador en un input?", opciones: ["fill", "autocomplete", "autofill", "suggest"], correcta: 1 },
      { pregunta: "¿Qué elemento permite incrustar SVG directamente en HTML?", opciones: ["<embed>", "<object>", "<svg>", "<canvas>"], correcta: 2 },
      { pregunta: "¿Para qué sirve el atributo aria-label?", opciones: ["CSS animations", "SEO keywords", "Accesibilidad", "Lazy loading"], correcta: 2 },
      { pregunta: "¿Qué hace meta name viewport content width=device-width?", opciones: ["Limita el zoom", "Optimiza la vista para movil", "Define el titulo", "Agrega favicon"], correcta: 1 }
    ]
  },
  css: {
    nombre: "CSS",
    easy: [
      { pregunta: "¿Qué significa CSS?", opciones: ["Cascading Style Sheets", "Creative Style System", "Color and Style Script", "Coded Style Syntax"], correcta: 0 },
      { pregunta: "¿Cuál propiedad cambia el color de texto?", opciones: ["background", "font-color", "text-color", "color"], correcta: 3 },
      { pregunta: "¿Cuál valor de display oculta un elemento quitandolo del flujo?", opciones: ["hidden", "visibility:hidden", "none", "invisible"], correcta: 2 },
      { pregunta: "¿Qué propiedad controla el espacio interno de un elemento?", opciones: ["margin", "border", "padding", "spacing"], correcta: 2 },
      { pregunta: "¿Cuál selector aplica estilos a todos los elementos?", opciones: ["#all", ".all", "*", "all"], correcta: 2 }
    ],
    medium: [
      { pregunta: "¿Cuál es la diferencia entre margin y padding?", opciones: ["Ninguna", "margin es externo, padding es interno", "padding es externo, margin es interno", "Solo cambia el nombre"], correcta: 1 },
      { pregunta: "¿Qué es Flexbox?", opciones: ["Un sistema de rejilla 2D", "Un modelo de caja 1D", "Una libreria CSS", "Un pseudo-elemento"], correcta: 1 },
      { pregunta: "¿Cuál propiedad convierte un elemento en grid container?", opciones: ["display: grid", "grid: true", "position: grid", "layout: grid"], correcta: 0 },
      { pregunta: "¿Qué hace position: sticky?", opciones: ["Fija el elemento siempre", "Como relative hasta un umbral, luego fixed", "Elimina el elemento del flujo", "Es igual a fixed"], correcta: 1 },
      { pregunta: "¿Qué es la especificidad en CSS?", opciones: ["El orden de las propiedades", "Algoritmo para determinar que regla prevalece", "La velocidad de renderizado", "El tamano del archivo CSS"], correcta: 1 }
    ],
    hard: [
      { pregunta: "¿Cuál tiene mayor especificidad: ID, clase o etiqueta?", opciones: ["Etiqueta", "Clase", "ID", "Son iguales"], correcta: 2 },
      { pregunta: "¿Qué hace will-change: transform?", opciones: ["Aplica transform", "Optimiza el rendering en la GPU", "Hace el elemento fijo", "Activa hardware acceleration siempre"], correcta: 1 },
      { pregunta: "¿Qué es un CSS custom property?", opciones: ["Una propiedad inventada", "Una variable CSS (--variable)", "Un mixin", "Una funcion CSS"], correcta: 1 },
      { pregunta: "¿Qué pseudo-clase selecciona el ultimo hijo de su tipo?", opciones: [":last-child", ":last-of-type", ":nth-child(-1)", ":last"], correcta: 1 },
      { pregunta: "¿Qué hace contain: layout?", opciones: ["Agrupa media queries", "Aisla el elemento del layout externo", "Crea un BFC", "Optimiza fuentes"], correcta: 1 }
    ]
  },
  general: {
    nombre: "Cultura Tech",
    easy: [
      { pregunta: "¿Qué significa www en una URL?", opciones: ["World Wide Web", "Wide Web World", "Web World Wide", "World Web Wide"], correcta: 0 },
      { pregunta: "¿Quién creó el lenguaje Python?", opciones: ["Google", "Microsoft", "Guido van Rossum", "Apple"], correcta: 2 },
      { pregunta: "¿Qué es un algoritmo?", opciones: ["Un programa", "Secuencia de instrucciones para resolver un problema", "Un lenguaje de programacion", "Un tipo de variable"], correcta: 1 },
      { pregunta: "¿Qué significa HTTP?", opciones: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "HyperText Transport Protocol", "High Transfer Text Protocol"], correcta: 0 },
      { pregunta: "¿Cuál es la funcion principal de un servidor web?", opciones: ["Almacenar contraseñas", "Responder solicitudes HTTP", "Compilar codigo", "Disenar interfaces"], correcta: 1 }
    ],
    medium: [
      { pregunta: "¿Qué es una API REST?", opciones: ["Un tipo de base de datos", "Interfaz de comunicacion entre sistemas", "Un lenguaje de programacion", "Un protocolo de seguridad"], correcta: 1 },
      { pregunta: "¿Qué significa responsive design?", opciones: ["Diseño rapido", "Diseño que se adapta a distintos tamanos de pantalla", "Diseño con animaciones", "Diseño seguro"], correcta: 1 },
      { pregunta: "¿Cuál es la diferencia principal entre SQL y NoSQL?", opciones: ["Ninguna", "SQL usa tablas relacionales, NoSQL no", "NoSQL es mas antiguo", "SQL es para web, NoSQL para apps"], correcta: 1 },
      { pregunta: "¿Qué es Git?", opciones: ["Un lenguaje de programacion", "Un sistema de control de versiones", "Un editor de codigo", "Un servidor web"], correcta: 1 },
      { pregunta: "¿Qué significa IDE?", opciones: ["Internet Development Environment", "Integrated Development Environment", "Internal Data Editor", "Interface Design Engine"], correcta: 1 }
    ],
    hard: [
      { pregunta: "¿Qué es la notacion Big O?", opciones: ["Una notacion de diseño", "Forma de medir la complejidad de un algoritmo", "Un estandar de bases de datos", "Un protocolo de red"], correcta: 1 },
      { pregunta: "¿Qué es un race condition?", opciones: ["Una optimizacion de codigo", "Conflicto al acceder a recursos compartidos", "Un tipo de loop infinito", "Un error de memoria"], correcta: 1 },
      { pregunta: "¿Qué es CORS?", opciones: ["Un sistema de archivos", "Mecanismo de seguridad para solicitudes cross-origin", "Un tipo de encriptacion", "Un protocolo de autenticacion"], correcta: 1 },
      { pregunta: "¿Qué es el teorema CAP?", opciones: ["Un teorema de CSS", "Consistencia, Disponibilidad y Tolerancia a particiones", "Un algoritmo de compresion", "Una variante de la Ley de Moore"], correcta: 1 },
      { pregunta: "¿Qué es memoization?", opciones: ["Tecnica de encriptacion", "Optimizacion que cachea resultados de funciones costosas", "Un patron de diseño", "Un tipo de recursion"], correcta: 1 }
    ]
  }
};

var SEGUNDOS_POR_DIFICULTAD = { easy: 20, medium: 15, hard: 10 };
var PUNTOS_BASE = { easy: 10, medium: 20, hard: 30 };
var LETRAS = ["A", "B", "C", "D"];

var categoriaSeleccionada = "javascript";
var dificultadSeleccionada = "easy";
var preguntas = [];
var indiceActual = 0;
var puntaje = 0;
var respondido = false;
var intervaloTimer = null;
var tiempoRestante = 15;
var tiempoUsado = 0;
var tiempoTotal = 0;
var resultados = [];

var $screens = $(".screen");
var $startTitle = $("#start-title");
var $questionText = $("#q-text");
var $questionCounter = $("#q-counter");
var $progressBar = $("#prog-bar");
var $timerBadge = $("#timer-badge");
var $categoryTag = $("#q-cat-tag");
var $scoreLive = $("#score-live");
var $feedback = $("#feedback-msg");
var $nextBtn = $("#next-btn");
var $optionsGrid = $("#options-grid");
var $resultTitle = $("#res-title");
var $resultEmoji = $("#res-emoji");
var $resultScore = $("#res-score");
var $resultSub = $("#res-sub");
var $correctStat = $("#st-correct");
var $wrongStat = $("#st-wrong");
var $timeStat = $("#st-time");

function obtenerPreguntaActual() {
  return preguntas[indiceActual];
}

function mezclar(arr) {
  var copia = arr.slice();
  var i;
  var j;
  var tmp;

  for (i = copia.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = copia[i];
    copia[i] = copia[j];
    copia[j] = tmp;
  }

  return copia;
}

function limpiarTimer() {
  if (intervaloTimer) {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
  }
}

function capitalizarDificultad(diff) {
  if (diff === "easy") return "Facil";
  if (diff === "medium") return "Medio";
  return "Dificil";
}

function enfocar($elemento) {
  if ($elemento && $elemento.length) {
    $elemento.trigger("focus");
  }
}

function mostrarPantalla(id) {
  var $pantalla = $("#" + id);

  limpiarTimer();
  $screens.removeClass("active").attr("aria-hidden", "true");
  $pantalla.addClass("active").attr("aria-hidden", "false");

  if (id === "start-screen") {
    enfocar($startTitle);
  } else if (id === "quiz-screen") {
    enfocar($questionText);
  } else if (id === "result-screen") {
    enfocar($resultTitle);
  }
}

function crearBotonOpcion(letra, texto, indice) {
  var $btn = $("<button>", {
    "class": "opt-btn",
    type: "button",
    "aria-label": letra + ". " + texto
  });
  var $letter = $("<span>", { "class": "opt-letter", text: letra });
  var $text = $("<span>", { "class": "opt-copy", text: texto });

  $btn.append($letter, $text);
  $btn.data("indice", indice);
  $btn.on("click", function () {
    seleccionarRespuesta($(this).data("indice"));
  });

  return $btn;
}

$(document).on("click", ".cat-btn", function () {
  $(".cat-btn").removeClass("selected");
  $(this).addClass("selected");
  categoriaSeleccionada = $(this).data("cat");
});

$(document).on("click", ".diff-btn", function () {
  $(".diff-btn").removeClass("selected");
  $(this).addClass("selected");
  dificultadSeleccionada = $(this).data("diff");
});

$("#start-btn").on("click", function () {
  iniciarQuiz();
});

function iniciarQuiz() {
  preguntas = mezclar(QUESTIONS[categoriaSeleccionada][dificultadSeleccionada]);
  indiceActual = 0;
  puntaje = 0;
  resultados = [];
  tiempoTotal = 0;
  respondido = false;

  mostrarPantalla("quiz-screen");
  mostrarPregunta();
}

function actualizarPuntaje() {
  $scoreLive.text("Puntos: " + puntaje);
}

function mostrarFeedback(tipo, mensaje) {
  $feedback.text(mensaje).removeClass("ok fail");

  if (tipo) {
    $feedback.addClass(tipo);
  }
}

function mostrarSiguienteBoton() {
  $nextBtn.removeClass("d-none");
  enfocar($nextBtn);
}

function actualizarTimer() {
  $timerBadge.text(tiempoRestante + "s");

  if (tiempoRestante <= 5) {
    $timerBadge.addClass("urgent");
  } else {
    $timerBadge.removeClass("urgent");
  }
}

function mostrarPregunta() {
  var preguntaActual = obtenerPreguntaActual();
  var total = preguntas.length;
  var porcentaje = Math.round(((indiceActual + 1) / total) * 100);
  var i;

  respondido = false;
  tiempoRestante = SEGUNDOS_POR_DIFICULTAD[dificultadSeleccionada];
  tiempoUsado = 0;

  $questionCounter.text((indiceActual + 1) + " / " + total);
  $progressBar.css("width", porcentaje + "%");
  $progressBar.attr("aria-valuenow", porcentaje);
  $categoryTag.text(QUESTIONS[categoriaSeleccionada].nombre + " - " + capitalizarDificultad(dificultadSeleccionada));
  actualizarPuntaje();
  $questionText.text(preguntaActual.pregunta);
  mostrarFeedback("", "");
  $nextBtn.addClass("d-none");
  $optionsGrid.empty();

  for (i = 0; i < preguntaActual.opciones.length; i++) {
    $optionsGrid.append(crearBotonOpcion(LETRAS[i], preguntaActual.opciones[i], i));
  }

  actualizarTimer();
  enfocar($questionText);
  limpiarTimer();

  intervaloTimer = setInterval(function () {
    tiempoRestante--;
    tiempoUsado++;
    actualizarTimer();

    if (tiempoRestante <= 0) {
      limpiarTimer();
      manejarTiempoAgotado();
    }
  }, 1000);
}

function bloquearOpciones() {
  return $("#options-grid .opt-btn").prop("disabled", true);
}

function registrarResultado(preguntaActual, respuestaUsuario, esCorrecta) {
  resultados.push({
    pregunta: preguntaActual.pregunta,
    respuestaUsuario: respuestaUsuario,
    respuestaCorrecta: preguntaActual.correcta,
    opciones: preguntaActual.opciones.slice(),
    esCorrecta: esCorrecta
  });
}

function seleccionarRespuesta(indice) {
  var preguntaActual;
  var $botones;
  var esCorrecta;
  var puntos = 0;
  var mensaje;

  if (respondido) {
    return;
  }

  respondido = true;
  limpiarTimer();
  tiempoTotal += tiempoUsado;
  preguntaActual = obtenerPreguntaActual();
  $botones = bloquearOpciones();
  esCorrecta = indice === preguntaActual.correcta;

  if (esCorrecta) {
    $botones.eq(indice).addClass("correct");
  } else {
    $botones.eq(indice).addClass("wrong");
  }

  if (!esCorrecta) {
    $botones.eq(preguntaActual.correcta).addClass("correct");
  }

  if (esCorrecta) {
    puntos = PUNTOS_BASE[dificultadSeleccionada];

    if (tiempoRestante >= 5) {
      puntos += tiempoRestante - 4;
    }

    puntaje += puntos;
    mensaje = "Correcto! +" + puntos + " pts";
    mostrarFeedback("ok", mensaje);
  } else {
    mensaje = "Incorrecto. Era: " + preguntaActual.opciones[preguntaActual.correcta];
    mostrarFeedback("fail", mensaje);
  }

  actualizarPuntaje();
  registrarResultado(preguntaActual, indice, esCorrecta);
  mostrarSiguienteBoton();
}

function manejarTiempoAgotado() {
  var preguntaActual = obtenerPreguntaActual();
  var mensaje = "Tiempo agotado! Era: " + preguntaActual.opciones[preguntaActual.correcta];

  respondido = true;
  tiempoTotal += SEGUNDOS_POR_DIFICULTAD[dificultadSeleccionada];

  bloquearOpciones().eq(preguntaActual.correcta).addClass("correct");
  mostrarFeedback("fail", mensaje);
  registrarResultado(preguntaActual, -1, false);
  mostrarSiguienteBoton();
}

$("#next-btn").on("click", function () {
  indiceActual++;

  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
});

function mostrarResultados() {
  var correctas = 0;
  var incorrectas;
  var porcentaje;
  var tiempoPromedio;
  var imgResultado;
  var titulo;
  var i;

  for (i = 0; i < resultados.length; i++) {
    if (resultados[i].esCorrecta) {
      correctas++;
    }
  }

  incorrectas = resultados.length - correctas;
  porcentaje = 0;
  tiempoPromedio = 0;

  if (resultados.length) {
    porcentaje = Math.round((correctas / resultados.length) * 100);
    tiempoPromedio = Math.round(tiempoTotal / resultados.length);
  }

  if (porcentaje >= 70) {
    imgResultado = "img/icons8-premium-badge-48.png";
    titulo = "Excelente!";
  } else {
    imgResultado = "img/books.png";
    titulo = "Sigue practicando!";
  }

  $resultEmoji.empty().append(
    $("<img>", {
      src: imgResultado,
      alt: "Resultado del quiz",
      width: 80
    })
  );
  $resultTitle.text(titulo);
  $resultScore.text(porcentaje + "%");
  $resultSub.text(correctas + " de " + resultados.length + " correctas - " + puntaje + " puntos totales");
  $correctStat.text(correctas);
  $wrongStat.text(incorrectas);
  $timeStat.text(tiempoPromedio + "s");

  mostrarPantalla("result-screen");
}

$("#retry-btn").on("click", function () {
  iniciarQuiz();
});

$("#new-btn").on("click", function () {
  mostrarPantalla("start-screen");
});
