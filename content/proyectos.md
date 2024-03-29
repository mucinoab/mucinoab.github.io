+++
title = "Proyectos"
date = 2024-02-01
+++

[comment]: <> (Todo: flux, grafos en teoria, aurocat, completar PokeClassifier)

## [Chip 8](https://github.com/mucinoab/chip-8)

Una simple implementación de [CHIP-8](https://es.wikipedia.org/wiki/CHIP-8)
Demo (WIP):

{{ iframe(id="chip8", src="/chip-8-emulator/index.html", height="75vh") }}


## [Trueno](https://github.com/mucinoab/trueno)

Un _Ray Tracer multithreaded_ que hace uso de [SIMD](https://es.wikipedia.org/wiki/SIMD).

Soporta diversos tipos de materiales (difuso, metálico, dieléctrico),
_antialiasing_, una cámara configurable (resolución, apertura, enfoque) y
composición de escena.

{{ figure(src="/rayo.avif", title="Múltiples esferas en diferentes colores,
materiales y tamaños", alt="Demo Trueno", height="1080", width="1920") }}

Implementación basada en el libro [_Ray Tracing in One Weekend_](https://raytracing.github.io/books/RayTracingInOneWeekend.html)

## [FIRE](https://github.com/mucinoab/FIRE)

Un editor de texto [modal](https://wincent.com/wiki/Modal_editor) escrito
completamente en C, sin usar dependencias externas.

{{ figure(src="/fire_demo.svg", title="Un demo de FIRE, el editor de texto", alt="Fire Demo") }}

Fue escrito en un intento de desempolvar mi conocimiento de C y también para
intentar aprender prácticas modernas, como el uso de tipos estándar
(_stdint.h_), o para evitar usar _malloc_ en favor de _calloc_, etc.
Mi principal guía en este proceso fue la publicación de Matt Stancliff en el
blog [How to C in 2016](https://matt.sh/howto-c), es una buena lectura para
ponerse al día con las "prácticas modernas" de C.


Soy un muy fan de [neovim](https://neovim.io/) y esta fue mi principal
inspiración al construir [FIRE](https://github.com/mucinoab/FIRE), como pueden
ver en el demo de arriba.

## Principales características
   - Modos _Normal_ e _Insert_, como en Vim.
   - Abrir, mostrar, editar y guardar archivos de texto.
   - Búsqueda incremental del contenido del archivo.

El código y las instrucciones para compilar y ejecutar el proyecto están
disponibles en el [repo](https://github.com/mucinoab/FIRE).

## [Interprete](https://github.com/mucinoab/lux)
{{ figure(src="/mountain.png", title="Travesía de los lenguajes", alt="Monataña") }}

La implementación de un [lenguaje de programación
dinámico](https://en.wikipedia.org/wiki/Dynamic_programming_language), _Lux_, y
su respectivo interprete. Soporta variables, control de flujo, funciones, un
[REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) y se
le dio particular importancia a la presentación y contenido de los mensajes de
error.

Se basa en las lecciones presentada en el libro [_Crafting
Interpreters_](https://craftinginterpreters.com/) de [Robert
Nystrom](https://github.com/munificent).

Puedes probar el REPL compilado a [WebAssembly](https://webassembly.org/) aquí:

{{ iframe(id="lux", src="/lux/lux_demo.html", height="250vh") }}

-------------------------------------------------------------------------------
## [Perros Covid](https://www.gaceta.unam.mx/reconocimiento-a-la-fmvz-por-proyecto-sobre-covid-19/)
{{ figure(src="/perros_covid.avif", title="Perros Covid", alt="Perritos") }}

Sitio web para la recolección, procesamiento y caracterización de muestras por
PCR de COVID-19 para su posterior uso en el adiestramiento de perros para
identificar muestras positivas. Parte de un proyecto colaborativo entre la
[SEDENA](https://www.gob.mx/sedena/) (Secretaría de la Defensa Nacional),
la [SRE](https://www.gob.mx/sre) (Secretaría de Relaciones Exteriores) y la
[UNAM](https://www.unam.mx/) (Universidad Nacional Autónoma de México).

[Gaceta UNAM: Reconocimiento a la FMVZ por proyecto sobre Covid-19](https://www.gaceta.unam.mx/reconocimiento-a-la-fmvz-por-proyecto-sobre-covid-19/)

### Objetivo

El objetivo principal de la página es ayudar a agilizar el proceso de
entrenamiento de los perros, esto al facilitar el registro de las muestras
utilizadas, las respuestas dadas durante las pruebas, la identidad del perro
entrenando, el resultado obtenido en cada sesión y de igual manera mostrar
estadísticas generales respecto al progreso de un perro en específico y en
general de todos los caninos registrados.


### Muestras

Una muestra es el resultado de la prueba PCR más algunos otros datos relevantes
del individuo en el que se realizó la prueba, como su edad, sexo,
comorbilidades, etc. Esta información adicional es relevante pues puede ayudar
a detectar sesgos o patrones dentro de las muestras seleccionadas por los
perros en los entrenamientos (ej. los falsos positivos suelen ser muestras de
personas que toman _x_ medicamento).

Las pruebas son almacenadas y consultadas directamente en el sitio web.


### Tech Stack 

El frontend consta principalmente del stack básico: HTML, CSS y para añadir
interactividad se utiliza [TypeScript](https://www.typescriptlang.org/) y un
par de bibliotecas de JavaScript: [Chart.js](https://www.chartjs.org/),
[Moment.js](https://momentjs.com/), [Selectize.js](https://selectize.dev/) y un
poco de [JQuery](https://jquery.com/). El backend fue construido completamente
en [Rust](https://www.rust-lang.org/) utilizando el framework
[Rocket](https://rocket.rs/). Los datos se almacenan en una instancia de 
[PostgreSQL](https://www.postgresql.org/).

_Lamentablemente no cuento con la autorización para hacer público  el código
fuente ni el enlace a la página.  : (_


-------------------------------------------------------------------------------
## [Reporstat](https://github.com/mucinoab/Reporstat)
{{ figure(src="/julia_mapa.png", title="Julia lang mapa", alt="Julia") }}

Es un [paquete](https://julialang.org/packages/) para el lenguaje de
programación [Julia](https://julialang.org/) que tiene como objetivo agilizar
la consulta de información poblacional de instituciones como el
[INEGI](https://www.inegi.org.mx/), el [CONAPO](https://www.gob.mx/conapo) y el
[CONEVAL](https://www.coneval.org.mx/paginas/principal.aspx), ésta segregada
por municipios y estados para que, en conjunto con datos de cualquier índole,
se facilite la realización de análisis y reportes estadísticos al usuario.

[Documentación](https://mucinoab.github.io/Reporstat/dev/)   

<!-- more -->

-------------------------------------------------------------------------------
## [PokeClassifier](https://github.com/mucinoab/Poke-Classifier)
{{ figure(src="/poke_page.png", title="SS de bot y logo de pokedex", alt="Poke") }}

Un bot de telegram que trata de identificar pokémon en imágenes utilizando _deep
learning._ Dada una aproximación también proporciona un enlace a la entrada del
pokémon en el [Pokédex Oficial](https://www.pokemon.com/us/pokedex/).

-------------------------------------------------------------------------------
## [Métodos Numéricos II](https://metodos-dos.fly.dev/)
{{ figure(src="/metodos.avif", title="SS de método de Lagrange.", alt="Métodos") }}

Página web donde se realizan simples implementaciones y su respectivas
representaciones gráficas de diversos métodos numéricos para la resolución de
ecuaciones, integración e interpolación numérica.

Se implementa el método de Newton, Regla trapezoidal, Punto fijo, Interpolación
Polinómica de Lagrange, Diferencias divididas , Interpolación de Newton, entre
otros.

Hospedada en ~~[Heroku](https://www.heroku.com/what#)~~
[Fly.io](https://fly.io/) con backend en Python
([Django](https://www.djangoproject.com)). Código fuente
[aquí.](https://github.com/mucinoab/MII)

-------------------------------------------------------------------------------
## [Telegram ChatBot](https://github.com/mucinoab/SistemedicBotRust)
{{ figure(src="/bot.png", title="Red y logo", alt="Bot") }}

Dos implementaciones de un bot que hace uso del API de
[Telegram](https://telegram.org/) (lamentablemente Whatsapp y
[Signal](https://www.signal.org/) no tienen un API razonable).

La primera implementación del bot esta hecha en
[Python](https://www.python.org/), corre en
[Heroku](https://www.heroku.com/what#) sobre [Docker](https://www.docker.com/)
y cuenta con una base de datos relacional
([PostgreSQL](https://www.postgresql.org/)) que le proporciona toda la
información necesaria.   

Desgraciadamente el desempeño de esta primera implementación deja mucho que
desear, dando tiempos de respuesta al cliente de **~.5 _segundo_**, por lo que
decido mejorar esos tiempos de repuesta al crear una implementación con un
enfoque distinto.   

En la [segunda](https://github.com/mucinoab/SistemedicBotRust) implementación
se elige Rust como lenguaje principal pues es conocido por su alto desempeño y
ademas puede ser compilado para la arquitectura de la máquina que en la que se
piensa _hostear_ el bot, [ARM](https://es.wikipedia.org/wiki/Arquitectura_ARM)
y [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). Para la base de
datos se utiliza igualmente PostgreSQL pero esta vez corriendo de manera
directa en el sistema operativo.  

El resultado final de esta implementación es un bot que da respuestas en **~300
_µs_**, gracias al crate [tokio](https://tokio.rs/) y un cuidadoso uso de
recursos.

-------------------------------------------------------------------------------
## [Gráfos en Teoría](https://github.com/mucinoab/TG)
{{ figure(src="/grafos.avif", title="SS de grafo", alt="Grafos") }}

Página web en la que se pueden crear grafos interactivamente mediante la
biblioteca de JavaScript [D3](https://d3js.org/) y arroja información sobre
estos, esencialmente su matriz de incidencia y/o adyacencia.

Hosteada en [Heroku](https://www.heroku.com/what#) con backend en Python
([Django](https://www.djangoproject.com/)). Los recursos utilizados se pueden
encontrar [aquí.](https://github.com/mucinoab/TG)

-------------------------------------------------------------------------------
## [Compiladores de Brainfuck](https://github.com/mucinoab/BrainFCompiler-LLVM)
{{ figure(src="/compiler.avif", title="LLVM y Ferris", alt="Compiler") }}

Dos compiladores del lenguaje de programación
[Brainfuck](https://en.wikipedia.org/wiki/Brainfuck), el cual es
[_Turing-complete_](https://en.wikipedia.org/wiki/Turing_completeness) y se
compone de solo ocho comandos.

| + | - | [ | ] | > | < | , | . |
|---|---|---|---|---|---|---|---|     

Por ejemplo aquí, una implementación del emblemático _Hello World!_.

> ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<++++++++
+++++++.>.+++.------.--------.>+.>.

El [primero](https://github.com/mucinoab/BrainFCompiler) es una implementación
que crea un ejecutable al generar instrucciones de lenguaje ensamblador, esto
se logra al asignar cada instrucción de brainfuck a una serie de instrucciones
en _assembly_ , posteriormente las _ensambla_ usando
[NASM](https://es.wikipedia.org/wiki/Netwide_Assembler) para finalmente
_linkearlas_ con [ld](https://www.gnu.org/software/binutils/).

El [segundo](https://github.com/mucinoab/BrainFCompiler-LLVM) usa el crate
[Inkwell](https://lib.rs/crates/inkwell), el cual expone el API de
[LLVM](https://en.wikipedia.org/wiki/LLVM) que da una interfaz mucho más
robusta para crear ejecutables de mayor calidad que hacen uso de las diversas
opciones que LLVM ofrece, como agresivas optimizaciones.  LLVM crea un archivo
[ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) que se
enlaza de manera dinámica usando [Clang](https://en.wikipedia.org/wiki/Clang) o
[GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection).

Ambos compiladores están hechos con [Rust](https://www.rust-lang.org/) y
disponibles en mi [github](https://github.com/mucinoab/) bajo
[MIT](https://opensource.org/licenses/MIT).  

-------------------------------------------------------------------------------
## [Métodos Numéricos I](https://github.com/mucinoab/SM)
{{ figure(src="/MI.avif", title="Logo de Métodos Uno", alt="Métodos Uno") }}

Programa nativo multiplatforma para resolver ecuaciones lineales y no lineales.
Implementado en C++ utilizando el framework [QT](https://www.qt.io/) para la
creación de la interfaz gráfica. 

Se implementa el método de Newton, Gauss, Secante, Doolittle, Bisección, Falsa
posición, Gauss Jordan, Gauss Seidel, Jacobi, entre otros más. 

-------------------------------------------------------------------------------
## [Lunar Lander](https://github.com/mucinoab/LunarLanderRs)
{{ figure(src="/lunar.avif", title="SS de Lunar Lander", alt="Lunar Lander") }}
To do...
