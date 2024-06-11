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

## Despliegue de TODO Machine en Github Pages

1. `npm run build` => para crear una versión de producción
2. Inmediatamente se crea una nueva carpeta `build` con los archivos estáticos del proyecto
3. La carpeta `/build` está ignorada en el archivo `.gitignore` porque no queremos guardarla en los commit's del desarrollo de nuestro proyecto, únicamente en la versión para producción
4. Vamos a la carpeta `build` y copiamos con clicj derecho el 'path' del archivo `index.html`
5. Si ensayamos esta url, observamos que no funciona `/Users/imac/Developer/curso-react-intro/public/index.html`, entonces tenemos que hacer un ajuste
6. Copiamos la url `/Users/imac/Developer/curso-react-intro/build/index.html`
7. Abrimos el archivo `package.json` y agregamos al final la siguiente configuración con la url pero sin el archivo `index.html`, entonces le borramos esta parte a la url y lo dejamos así:

"homepage": "/Users/imac/Developer/curso-react-intro/build/"

8. Volvemos a correr el comando para que borre la carpeta `build` y la cree nuevamente => `npm run build`

9. Si copiamos el path nuevamente del `index.html` que se encuentra dentro de la carpeta `build`, y lo pegamos en el navegador, vemos que ahora si abre nuestra aplicación

10. Pero lo que queremos no es desplegar en local sino en nuestro repositorio de github pages, entonces vamos a modificar lo siguiente en el archivo `package.json`:

"homepage": "http://creacionfinanciera.github.io/curso-react-intro"

11. Ahora tenemos que generar una nueva rama en nuestra aplicación, que se llame `gh-pages` y esa rama debe tener únicamente la carpeta `build`, para eso instalamos esta herramienta => `npm i --save-dev gh-pages`

12. Observamos que se genera automáticamente esto en el archivo `package.json`:
 
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }

13. Agregamos manualmente en nuestro `package.json`, en la sección `"scripts"`:

"deploy": "gh-pages -d build",

14. Tambien agregamos arribita de lo anterior, esta línea, para asegurarnos de que cuando se ejecute `"deploy"`, siempre haya una carpeta `build` previamente, y que no se vaya a generar un error:

"predeploy": "npm run build",

14. Y finalmente para desplegar => `npm run deploy`
15. Vamos al repositorio en github pages, y verificamos que haya sido creada la rama `gh-pages`, si entramos a esa rama vamos a ver únicamente un archivo `index.html`

16. Entramos a `settings`, `pages` y encontraremos la url para usar nuestra aplicación

## Presentación de proyectos para tu portafolio

La presentación es muy importante para tu portafolio profesional, si no comunicas bien todo lo que sabes, o todos los proyectos que has desplegado, nadie te va a contratar, sea un manager o un cliente.

- Tener los commits bien organizados es muy importante
- `Settings`, `branches` => podemos definir que rama queremos que se muestre por defecto
- El archivo `README.md` tambien debe ser lo más descriptivo y claro posible, puesto que es lo que va a leer la persona que consulte tu repositorio. La url con la aplicación desplegada podemos agregarla al principio con una leyenda dirigida a tu futuro manager, para que el manager la consulte. Tambien podemos agregar el link con el archivo del diseño en `figma`. Tambien se puede compartir el link con el prototipo, si quieres.
- Organizar para que en la sección de repositorios salgan aquellos que queremos => `customize your pins`

## Diferencias entre versiones de React.js

1. Entramos al archivo `package.json` y modificamos la versión en las dependencias:

"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
  },

2. Borramos nuestra carpeta de `node_modules` => `rm -rf node_modules`

3. Borramos tambien el archivo `package-lock.json` => `rm package-lock.json`

4. Instalamos la versión de React que le especificamos en el `package.json` => `npm install`

5. Ejecutar nuevamente nuestro proyecto => `npm start`

6. Si nos sale un error, tenemos que buscar en la documentación o en foros, stackover flow, google, chatgpt, hasta que identifiquemos que fue lo que cambio entre las versiones. Es muy bueno hacerlo usando la documentación de React, porque ahí esta el paso a paso para hacer el cambio de versiones.

7. Hay muchas empresas que usan las versiones anteriores de React como `React 13`, por eso es muy importante saber hacer estos cambios entre versiones.

## ¿Cuando realmente necesitas React.js?

Puede que haya proyectos en los cuales no necesitemos tanta interacción, sino que sea una página web por ejemplo.

En estos momentos React es una librería, un framework progresivo, pero también un arquitectura, porque tiene todo un entorno desarrollo que se relaciona con muchas otras cosas, incluso con otros frameworks, tiene muchisima demanda laboral, es super poderoso!

## React con Create React App

1. Crear el proyecto y definirle un nombre => `npx create-react-app cratest`. La diferencia entre usar npm y npx, es que npx crear todas las dependencias, crea el proyecto y después borra las dependencias, dejandonos solamente el proyecto
3. Entramos a la carpeta del proyecto
4. Abro el proyecto creado en VSC, y aparecen todas las carpetas y los archivos creados
5. Eso es todo!

Puedes crear tus primeros proyectos con esta herramienta.

## React con Next.js

`Next.js` es un framework super popular de React.js, nos permite utilizar servers de rendering, utilizar su propio router, su propia optimización de imagenes, su propia optimización de fuentes. Es un framework bastante completo y bastante cómodo de usar, también ha tenido una explosión de popularidad inmensa, es el mejor competido de `Create React App` a nivel de uso.

1. Crear el proyecto y definirle un nombre => `npx create-next-app@latest nexttest`
2. Nos pregunta si queremos usar `typescript` => YES/NO => `N`
3. Nos pregunta si queremos usar `ESlint` => YES/NO => `N`
4. Entramos a la carpeta del proyecto
5. Abro el proyecto creado en VSC, y aparecen todas las carpetas y los archivos creados
6. Entramos al archivo `package.json`:
  - `"dev": "next dev"` => para levantar un entorno de desarrollo 
  - `"build": "next build"` => para crear el build de producción
  - `"start": "next start"` => para arrancar la aplicación estando en producción
  - `"lint": "next lint"` 
7. Tambien tiene versiones en las dependencias, así que si estamos trabajando en una versión diferente, habría que hacer el mismo proceso de actualización de versiones que se tiene que hacer con React

8. Next.js es un framework `fullstack`, es decir, no es solamente un framework de desarrollo frontend, sino que por una parte nos dejar seguir trabajando con server-side rendering y por otra parte no solamente nos deja seguir trabajando con el sevidor de Node, sino que tambien nos permite crear nuestras propias API's dentro del mismo proyecto.

## Reacy con Vite

Vite es la herramienta más reciente de las tres, pero ha tenido un crecimiento espectacular.

1. Crear el proyecto y definirle un nombre => `npm create vite@latest vitetest`
2. Dependiendo de tu versión de npm vas a tener que ejecutar el anterior comando de una forma u otra, si tienes una versión por debajo de la `7` tendriamos que hacerlo de la siguiente manera ...
3. `npm create vite@latest vitetest -- --template react`
4. Entramos a la carpeta creada para el proyecto
5. `npm install`
6. Abro el proyecto creado en VSC, y aparecen todas las carpetas y los archivos creados
7. Vite recomienda que si vamos a usar archivos de `jsx` pues usemos esa extensión









