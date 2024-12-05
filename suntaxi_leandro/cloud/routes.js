// routes.js
const express = require('express');
const productHandler = require('./app/handlers/product.handler');
const employeeHandler = require('./app/handlers/employee.handler');
const managerHandler = require('./app/handlers/manager.handler');
const locationHandler = require('./app/handlers/location.handler');
const customerHandler = require('./app/handlers/customer.handler');

const router = express.Router();

// Rutas para Product
router.get('/Product', productHandler.listProduct);
router.post('/Product', productHandler.insertProduct);
router.patch('/Product/:id', productHandler.updateProduct);
router.delete('/Product/:id', productHandler.deleteProduct);

// Rutas para Employee
router.get('/Employee', employeeHandler.listEmployee);
router.post('/Employee', employeeHandler.insertEmployee);
router.patch('/Employee/:id', employeeHandler.updateEmployee);
router.delete('/Employee/:id', employeeHandler.deleteEmployee);

// Rutas para Manager
router.get('/Manager', managerHandler.listManager);
router.post('/Manager', managerHandler.insertManager);
router.patch('/Manager/:id', managerHandler.updateManager);
router.delete('/Manager/:id', managerHandler.deleteManager);

// Rutas para Location
router.get('/Location', locationHandler.listLocation);
router.post('/Location', locationHandler.insertLocation);
router.patch('/Location/:id', locationHandler.updateLocation);
router.delete('/Location/:id', locationHandler.deleteLocation);

// Rutas para Customer
router.get('/Customer', customerHandler.listCustomer);
router.post('/Customer', customerHandler.insertCustomer);
router.patch('/Customer/:id', customerHandler.updateCustomer);
router.delete('/Customer/:id', customerHandler.deleteCustomer);

module.exports = router;
