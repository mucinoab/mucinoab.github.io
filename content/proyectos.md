+++
title = "Proyectos"
date = 2020-08-24
[taxonomies]
tags = ["proyectos"]
+++


## [Métodos Numéricos](https://metodos-dos.herokuapp.com/)

![Métodos](/metodos.png "SS de método de Lagrange.")

Página web donde se realizan simples implementaciones (y su respectivas representaciones gráficas) de diversos métodos numéricos para la resolución de ecuaciones, integración e interpolación numérica.

Se implementan los siguientes métodos

- Método de Newton
- Regla trapezoidal
- Punto fijo
- Interpolación Polinómica de Lagrange
- Diferencias divididas
- Interpolación de Newton
- Entre otros...

Hosteada en [Heroku](https://www.heroku.com/what#) con backend en Python ([Django](https://www.djangoproject.com)). Código fuente [aquí.](https://github.com/mucinoab/MII)



-------------------------------------------------------------------------------
## [Gráfos en Teoría](https://grafosenteoria.herokuapp.com/)
<!-- more -->
![Grafos](/grafos.png "SS de grafo.")

Página web en la que se pueden crear grafos interactivamente mediante la librería de JavaScript [D3](https://d3js.org/) y arroja información sobre estos, especialmente su matriz de incidencia y/o adyacencia.

Hosteada en [Heroku](https://www.heroku.com/what#) con backend en Python ([Django](https://www.djangoproject.com/)). Los recursos utilizados se pueden encontrar [aquí.](https://github.com/mucinoab/TG)



-------------------------------------------------------------------------------
## [Compiladores de Brainfuck](https://github.com/mucinoab/BrainFCompiler-LLVM)

Dos compiladores del lenguaje de programación [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck), el cual es [_Turing-complete_](https://en.wikipedia.org/wiki/Turing_completeness) y se compone de solo ocho comandos.

| + | - | [ | ] | > | < | , | . |
|---|---|---|---|---|---|---|---|

 _Hello World!_ en brainfuck.
> ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<++++++++
+++++++.>.+++.------.--------.>+.>.

El [primero](https://github.com/mucinoab/BrainFCompiler) es una implementación
que crea un ejecutable al generar instrucciones de lenguaje
ensamblador, posteriormente las _ensambla_ usando [NASM](https://en.wikipedia.org/wiki/Netwide_Assembler) para finalmente _linkearlas_ con [ld](https://www.gnu.org/software/binutils/).

El [segundo](https://github.com/mucinoab/BrainFCompiler-LLVM) usa el crate
[Inkwell](https://lib.rs/crates/inkwell), el cual expone el API de [LLVM](https://en.wikipedia.org/wiki/LLVM) que da una interfaz mucho más robusta para crear ejecutables de mejor calidad que hacen uso de agresivas optimizaciones.

Ambos compiladores están hechos con [Rust](https://www.rust-lang.org/) y disponibles en mi [github](https://github.com/mucinoab/) bajo [MIT](https://opensource.org/licenses/MIT).


-------------------------------------------------------------------------------
## [Mapa Coroplético](/mapa.html)

![Mapa](/mapac.png "SS de Mapa.")

Mapa coroplético de contagios Covid-19 hecho con Python y el módulo [Folium](https://github.com/python-visualization/folium) que genera un página web interactiva con la librería de JavaScript [Leaflet.](https://leafletjs.com/)

Los recursos y programas utilizados se pueden encontrar [aquí.](https://github.com/mucinoab/mucinoab.github.io/tree/dev/extras/recursos)
