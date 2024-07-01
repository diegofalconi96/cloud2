-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2024 a las 18:31:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cloud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE `customer` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `age` int(11) DEFAULT NULL,
  `lastName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `estado`, `date`, `age`, `lastName`) VALUES
(1, 'Pepito', 'romel.ante6250@utc.edu.ec', 1, '2024-06-30 05:00:48', 22, 'Perez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `salario` decimal(8,2) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `age` int(11) DEFAULT NULL,
  `lastName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `employee`
--

INSERT INTO `employee` (`id`, `name`, `rol`, `salario`, `estado`, `date`, `age`, `lastName`) VALUES
(1, 'Romel', 'Limpieza', 500.00, 0, '2024-06-30 05:01:00', 22, 'Ante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(103, '20240611131020_create_table_customer.js', 1, '2024-06-30 05:00:07'),
(104, '20240615172924_create_table_products.js', 1, '2024-06-30 05:00:07'),
(105, '20240615173034_create_table_suppliers.js', 1, '2024-06-30 05:00:07'),
(106, '20240615173111_create_table_employee.js', 1, '2024-06-30 05:00:07'),
(107, '20240615173150_create_table_sales.js', 1, '2024-06-30 05:00:07'),
(108, '20240615173245_create_table_orders.js', 1, '2024-06-30 05:00:07'),
(109, '20240617163204_add_age_to_customer.js', 1, '2024-06-30 05:00:07'),
(110, '20240617164720_add_age_to_suppliers.js', 1, '2024-06-30 05:00:07'),
(111, '20240617164825_add_lastName_to_suppliers.js', 1, '2024-06-30 05:00:07'),
(112, '20240617164902_add_age_to_employee.js', 1, '2024-06-30 05:00:07'),
(113, '20240617164935_add_lastName_to_employee.js', 1, '2024-06-30 05:00:07'),
(114, '20240622041446_add_lastName_to_customer.js', 1, '2024-06-30 05:00:07'),
(115, '20240622042045_add_fkidCustomer_to_orders.js', 1, '2024-06-30 05:00:07'),
(116, '20240622042159_add_fkidEmployee_to_orders.js', 1, '2024-06-30 05:00:07'),
(117, '20240622042534_add_fkidSupplier_to_products.js', 1, '2024-06-30 05:00:07'),
(118, '20240622042633_add_fkidOrders_to_sales.js', 1, '2024-06-30 05:00:07'),
(119, '20240622042702_add_fkidProducts_to_sales.js', 1, '2024-06-30 05:00:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `cantidad` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `fkid_customer` int(10) UNSIGNED DEFAULT NULL,
  `fkid_employee` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `fecha`, `cantidad`, `estado`, `fkid_customer`, `fkid_employee`) VALUES
(1, '2024-06-30 05:05:31', 30, 0, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fkid_suppliers` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `cantidad`, `estado`, `date`, `fkid_suppliers`) VALUES
(1, 70, 0, '2024-06-30 05:05:22', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(10) UNSIGNED NOT NULL,
  `cantidad` int(11) NOT NULL,
  `totalVenta` decimal(8,2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `fkid_orders` int(10) UNSIGNED DEFAULT NULL,
  `fkid_products` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `cantidad`, `totalVenta`, `fecha`, `fkid_orders`, `fkid_products`) VALUES
(1, 10, 200.00, '2024-06-30 05:19:58', 1, 1),
(2, 10, 200.00, '2024-06-30 05:22:57', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `direcciom` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `age` int(11) DEFAULT NULL,
  `lastName` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `direcciom`, `telefono`, `email`, `estado`, `date`, `age`, `lastName`) VALUES
(1, 'Carlos', 'Calle Los Pinos 789', '+593 987123456', 'carlos@example.com', 1, '2024-06-30 05:05:09', 35, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_fkid_customer_foreign` (`fkid_customer`),
  ADD KEY `orders_fkid_employee_foreign` (`fkid_employee`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_fkid_suppliers_foreign` (`fkid_suppliers`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_fkid_orders_foreign` (`fkid_orders`),
  ADD KEY `sales_fkid_products_foreign` (`fkid_products`);

--
-- Indices de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT de la tabla `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_fkid_customer_foreign` FOREIGN KEY (`fkid_customer`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `orders_fkid_employee_foreign` FOREIGN KEY (`fkid_employee`) REFERENCES `employee` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_fkid_suppliers_foreign` FOREIGN KEY (`fkid_suppliers`) REFERENCES `suppliers` (`id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_fkid_orders_foreign` FOREIGN KEY (`fkid_orders`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `sales_fkid_products_foreign` FOREIGN KEY (`fkid_products`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
