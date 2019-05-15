# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: INTERVIEW_PREPARATION
# Generation Time: 2019-05-15 07:42:51 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table BehaviouralQuestions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `BehaviouralQuestions`;

CREATE TABLE `BehaviouralQuestions` (
  `Id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Question` tinytext,
  `Keywords` tinytext,
  `Answer` mediumtext,
  `Status` enum('NOT COVERED','COVERED') DEFAULT 'NOT COVERED',
  `CreatedOn` date DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `BehaviouralQuestions` WRITE;
/*!40000 ALTER TABLE `BehaviouralQuestions` DISABLE KEYS */;

INSERT INTO `BehaviouralQuestions` (`Id`, `Question`, `Keywords`, `Answer`, `Status`, `CreatedOn`)
VALUES
	(1,'Initiatives Taken By You',NULL,NULL,'NOT COVERED','2019-03-04'),
	(2,'Tasks That Were Technically Challenging And What Were The Challenges',NULL,'1. The browser history behaviour was contradicting our app history behaviour. I had to use the history api to manipulate the actual hitory of browser.\n2. Building application using react and node js simultaneously. The react code was throwing unexpected token error and was getting fixed even after trying all the possible solutions some of which were reinstalling the node modules and dependencies, cleaning the npm cache. Finally I uninstalled everything related to npm and node from the system and reinstalled it.\n','NOT COVERED','2019-03-04'),
	(3,'Instances Where You Surprised The Management With Your Ideas',NULL,NULL,'NOT COVERED','2019-03-04'),
	(4,'Independent Decisions Taken By You For Your Project',NULL,NULL,'NOT COVERED','2019-03-04'),
	(5,'Optimizations Or Solutions Proposed By You Which Were Implemented In The Project',NULL,'1. Plugins in sublime text like emmet , auto filename , allAutoComplete , viewInBrowser , javascriptEnhancements etc.\n2. Using data uri on page with lots of images.\n3. Using localStorage and sessionStorage instead of cookies.\n4. Using mybatis xml scripts instead of annotation based interfaces.','NOT COVERED','2019-03-04'),
	(6,'Code in your project which you think is not efficient and what solutions would you propose',NULL,'1. In the java layer in both frontend and backend, if I need to add any rest api, I have to do a lot of redundant changes.  ','NOT COVERED','2019-03-07'),
	(7,'Tasks which were not assigned to me',NULL,'1. Writing automation scripts in java for code generation.\n2. Writing shell scripts for automation.\n3. Handling server side in CRM during audit. \n4. Taking java tasks during release day.','NOT COVERED',NULL);

/*!40000 ALTER TABLE `BehaviouralQuestions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table CrackingTheCodingInterview
# ------------------------------------------------------------

DROP TABLE IF EXISTS `CrackingTheCodingInterview`;

CREATE TABLE `CrackingTheCodingInterview` (
  `ChapterNum` tinyint(4) NOT NULL,
  `Topic` varchar(100) NOT NULL,
  `Status` enum('To Be Done','In Progress','Done') DEFAULT NULL,
  `Completed` enum('YES','NO') DEFAULT 'NO',
  `RemQuestions` tinytext,
  `StartDate` date DEFAULT NULL,
  `TargetDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `DaysRequired` tinyint(4) DEFAULT NULL,
  `ExtraDaysTaken` tinyint(4) DEFAULT NULL,
  UNIQUE KEY `ChapterNum` (`ChapterNum`),
  UNIQUE KEY `Topic` (`Topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `CrackingTheCodingInterview` WRITE;
/*!40000 ALTER TABLE `CrackingTheCodingInterview` DISABLE KEYS */;

INSERT INTO `CrackingTheCodingInterview` (`ChapterNum`, `Topic`, `Status`, `Completed`, `RemQuestions`, `StartDate`, `TargetDate`, `EndDate`, `DaysRequired`, `ExtraDaysTaken`)
VALUES
	(1,'ARRAYS AND STRINGS','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(2,'LINKED LISTS','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(3,'STACKS AND QUEUES','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(4,'TREES AND GRAPHS','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(5,'BIT MANIPULATION','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(6,'MATH AND LOGIC PUZZLES','In Progress','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(7,'OBJECT ORIENTED DESIGN','Done','NO','{1,10}','2018-12-18','2019-01-01','2019-01-09',14,8),
	(8,'RECURSION AND DYNAMIC PROGRAMMING','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(9,'SYSTEM DESIGN AND SCALABILITY','Done','NO','{}','2019-01-10','2019-01-14',NULL,5,NULL),
	(10,'SORTING AND SEARCHING','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(11,'TESTING','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(12,'C AND C++','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(13,'JAVA','Done','NO','{}',NULL,NULL,NULL,NULL,NULL),
	(14,'DATABASES','Done','NO','{}','2018-12-15','2018-12-17','2018-12-17',2,NULL),
	(15,'THREADS AND LOCKS','Done','NO','{}','2019-01-21','2019-01-24','2019-01-29',4,5),
	(16,'MODERATE','Done','NO','{}',NULL,NULL,NULL,10,NULL),
	(17,'HARD','In Progress','NO','{}',NULL,NULL,NULL,10,NULL);

/*!40000 ALTER TABLE `CrackingTheCodingInterview` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table InterviewBit_Problems
# ------------------------------------------------------------

DROP TABLE IF EXISTS `InterviewBit_Problems`;

CREATE TABLE `InterviewBit_Problems` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Problem` tinytext NOT NULL,
  `TopicId` tinyint(4) DEFAULT NULL,
  `MaxScore` tinyint(4) DEFAULT NULL,
  `Score` tinyint(4) DEFAULT NULL,
  `Companies` varchar(100) DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Status` enum('NOT VISITED','VISITED','DONE') DEFAULT 'NOT VISITED',
  `VisitedDate` date DEFAULT NULL,
  `SolvedDate` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `TopicId` (`TopicId`),
  CONSTRAINT `interviewbit_problems_ibfk_1` FOREIGN KEY (`TopicId`) REFERENCES `InterviewBit_Topics` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table InterviewBit_Topics
# ------------------------------------------------------------

DROP TABLE IF EXISTS `InterviewBit_Topics`;

CREATE TABLE `InterviewBit_Topics` (
  `Id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Topic` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `InterviewBit_Topics` WRITE;
/*!40000 ALTER TABLE `InterviewBit_Topics` DISABLE KEYS */;

INSERT INTO `InterviewBit_Topics` (`Id`, `Topic`)
VALUES
	(1,'TIME COMPLEXITY'),
	(2,'ARRAYS'),
	(3,'MATH'),
	(4,'BINARY SEARCH'),
	(5,'STRINGS'),
	(6,'BIT MANIPULATION'),
	(7,'TWO POINTERS'),
	(8,'LINKED LISTS'),
	(9,'STACKS AND QUEUES'),
	(10,'BACKTRACKING'),
	(11,'HASHING'),
	(12,'HEAPS AND MAPS'),
	(13,'TREES'),
	(14,'DYNAMIC PROGRAMMING'),
	(15,'GREEDY ALGORITHM'),
	(16,'GRAPHS'),
	(17,'CODE NINJA');

/*!40000 ALTER TABLE `InterviewBit_Topics` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Java_Concepts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Java_Concepts`;

CREATE TABLE `Java_Concepts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Subject` varchar(30) NOT NULL,
  `Topic` varchar(30) DEFAULT NULL,
  `SubTopic` varchar(50) DEFAULT '',
  `Extra` varchar(200) DEFAULT '',
  `Answer` mediumtext,
  `Importance` enum('SLIGHTLY IMPORTANT','FAIRLY IMPORTANT','VERY IMPORTANT') DEFAULT 'FAIRLY IMPORTANT',
  `Status` enum('NOT DONE','In Progress','DONE') DEFAULT 'NOT DONE',
  `AddedDate` date DEFAULT NULL,
  `DoneDate` date DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Java_Concepts` WRITE;
/*!40000 ALTER TABLE `Java_Concepts` DISABLE KEYS */;

INSERT INTO `Java_Concepts` (`Id`, `Subject`, `Topic`, `SubTopic`, `Extra`, `Answer`, `Importance`, `Status`, `AddedDate`, `DoneDate`)
VALUES
	(9,'Java','Cloning','','','','SLIGHTLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(11,'Java','Strings','String Pool','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(13,'Java','Strings','String Creation','How many objects created',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(14,'Java','Multithreading','Atomic variables','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(15,'Java','Multithreading','Daemon thread','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(16,'Java','Multithreading','Thread Join','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(17,'Java','Multithreading','Wait & Notify','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL),
	(18,'Java','Multithreading','Thread & Runnable','',NULL,'FAIRLY IMPORTANT','NOT DONE','2018-12-20',NULL);

/*!40000 ALTER TABLE `Java_Concepts` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `Question_Default_Values` BEFORE INSERT ON `Java_Concepts` FOR EACH ROW IF (isnull(NEW.AddedDate)) THEN
			SET NEW.AddedDate=CURDATE();
		END IF */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table JavaScript_Concepts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `JavaScript_Concepts`;

CREATE TABLE `JavaScript_Concepts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Topic` varchar(30) NOT NULL,
  `Notes` mediumtext,
  `Status` enum('NOT DONE','IN PROGRESS','DONE') DEFAULT NULL,
  `Links` mediumtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `JavaScript_Concepts` WRITE;
/*!40000 ALTER TABLE `JavaScript_Concepts` DISABLE KEYS */;

INSERT INTO `JavaScript_Concepts` (`Id`, `Topic`, `Notes`, `Status`, `Links`)
VALUES
	(1,'Voice Control System',NULL,NULL,'https://tutorialzine.com/2017/08/converting-from-speech-to-text-with-javascript'),
	(2,'ECMAScript',NULL,NULL,'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'),
	(3,'React JS',NULL,NULL,'https://reactjs.org/tutorial/tutorial.html'),
	(4,'Arrow functions',NULL,'IN PROGRESS',NULL),
	(5,'let & const',NULL,'DONE',NULL),
	(6,'ECMAScript6 classes',NULL,'IN PROGRESS',NULL);

/*!40000 ALTER TABLE `JavaScript_Concepts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Preparation_Sources
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Preparation_Sources`;

CREATE TABLE `Preparation_Sources` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Source` varchar(50) NOT NULL,
  `Type` enum('BOOK','WEBSITE') DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Source` (`Source`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Preparation_Sources` WRITE;
/*!40000 ALTER TABLE `Preparation_Sources` DISABLE KEYS */;

INSERT INTO `Preparation_Sources` (`Id`, `Source`, `Type`)
VALUES
	(1,'Cracking The Coding Interview','BOOK'),
	(2,'InterviewBit','WEBSITE'),
	(3,'HackerEarth','WEBSITE');

/*!40000 ALTER TABLE `Preparation_Sources` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table SQL_Concepts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SQL_Concepts`;

CREATE TABLE `SQL_Concepts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Topic` varchar(30) NOT NULL,
  `Notes` mediumtext,
  `Links` mediumtext,
  `Status` enum('NOT DONE','IN PROGRESS','DONE') DEFAULT 'NOT DONE',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `SQL_Concepts` WRITE;
/*!40000 ALTER TABLE `SQL_Concepts` DISABLE KEYS */;

INSERT INTO `SQL_Concepts` (`Id`, `Topic`, `Notes`, `Links`, `Status`)
VALUES
	(1,'Union',NULL,NULL,'DONE'),
	(2,'Indexing',NULL,NULL,'DONE'),
	(3,'Composite Index',NULL,NULL,'DONE'),
	(4,'Index Types',NULL,NULL,'NOT DONE'),
	(5,'SQL Injection','1.Use prepared statements 2.Separate your application data and put them into different databases and set privileges',NULL,'DONE'),
	(6,'Nth Highest',NULL,NULL,'DONE'),
	(7,'Remove Duplicates',NULL,NULL,'DONE'),
	(8,'Events',NULL,'https://www.sitepoint.com/working-with-mysql-events/','NOT DONE'),
	(9,'Triggers',NULL,NULL,'DONE'),
	(16,'Privileges',NULL,'https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql','DONE'),
	(17,'Master Slave Replication',NULL,'https://www.digitalocean.com/community/tutorials/how-to-set-up-master-slave-replication-in-mysql','NOT DONE'),
	(18,'Partitioning',NULL,'https://www.vertabelo.com/blog/technical-articles/everything-you-need-to-know-about-mysql-partitions','IN PROGRESS'),
	(19,'Encryption',NULL,NULL,'DONE'),
	(20,'Scaling',NULL,NULL,'DONE'),
	(21,'Sharding',NULL,NULL,'IN PROGRESS');

/*!40000 ALTER TABLE `SQL_Concepts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table WebsitePerformance
# ------------------------------------------------------------

DROP TABLE IF EXISTS `WebsitePerformance`;

CREATE TABLE `WebsitePerformance` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Approach` mediumtext NOT NULL,
  `Points` mediumtext,
  `Link1` tinytext,
  `HandsOn` enum('Not YET','IN PROGRESS','YES') DEFAULT 'Not YET',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `WebsitePerformance` WRITE;
/*!40000 ALTER TABLE `WebsitePerformance` DISABLE KEYS */;

INSERT INTO `WebsitePerformance` (`Id`, `Approach`, `Points`, `Link1`, `HandsOn`)
VALUES
	(1,'Minimize HTTP requests',NULL,NULL,'Not YET'),
	(2,'Minify and combine files',NULL,NULL,'Not YET'),
	(3,'Use asynchronous loading for CSS and JavaScript files',NULL,NULL,'Not YET'),
	(4,'Defer JavaScript Loading',NULL,'https://varvy.com/pagespeed/defer-loading-javascript.html','Not YET'),
	(5,'Minimize time to first byte','1.DNS Lookup 2.Server Processing 3.Response',NULL,'Not YET'),
	(6,'Reduce server response time',NULL,NULL,'Not YET'),
	(7,'Choose the right hosting option for your needs','1.Shared Hosting 2.VPS Hosting 3.Dedicated Server',NULL,'Not YET'),
	(8,'Run a compression audit',NULL,NULL,'Not YET'),
	(9,'Enable compression',NULL,NULL,'Not YET'),
	(10,'Enable browser caching',NULL,NULL,'Not YET'),
	(11,'Reduce image sizes',NULL,NULL,'Not YET'),
	(12,'Use a CDN',NULL,NULL,'Not YET'),
	(13,'Use external hosting platforms',NULL,NULL,'Not YET'),
	(14,'Optimize CSS delivery',NULL,NULL,'Not YET'),
	(15,'Prioritize above-the-fold content (lazy loading)',NULL,NULL,'Not YET'),
	(16,'Reduce the number of plugins you use on your site',NULL,NULL,'Not YET'),
	(17,'Reduce redirects',NULL,NULL,'Not YET'),
	(18,'Reduce external scripts',NULL,NULL,'Not YET'),
	(19,'Monitor your speed over time',NULL,'https://tools.pingdom.com/','Not YET'),
	(20,'Monitor mobile page speed',NULL,'https://testmysite.thinkwithgoogle.com/','Not YET');

/*!40000 ALTER TABLE `WebsitePerformance` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Dumping routines (PROCEDURE) for database 'INTERVIEW_PREPARATION'
--
DELIMITER ;;

# Dump of PROCEDURE BQ_Insert
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `BQ_Insert` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `BQ_Insert`(IN q TINYTEXT)
BEGIN
	INSERT INTO `BehaviouralQuestions`(Question,CreatedOn) values(q,CURDATE()) ;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE BQ_ShowBasic
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `BQ_ShowBasic` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `BQ_ShowBasic`()
BEGIN
Select Id,Question From BehaviouralQuestions;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE CTCI_ForStatus
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `CTCI_ForStatus` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `CTCI_ForStatus`(IN statusVal ENUM('To Be Done','In Progress','Done'))
BEGIN
Select ChapterNum,Topic,Status,StartDate,TargetDate,EndDate,DaysRequired,ExtraDaysTaken From CrackingTheCodingInterview where Status=statusVal;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE CTCI_UpdateStatus
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `CTCI_UpdateStatus` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `CTCI_UpdateStatus`(IN chapNum TINYINT, IN statusVal ENUM('To Be Done','In Progress','Done'))
BEGIN
Update CrackingTheCodingInterview SET status=statusVal where ChapterNum=chapNum;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE Show_CTCI
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `Show_CTCI` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `Show_CTCI`()
BEGIN
Select ChapterNum,Topic,Status,StartDate,TargetDate,EndDate,DaysRequired,ExtraDaysTaken From CrackingTheCodingInterview;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE SQLC_Info
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `SQLC_Info` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `SQLC_Info`()
BEGIN
Select Id,Topic,Status,Links From SQL_Concepts;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE SQLC_Insert
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `SQLC_Insert` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `SQLC_Insert`(IN topicName VARCHAR(30))
BEGIN
Insert Into SQL_Concepts(Topic) values(topicName);
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE SQLC_UpdateStatus
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `SQLC_UpdateStatus` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`lakshyasinghal33`@`localhost`*/ /*!50003 PROCEDURE `SQLC_UpdateStatus`(IN selectedId INT,IN newStatus ENUM('NOT DONE','IN PROGRESS','DONE'))
BEGIN
UPDATE SQL_Concepts SET status=newStatus where id=selectedId;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
