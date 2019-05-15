# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: MISCELLANEOUS
# Generation Time: 2019-05-15 07:43:06 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Credentials
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Credentials`;

CREATE TABLE `Credentials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `website` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `extra` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `website` (`website`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Credentials` WRITE;
/*!40000 ALTER TABLE `Credentials` DISABLE KEYS */;

INSERT INTO `Credentials` (`id`, `website`, `email`, `username`, `password`, `extra`)
VALUES
	(1,'GoDaddy.com','lakshyasinghal333@gmail.com','lakshya_singhal333@gmail.com','Nitj10103035','pin:3035'),
	(2,'timesinternet.in',NULL,NULL,'3035nitj1010',NULL),
	(3,'HDFC NB',NULL,NULL,'nitj10103530',NULL),
	(4,'CCAvenue',NULL,NULL,'Champion1!',NULL),
	(5,'wix.com',NULL,NULL,'nitj1010',NULL),
	(6,'mailchimp','lakshyasinghal333@gmail.com','lakshyasinghal333@gmail.com','Champion1!',NULL),
	(7,'Netflix',NULL,'lakshyasinghal33@gmail.com','my_netflix',NULL);

/*!40000 ALTER TABLE `Credentials` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Links
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Links`;

CREATE TABLE `Links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` varchar(30) NOT NULL,
  `Topic` varchar(30) DEFAULT NULL,
  `Link` varchar(200) NOT NULL,
  `Creation_Date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Link` (`Link`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Links` WRITE;
/*!40000 ALTER TABLE `Links` DISABLE KEYS */;

INSERT INTO `Links` (`id`, `Subject`, `Topic`, `Link`, `Creation_Date`)
VALUES
	(1,'Networking',NULL,'https://www.howtogeek.com/148664/how-and-why-all-devices-in-your-home-share-one-ip-address/','2018-12-11 00:09:20'),
	(2,'Networking',NULL,'https://www.howtogeek.com/184310/ask-htg-should-i-be-setting-static-ip-addresses-on-my-router/','2018-12-11 00:09:20'),
	(3,'Networking',NULL,'https://www.h3xed.com/web-and-internet/whats-the-difference-between-external-and-local-ip-addresses','2018-12-11 00:09:20'),
	(4,'Networking',NULL,'https://www.iplocation.net','2018-12-11 00:09:20'),
	(5,'MySQL','Stored Procedures','http://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx','2018-12-13 16:49:33'),
	(6,'Website Performance',NULL,'https://www.crazyegg.com/blog/speed-up-your-website/','2018-12-18 16:00:47'),
	(7,'Website Performance',NULL,'https://blog.hubspot.com/marketing/reduce-http-requests','2018-12-18 16:01:03'),
	(8,'MySQL','SQL Injection','https://www.netsparker.com/blog/web-security/sql-injection-vulnerability/#PreventingSQL','2018-12-24 18:27:04'),
	(9,'MySQL','Dummy Data','http://filldb.info','2019-01-11 13:58:27');

/*!40000 ALTER TABLE `Links` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table RequiredDatabases
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RequiredDatabases`;

CREATE TABLE `RequiredDatabases` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `RequiredTables` tinytext,
  `Priority` tinyint(4) DEFAULT '2',
  `CreationDate` date NOT NULL,
  `LastModifiedDate` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `RequiredDatabases` WRITE;
/*!40000 ALTER TABLE `RequiredDatabases` DISABLE KEYS */;

INSERT INTO `RequiredDatabases` (`Id`, `Name`, `RequiredTables`, `Priority`, `CreationDate`, `LastModifiedDate`)
VALUES
	(1,'Interview Preparation','Questions,Concepts',5,'2018-12-13','2018-12-13'),
	(2,'Resume','TechnicalSkills,Summary,CurrentRole,Projects',3,'2018-12-13','2018-12-14'),
	(3,'Finance','Transactions',2,'2018-12-14','2018-12-14'),
	(4,'Enjoyment','Hobbies',2,'2018-12-14','2018-12-14');

/*!40000 ALTER TABLE `RequiredDatabases` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `RD_default_date` BEFORE INSERT ON `RequiredDatabases` FOR EACH ROW BEGIN
IF (isnull(NEW.CreationDate)) THEN
SET NEW.CreationDate=CURRENT_DATE;
END IF;

IF (isnull(NEW.LastModifiedDate)) THEN
SET NEW.LastModifiedDate=CURRENT_DATE;
END IF;
END */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `RD_update_lmd` BEFORE UPDATE ON `RequiredDatabases` FOR EACH ROW SET NEW.LastModifiedDate=CURDATE() */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;



--
-- Dumping routines (PROCEDURE) for database 'MISCELLANEOUS'
--
DELIMITER ;;

# Dump of PROCEDURE GetAllLinks
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `GetAllLinks` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `GetAllLinks`()
BEGIN
SELECT * from Links;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
