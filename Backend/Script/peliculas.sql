-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-08-2021 a las 13:50:42
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pelicula`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--
-- Creación: 02-08-2021 a las 11:20:16
--

CREATE TABLE `peliculas` (
  `nombre` varchar(100) NOT NULL,
  `img` text DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `idPelicula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`nombre`, `img`, `activo`, `idPelicula`) VALUES
('batman', 'https://es.web.img2.acsta.net/medias/nmedia/18/67/07/47/20134039.gif', 1, 1),
('Superman', 'https://i.pinimg.com/originals/e3/43/f5/e343f597c79e5c55d1cdd80c634017ca.jpg', 1, 2),
('Flash', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUXGBcaGxsbGxsaGxsaGxoaGxoaHRsXHhsbICwkGx4pIhsbJTYmKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjIpJCkyMjI7MjIyMjQyNDIyMjIyMjQyMjIyMjIyMjIyM', 1, 3),
('cars 3', 'jajajjaja', 1, 9),
('cars 3', 'jajajjaja', 1, 10),
('cars 3', 'jajaja', 1, 11),
('cars 3', 'C:\\Users\\diegoagustin.ramirez\\Pictures\\01.jpg', 1, 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`idPelicula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `idPelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
