## Web app de contactos con node js ,express y  passport js

Es un proyecto simple, donde se hace uso de express para crear el servidor, utilizando handlerbars como el template engine para la vista, es decir un MVC.

La autenticación está realizada con passport js

Las rutas se definen en el directorio Routes, donde se separan en apiRoutes, y webRoutes

**Rutas de api**

Inicia con " /api "

|  Rutas|Descripción  |Método HTTP|
|--|--|--|
|  /api/Contactos/User_id| Lista de los contactos que posee un usuario |GET|
|/api/Contactos|Crear un nuevo contacto|POST|


**Rutas web**
|Rutas|Descripción  |Método HTTP|
|--|--|--|
| / |  Página principal, muestra los contactos | GET|
