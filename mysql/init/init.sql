-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Oct 04, 2024 at 07:41 PM
-- Server version: 9.0.1
-- PHP Version: 8.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--
CREATE DATABASE IF NOT EXISTS `db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `db`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Desserts'),
(2, 'Coffee'),
(3, 'Money'),
(4, 'Fruits'),
(5, 'Food'),
(6, 'Scene');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `url` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `user_id`, `category_id`, `title`, `url`) VALUES
(1, 572949, 1, 'Stacked Brwonies', 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg'),
(2, 324989, 2, 'Shallow focus photography of Cafe Latte', 'https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg'),
(3, 222549, 1, 'Sliced Cake on White Saucer', 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg'),
(4, 545066, 2, 'Beverage breakfast brewed coffee caffeine', 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg'),
(5, 122861, 1, 'Pancake with Sliced Strawberry', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(6, 545066, 3, 'US One doller bills', 'https://images.pexels.com/photos/545064/pexels-photo-545064.jpeg'),
(7, 545066, 4, 'Fresh Assortment of Bananas, Grapes, and Pomegranate', 'https://images.pexels.com/photos/545027/pexels-photo-545027.jpeg'),
(8, 572949, 1, 'Berry Tarts Topped with Fresh Yogurt and Oats', 'https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg'),
(9, 572949, 5, 'Fruit Salads in Plate', 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg'),
(10, 572949, 5, 'Person Holding Food Bowl', 'https://images.pexels.com/photos/1334128/pexels-photo-1334128.jpeg'),
(11, 324989, 6, 'St patrick cathedral', 'https://images.pexels.com/photos/19403554/pexels-photo-19403554/free-photo-of-st-patrick-cathedral.jpeg'),
(12, 324989, 6, 'Sulawesi Utara, Indonesia', 'https://images.pexels.com/photos/6626165/pexels-photo-6626165.jpeg'),
(13, 324989, 6, 'Minimalist Skylight Framing a Clear Blue Sky', 'https://images.pexels.com/photos/6626100/pexels-photo-6626100.jpeg'),
(14, 122861, 5, 'Salami With Sunny Sideup Egg', 'https://images.pexels.com/photos/376463/pexels-photo-376463.jpeg'),
(15, 222549, 6, 'Outdoor Dining with a Stunning Mountain and Lake View', 'https://images.pexels.com/photos/15621034/pexels-photo-15621034.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `stars` int DEFAULT NULL,
  `avatar_url` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `stars`, `avatar_url`) VALUES
(122861, 'Ash Craig', 'ash-craig', 0, 'https://images.pexels.com/users/avatars/122861/ash-craig-647.jpeg'),
(222549, 'Quang Nguyen Vinh', 'quang-nguyen-vinh', 6, 'https://images.pexels.com/users/avatars/222549/quang-nguyen-vinh-611.jpeg'),
(324989, 'Kevin Menajang', 'kevinmenajang', 0, 'https://images.pexels.com/users/avatars/324989/kevin-menajang-679.jpeg'),
(545066, 'Burst', 'burst', 0, 'https://images.pexels.com/lib/avatars/purple.png'),
(572949, 'Ella Olson', 'ella-olsson', 1, 'https://images.pexels.com/users/avatars/572949/ella-olsson-169.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=572950;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `image_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
