+++
title = "Proyectos"
date = 2021-05-12
+++

## [Perros Covid](https://github.com/mucinoab/)
![Perritos](/perros_covid.png "Perros Covid")
En progreso...

-------------------------------------------------------------------------------
## [Reporstat](https://github.com/mucinoab/Reporstat)
![Julia](/julia_mapa.png "Julia lang mapa")

[Documentación](https://mucinoab.github.io/Reporstat/dev/)   

En progreso...

<!-- more -->
-------------------------------------------------------------------------------
## [PokeClassifier](https://github.com/mucinoab/Poke-Classifier)
![Poke](/poke_page.png "SS de método de Lagrange.")

En progreso...

-------------------------------------------------------------------------------
## [Métodos Numéricos II](https://metodos-dos.herokuapp.com/)
![Métodos](/metodos.png "SS de método de Lagrange.")

Página web donde se realizan simples implementaciones y su respectivas representaciones gráficas de diversos métodos numéricos para la resolución de ecuaciones, integración e interpolación numérica.

Se implementa el método de Newton, Regla trapezoidal, Punto fijo, Interpolación Polinómica de Lagrange, Diferencias divididas
, Interpolación de Newton, entre otros.

Hospedada en [Heroku](https://www.heroku.com/what#) con backend en Python ([Django](https://www.djangoproject.com)). Código fuente [aquí.](https://github.com/mucinoab/MII)

-------------------------------------------------------------------------------
## [Telegram ChatBot](https://github.com/mucinoab/SistemedicBotRust)
![Bot](/bot.png "Red y logo")

Dos implementaciones de un bot que hace uso del API de [Telegram](https://telegram.org/) 
(lamentablemente Whatsapp y [Signal](https://www.signal.org/) no tienen un API razonable).

La [primera](https://github.com/mucinoab/SistemedicBot) implementación del bot
esta hecha en [Python](https://www.python.org/), corre en [Heroku](https://www.heroku.com/what#) sobre [Docker](https://www.docker.com/)
y cuenta con una base de datos relacional ([PostgreSQL](https://www.postgresql.org/)) que
le proporciona toda la información necesaria.   

Desgraciadamente el desempeño de esta primera implementación deja mucho que
desear, dando tiempos de respuesta al cliente de **~.5 _segundo_**, por lo que
decido mejorar esos tiempos de repuesta al crear una implementación con un
enfoque distinto.   

En la [segunda](https://github.com/mucinoab/SistemedicBotRust) implementación se
elige Rust como lenguaje principal pues es conocido por su alto desempeño y
ademas puede ser compilado para la arquitectura de la máquina que en la
que se piensa _hostear_ el bot, [ARM](https://es.wikipedia.org/wiki/Arquitectura_ARM) y 
[Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi). Para la base de
datos se utiliza igualmente PostgreSQL pero esta vez corriendo de manera directa
en el sistema operativo.  

El resultado final de esta implementación es un bot que da respuestas en **~300 _µs_**, 
gracias al crate [tokio](https://tokio.rs/) y un cuidadoso uso de recursos.

-------------------------------------------------------------------------------
## [Gráfos en Teoría](https://grafosenteoria.herokuapp.com/)
![Grafos](/grafos.png "SS de grafo.")

Página web en la que se pueden crear grafos interactivamente mediante la biblioteca de JavaScript [D3](https://d3js.org/) y arroja información sobre estos, esencialmente su matriz de incidencia y/o adyacencia.

Hosteada en [Heroku](https://www.heroku.com/what#) con backend en Python ([Django](https://www.djangoproject.com/)). Los recursos utilizados se pueden encontrar [aquí.](https://github.com/mucinoab/TG)

-------------------------------------------------------------------------------
## [Compiladores de Brainfuck](https://github.com/mucinoab/BrainFCompiler-LLVM)
![Compiler](/compiler.png "LLVM y Ferris")

Dos compiladores del lenguaje de programación [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck), el cual es [_Turing-complete_](https://en.wikipedia.org/wiki/Turing_completeness) y se compone de solo ocho comandos.

| + | - | [ | ] | > | < | , | . |
|---|---|---|---|---|---|---|---|     

Por ejemplo aquí, una implementación del emblemático _Hello World!_.

> ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<++++++++
+++++++.>.+++.------.--------.>+.>.

El [primero](https://github.com/mucinoab/BrainFCompiler) es una implementación
que crea un ejecutable al generar instrucciones de lenguaje ensamblador, esto se
logra al asignar cada instrucción de brainfuck a una serie de instrucciones en _assembly_ , posteriormente las _ensambla_ usando [NASM](https://en.wikipedia.org/wijki/Netwide_Assembler) para finalmente _linkearlas_ con [ld](https://www.gnu.org/software/binutils/).

El [segundo](https://github.com/mucinoab/BrainFCompiler-LLVM) usa el crate
[Inkwell](https://lib.rs/crates/inkwell), el cual expone el API de [LLVM](https://en.wikipedia.org/wiki/LLVM) que da una interfaz mucho más robusta para crear ejecutables de mayor calidad que hacen uso de las diversas opciones que LLVM ofrece, como agresivas optimizaciones.  
LLVM crea un archivo [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) que se enlaza de manera dinámica usando [Clang](https://en.wikipedia.org/wiki/Clang) o [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection).

Ambos compiladores están hechos con [Rust](https://www.rust-lang.org/) y disponibles en mi [github](https://github.com/mucinoab/) bajo [MIT](https://opensource.org/licenses/MIT).  

-------------------------------------------------------------------------------
## [Métodos Numéricos I](https://github.com/mucinoab/SM)
![Métodos Uno](/MI.png "LLVM y Ferris")

Programa nativo multiplatforma para resolver ecuaciones lineales y no lineales. Implementado en
C++ utilizando el framework [QT](https://www.qt.io/) para la creación de la
interfaz gráfica. 

Se implementa el método de Newton, Gauss, Secante, Doolittle, Bisección, Falsa posición,
Gauss Jordan, Gauss Seidel, Jacobi, entre otros más. 

-------------------------------------------------------------------------------
## [Lunar Lander](https://github.com/mucinoab/LunarLanderRs)
![Lunar Lander](/lunar.png "SS de Luna Lander")

To do...

-------------------------------------------------------------------------------
## [Mapa Coroplético](/mapa.html)
![Remplazar mapa](/mapac.png "SS de Mapa.")

Mapa coroplético de contagios Covid-19 hecho con Python y el módulo [Folium](https://github.com/python-visualization/folium) que genera un página web interactiva con la biblioteca de JavaScript [Leaflet.](https://leafletjs.com/)

Los recursos y programas utilizados se pueden encontrar [aquí.](https://github.com/mucinoab/mucinoab.github.io/tree/dev/extras/recursos)
