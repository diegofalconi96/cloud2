const express = require('express');
const router = express.Router();

const customerHandler = require('./app/models/handlers/customer.handler');
const proveedoresHandler = require('./app/models/handlers/proveedores.handler');
const productoHandler = require('./app/models/handlers/producto.handler');
const pedidosHandler = require('./app/models/handlers/pedidos.handler');
const facturaHandler = require('./app/models/handlers/factura.handler');
const empleadoHandler = require('./app/models/handlers/empleado.handler');

// Rutas para Customer
router.get('/customers', customerHandler.listCustomer);
router.post('/customers', customerHandler.insertCustomer);
router.patch('/customers/:id', customerHandler.updateCustomer);
router.delete('/customers/:id', customerHandler.deletetCustomer);

// Rutas para Proveedores
router.get('/proveedores', proveedoresHandler.listProveedores);
router.post('/proveedores', proveedoresHandler.insertProveedores);
router.patch('/proveedores/:id', proveedoresHandler.updateProveedores);
router.delete('/proveedores/:id', proveedoresHandler.deletetProveedores);

// Rutas para Producto
router.get('/producto', productoHandler.listProducto);
router.post('/producto', productoHandler.insertProducto);
router.patch('/producto/:id', productoHandler.updateProducto);
router.delete('/producto/:id', productoHandler.deleteProducto);

// Rutas para Pedidos
router.get('/pedidos', pedidosHandler.listPedidos);
router.post('/pedidos', pedidosHandler.insertPedidos);
router.patch('/pedidos/:id', pedidosHandler.updatePedidos);
router.delete('/pedidos/:id', pedidosHandler.deletetPedidos);

//factura
router.get('/factura', facturaHandler.listFactura);
router.post('/factura', facturaHandler.insertFactura);
router.patch('/factura/:id', facturaHandler.updateFactura);
router.delete('/factura/:id', facturaHandler.deletetFactura);

//empelado
router.get('/empleado', empleadoHandler.listEmpleado);
router.post('/empleado', empleadoHandler.insertEmpleado);
router.patch('/empleado/:id', empleadoHandler.updateEmpleado);
router.delete('/empleado/:id', empleadoHandler.deletetEmpleado);

module.exports = router;



