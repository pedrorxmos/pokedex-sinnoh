# Memoria proyecto Pokedex-Sinnoh

## Índice
- [Descripción](#descripción)
- [Herramientas utilizadas](#herramientas-utilizadas)
- [Diseño y estructura](#diseño-y-estructura)
- [APIs](#apis)
- [Hooks](#hooks)
  - [useFetch](#usefetch)
  - [useLocalStorage](#uselocalstorage)
- [Páginas](#páginas)
  - [Pokedex](#pokedex)
- [Vistas](#vistas)
  - [Vista del listado](#vista-del-listado)
  - [Vista de detalle](#vista-de-detalle)
- [Componentes](#componentes)
  - [Topbar](#topbar)
  - [Botón de menú/navegación](#botón-de-menúnavegación)
  - [Carta de pokémon](#carta-de-pokémon)
  - [Tipo de pokémon](#carta-de-pokémon)
  - [Paginación](#paginación)
  - [Conmutador de layout](#conmutador-de-layout)
  - [Icono](#icono)
  - [Pokeball](#pokeball)
- [Tipado](#tipado)
  - [Interfaces](#interfaces)
- [Testing](#testing)
- [Resultado](#resultado)


___

## Descripción

Para este proyecto sé pedía la realización de una Pokedex que recopilase los diferentes pokémon que habitan en la región de Sinnoh y mostrase la información de dichos pokémon, como sería su nombre, tipos y estadísticas.

## Herramientas utilizadas

Para este proyecto he utilizado las siguientes herramientas:

- **React + Vite:** He utilizado esta framework por dos razones: La primera es porque es el framework que tengo más experiencia, por lo que me siento más cómodo. Y la segunda, porque con el framework puedo dividir mi aplicación en componentes, páginas y vistas, ayudando así a una mejor estructuración del código.
- **TypeScript:** Las veces que he utilizado TypeScript previamente al proyecto ha sido muy limitada, pero al ser una bola extra he querido plantearme el reto de utilizarlo en este proyecto, utilizado los mínimos conocimientos que tenía previamente sobre el tipado y ampliando estos al mismo tiempo.
- **SCSS:** Para el estilo he empleado SCSS porque puedo utilizar toda la sintaxis de CSS pero con las ventajas del preprocesador de SASS. Con él he podido estructurar mi estilo, añadiendo así variables, mixins y funciones.
- **Jest y Testing Library:** He usado estas herramientas para realizar el testing de la aplicación, aparte de que son las únicas que conozco por el momento, porque son herramientas muy rápidas y reducen así el tiempo que se tarda en testear el código.

## Diseño y estructura

Para el diseño de la aplicación he utilizado el software de Figma, con el cual, he podido probar y estructurar de una manera más conceptual la aplicación. A partir de este diseño he concluido con un solo tipo de página, ya que tanto la pantalla de la Pokedex con todos los pokémon de la región de Sinnoh, como la pantalla con los pokémon favoritos, mantienen la misma estructura, que consiste en un layout separado en dos vistas. La primera, más grande, es el listado de los pokémon, y la segunda es el detalle del pokémon, donde se puede ver más información del pokémon como son las estadísticas.

A la hora de estructurar el código he preferido hacer por tipo de elemento, por lo que los he dividido en páginas, vistas, componentes, interfaces y hooks, para poder hacer más sencillo la búsqueda de código a la hora de, si fuese necesario, hacer cambios en un futuro. Todas estas carpetas, excepto la carpeta de hooks, se exportan mediante un archivo de exportación en barril, para así reducir la líneas de código que necesitan las importaciones. 

## APIs

En este proyecto se ha utilizado la API de [PokeAPI](https://pokeapi.co/). Aunque se proporcionó el enlace a `https://pokeapi.co/api/v2/pokemon`, revisando la documentación proporcionada por PokeAPI encontré que para poder recoger los datos de solo aquellos pokémon de la región de Sinnoh era necesario hacer una llamada al endpoint `https://pokeapi.co/api/v2/pokedex/6/` que corresponde con la versión de la Pokedex de Sinnoh extendido que recoge las entradas de todos los pokémon que habitan la región de Sinnoh. (Código: [App.tsx#13](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/App.tsx#L13))

Más tarde se recogen los datos del pokémon mediante la llamada al endpoint `https://pokeapi.co/api/v2/pokemon/{ id }`, donde el id del pokémon se obtiene mediante separando y recogiendo el último valor de la URL a la entrada de cada pokémon que recogí con la llamada a la Pokedex. (Código: [PokemonCard.tsx#19](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/PokemonCard/PokemonCard.tsx#L19))

## Hooks

Para facilitar el proceso de este proyecto he creado los siguientes custom hooks:

### useFetch

El primero de los hooks utilizado es [useFetch.ts](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/hooks/useFetch.ts) donde se le pasa la API a llamar y el tipo de los datos que se va a recoger.

Con este hook se recoge, aparte de los datos de la API, un estado de cargado, que devuelve true mientras no se hayan agregado los datos y un mensaje de error en caso de que la llamada a la API falle.

Esta no es la primera vez en la que he hecho llamadas a API, por lo que solo he necesitado documentarme sobre como pasar el tipo de los datos. Para ello he utilizado la [documentación de TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html). 


### useLocalStorage

Se añadió el hook [useLocalStorage.tsx](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/hooks/useLocalStorage.ts), ya que a lo largo de todo el proyecto se hacen diferentes llamadas al localStorage, ya sea para el tema, el estilo de layout o los pokémon favoritos escogidos.

Para recoger un valor del localStorage se le pasa la clave del valor y un valor por defecto en caso de que esa clave no exista. (Código: [useLocalStorage.ts:1](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/hooks/useLocalStorage.ts#L1))

Y para cambiar o añadir uno de los valores se le pasa a la función la clave y el nuevo valor. (Código: [useLocalStorage.ts:5](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/hooks/useLocalStorage.ts#L5))

## Páginas

La aplicación se divide en dos páginas: Pokedex (inicio) y Favoritos. La primera es la página de la Pokedex completa de la región de Sinnoh, y la segunda es la página con los pokémon favoritos que el usuario ha seleccionado.

### Rutas

Para la creación de las rutas que dan acceso a las diferentes páginas se ha utilizado la librería de [react-router-dom](https://reactrouter.com/en/main). Donde se le pasa al componente de las páginas el array de las entradas de pokémon, ya sea los datos resultantes de la llamada a la API, como el listado con los pokémon favoritos. (Código: [App.tsx#37](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/App.tsx#L37C2-L37C2))

### Pokedex

Ambas páginas usan la página [Pokedex](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/pages/Pokedex/Pokedex.tsx), ya que ambas muestran la misma información y los mismos componentes y vistas, y solo cambia el listado de Pokémon que se le manda.

En él se declara el estado para el layout y se asigna al localStorage (Código: [Pokedex.tsx#19](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/pages/Pokedex/Pokedex.tsx#L19C1-L19C1)). Al mismo tiempo se define la acción al hacer click sobre la [carta de un pokémon](#carta-de-pokémon), es decir, se hace una transición de cerrar y abrir el detalle del pokémon y se modifica el estado del pokémon seleccionado (Código: [Pokedex.tsx#25](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/pages/Pokedex/Pokedex.tsx#L25)).

## Vistas

La página [Pokedex](#pokedex) se divide en dos vistas, listado y detalle.

### Vista del listado

En la vista [ListView](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/views/ListView/ListView.tsx) se muestra el listado de pokémon por medio de botones/cartas. 

Esta vista se puede modificar mediante el [Conmutador de layout](#conmutador-de-layout) que asigna una clase al bloque del listado dependiendo si es `grid` o `list`. (Código: [ListView.tsx#40](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/ListView/ListView.tsx#L40C47-L40C47))

En la vista se declara si un pokémon está activo para asignarle la clase `active`. (Código: [ListView.tsx#28](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/ListView/ListView.tsx#L28))

En esta vista se llama al componente [Paginación](#paginación), al que le pasa la página actual, la página máxima, el offset y el límite. (Código: [ListView.tsx#23](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/ListView/ListView.tsx#L23) [ListView.tsx#56](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/ListView/ListView.tsx#L56))

Para recoger la página actual se ha utilizado el hook de `useSearchParams` de [react-router-dom](https://reactrouter.com/en/main), que añade un query a la URL de la web y que más tarde servirá para cambiar la pagina actual. (Código: [ListView.tsx#25](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/ListView/ListView.tsx#L25))

### Vista de detalle

Por otro lado, está la vista [DetailView]() que muestra información más detalla del pokémon como es una imagen del pokémon como las estadísticas de este.

En la parte superior se encuentra un botón de favoritos, que añade y elimina el pokémon del listado de favoritos, que se podrá ver en la ruta de favoritos.  (Código: [DetailView.tsx#35](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/DetailView/DetailView.tsx#L35))

Asimismo, se puede ver en dispositivos más pequeños un botón para cerrar el detalle, ya que en estos dispositivos el detalle se superpone a la lista, bloqueando así la interacción con ella. (Código: [DetailView.tsx#44](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/views/DetailView/DetailView.tsx#L44))


## Componentes

### Topbar

El componente [Topbar](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/Topbar/Topbar.tsx) es la barra de navegación que se encuentra al principio de la aplicación y está visible en todas las páginas.

En el topbar se encuentra el botón para cambiar el tema de claro a oscuro y viceversa. Para ello se ha creado un estado que se almacenará en el localStorage y que modificará la clase que utiliza el `:root` de la aplicación. (Código: [Topbar.tsx#10](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Topbar/Topbar.tsx#L10))

### Botón de menú/navegación

El botón de menú [MenuButton](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/MenuButton/MenuButton.tsx) se ha creado como componente, ya que tiene una lógica aparte debido a que al hacer click sobre él se realiza una animación de cerrado y apertura, que se utiliza mediante el elemento `<animate>` del `<svg>`. (Código: [MenuButton.tsx#10](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/MenuButton/MenuButton.tsx#L10) [MenuButton.tsx#38](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/MenuButton/MenuButton.tsx#L38))

La utilización del elemento `<animate>` la desconocía previamente, por lo que gracias a [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate) pude explotarlo para la animación del botón. Asimismo, se encontraba otro problema, ¿cómo podía ejecutar una animación de un elemento?, y encontré esta pregunta en [stackoverflow](https://stackoverflow.com/questions/8455773/svg-trigger-animation-with-event) que resolvía todas mis dudas.

### Carta de pokémon

En el componente [PokemonCard](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/PokemonCard/PokemonCard.tsx) se muestra un botón con la información base de los pokémon, como son el nombre, id, tipos y sprite. Esté botón es llamado por la [vista del listado](#vista-del-listado) donde se puede seleccionar el pokémon que se quiere ver en detalle.

Dentro de este componente se hace la llamada a la API con los detalles del pokémon, que serán enviados a mediante la función al hacer click en el componente al estado del pokémon seleccionado en [Pokedex](#pokedex). (Código: [PokemonCard:23](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/PokemonCard/PokemonCard.tsx#L23))

### Tipo de pokémon

El componente [PokemonType](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/PokemonType/PokemonType.tsx) solo muestra un bloque con el nombre del tipo enviado por props y modifica la clase del color de fondo dependiendo del tipo.

### Paginación

El componente [Pagination](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/Pagination/Pagination.tsx) se puede considerar uno de los más complicados con respecto a la lógica. Ya que no solo es mostrar los botones para cambiar de página, sino también una lógica para que solo se muestre la página actual junto a la anterior y la siguiente, unos botones para pasar a la página siguiente, la primera y última página, y un detalle de tres puntos `...` que representa a páginas que no se están mostrando en ese momento. Entre todos esos botones solo son estáticos los que representan la primera y la última página. La funcionalidad para utilizar la función para modificar la query de la URL mediante el hook `useSearchParams` se obtuvo mediante [este enlace](https://dev.to/ngprnk/how-to-use-usesearchparams-with-react-router-v6-4g5h).

Comenzando con la lógica, primero he añadido los botones para pasar a la página anterior y siguiente independientemente de la página actual. Su lógica consiste en que solo aparecen si se cumple que la página actual no es 1 para el botón de página anterior, y si la página no es la última para el botón de página siguiente. (Código: [Pagination.tsx#29](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L29) [Pagination.tsx#65](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L65))

Continuando con el botón de la página actual y sus contiguos, que se representan mediante un vector que recorre los números desde el 2 al número máximo de páginas menos 1. Donde se pudo encontrar la forma de hacerlo por medio de la documentación de [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range). Donde su lógica consiste en que solo aparecerá si es la página actual o es la página anterior o posterior a la página actual. (Código: [Pagination.tsx#23](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L23) [Pagination.tsx#45](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L45))

Y por último los detalles `...` que consiste en solo mostrarlos en caso de sí la página actual es mayor que 3 en el caso de la primera mitad de números, ya que al siempre mostrar la primera página, la página actual y la previa al estar en la posición 3 se debe mostrar las páginas 1, 2 y 3, por lo que al estar en la página 4 se mostrará tal que `1 ... 3 4 5`. De la misma forma con la segunda mitad de las páginas, pero solo cuando la página actual sea menor al número de páginas menos 2. (Código: [Pagination.tsx#39](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L39) [Pagination.tsx#55](https://github.com/pedrorxmos/pokedex-sinnoh/blob/e4662cde6ababb4be4028f271058aedbddd54ed1/src/components/Pagination/Pagination.tsx#L55))

### Conmutador de layout

El conmutador [LayoutSwitcher]() es un componente que cambia el layout que se muestra en la [vista del listado](#vista-del-listado), donde solo llama a la función para modificar el estado del layout que se llama desde [Pokedex](#pokedex).

### Icono

Con el componente [Icon](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/Icon/Icon.tsx) se devuelve un elemento `<svg>` al que se le pasa por props el nombre del icono que se va a querer mostrar como el tamaño de este. 

Esto es posible gracias a un vector que se mapea y que devuelve el contenido que se le va a añadir al elemento `<svg>`. (Código: [svgContent.tsx](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/Icon/svgContent.tsx))

### Pokeball

Este componente [Pokeball](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/src/components/Pokeball/Pokeball.tsx) únicamente muestra la imagen svg que se muestra de la imagen del pokémon seleccionado en la [vista de detalle](#vista-de-detalle), que al mismo tiempo está animada para girar constantemente.

Para poder hacer girar la pokeball no podía utilizar el elemento `<animate>` que he mencionado antes en el [botón del menú](#botón-de-menúnavegación), por lo que me documente para una alternativa que pudiera rotar un `<svg>`, y así encontré `<animateTransform>` en la documentación de [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform) que permite hacer una rotación continua a la imagen.

## Tipado

Como he mencionado antes, mis conocimientos de TypeScript eran muy limitados y muy básicos, debido a que previamente a este proyecto solo he visto una pequeña parte de un curso online del framework Angular CLI, el cual utiliza TypeScript. Aunque esto no me ha limitado para poder realizar este proyecto. 

Uno de los retos han sido poder añadir un tipo en la declaración de una función que ha sido pasada mediante los props, por lo que me documente con [este link](https://bobbyhadz.com/blog/react-typescript-pass-function-as-prop).

Otro reto fue el poder mandar al hook [useFetch](#usefetch) el tipo para los datos que se reciben de la API, que ya fue explicado en su sección el cómo conseguí obtener esa información.

### Interfaces

Para poder hacer más cómodo el añadir un tipado a cada una de las variables y funciones he creado una carpeta ([interfaces](https://github.com/pedrorxmos/pokedex-sinnoh/tree/main/src/interfaces)) que almacena todas las interfaces utilizadas que son exportadas y se pueden utilizar en cada uno de los archivos del proyecto. Como el añadir en todos los componentes, páginas y vistas una interfaz para los props que se le pasan a cada uno de ellos.

Para poder hacer la interfaz de la [Pokedex]() que se recibe mediante la primera llamada a la API de la pokedex emplee la herramienta [JSON to TypeScript](https://transform.tools/json-to-typescript) donde transforme la respuesta de la API de Pokedex en interfaces de TypeScript.

## Testing

Y finalmente he realizado un poco de testing, que como he mencionado antes, he utilizado [Jest](https://jestjs.io/) y [Testing Library](https://testing-library.com/). Previo al proyecto he visto un poco de testing en React mediante un curso online de React. Aunque mis conocimientos son escasos en tema de testing, he probado a añadir un par de pruebas para comprobar que el contenido y algunas de las funcionalidades se muestran y ejecutan debidamente.

Para documentar acerca de las pruebas que he realizado, enseñaré un par de ejemplos:
- Mostrar un texto al renderizar un componente: [Pokedex.test.tsx#20](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/tests/pages/Pokedex.test.tsx#L20), donde primero renderizo la página de la pokedex dentro de un elemento `<MemoryRouter>`, que es necesario porque la aplicación utiliza [react-router-dom](https://reactrouter.com/en/main), y esperamos que en la pantalla se muestre un texto igual al título que se le ha pasado a la pokedex.
- Ejecuta una función con un valor: [DetailView.test.tsx#165](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/tests/views/DetailView.test.tsx#L165), que al pasarle una función para añadir/eliminar un pokémon de favoritos, se le añade un `role` al botón de favorito para luego ejecutar un click sobre él con `fireEvent.click()` sobre él y finalmente esperar que la función haya sido llamada con la entrada que se le había pasado previamente al detalle.
- Comprobar que se ha modificado un estado: [Topbar.test.tsx#17](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/tests/components/Topbar.test.tsx#L17), en el que se simula el hook `useState` de React y después se ejecuta un click sobre el botón para el cambio de tema y luego esperar que la función para asignar el estado se haya llamado con el valor `'dark'`, ya que `'light'` viene por defecto al ejecutar la aplicación por primera vez. Para poder realizar esta prueba me apoyé en [este documento de LinkedIn](https://www.linkedin.com/pulse/mocking-react-hooks-usestate-useeffect-leonard-lin/).
- Si muestra o no muestra un elemento en pantalla: [Pagination.test.tsx#174](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/tests/components/Pagination.test.tsx#L174) [Pagination.test.tsx#187](https://github.com/pedrorxmos/pokedex-sinnoh/blob/main/tests/components/Pagination.test.tsx#L187) donde llama al componente de paginación teniendo la página correspondiente para que se muestre o no el botón para la siguiente página y espera que la longitud del vector que devuelve el query por role sea 1 o 0, que significa que lo muestra o no lo muestra en pantalla, respectivamente. 

Todos estos test se han repetido en la mayoría de los componentes, páginas y vistas variando los parámetros y esperando resultados distintos dependiendo de la prueba que se quiso ejecutar.

## Resultado

Se puede ver el despliegue de la aplicación realizado en Netlify mediante el link: https://pokedex-sinnoh.netlify.app