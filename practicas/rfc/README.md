## Aplicación para Generar el RFC

Sincronizar desde la rama main y crear una nueva rama con tu nombre acompañado del ejercicio. Ejemplo: feature/yareni-rfc

Tomar como referencia lo que hicimos en los ejercicios de calculadora, peliculas y crearemos una carpeta dentro de la carpeta prácticas/rfc con nuestro nombre. Ejemplo: rfc-yareni Crear el archivo con tu nombre. Ejemplo rfcyareni.js y rfcyareni.html

Crear una aplicación que solicite al Usuario desde la pagina web los siguientes datos: a) Nombre(s) b) Apellido Paterno c) Apellido Materno d) Dia de Nacimiento (2 digitos) e) Mes de Nacimiento (2 digitos) f) Año de Nacimiento (2 digitos)

Utilizando las siguientes reglas, crearemos el RFC del Usuario. Ejemplo: YARENI MARISOL GÓMEZ CORDOVA. Fecha de nacimiento: 06/JUNIO/2000. RFC: GOCY-000606-XXX

a) Se toman las primeras 2 letras del Apellido Paterno. La segunda letra requiere ser una vocal.

b) Se toma la primer letra del Apellido Materno.

c) Se toma la primer letra del Nombre.

d) Concatenamos ambos valores y añadimos los 2 digitos del año, mes y día

e) Por último, añadimos la homoclave con un valor fijo XXX.

f) Esta información debe de ser en mayusculas.

Cuando la termines, mandas tu Pull Request.
