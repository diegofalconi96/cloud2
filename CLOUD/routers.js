const express = require('express'); //llamado a framewok

//llamado a handlers del api
const customerHandler = require('./app/handlers/customer.handler');
const employeeHandler = require('./app/handlers/employee.handler');
const supplierHandler = require('./app/handlers/supplier.handler');
const productsHandler = require('./app/handlers/products.handler');
const ordersHandler =  require('./app/handlers/orders.handler');
const salesHandler =  require('./app/handlers/sales.handler');


// variable para encapsular rutas
const router = express.Router();

// Registrar las rutas
// rutas de customer

router.get('/costumers', customerHandler.listCustomer); //obtener cliente
router.post('/costumers', customerHandler.insertCustomer); //insertar cliente
router.patch('/costumers/:id', customerHandler.updateCustomer); // actualizar cliente
router.delete('/costumers/:id', customerHandler.deleteCustomer); //eliminar cliente
router.get('/employee', employeeHandler.listEmployee);
router.post('/employee', employeeHandler.insertEmployee);
router.patch('/employee/:id', employeeHandler.updateEmployee);
router.delete('/employee/:id', employeeHandler.deleteEmployee);
router.get('/supplier', supplierHandler.listSupplier);
router.post('/supplier', supplierHandler.insertSupplier);
router.patch('/supplier/:id', supplierHandler.updateSupplier);
router.delete('/supplier/:id', supplierHandler.deleteSupplier);
router.get('/products', productsHandler.listProducts);
router.post('/products', productsHandler.insertProducts);
router.patch('/products/:id', productsHandler.updateProducts);
router.delete('/products/:id', productsHandler.deleteProducts);
router.get('/orders', ordersHandler.listOrders);
router.post('/orders', ordersHandler.insertOrders);
router.patch('/orders/:id', ordersHandler.updateOrders);
router.delete('/orders/:id', ordersHandler.deleteOrders);
router.get('/sales', salesHandler.listSales);
router.post('/sales', salesHandler.insertSales);
router.patch('/sales/:id', salesHandler.updateSales);
router.delete('/sales/:id', salesHandler.deleteSales);

module.exports = router;