# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# The project

Este es el proyecto final del curso de React Js de [Coderhouse](https://www.coderhouse.com/). A lo largo del curso he aprendido las bases del lenguaje. Para afianzarlos, lleve los mismos a la práctica implementándolos en el proyecto. 

## Description

El proyecto es un ecommerce de un local ubicando en la localidad donde vivo actualmente. El proyecto es 100% funcional donde es posible: 

- ver listado de los productos ofrecidos. Los mismos se filtran dependiendo de la categoría.
- ver detalle de cada uno de los mismos.
- agregar la cantidad de productos que se desean comprar con un límite de cantidad en base al stock disponible. 
- carrito de compras completamente funcional: borrar carrito, borrar items, precio total, botón para simular un checkout. 
- se utilizó Firebase y mas específicamente Firestore como base de datos no relacional para alojar los productos que se encuentran disponibles en el local. En el mismo, además, cuando se quiere realizar una compra se debe llenar un formulario el cual crea una nueva coleccion dentro de la misma con el nombre *orders* la cual tiene detalles de los productos comprados, el comprador, la fecha y el total a pagar. 

## What I use

### Componentes

El proyecto se desarrolló con componentes basados en funciones. Dentro de los mismos, podemos dividir a los mismos en dos tipos: los **componentes presentacionales** y los **componentes contenedores**.

#### Componentes presentacionales.

Como su nombre lo indica, su única función es mostrar datos e información. Estos poseen nula o casi nula lógica y son aquellos que son pasibles de ser reutilizables. Por ejemplo: 

- Item
- ItemDetail
- CartButtons

#### Componentes contenedores

Son aquellos componentes que encapsulan a otros componentes y poseen toda la lógica del proyecto (modifican estados, se enganchan a hooks, entre otros.). Por ejemplo:

- ItemListContainer
- ItemDetailContainer

### Hooks

A lo largo del mismo se han utilizado varios hooks para hacer tareas específicas en React. Podemos engancharnos a los estados y a los ciclos de vida de los componentes por lo que son sumamente útiles. Entre los más destacados puedo señalar: 

| Hook     | Description                                     |
|----------|-------------------------------------------------|
|UseState  | Permite engancharnos al estado de un componente |
|UseEffect | Permite engancharnos al ciclo de vida de un componente. |
|UseContext| Permite tener un contexto global al cual nos podemos enganchar desde cualquier componenete en cualquier nivel sin la necesidad de pasar props de padres a hijos|
|UseParams | Facilita la creación, redirección y anidación de las rutas dentro del proyecto. |    

### Routes & navigation 

Para el enrutado se utilizó **React-Router-Dom**. Es una dependencia que no viene con React, sino que debemos instalarla.
A través del mismo he realizado rutas dinámicas, es decir, con parámentros, pero también rutas estáticas. 
Considero que es una herramienta complicada de entender al principio, pero muy necesaria a la hora de enrutar nuestra aplicacion React dado que mejora la navegabilidad permitiendo a los usuarios entender en donde están parados, a los crawlers conocer la estructura de la app y a los navegadores conocer las acciones de ir para adelante y para atras. 

## Conclusion 

A lo largo del curso, he ido aprendiendo distintos conceptos y herramientas que nos da React para poder desarrollar páginas web. Tengo conocimientos sólidos de las bases de esta librería de JavaScript y considero que es de suma importancia para mi objetivo: convertirme en desarrollaor web. Considero que es una herramienta que voy a utilizar mucho en el futuro no solo por sus grandes beneficios, sino también porque es una tecnología que está ampliamente aceptada y utilizada en el mundo del desarrollo web, es por tal motivo que deseo convertirme en un experto en la misma. El camino es largo, pero he arrancado de la mejor manera gracias al curso de Coderhouse. 

