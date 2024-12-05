const express = require('express');

// llamar al controlador del api
const customerControlador = require('./app/controlador/customer.controlador');
const regostroControlador = require('./app/controlador/registro.controlador');
const reservaControlador = require('./app/controlador/reserva.controlador');
const productoControlador = require('./app/controlador/producto.controlador');
const pedidoControlador = require('./app/controlador/pedidos.controlador');
const eventoControlador = require('./app/controlador/eventos.controlador');



// Importar un ruteador / Variable para encapsular rutas

const router = express.Router();

// registrar las rutas
// rutas de customer

// get --> obtener cliente 

router.get('/customers', customerControlador.listCustomer) // Mandarle parámetros para me ejecute una función del archivo customer
router.post('/customers', customerControlador.insertCustomer) // Post --> para insertar cliente
router.patch('/customers/:id', customerControlador.updateCustomer) // patch --> para actualizar cliente
router.delete('/customers/:id', customerControlador.deleteCustomer) // eliminar cliente (Establecimiento de parámetros ":id")

// otras rutas ...

// Registro

router.get('/registros', regostroControlador.listRegistro) // Mandarle parámetros para me ejecute una función del archivo registro
router.post('/registros', regostroControlador.insertRegistro) // Post --> para insertar registro
router.patch('/registros/:id', regostroControlador.updateRegistro) // patch --> para actualizar registro
router.delete('/registros/:id', regostroControlador.deleteRegistro) // eliminar registro (Establecimiento de parámetros ":id")

// Reserva

router.get('/reservas', reservaControlador.listReserva) // Mandarle parámetros para me ejecute una función del archivo reserva
router.post('/reservas', reservaControlador.insertReserva) // Post --> para insertar producto
router.patch('/reservas/:id', reservaControlador.updateReserva) // patch --> para actualizar producto
router.delete('/reservas/:id', reservaControlador.deleteReserva) // eliminar reserva (Establecimiento de parámetros ":id")

// Producto

router.get('/productos', productoControlador.listProducto) // Mandarle parámetros para me ejecute una función del archivo producto
router.post('/productos', productoControlador.insertProducto) // Post --> para insertar producto
router.patch('/productos/:id', productoControlador.updateProducto) // patch --> para actualizar producto
router.delete('/productos/:id', productoControlador.deleteProducto) // eliminar producto (Establecimiento de parámetros ":id")

// Pedidos

router.get('/pedidos', pedidoControlador.listPedido) // Mandarle parámetros para me ejecute una función del archivo pedido
router.post('/pedidos', pedidoControlador.insertPedido) // Post --> para insertar pedido
router.patch('/pedidos/:id', pedidoControlador.updatePedido) // patch --> para actualizar pedido
router.delete('/pedidos/:id', pedidoControlador.deletePedido) // eliminar pedido (Establecimiento de parámetros ":id")

// Eventos

router.get('/eventos', eventoControlador.listEvento) // Mandarle parámetros para me ejecute una función del archivo pedido
router.post('/eventos', eventoControlador.insertEvento) // Post --> para insertar pedido
router.patch('/eventos/:id', eventoControlador.updateEvento) // patch --> para actualizar pedido
router.delete('/eventos/:id', eventoControlador.deleteEvento) // eliminar pedido (Establecimiento de parámetros ":id")


module.exports = router;