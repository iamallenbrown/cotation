-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 21 jan. 2023 à 06:12
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cotation`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `IdAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `NomAdmin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PrenomsAdmin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UsernameAdmin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PwdAdmin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmailAdmin` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdAdmin`),
  UNIQUE KEY `Admin_UsernameAdmin_key` (`UsernameAdmin`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`IdAdmin`, `NomAdmin`, `PrenomsAdmin`, `UsernameAdmin`, `PwdAdmin`, `EmailAdmin`) VALUES
(1, 'NUlle', 'Jo', 'superadmin', '123456', 'admin@smmc.mg');

-- --------------------------------------------------------

--
-- Structure de la table `cars`
--

DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `IdVehicule` int(11) NOT NULL AUTO_INCREMENT,
  `Matricule` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Marque` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Version` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EtatVehicule` enum('NEUVE','OCCASION','CAMION','ENGIN','REMORQUE') COLLATE utf8mb4_unicode_ci NOT NULL,
  `PoidsVehicule` int(11) NOT NULL,
  `PoidsColis` int(11) NOT NULL,
  `Amorcage` int(11) NOT NULL,
  `DateArriveeAuPort` datetime(3) NOT NULL,
  PRIMARY KEY (`IdVehicule`),
  UNIQUE KEY `Cars_Matricule_key` (`Matricule`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cars`
--

INSERT INTO `cars` (`IdVehicule`, `Matricule`, `Marque`, `Version`, `EtatVehicule`, `PoidsVehicule`, `PoidsColis`, `Amorcage`, `DateArriveeAuPort`) VALUES
(14, 'sdvsdvb', 'vgbnjvh', 'kbh', 'NEUVE', 2, 1, 15, '2023-01-28 00:00:00.000'),
(10, 'XGGXF6', 'BMW', 'X6', 'OCCASION', 5, 2, 10, '2023-02-05 00:00:00.000'),
(13, '5620XHGT', 'Nissan', 'Skyline', 'OCCASION', 2, 1, 20, '2023-01-15 00:00:00.000'),
(15, 'YORAM5857', 'Karenjy', 'Latest', 'NEUVE', 2, 1, 20, '2023-01-19 00:00:00.000');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `IdClient` int(11) NOT NULL AUTO_INCREMENT,
  `NomClient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PrenomsClient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UsernameClient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PwdClient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EmailClient` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdClient`),
  UNIQUE KEY `Client_UsernameClient_key` (`UsernameClient`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`IdClient`, `NomClient`, `PrenomsClient`, `UsernameClient`, `PwdClient`, `EmailClient`) VALUES
(4, 'MAROJORO', 'Josino', 'zozy', '123456', 'razozy@smmc.mg'),
(5, 'KOKITH', 'Kokith', 'kokith', '123456', 'kokith@smmc.mg');

-- --------------------------------------------------------

--
-- Structure de la table `cota`
--

DROP TABLE IF EXISTS `cota`;
CREATE TABLE IF NOT EXISTS `cota` (
  `RefCota` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`RefCota`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('e9ed6d35-8889-4ff7-b480-672a024bb72b', 'fc8f755b20a8b21d870f2984108311224ba06b8a273bb46b56cf0b957d66d627', '2023-01-17 14:14:38.230', '20230117141438_mig', NULL, NULL, '2023-01-17 14:14:38.122', 1),
('92f2bd17-0073-47fd-8617-043e06d3e0b7', 'e4afedb88ea3b6653eff2f41370fd2317360efb38e4308694d9652ed5d8b3b71', '2023-01-17 15:09:50.512', '20230117150950_mig', NULL, NULL, '2023-01-17 15:09:50.243', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
