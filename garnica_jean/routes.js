const express = require('express'); // llamando al framework

//llamar al handlers del api
const customerHandler = require('./app/handlers/customer.handler');
//nuevos llamados
const cargaHandler = require('./app/handlers/carga.handler');
const conductorHandler = require('./app/handlers/conductor.handler');
const inspeccionadorHandler = require('./app/handlers/inspeccionador.handler');
const provedorHandler = require('./app/handlers/provedor.handler');
const vehiculoHandler = require('./app/handlers/vehiculo.handler');

// variable para encapsular rutas
const router = express.Router();

//registrar rutas 
// rutas de customer
router.get('/customers', customerHandler.listCustomer)// obtener cliente
router.post('/customers', customerHandler.insertCustomer)//insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer)// actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)// elminar

// otras rutas


router.get('/Cargas', cargaHandler.listCarga)// obtener cliente
router.post('/Cargas', cargaHandler.insertCarga)//insertar cliente
router.patch('/Cargas/:id', cargaHandler.updateCarga)// actualizar cliente
router.delete('/Cargas/:id', cargaHandler.deleteCarga)// elminar


router.get('/Conductores', conductorHandler.listConductor)// obtener cliente
router.post('/Conductores', conductorHandler.insertConductor)//insertar cliente
router.patch('/Conductores/:id', conductorHandler.updateConductor)// actualizar cliente
router.delete('/Conductores/:id', conductorHandler.deleteConductor)// elminar

router.get('/Inspeccionadores', inspeccionadorHandler.listInspeccionador)// obtener cliente
router.post('/Inspeccionadores', inspeccionadorHandler.insertInspeccionador)//insertar cliente
router.patch('/Inspeccionadores/:id', inspeccionadorHandler.updateInspeccionador)// actualizar cliente
router.delete('/Inspeccionadores/:id', inspeccionadorHandler.deleteInspeccionador)// elminar

router.get('/Provedores', provedorHandler.listProvedor)// obtener cliente
router.post('/Provedores', provedorHandler.insertProvedor)//insertar cliente
router.patch('/Provedores/:id', provedorHandler.updateProvedor)// actualizar cliente
router.delete('/Provedores/:id', provedorHandler.deleteProvedor)// elminar

router.get('/Vehiculos', vehiculoHandler.listVehiculo)// obtener cliente
router.post('/Vehiculos', vehiculoHandler.insertVehiculo)//insertar cliente
router.patch('/Vehiculos/:id', vehiculoHandler.updateVehiculo)// actualizar cliente
router.delete('/Vehiculos/:id', vehiculoHandler.deleteVehiculo)// elminar

module.exports = router;