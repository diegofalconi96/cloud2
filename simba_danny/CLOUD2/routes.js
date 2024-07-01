const express=require('express');//llamado a framework
//llamar a handler del api
const generosHandler=require('./app/handlers/generos.handler');
const directoresHandler=require('./app/handlers/directores.handler');
const paisesHandler=require('./app/handlers/paises.handler');
const peliculasHandler=require('./app/handlers/peliculas.handler');
const cartelerasHandler=require('./app/handlers/carteleras.handler');
//variable para encapsular rutas
const router=express.Router();
//registrar las rutas
//rutas generos
router.get('/generos',generosHandler.listGeneros);//obtener generos
router.post('/generos',generosHandler.insertGenero);//insert genero
router.patch('/generos/:id_genero',generosHandler.updateGenero);//actualizar genero
router.delete('/generos/:id_genero',generosHandler.deleteGenero);//eliminar genero
//rutas Directores
router.get('/directores',directoresHandler.listDirectores);//obtener generos
router.post('/directores',directoresHandler.insertDirector);//insert genero
router.patch('/directores/:id_director',directoresHandler.updateDirector);//actualizar genero
router.delete('/directores/:id_director',directoresHandler.deleteDirector);//eliminar genero
//ruta Paises
router.get('/paises',paisesHandler.listPaises);//obtener generos
router.post('/paises',paisesHandler.insertPais);//insert genero
router.patch('/paises/:id_pais',paisesHandler.updatePais);//actualizar genero
router.delete('/paises/:id_pais',paisesHandler.deletePais);//eliminar genero
//ruta Peliculas
router.get('/peliculas',peliculasHandler.listPeliculas);//obtener generos
router.post('/peliculas',peliculasHandler.insertPelicula);//insert genero
router.patch('/peliculas/:id_pelicula',peliculasHandler.updatePelicula);//actualizar genero
router.delete('/peliculas/:id_pelicula',peliculasHandler.deletePelicula);//eliminar genero
//ruta Carteleras
router.get('/carteleras',cartelerasHandler.listCarteleras);//obtener generos
router.post('/carteleras',cartelerasHandler.insertCartelera);//insert genero
router.patch('/carteleras/:id_cartelera',cartelerasHandler.updateCartelera);//actualizar genero
router.delete('/carteleras/:id_cartelera',cartelerasHandler.deleteCartelera);//eliminar genero


module.exports=router;