const express = require('express'); // llamado a framework

// llamar a handlers del api 
const clienteHandler = require('./app/handlers/clientes.handler');
const productoHandler = require('./app/handlers/producto.handler');
const pedidosHandler = require('./app/handlers/pedidos.handler');
// variable para encapsular rutas
const router = express.Router();

//registrar las rutas
// rutas del cliente
router.get('/clientes', clienteHandler.listaCliente) // obtener clienteproducto
router.post('/clientes', clienteHandler.insertarCliente) // insertar clienteproducto
router.patch('/clientes/:id', clienteHandler.updateCliente) // actualizar clienteproducto
router.delete('/clientes/:id', clienteHandler.deleteCliente) // eliminar clienteproducto

// rutas del producto
router.get('/producto', productoHandler.listaProducto); // obtener producto
router.post('/producto', productoHandler.insertarProducto); // insertar producto
router.patch('/producto/:id', productoHandler.updateProducto); // actualizar producto
router.delete('/producto/:id', productoHandler.deleteProducto); // eliminar producto


// rutas del pedido
router.get('/pedidos', pedidosHandler.listaPedido) // obtener producto
router.post('/pedidos', pedidosHandler.insertarPedido) // insertar producto
router.patch('/pedidos/:id', pedidosHandler.updatePedido) // actualizar producto
router.delete('/pedidos/:id', pedidosHandler.deletePedido) // eliminar producto

module.exports = router;

