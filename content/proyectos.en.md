+++
title = "Projects"
date = 2021-05-12
+++

## [Perros Covid](https://github.com/mucinoab/)
![Perritos](/perros_covid.png "Perros Covid")
To Do...

-------------------------------------------------------------------------------
## [Reporstat](https://github.com/mucinoab/Reporstat)
![Julia](/julia_mapa.png "Julia lang mapa")

[Documentation](https://mucinoab.github.io/Reporstat/dev/)  

To Do...

<!-- more -->
-------------------------------------------------------------------------------
## [PokeClassifier](https://github.com/mucinoab/Poke-Classifier)
![Poke](/poke_page.png "SS de método de Lagrange.")

To Do...

-------------------------------------------------------------------------------
## [Numerical Methods II](https://metodos-dos.herokuapp.com/)
![Métodos](/metodos.png "SS de método de Lagrange.")

Web page where various numerical methods for solving equations, approximate integrals and numerical interpolation are implemented, explained and represented through graphs.

The methods include Newton's method, some implementation of the trapezoidal rule, fixed point iteration, Lagrange polynomial interpolation, Newton's divided differences interpolation polynomial, among others.

Hosted on [Heroku](https://www.heroku.com/what#), back end written in Python ([Django](https://www.djangoproject.com)). 

Source code [here.](https://github.com/mucinoab/MII)

-------------------------------------------------------------------------------
## [Telegram ChatBot](https://github.com/mucinoab/SistemedicBotRust)
![Bot](/bot.png "Red y logo")

Two implementations of a chatbot using the official [Telegram](https://telegram.org/) API.
(Sadly Whatsapp and [Signal](https://www.signal.org/) do not provide a
_reasonable_ API).

The [first](https://github.com/mucinoab/SistemedicBot) bot implementation it is
written in [Python](https://www.python.org/), hosted on [Heroku](https://www.heroku.com/what#) and runs in a  [Docker](https://www.docker.com/) container.
It uses a relational database ([PostgreSQL](https://www.postgresql.org/)) for the data needs, which is hosted on heroku as well. 

Unfortunately the performance of this first implementation is not _the_ best and
leaves a lot to wish. The average response time is around  **.5 _seconds_**, for
that reason I decided to give this project another shot with a different approach.

In the [second](https://github.com/mucinoab/SistemedicBotRust) implementation of
the project I decided to use Rust as the main language because it is know for
its blazing fast performance and security features, furthermore, it compiles and
runs natively on the target platform that I chose for this project ([ARM](https://en.wikipedia.org/wiki/ARM_architecture)), in other words, a [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi).

For the database system I used PostgreSQL as well but this time running
natively on the host machine.

The final result is a chat bot implementation in which the average response time
is around **300 µs**, a _lot faster_ than the first one.

-------------------------------------------------------------------------------
## [Brainfuck _Compilers_](https://github.com/mucinoab/BrainFCompiler-LLVM)
![Compiler](/compiler.png "LLVM y Ferris")

Two compilers for the esoteric programming language, [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck). Brainfuck it is [_Turing-complete_](https://en.wikipedia.org/wiki/Turing_completeness) and consists of only the following instructions. 

| + | - | [ | ] | > | < | , | . |
|---|---|---|---|---|---|---|---|     

For example, this is an implementation of the emblematic _Hello World!_ program.

> ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<++++++++
+++++++.>.+++.------.--------.>+.>.

The [first one](https://github.com/mucinoab/BrainFCompiler) creates an
executable by mapping the brainfuck commands to assembly instructions, then it
assembles the generated instructions using [NASM](https://en.wikipedia.org/wijki/Netwide_Assembler) and finally links them using [ld](https://www.gnu.org/software/binutils/).

The [second one](https://github.com/mucinoab/BrainFCompiler-LLVM) uses the
popular Rust crate [Inkwell](https://lib.rs/crates/inkwell) that exposes the [LLVM](https://en.wikipedia.org/wiki/LLVM) API, which provides a great interface.

The program crates an [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) file which is dynamically linked using [Clang](https://en.wikipedia.org/wiki/Clang) or [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection).

Both compilers are written in [Rust](https://www.rust-lang.org/), licenced under [MIT](https://opensource.org/licenses/mit) and available on my [GitHub](https://github.com/mucinoab/).

-------------------------------------------------------------------------------

## [Gráfos en Teoría](https://grafosenteoria.herokuapp.com/)
![Grafos](/grafos.png "SS de grafo.")

A web page that me and a few classmates did for our graph theory class. In the web site you can draw _graphs_ and the output is information related to the graph.

Hosted on [Heroku](https://www.heroku.com/what#) and written in Python ([Django](https://www.djangoproject.com/)).

You can find the source code and resources used [here.](https://github.com/mucinoab/TG)

-------------------------------------------------------------------------------

## [Numerical Methods I](https://github.com/mucinoab/SM)
![Métodos Uno](/MI.png "LLVM y Ferris")

Cross-platform native program to solve linear and non-linear equations.
Implemented in C++ using the popular GUI framework, [QT](https://www.qt.io/).

The full list of methods and source code can be found in the [GitHub repo](https://github.com/mucinoab/SM).

-------------------------------------------------------------------------------
## [Lunar Lander](https://github.com/mucinoab/LunarLanderRs)
![Lunar Lander](/lunar.png "SS de Luna Lander")

**To do...**

A simple game.

-------------------------------------------------------------------------------
## [Choropletic Map](/mapa.html)

Choropletic Map representing the COVID-19 cases, made with Python using the [Folian library](https://github.com/python-visualization/folium).  

The python script and resources used can be found [here.](https://github.com/mucinoab/mucinoab.github.io/tree/dev/extras/recursos).
