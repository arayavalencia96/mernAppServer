# TASKS
Task application, made with React, NodeJS, Express &amp; Mysql.

El proyecto se divide en parte client(frontend), parte server(backend).

### El proyecto consiste en poder hacer el CRUD con tareas, en la pantalla principal se muestran todas las tareas, cada tarjeta es una tarea diferente en donde tienen tres botones, eliminar, modificar y marcar como compleatada o no (con una cruz no realizada o un tick marcada como hecha).

El la realización del mismo se utilizó las siguientes tecnologías: React + vite, nodeJS, Express & Mysql. Cabe mencionar que la página esta diseñada 
para que se visualice correctamente tanto en PC cómo en celulares.

Cabe mencionar que este repo esta subido a heroku mediante el siguiente link: https://mernappfullstack-job.herokuapp.com/ en donde se puede probar por navegador obtener
todas las tareas o una, y ya con POSTMAN, INSOMNIA o Thunder Client (extensión de vscode) se pueden probar todos los metodos HTTP (put, delete, etc).

**SERVER:** Dentro de la carpeta server nos encontraremos dos carpetas llamadas: controllers y routes, y 3 archivos más:

controllers: dentro de tasks.controller.js se realiza el CRUD de la parte de backend.

routes: dentro de tasks.routes.js se realiza el ruteo para probar el CRUD con los metodos HTTP.

index.js: Se realiza la configuración general para la utilización de express, las cores, la conexión a la base de datos, entre otros.
