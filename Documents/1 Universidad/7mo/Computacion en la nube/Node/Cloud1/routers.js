const express = require('express'); // Llamando al framework

//Llamar a handlers del api
const customerHandler = require('./app/handlers/customer.handler');

//Variable para encapsular rutas
const router = express.Router();

//Registrar las rutas
// rutas de customer
router.get('/customers', customerHandler.listCustomer)//Obtener cliente
router.post('/customers', customerHandler.insertCustomer)//Insertar Cliente
router.patch('/customers/:id', customerHandler.updateCustomer)//Actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)//Eliminar cliente

//Otras rutas ...
module.exports = router;

