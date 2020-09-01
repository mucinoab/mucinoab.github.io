+++
title = "Contribuciones al Mundo del Open Source"
date = 2020-09-01
+++

## [Griddle](https://github.com/jonhoo/griddle/)
[Griddle](https://github.com/jonhoo/griddle/) es un HashMap basado en el API de [Hashbrown](https://github.com/rust-lang/hashbrown), el HashMap de la biblioteca estándar de Rust, que a su vez es un _port_ de _[absl::Hash](https://abseil.io/blog/20180927-swisstables)_ el HashMap de la biblioteca interna de C++ en Google, [Abseil](https://abseil.io/about/).

El punto de Griddle es minimizar la latencia de las inserciones a la estructura, 
esto al **amortizar** la asignación dinámica de memoria, lo que hace que cada
inserción sea ligeramente más lenta (en comparación con Hashbrown) pero que nuca haya "picos" de latencia.
En la siguiente gráfica se pueden ver claramente los distintos comportamientos. 

![Hashbrown vs Griddle](/plot.png "Hashbrown vs Griddle")

[Mis contribuciones](https://github.com/jonhoo/griddle/graphs/contributors) han
sido _ports_ de Hashbrown, especificamente el _[RawEntry](https://docs.rs/hashbrown/0.8.2/hashbrown/hash_map/index.html)_ 
API y mantener al mínimo las diferencias entre ambas bibliotecas.   



-------------------------------------------------------------------------------
## [Place holder](https://grafosenteoria.herokuapp.com/)
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula metus elementum magna placerat pharetra. 
 Vivamus rhoncus neque a fermentum vehicula. In malesuada nunc sit amet arcu pretium, ac semper velit varius. Nam aliquet metus vulputate rhoncus malesuada. Suspendisse consectetur, velit id vehicula maximus, arcu dui consectetur eros, ac lobortis erat elit elementum nisl. Aenean id lobortis eros. Phasellus sed sodales libero.
<!-- more -->

 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula metus elementum magna placerat pharetra. Vivamus rhoncus neque a fermentum vehicula. In malesuada nunc sit amet arcu pretium, ac semper velit varius. Nam aliquet metus vulputate rhoncus malesuada. Suspendisse consectetur, velit id vehicula maximus, arcu dui consectetur eros, ac lobortis erat elit elementum nisl. Aenean id lobortis eros. Phasellus sed sodales libero.

Quisque maximus neque eget tortor egestas pharetra. Nam ultrices eleifend elementum. Cras et massa at ex dictum tempor vitae vitae turpis. Sed varius laoreet magna, sit amet tincidunt nisi. Suspendisse quis augue neque. Donec tellus ipsum, molestie ut posuere sed, posuere ac quam. Vivamus eu efficitur felis. Donec tincidunt sed massa mattis viverra. Vestibulum et dui id velit ultrices feugiat vitae vitae felis. Nulla eget blandit libero. Proin lacinia nisl ut lorem porttitor fermentum. Aliquam sit amet sollicitudin sapien, sed consequat elit. Sed mattis enim urna, ut molestie lorem condimentum sit amet.



