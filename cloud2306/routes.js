const express = require('express');

// llamar a handler del api
const genreHandler = require('./app/handlers/genre.handler');
const authorHandler = require('./app/handlers/author.handler');
const bookHandler = require('./app/handlers/book.handler');

// variable para encapsular rutas
const router = express.Router();

// registrar las rutas
// rutas de generos

router.get('/genres', genreHandler.listGenre); // obtener los generos
router.post('/genres', genreHandler.insertGenre); // insertar genero
router.patch('/genres/:id', genreHandler.updateGenre); // actualizar genero (aqui se le manda un parametro)
router.delete('/genres/:id', genreHandler.deleteGenre); // eliminar genero

//RUTAS PARA AUTORES
router.get('/authors', authorHandler.listAuthor); // obtener los generos
router.post('/authors', authorHandler.insertAuthor); // insertar genero
router.patch('/authors/:id', authorHandler.updateAuthor); // actualizar genero (aqui se le manda un parametro)
router.delete('/authors/:id', authorHandler.deleteAuthor); // eliminar genero

//RUTAS PARA LIBROS
router.get('/books', bookHandler.listBook); // obtener los generos
router.post('/books', bookHandler.insertBook); // insertar genero
router.patch('/books/:id', bookHandler.updateBook); // actualizar genero (aqui se le manda un parametro)
router.delete('/books/:id', bookHandler.deleteBook); // eliminar genero

module.exports = router; //siempre debe terminar con esto para exportar el objeto que estabamos configurando
