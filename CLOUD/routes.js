const express = require('express'); //Llamado a framework

//Llamar a handlers del API
const clienteHandler = require('./app/handlers/cliente.handler');
const empleadoHandler = require('./app/handlers/empleado.handler');
const proveedorHandler = require('./app/handlers/proveedor.handler');
const productoHandler = require('./app/handlers/producto.handler');
const ventaHandler = require('./app/handlers/venta.handler');

//Variable para encapsular rutas
const router = express.Router();

//Registrar las rutas

//Rutas del Cliente
router.get('/cliente',clienteHandler.listarClientes) //Obtener Clientes
router.post('/cliente',clienteHandler.insertarCliente) //insertar Cliente
router.patch('/cliente/:id',clienteHandler.actualizarCliente) //actualizar Cliente
router.get('/cliente/:id',clienteHandler.eliminarCliente) //eliminar Cliente

//Rutas del Empleado
router.get('/empleado',empleadoHandler.listarEmpleados) //Obtener Empleados
router.post('/empleado',empleadoHandler.insertarEmpleado) //insertar Empleado
router.patch('/empleado/:id',empleadoHandler.actualizarEmpleado) //actualizar Empleado
router.get('/empleado/:id',empleadoHandler.eliminarEmpleado) //eliminar Empleado

//Rutas del Proveedor
router.get('/proveedor',proveedorHandler.listarProveedores) //Obtener Proveedores
router.post('/proveedor',proveedorHandler.insertarProveedor) //insertar Proveedor
router.patch('/proveedor/:id',proveedorHandler.actualizarProveedor) //actualizar Proveedor
router.get('/proveedor/:id',proveedorHandler.eliminarProveedor) //eliminar Proveedor

//Rutas del Producto
router.get('/producto',productoHandler.listarProductores) //Obtener Productoes
router.post('/producto',productoHandler.insertarProducto) //insertar Producto
router.patch('/producto/:id',productoHandler.actualizarProducto) //actualizar Producto
router.get('/producto/:id',productoHandler.eliminarProducto) //eliminar Producto

//Rutas del Venta
router.get('/venta',ventaHandler.listarVentas) //Obtener Ventas
router.post('/venta',ventaHandler.insertarVenta) //insertar Venta
router.patch('/venta/:id',ventaHandler.actualizarVenta) //actualizar Venta
router.get('/venta/:id',ventaHandler.eliminarVenta) //eliminar Venta

// Otra ruta
module.exports = router;

//Descargar postman con cuenta o insomnia