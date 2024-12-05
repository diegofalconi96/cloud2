const express = require('express'); //llamado a framework
const clienteHandler = require('./app/handlers/cliente.handler'); //llamar a handlers del api
const productoHandler = require('./app/handlers/producto.handler');
const proveedorHandler = require('./app/handlers/proveedor.handler');
const empleadoHandler = require('./app/handlers/empleado.handler');
const ventaHandler = require('./app/handlers/venta.handler');
//variable para encapsular rutas
const router = express.Router();

//registrar las rutas 
// rutas de clientes
router.get('/clientes', clienteHandler.listCliente); //obtener Cliente
router.post('/clientes', clienteHandler.insertCliente); //insertar Cliente
router.patch('/clientes/:id', clienteHandler.updateCliente); //actualizar Cliente
router.delete('/clientes/:id', clienteHandler.deleteCliente); //eliminar Cliente


// rutas de Productos
router.get('/productos', productoHandler.listProducto); //obtener Productos
router.post('/productos', productoHandler.insertProducto); //insertar Producto
router.patch('/productos/:id', productoHandler.updateProducto); //actualizar Producto
router.delete('/productos/:id', productoHandler.deleteProducto); //eliminar Producto


// rutas de Proveedores
router.get('/proveedores', proveedorHandler.listProveedor); //obtener Proveedores
router.post('/proveedores', proveedorHandler.insertProveedor); //insertar Proveedor
router.patch('/proveedores/:id', proveedorHandler.updateProveedor); //actualizar Proveedor
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor); //eliminar Proveedor


// rutas de Empleados
router.get('/empleados', empleadoHandler.listEmpleado); //obtener Empleados
router.post('/empleados', empleadoHandler.insertEmpleado); //insertar Empleado
router.patch('/empleados/:id', empleadoHandler.updateEmpleado); //actualizar Empleado
router.delete('/empleados/:id', empleadoHandler.deleteEmpleado); //eliminar Empleado


// rutas de Ventas
router.get('/ventas', ventaHandler.listVenta); //obtener Ventas
router.post('/ventas', ventaHandler.insertVenta); //insertar Venta
router.patch('/ventas/:id', ventaHandler.updateVenta); //actualizar Venta
router.delete('/ventas/:id', ventaHandler.deleteVenta); //eliminar Venta


module.exports = router;