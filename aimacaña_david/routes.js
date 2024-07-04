const express = require('express') //llamado al framework
//llamar a  handlers del api
const clienteHandler = require('./app/handlers/cliente.handler')
const vendedorHandler = require('./app/handlers/vendedor.handler')
const bodegaHandler = require('./app/handlers/bodega.handler')
const productoHandler = require('./app/handlers/producto.handler')
const ventaHandler = require('./app/handlers/venta.handler')
const detalleVentaHandler = require('./app/handlers/detalleVenta.handler')
//variable para encapsular rutas
const router = express.Router();

//regitrar las rutas 
//rutas de customer 
router.get('/cliente',clienteHandler.listCliente)
router.post('/cliente',clienteHandler.insertCliente)
router.patch('/cliente/:id',clienteHandler.updateCliente)
router.delete('/cliente',clienteHandler.deleteCliente)
//rutas de vendedor 
router.get('/vendedor',vendedorHandler.listVendedor)
router.post('/vendedor',vendedorHandler.insertVendedor)
router.patch('/vendedor/:id',vendedorHandler.updateVendedor)
router.delete('/vendedor',vendedorHandler.deleteVendedor)
//rutas Bodega
router.get('/bodega',bodegaHandler.listBodega)
router.post('/bodega',bodegaHandler.insertBodega)
router.patch('/bodega/:id',bodegaHandler.updateBodega)
router.delete('/bodega',bodegaHandler.deleteBodega)
// rutas de productos
router.get('/producto',productoHandler.listProducto)
router.post('/producto',productoHandler.insertProducto)
router.patch('/producto/:id',productoHandler.updateProducto)
router.delete('/producto',productoHandler.deleteProducto)
//rutas de ventas
router.get('/venta',ventaHandler.listVenta)
router.post('/venta',ventaHandler.insertVenta)
router.patch('/venta/:id',ventaHandler.updateVenta)
router.delete('/venta',ventaHandler.deleteVenta)
//rutas de detalle ventas
router.get('/detalleVenta',detalleVentaHandler.listDetalle)
router.post('/detalleVenta',detalleVentaHandler.insertDetalle)
router.patch('/detalleVenta/:id',detalleVentaHandler.updateDetalle)
router.delete('/detalleVenta',detalleVentaHandler.deleteDetalle)

//deber intalar el programa postman o insomia
module.exports = router