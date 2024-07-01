const express = require('express'); //llamando a framework

//llamar a handlers para api
const customerHandler = require('./app/handlers/customer.handler');
const productHandler = require('./app/handlers/product.handler');
const pymentMethodHandler = require('./app/handlers/pymentMethod.handler');
const orderHandler = require('./app/handlers/order.handler');
const invoiceHandler = require('./app/handlers/invoice.handler');
const saleHandler = require('./app/handlers/sale.handler');


//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//rutas de customer
router.get('/customers', customerHandler.listCustomer) //obtener cliente
router.post('/customers', customerHandler.insertCustomer)// insertar cliente
router.patch('/customers/:id', customerHandler.updateCustomer)//actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)//eliminar cliente

//registrar las rutas
//rutas de products
router.get('/products', productHandler.listProduct) //obtener 
router.post('/products', productHandler.insertProduct)// insertar 
router.patch('/products/:id', productHandler.updateProduct)//actualizar 
router.delete('/products/:id', productHandler.deleteProduct)//eliminar 

//registrar las rutas
//rutas de pymentMethods
router.get('/pymentMethods', pymentMethodHandler.listPymentMethod) //obtener 
router.post('/pymentMethods', pymentMethodHandler.insertPymentMethod)// insertar 
router.patch('/pymentMethods/:id', pymentMethodHandler.updatePymentMethod)//actualizar 
router.delete('/pymentMethods/:id', pymentMethodHandler.deletePymentMethod)//eliminar 

//registrar las rutas
//rutas de orders
router.get('/orders', orderHandler.listOrder) //obtener 
router.post('/orders', orderHandler.insertOrder)// insertar 
router.patch('/orders/:id', orderHandler.updateOrder)//actualizar 
router.delete('/orders/:id', orderHandler.deleteOrder)//eliminar 

//registrar las rutas
//rutas de invoices
router.get('/invoices', invoiceHandler.listInvoice) //obtener 
router.post('/invoices', invoiceHandler.insertInvoice)// insertar 
router.patch('/invoices/:id', invoiceHandler.updateInvoice)//actualizar 
router.delete('/invoices/:id', invoiceHandler.deleteInvoice)//eliminar 

//registrar las rutas
//rutas de sales
router.get('/sales', saleHandler.listSales) //obtener 
router.post('/sales', saleHandler.insertSales)// insertar 
router.patch('/sales/:id', saleHandler.updateSales)//actualizar 
router.delete('/sales/:id', saleHandler.deleteSales)//eliminar 


//otras rutas .....
module.exports=router;