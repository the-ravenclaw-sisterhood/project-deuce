# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: influence_ya
# Generation Time: 2019-07-06 13:09:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table company
# ------------------------------------------------------------

DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(256) NOT NULL,
  `bio` varchar(256) NOT NULL DEFAULT '',
  `max_price` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `influencer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `influencer_id` (`influencer_id`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`influencer_id`) REFERENCES `influencer` (`influencer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;

INSERT INTO `company` (`company_id`, `company_name`, `bio`, `max_price`, `email`, `password`, `influencer_id`)
VALUES
	(1,'lacroix','somewhat bland water',1000000,'lacroix@gmail.com','lacroix123',NULL),
	(2,'nike','athletic merch',2000000,'nike@gmail.com','nike123',NULL),
	(3,'marriot','your home away from home',3000000,'marriot@gmail.com','marriot123',NULL),
	(4,'wendys','burgers and fries',4000000,'wendys@gmail.com','wendys123',NULL),
	(5,'bud light','quality brews',5000000,'buds@gmail.com','buds123',NULL);

/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table influencer
# ------------------------------------------------------------

DROP TABLE IF EXISTS `influencer`;

CREATE TABLE `influencer` (
  `influencer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `bio` varchar(256) DEFAULT '',
  `followers` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`influencer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `influencer` WRITE;
/*!40000 ALTER TABLE `influencer` DISABLE KEYS */;

INSERT INTO `influencer` (`influencer_id`, `first_name`, `last_name`, `email`, `password`, `bio`, `followers`, `price`)
VALUES
	(1,'hanzel','bread','hanzel@gmail.com','hanzel123','hi im hanzel',5000,10000),
	(2,'thadius','quantum','thad@gmail.com','thad123','hi im thad',900000,50000),
	(3,'rachel','nielson','rach@gmail.com','chel123','hi im rachel',750000,55000),
	(4,'veronica','beansby','veronica@gmail.com','ronica123','hi im veronica',600000,400000),
	(5,'johnny','lightfoot','johnny@gmail.com','john123','hi im johnny',400000,100000);

/*!40000 ALTER TABLE `influencer` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;