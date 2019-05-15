# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: Tutorials
# Generation Time: 2019-05-15 07:44:54 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Links
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Links`;

CREATE TABLE `Links` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` varchar(30) NOT NULL,
  `Topic` varchar(50) DEFAULT NULL,
  `Link` varchar(200) NOT NULL,
  `Creation_Date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Links` WRITE;
/*!40000 ALTER TABLE `Links` DISABLE KEYS */;

INSERT INTO `Links` (`Id`, `Subject`, `Topic`, `Link`, `Creation_Date`)
VALUES
	(1,'Networking','Shared Network','https://www.howtogeek.com/148664/how-and-why-all-devices-in-your-home-share-one-ip-address/','2018-12-11 00:09:20'),
	(2,'Networking','Static IP','https://www.howtogeek.com/184310/ask-htg-should-i-be-setting-static-ip-addresses-on-my-router/','2018-12-11 00:09:20'),
	(3,'Networking','External And Local IP','https://www.h3xed.com/web-and-internet/whats-the-difference-between-external-and-local-ip-addresses','2018-12-11 00:09:20'),
	(4,'Networking',NULL,'https://www.iplocation.net','2018-12-11 00:09:20'),
	(5,'MySQL','Stored Procedure','http://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx','2018-12-13 16:49:33'),
	(6,'Website Performance',NULL,'https://www.crazyegg.com/blog/speed-up-your-website/','2018-12-18 16:00:47'),
	(7,'Website Performance',NULL,'https://blog.hubspot.com/marketing/reduce-http-requests','2018-12-18 16:01:03'),
	(8,'MySQL','SQL Injection','https://www.sitepoint.com/how-to-protect-your-website-against-sql-injection-attacks/','2018-12-19 09:05:39'),
	(9,'MySQL','Composite Index','http://www.mysqltutorial.org/mysql-index/mysql-composite-index/','2018-12-19 09:06:10'),
	(10,'React',NULL,'https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658','2019-02-11 08:49:17'),
	(11,'React','Setup','https://www.robinwieruch.de/minimal-react-webpack-babel-setup/','2019-02-20 13:45:47'),
	(12,'React','tutorial','https://webpack.js.org/guides/asset-management#loading-css','2019-02-20 13:48:28'),
	(13,'React','Virtual DOM','https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e','2019-02-21 18:10:12'),
	(14,'React','Webpack','https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460','2019-02-24 10:27:15'),
	(15,'Terminal',NULL,'https://computers.tutsplus.com/tutorials/40-terminal-tips-and-tricks-you-never-thought-you-needed--mac-51192','2019-03-01 16:11:34'),
	(16,'Terminal','Taming the terminal','https://computers.tutsplus.com/articles/new-mactuts-session-taming-the-terminal--mac-45471','2019-03-01 16:14:06'),
	(17,'Javascript','Modern JS','https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70','2019-03-07 09:16:35'),
	(18,'Node','Webpack Configuration','https://webpack.js.org/guides/development/','2019-03-07 09:38:42');

/*!40000 ALTER TABLE `Links` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table MySQL_BasicCommands
# ------------------------------------------------------------

DROP TABLE IF EXISTS `MySQL_BasicCommands`;

CREATE TABLE `MySQL_BasicCommands` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Command` tinytext NOT NULL,
  `Type` varchar(100) NOT NULL,
  `Description` mediumtext,
  `Example` mediumtext NOT NULL,
  `CreationDate` date NOT NULL,
  `LastModifiedDate` date NOT NULL,
  `Proficiency` enum('BEGINNER','INTERMEDIATE','EXPERT','NINJA') DEFAULT 'BEGINNER',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `MySQL_BasicCommands` WRITE;
/*!40000 ALTER TABLE `MySQL_BasicCommands` DISABLE KEYS */;

INSERT INTO `MySQL_BasicCommands` (`Id`, `Command`, `Type`, `Description`, `Example`, `CreationDate`, `LastModifiedDate`, `Proficiency`)
VALUES
	(1,'CREATE DATABASE','CREATE',NULL,'CREATE DATABASE TUTORIALS','2018-12-12','2018-12-12','BEGINNER'),
	(2,'CREATE TABLE','CREATE',NULL,'','2018-12-12','2018-12-12','BEGINNER'),
	(4,'INSERT INTO TABLE','CREATE',NULL,'','2018-12-13','2018-12-13','BEGINNER'),
	(6,'UPDATE TABLE','UPDATE',NULL,'','2018-12-14','2018-12-14','EXPERT');

/*!40000 ALTER TABLE `MySQL_BasicCommands` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `Basic_Commands_Default_Values` BEFORE INSERT ON `MySQL_BasicCommands` FOR EACH ROW BEGIN
IF (isnull(NEW.Example)) THEN
SET NEW.Example='';
END IF;
IF (isnull(NEW.CreationDate)) THEN
SET NEW.CreationDate=CURDATE();
END IF;
IF (isnull(NEW.LastModifiedDate)) THEN
SET NEW.LastModifiedDate=CURDATE();
END IF;
END */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `Basic_Commands_LastModifieddate` BEFORE UPDATE ON `MySQL_BasicCommands` FOR EACH ROW SET NEW.LastModifiedDate=CURDATE() */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table React_Setup
# ------------------------------------------------------------

DROP TABLE IF EXISTS `React_Setup`;

CREATE TABLE `React_Setup` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Step` tinytext NOT NULL,
  `Description` text,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `React_Setup` WRITE;
/*!40000 ALTER TABLE `React_Setup` DISABLE KEYS */;

INSERT INTO `React_Setup` (`Id`, `Step`, `Description`)
VALUES
	(1,'npm init',NULL),
	(2,'npm install --save react react-dom','Installing react and react-dom'),
	(3,'npm install --save webpack webpack-dev-server','Webpack is for bundling our code in one js file'),
	(4,'npm install --save-dev babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register','Babel will convert ES6 code to ES5');

/*!40000 ALTER TABLE `React_Setup` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table terminal
# ------------------------------------------------------------

DROP TABLE IF EXISTS `terminal`;

CREATE TABLE `terminal` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Command` tinytext,
  `options` varchar(100) DEFAULT NULL,
  `Followup_Command` tinytext,
  `Other` tinytext,
  `Description` tinytext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `terminal` WRITE;
/*!40000 ALTER TABLE `terminal` DISABLE KEYS */;

INSERT INTO `terminal` (`Id`, `Command`, `options`, `Followup_Command`, `Other`, `Description`)
VALUES
	(1,'ditto',NULL,NULL,NULL,NULL),
	(2,'defaults write com.apple.finder AppleShowAllFiles -bool TRUE',NULL,'killall Finder',NULL,'Show hidden files and folders'),
	(3,'yes',NULL,NULL,NULL,NULL),
	(4,'sudo fs_usage',NULL,NULL,NULL,NULL),
	(5,'uptime',NULL,NULL,NULL,NULL),
	(6,'python -m SimpleHTTPServer 8000',NULL,NULL,NULL,NULL),
	(7,'cal',NULL,NULL,NULL,'calendar'),
	(8,'passwd',NULL,NULL,NULL,'change password'),
	(9,'whoami',NULL,NULL,NULL,NULL),
	(10,'users',NULL,NULL,NULL,'seeing other users logged in'),
	(11,'who',NULL,NULL,NULL,NULL),
	(12,'w',NULL,NULL,NULL,NULL),
	(13,'init 0',NULL,NULL,NULL,'Powers off the system using predefined scripts to synchronize and clean up the system prior to shutting down'),
	(14,'init 6',NULL,NULL,NULL,'Reboots the system by shutting it down completely and then restarting it'),
	(15,'poweroff',NULL,NULL,NULL,'Shuts down the system by powering off'),
	(16,'reboot',NULL,NULL,NULL,'reboots the system'),
	(17,'shutdown',NULL,NULL,NULL,'shuts down the system'),
	(18,'cat -b filename',NULL,NULL,NULL,'display the line numbers by using the -b option along with the cat'),
	(19,'wc filename',NULL,NULL,NULL,'counting words'),
	(20,'cd ~',NULL,NULL,NULL,'go in your home directory'),
	(21,'cd -',NULL,NULL,NULL,'go in last directory'),
	(22,'PS1',NULL,NULL,NULL,NULL),
	(23,'PS2',NULL,NULL,NULL,NULL),
	(24,'mail -s \'Test Message\' lakshya@gmail.com',NULL,NULL,NULL,NULL),
	(25,'grep','v,n,l,c,i',NULL,NULL,'global search regular expression');

/*!40000 ALTER TABLE `terminal` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
