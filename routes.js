const express = require('express');
const customerHandler = require('./app/handlers/customer.handler');
const proveedorHandler = require('./app/handlers/Proveedor.handler');
const productoHandler = require('./app/handlers/Producto.handler');
const facturaHandler = require('./app/handlers/factura.handler');
const detalleFacturaHandler = require('./app/handlers/detalleFactura.handler');
//encapsura rutas 
const router = express.Router();


//registrar las rutas 
// rutas de customer
router.get('/customers', customerHandler.listCustomer)
router.post('/customers', customerHandler.insertCustomer)
router.patch('/customers/:id', customerHandler.updateCustomer)
router.delete('/customers/:id', customerHandler.deleteCustomer)


// rutas proveedor
router.get('/proveedores', proveedorHandler.listProveedor)
router.post('/proveedores', proveedorHandler.insertProveedor)
router.patch('/proveedores/:id', proveedorHandler.updateProveedor)
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor)

// otras rutas ..

//rutas producto
router.get('/productos', productoHandler.listProducto)
router.post('/productos', productoHandler.insertProducto)
router.patch('/productos/:id', productoHandler.updateProducto)
router.delete('/productos/:id', productoHandler.deleteProducto)

//rutas factura
router.get('/facturas', facturaHandler.listFactura)
router.post('/facturas', facturaHandler.insertFactura)
router.patch('/facturas/:id', facturaHandler.updateFactura)
router.delete('/facturas/:id', facturaHandler.deleteFactura)

router.get('/detalle_facturas', detalleFacturaHandler.listDetalleFactura)
router.post('/detalle_facturas', detalleFacturaHandler.insertDetalleFactura)
router.patch('/detalle_facturas/:id', detalleFacturaHandler.updateDetalleFactura)
router.delete('/detalle_facturas/:id', detalleFacturaHandler.deleteDetalleFactura)


module.exports = router;