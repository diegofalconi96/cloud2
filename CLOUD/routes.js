const express = require('express');
const router = express.Router();

// Importa los controladores adecuados
const customerHandler = require('./app/handlers/customer.handler');
const productHandler = require('./app/handlers/productos.handler'); // Corregido a productHandler
const categoryHandler = require('./app/handlers/categorias.handler'); // Corregido a categoryHandler
const reviewHandler = require('./app/handlers/reviews.handler');
const orderHandler = require('./app/handlers/orders.handler');

// Rutas para clientes (customers)
router.get('/customers', customerHandler.listCustomer);
router.post('/customers', customerHandler.insertCustomer);
router.put('/customers/:id', customerHandler.updateCustomer);
router.delete('/customers/:id', customerHandler.deleteCustomer);

// Rutas para productos (products)
router.get('/products', productHandler.listProducts); // Corregido a productHandler
router.post('/products', productHandler.insertProduct); // Corregido a productHandler
router.put('/products/:id', productHandler.updateProduct); // Corregido a productHandler
router.delete('/products/:id', productHandler.deleteProduct); // Corregido a productHandler

// Rutas para categorías (categories)
router.get('/categories', categoryHandler.listCategories); // Corregido a categoryHandler
router.post('/categories', categoryHandler.insertCategory); // Corregido a categoryHandler
router.put('/categories/:id', categoryHandler.updateCategory); // Corregido a categoryHandler
router.delete('/categories/:id', categoryHandler.deleteCategory); // Corregido a categoryHandler

// Rutas para reviews
router.get('/reviews', reviewHandler.listReviews);
router.post('/reviews', reviewHandler.createReview);
router.put('/reviews/:id', reviewHandler.updateReview);
router.delete('/reviews/:id', reviewHandler.deleteReview);

// Rutas para órdenes (orders)
router.get('/orders', orderHandler.listOrders);
router.post('/orders', orderHandler.createOrder);
router.put('/orders/:id', orderHandler.updateOrder);
router.delete('/orders/:id', orderHandler.deleteOrder);

module.exports = router;

