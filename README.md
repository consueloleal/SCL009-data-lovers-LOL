# **Data Lovers**

##  * WIKIKANTO *


### **Índice**

* Introducción " wikiKanto "
* Descripción del Proyecto
* Objetivos de Aprendizaje
* Definición del Producto
* Historia de Usuarios
   * Encuestas 
* Diseño de la interfaz de Usuario
   * Prototipo de baja Fidelidad
   * Prototipo de alta Fidelidad
   * Testeo de Usabilidad
* Pruebas Unitarias
* Consideraciones Tecnicas
* Contenido de Referencia
   * Herramientas 


***

## **Introducción**

Pokémon GO es un videojuego de realidad aumentada basado en la localización desarrollado por Niantic, Inc.para dispositivos iOS y Android. Es un videojuego gratuito pero contiene microtransacciones.El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones.
(https://pokemongolive.com/es/).

\* Puedes ver el datalle de la data en este [link (https://github.com/Laboratoria/SCL009-data-lovers/blob/master/src/data/pokemon/pokemon.json)


## ** Descripción del proyecto**

En este proyecto **construiremos  una página web para visualizar un
conjunto (set) de datos que se adecúe a lo que descubramos en la necesidad de los usuarios.

En este proyecto nos enforcaremos en realizar una pagina web interartiva, donde usuarios ,tanto principiantes(en el cual esta enfocado principalmente el desarrollo de nuestra paguina) y usuarios expertos, puedan realizar una busqueda mas eficientes ,para conocer los tipos de pokemon que  extisten, ordenarlos por nombre  y de esa forma desarrollar una busqueda mas adecuada a lo que cada usuario necesita y de esta manera desarrollar una nueva experiencia en cada una de sus busquedas y sus batallas con los contrincantes.

Como entrega final,tendremos una pagina que permitira visualizar la data,filtrar por tipo de pokemon,tambien se podra realizar un orden alfabetico por nombre y finalmente un calculo ---------


## ** Objetivos de aprendizaje**

El objetivo principal de este proyecto sera basado diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesite.

Aprendizajes a desarrollar:

* Aplicar y profundizar todo lo aprendido en el proyecto anterior.
* Crear historias de usuarios.
* Escribir y trabajar con **historias de usuario**, sus definiciones 
  (_definition of done_) en la organización y planificación del proyecto.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.


### ** Definición del producto**

El proceso de diseño se desarrollo analizando los resultados de encuestas realizadas a través de internet y en Parque Forestal a diferentes grupos de usuarios.
El producto final resuelve problemas a usuarios tanto como principiantes y expertos,es decir,lograran conocer los diversos tipos de Pokemon que existen,tambien conocer sus nombres y poder ordenarlos ........ El usuario al manejar esta informacion podra tambien saber mas sobre ellos y cual es mejor para poder desarrollar sus batallas en los  gimnasios con distintos contrincantes.



### ** Historias de usuario**


Nuestra Historias de usuarios, se desarrollo basandose encuentas realizadas a traves de internet y en el Parque Forestal.
Se encuesto un total de 98 usuarios.
Algunas preguntas realizadas fueron:

¿ Por que jugaban ?
Tiempo aproximado que llevaban jugando
Nivel de jugador
Horas semales de juego
¿Si recien empezaran a jugar, queles hubiese gustado saber ?
Se saben todos los tipos de Pokemon
Se saben todos los nombres de Pokemon
¿ Cuanto tiempo se demora en nacer un Pokemon?
¿ Que estrategias conoces?

Con toda la informacion que recolectamos , nuestra historia de usuario es la siguiente:

* `COMO     =     JUGADOR`
* `QUIERO   =     APRENDER NOMBRES Y TIPOS DE POKEMON`
* `PARA     =     DESAFIAR A OTROS JUGADORES, PARA GANAR BATALLAS Y TENER UN GIMNASIO`

##  * Criterios de Aceptación *

* Buscar por tipo cada Pokemon
* Buscar un tipo en especial
* Lista de Pokemones del mismo tipo
* Seleccionar Pokemon de su gusto
* Que aparesca informacion (id,imagen,nombre,tipo,debilidades,altura,peso)
* Escoger Pokemon seleccionado o buscar otro

* Ordenar por nombre los Pokemones de la lista

*---------



### ** Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Durante el trabajo se realizaron varios sketches de nuestro prototipo usando papel y lapiz.






Los prototipos de baja fidelidad, fueron utilizados en la primera entrevista, siendo de gran utilidad para poder realizar los primeros cambios en el proyecto.


#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad


Se realizaron varios tests de usabilidad con distintos usuarios, en distintos fases del proyecto y con los resultados obtenidos, se realizo una mejora importante 

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### **5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### **5.5 Pruebas unitarias**

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).





Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## **7. Consideraciones técnicas**

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├
│   │   │   
│   │   │   
│   │   │ 
│   │   │  
│   │   │   
│   │   ├── pokemon
│   │     ├── pokemon.js
│   │      └── pokemon.json
│   │   
│   │    
│   │   
│   │   
│   │       
│   │       
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.







* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?










### **Contenido de Referencia **


* Diseño de experiencia de usuario (User Experience Design)
* Investigación con usuario
* Principios de diseño visual
* Desarrollo Front-end
* Unidad de testing en curso de JavaScript en LMS
* Unidad de arreglos en curso de JavaScript en LMS
* Unidad de objetos en curso de JavaScript en LMS
* Unidad de funciones en curso de JavaScript en LMS
* Unidad de DOM en curso de Browser JavaScript en LMS
* Array en MDN
* Array.sort en MDN
* Array.map en MDN
* Array.filter en MDN
* Array.reduce en MDN
* Array.forEach en MDN
* Object.keys en MDN
* Object.entries en MDN
* Fetch API en MDN
* json.org

## Herramientas
* Git
* GitHub
* GitHub Pages
* Node.js
* Visual studio code