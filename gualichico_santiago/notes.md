# Inicializar el proyecto npm init -y

# Instalar dependencias 
npm install express   # framework de desarrollo de node
npm install knex      # configuracion de base de datos 
nmp install objection # insatlar el ORN de node
npm install mysql2    # intalar odbc de Node

# Instalar libreria para levantar el servidor 
npm install --save-dev nodemon         //--save-dev sirve par aque solo se apliqu el servicio unicamente dentro del proyecto

# Iniciar una configuracion knex
npx knex init

# Crear migraciones 
npx knex migrate:make nombre_tabla
# migrar
npx knex migrate:latest

# revertir cambios 
npx knex migrate:rollback

# en pakage.json se pude agregar comandos personalisados y para invocarlos se necesita
npm run nombre_funcion