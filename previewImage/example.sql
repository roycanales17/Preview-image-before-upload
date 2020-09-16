-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2020 at 01:44 AM
-- Server version: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `example`
--

-- --------------------------------------------------------

--
-- Table structure for table `example`
--

CREATE TABLE `example` (
  `img_id` int(11) NOT NULL,
  `img_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `example`
--

INSERT INTO `example` (`img_id`, `img_name`) VALUES
(43, 'img/haleakala-3840x2160-4k-hd-wallpaper-maui-mountain-volcano-island-819.jpg'),
(44, 'img/mountains-2560x1440-huawei-matebook-e-2019-hd-21836.jpg'),
(45, 'img/switzerland-2560x1440-4k-5k-wallpaper-alps-mountains-stars-night-5713.jpg'),
(46, 'img/mountains-3840x2160-4k-hd-wallpaper-snow-forest-12804.jpg'),
(47, 'img/thailand-3840x2160-4k-5k-wallpaper-8k-mountains-mist-river-6201.jpg'),
(48, 'img/landing-force-2560x1440-airlift-delivery-soldier-parachute-military-1501.jpg'),
(49, 'img/the-witcher-2560x1440-poster-henry-cavill-4k-22515.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `example`
--
ALTER TABLE `example`
  ADD PRIMARY KEY (`img_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `example`
--
ALTER TABLE `example`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
