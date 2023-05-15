# Filmmento

## ¿Porqué Filmmento?

Es una combinación entre "Film" y "Memento", haciendo referencia las películas como recuerdos duraderos. 

## Introducción

Bienvenido a Filmmento, la biblioteca de películas que te ofrece una experiencia única en la consulta de tus películas favoritas. Con Filmmento podrás consultar información detallada sobre las películas, agregarlas a tus favoritos (si tienes una cuenta creada), descargar sus trailers y explorar la filmografía de los actores que las protagonizan.

Con una interfaz minimalista, Filmmento te ofrece una navegación intuitiva y fácil de usar para que puedas encontrar rápidamente la información que necesitas. Además, nuestra aplicación está diseñada para inspirar confianza en cada uno de nuestros usuarios, asegurando la privacidad y seguridad de tus datos.

Así que, si eres un amante del cine y buscas una aplicación potente y llena de recursos para consultar tus películas favoritas, no dudes en descargar Filmmento. ¡Te aseguramos que no te arrepentirás! [Pruébalo aquí](https://main.d2ugbwj2mr8aez.amplifyapp.com/)

## Organización

## Semana 1 (Orientativo) - 24/04/2023 - 30/04/2023
### Sabado 28:
 - [X] ~~Migración del proyecto de React a Angular 15.2.6~~
 - [X] ~~Instalación de dependencias (angular material, carousel, etc...)~~
 - [X] ~~Creación de componentes principales (home, movie-list, series-list)~~
 - [X] ~~Busqueda de componente carousel para realizar carouseles (owl-carousel)~~
### Domingo 29:
 - [X] ~~Creación de componentes carousel de películas y de series (top y más populares)~~
 - [X] ~~División de servicios, en vez de uno global, dos específicos (para peliculas y para series)~~
 - [X] ~~Mostrar la información de las películas en la aplicación a través de los carousel.~~

## Semana 2 (Orientativo) - 01/05/2023 - 07/05/2023
### Sabado 06
 - [X] ~~Crear header para administrar las rutas (peliculas, series y home)~~
 - [X] ~~Implementación de otro servicio: Busqueda por tipo~~
 - [X] ~~Creación del apartado Películas con filtrado de "populares o mejor valoradas" con un Angular Material~~
 ### Domingo 07
 - [X] ~~Creación del apartado series con filtrado de "populares o mejor valoradas" con un Angular Material~~
 - [X] ~~Revisión de rutas.~~
 - [X] ~~Implementación de la barra de búsqueda.~~

## Semana 3 (Orientativo) - 08/05/2023 - 14/05/2023
### Sabado 13
 - [X] ~~Modificación de barra de búsqueda en header (se ve debajo los resultados)~~
 - [X] ~~Replanteamiento de buscar películas o series~~
 - [X] ~~Creación de nueva ruta y servicio para busqueda de películas en página independiente~~
 - [X] ~~Implementación de vista y componente de Búsqueda de películas.~~
### Domingo 14
 - [X] ~~Boton de consultar informaicón de las películas y series en carouseles y busqueda~~
 - [X] ~~Instalación de bootstrap para mejor distribución en los detalles de las búsquedas~~
 - [X] ~~Reparación de los carousel-owl por conflicto con bootstrap~~

## Semana 4 (Orientativo) - 15/05/2023 - 21/05/2023
### Lunes 15 (FESTIVO)
 - [X] ~~Creación servicio para mostrar busquedas similares~~
 - [X] ~~Modificación y refactorización del componente de busqueda~~
 - [X] ~~Estructura y selector para "detalles" en detalles busqueda component~~
 - [X] ~~Incorporación de venta modal para ver trailer~~
 - [X] ~~Funcionalidad para ver trailer de la busqueda~~
 - [X] ~~Todos los botones de "Ver trailer" a todos los botones.~~

 
## PENDIENTE:
- [X] ~~Corrección de la búsqueda de películas (se ve debajo del todo, no debajo del input de búqueda).~~
- [X] ~~Corrección del color de las búsquedas (el texto de las películas se ve en blanco, el de las series en negro y no se ve).~~
- [X] ~~Implementación de la función que al pulsar en una pelicula de cualquier carousel, filtrar la búsqueda y redirigirla.~~
- [X] ~~Corregir la ventana modal para ver el trailer en la pagina home al pulsar el botón "Ver trailer" DESHABILITADO POR EL MOMENTO.~~
- [X] ~~Consultar API y, tras realizar una petición, mostrar los datos de la película o serie (en desarrollo).~~
- [ ] Plantear la base de datos para que un usuario registrado, al seleccionar una pelicula como favorita, pueda ver sus peliculas favoritas en su perfil (Con Spring).
- [ ] ...

## Posibles mejoras:
- [X] ~~¿Al buscar una pelicula o serie, mostrar tambien la información de los actores?.~~
- [ ] ¿Crear un apartado para personas que participen en las series o peliculas y mostrar su información?.
- [ ] ¿Firebase podrá almacenar peliculas favoritas y vistas? Plantear posibilidad.
- [ ] ...

## Requisitos funcionales

### Autenticación de usuario
1.  Los usuarios deben poder registrarse en la aplicación con su correo electrónico y contraseña, o utilizar una cuenta de Google o Facebook.
2.  Los usuarios deben poder iniciar sesión en la aplicación con su correo electrónico y contraseña, o utilizando una cuenta de Google o Facebook.
3.  Los usuarios deben poder cerrar sesión en la aplicación.

### Perfil de usuario
1.  Los usuarios deben poder ver su perfil, que incluirá su nombre, correo electrónico, foto de perfil y lista de películas favoritas y vistas.
2.  Los usuarios deben poder editar su perfil, incluyendo su nombre, correo electrónico y foto de perfil.

### Lista de películas
1.  Los usuarios deben poder buscar películas por título y ver los resultados de búsqueda.
2.  Los usuarios deben poder ver los detalles de una películao serie, incluyendo su título, año de lanzamiento, sinopsis, género, duración...
3.  Los usuarios deben poder agregar películas o series a su lista de favoritas.
5.  Los usuarios deben poder eliminar películas o series de su lista de favoritas.

## Tecnologías

### Frontend
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg" height="30px"/></a> 

<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height="30px"/></a> 

-   ***Angular:*** Framework de JavaScript para construir aplicaciones web.
-   ***Angular Router:*** Biblioteca de enrutamiento para Angular que permite navegar por diferentes vistas de la aplicación.

---

### Backend
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" height="30px"/></a>
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" height="30px"/></a>

 -   ***Firebase:*** Plataforma de Google que proporciona una variedad de servicios, incluyendo autenticación de usuario y almacenamiento de archivos.
 -   ***Spring:*** Framework de Java para construir aplicaciones web y servicios RESTful.
---

### Despliegue de la web
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" height="30px"/></a>
<a href="#">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height="30px"/></a>

 - ***Github pages:*** Servicio de alojamiento web gratuito proporcionado por GitHub. Es una forma sencilla y rápida de poner en línea sitios web estáticos, como blogs, portafolios o documentación.
 - ***Amazon Web Services (AWS):*** Amazon Web Services (AWS) es una plataforma de servicios en la nube ofrecida por Amazon. AWS es una solución escalable y altamente personalizable que puede adaptarse a una amplia variedad de necesidades.

## Documentación

### Documentación para el Frontend:
- Documentación oficial de Angular: [Angular - Getting started | Angular](https://angular.io/start)
- Documentación oficial de CSS: [CSS Tutorial (w3schools.com)](https://www.w3schools.com/css/)
- Documentación oficial de HTML: [HTML Tutorial (w3schools.com)](https://www.w3schools.com/html/)

### Documentación para el Backend:
- Documentación oficial de Spring: [Spring Framework Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/)
- Documentación oficial de Firebase: [Documentación de Firebase (google.com)](https://firebase.google.com/docs?hl=es-419)
- Documentación oficial de la API de TMDB: [The Movie Database API (themoviedb.org)](https://developers.themoviedb.org/3/getting-started/introduction)

### Documentación adicional:
-   Documentación oficial de Git: [Git - Documentation (git-scm.com)](https://git-scm.com/doc)
-   Documentación oficial de GitHub: [GitHub Documentation](https://docs.github.com/en)
-   Documentación oficial de Markdown: [Getting Started | Markdown Guide](https://www.markdownguide.org/getting-started/)
- Iconos: [DEVICON | All programming languages and development tools related icons font](https://devicon.dev/)

