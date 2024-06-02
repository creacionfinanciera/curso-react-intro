# CURSO DE REACT.JS

## ¿Qué necesitas para aprender React.js?
1. `git clone git@github.com:platzi/curso-react-intro.git` => clonamos el proyecto del repositorio de github
2. Entramos a la carpeta del directorio clonado
3. `npm install` => instalamos las dependencias
4. `npm start` => iniciamos un servidor de desarrollo y abre la aplicación en el servidor `localhost:3000`

## ¿Qué es un componente?

Revisando el archivo `package.json`, en los `scripts`:
- `start` => nos sirve para ejecutar nuestro proyecto, y es el comando que utilizaremos mientras estemos desarrollandolo en local, en nuestra computadora
- `build` => nos sirve para generar una versión de nuestro proyecto que podamos desplegar a producción

## Iconos en React: librerías y SVG

1. Una de las librerías más utilizadas para importar íconos es `React Icons`, esta librería tiene todos los iconos que hay sobre la faz de la tierra, es muy completa!
2. `https://react-icons.github.io/react-icons/` => para ingresar a la página
3. `npm install react-icons --save` => para instalar la librería en la terminal

Nota: Si el equipo de diseño de nuestra empresa ya tiene los iconos diseñados, no podemos utilizar estos iconos estandar, de lo contrario podemos hacerlo

## Local Storage con React

Local Storage es una herramienta que nos ayuda a hacer persistencia de datos en el navegador, eso significa que cuando los usuarios entren al navegador, guarden información en Local Storage y después se vayan, es decir, que cierren la pestaña, que cierren la ventana del navegador o incluso que apaguen el computador, y despues vuelvan a prender el comptador, abrir el navegador y abrir la pestaña con nuestra aplicación, ahí sigan teniendo la información, que no se haya borrado.

Eso es lo que nos permite Local Storage, y lo que vamos a implementar en nuestra aplicación, para que nuestros TODOS no siempre aparezcan como los 'defaultTodos' que es el array que tenemos por defecto, sino que cada cambio que nosotros hagamos no solo se guarde en el estado sino también en Local Storage y por supuesto que cuando carguemos nuestra aplicación, el estado inicial sea el mismo que local storage y así se vayan comunicando todo el tiempo, para que nuestra aplicación no solamente sea interactiva sino también que tenga persistencia.

Los siguientes comandos se escriben directamente en la consola:

`localStorage` => para consultar todo lo que está guardado en el navegador
`localStorage.setItem('prueba32', 'lalalalala')` => para guardar algo nuevo en el navegador
`localStorage.getItem('prueba32')` => para consultar algo específico en el navegador

Vemos que así recargue el navegador, la información seguirá estando ahí.

`localStorage.removeItem('prueba32')` => para borrar algo existente en el navegador

Local Storage no puede guardar estructuras complejas, únicamente puede guardar strings, entonces si queremos guardar por ejemplo un arreglo debemos usar la herramienta `JSON.stringify` para convertir un arreglo en un `string`.

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];
localStorage.setItem('TODOS_V1', defaultTodos);

`JSON.stringify(defaultTodos)`

Y obtenemos esto ... que se encuentra convertido en un string entre las comillas ''

`[{"text":"Cortar cebolla","completed":true},{"text":"Tomar el curso de Intro a React.js","completed":false},{"text":"Llorar con la Llorona","completed":false},{"text":"LALALALALA","completed":false},{"text":"Usar estados derivados","completed":true}]`

`JSON.stringify(defaultTodos).length` => si obtenemos la cantidad de caracteres vemos que hay muchos, '250', porque esta contando cada uno de los caracteres que tiene ese string.

`localStorage.setItem('TODOS_V1', stringifiedTodos)` => asi podemos guardar la variable en local storage

`localStorage.getItem('TODOS_V1')` => asi consultamos que realmente la variable quedo guardada en local storage

`const localStorageTodos = localStorage.getItem('TODOS_V1')` => guardamos en una variable

`let parsedItems = JSON.parse(localStorageTodos)` => convertiemos a strings

De esta forma volvemos a convertir el string en un array
`const stringifiedTodos = JSON.stringify(defaultTodos)`
`JSON.parsed(stringifiedTodos)`

ESTAS CONVERSIONES DEBEMOS HACERLAS CADA VEZ QUE QUERAMOS GUARDAR ALGO EN LOCAL STORAGE, ASI COMO TRAERLO DE LOCAL STORAGE.

## Reto: estados para abrir y cerrar un modal

Siempre que estemos haciendo cambios es importantisimo estar haciendo los commits, porque de esta manera podemos ir a consultar los commits anteriores, y ver exactamente cuales son los cambios que se estan haciendo, y asi poder comparar y entender.

1. `git log` => consulto los commits efectuados
2. `c739483cd98ed009ddabd58a9f9bcbe34fda8de8` => Copio el identificador del commite que me interesa revisar
3. `git diff c739483cd98ed009ddabd58a9f9bcbe34fda8de8` => asi me muestra todos los cambio que he hecho hasta el momento, comparados con ese commit en específico

