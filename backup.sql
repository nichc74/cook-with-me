-- MySQL dump 10.13  Distrib 8.1.0, for Linux (aarch64)
--
-- Host: localhost    Database: cook_with_me
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add recipe',7,'add_recipe'),(26,'Can change recipe',7,'change_recipe'),(27,'Can delete recipe',7,'delete_recipe'),(28,'Can view recipe',7,'view_recipe'),(29,'Can add image',8,'add_image'),(30,'Can change image',8,'change_image'),(31,'Can delete image',8,'delete_image'),(32,'Can view image',8,'view_image'),(33,'Can add ingredient',9,'add_ingredient'),(34,'Can change ingredient',9,'change_ingredient'),(35,'Can delete ingredient',9,'delete_ingredient'),(36,'Can view ingredient',9,'view_ingredient'),(37,'Can add note',10,'add_note'),(38,'Can change note',10,'change_note'),(39,'Can delete note',10,'delete_note'),(40,'Can view note',10,'view_note'),(41,'Can add recipe ingredient',11,'add_recipeingredient'),(42,'Can change recipe ingredient',11,'change_recipeingredient'),(43,'Can delete recipe ingredient',11,'delete_recipeingredient'),(44,'Can view recipe ingredient',11,'view_recipeingredient'),(45,'Can add instruction',12,'add_instruction'),(46,'Can change instruction',12,'change_instruction'),(47,'Can delete instruction',12,'delete_instruction'),(48,'Can view instruction',12,'view_instruction'),(49,'Can add category',13,'add_category'),(50,'Can change category',13,'change_category'),(51,'Can delete category',13,'delete_category'),(52,'Can view category',13,'view_category'),(53,'Can add recipe summary',14,'add_recipesummary'),(54,'Can change recipe summary',14,'change_recipesummary'),(55,'Can delete recipe summary',14,'delete_recipesummary'),(56,'Can view recipe summary',14,'view_recipesummary'),(57,'Can add recipe component',15,'add_recipecomponent'),(58,'Can change recipe component',15,'change_recipecomponent'),(59,'Can delete recipe component',15,'delete_recipecomponent'),(60,'Can view recipe component',15,'view_recipecomponent'),(61,'Can add metric',16,'add_metric'),(62,'Can change metric',16,'change_metric'),(63,'Can delete metric',16,'delete_metric'),(64,'Can view metric',16,'view_metric'),(65,'Can add recipe instructional component',17,'add_recipeinstructionalcomponent'),(66,'Can change recipe instructional component',17,'change_recipeinstructionalcomponent'),(67,'Can delete recipe instructional component',17,'delete_recipeinstructionalcomponent'),(68,'Can view recipe instructional component',17,'view_recipeinstructionalcomponent'),(69,'Can add recipe ingredient component',18,'add_recipeingredientcomponent'),(70,'Can change recipe ingredient component',18,'change_recipeingredientcomponent'),(71,'Can delete recipe ingredient component',18,'delete_recipeingredientcomponent'),(72,'Can view recipe ingredient component',18,'view_recipeingredientcomponent');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$600000$Mb9yhYh9QlJO9klTVf08K1$BsX6VMmxSPYNPaZfMzDUXpEbZS1EGExgEDv+O1Q7Vk0=','2023-10-01 07:23:08.122808',1,'leviathan','','','',1,1,'2023-08-21 08:31:00.315946');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_category`
--

DROP TABLE IF EXISTS `cookbook_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_category`
--

LOCK TABLES `cookbook_category` WRITE;
/*!40000 ALTER TABLE `cookbook_category` DISABLE KEYS */;
INSERT INTO `cookbook_category` VALUES (6,'Entree'),(27,'Side'),(30,'Desserts'),(59,'Sandwich'),(73,'Main');
/*!40000 ALTER TABLE `cookbook_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_image`
--

DROP TABLE IF EXISTS `cookbook_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_image` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `path` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_image`
--

LOCK TABLES `cookbook_image` WRITE;
/*!40000 ALTER TABLE `cookbook_image` DISABLE KEYS */;
INSERT INTO `cookbook_image` VALUES (113,'http://res.cloudinary.com/dufsumsmb/image/upload/v1692727669/cook_with_me/tqa0fk4dhg1o6zmm2zmn.webp'),(114,'http://res.cloudinary.com/dufsumsmb/image/upload/v1692727670/cook_with_me/arfxpmoq0pjamjnevchd.webp'),(115,'http://res.cloudinary.com/dufsumsmb/image/upload/v1692727670/cook_with_me/raxatlk289zvzz7jggb2.webp'),(116,'http://res.cloudinary.com/dufsumsmb/image/upload/v1692727671/cook_with_me/aq34z9q2dadomchrtoqq.webp'),(133,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693039924/cook_with_me/ubp0zolhcsta7asplsqs.webp'),(134,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693039933/cook_with_me/jrg2yi5ywuzhv4ebkrkp.webp'),(138,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693040394/cook_with_me/hhtas8wk5zt5qlqbvwnm.webp'),(139,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693040445/cook_with_me/bamnryhtvx66lwcsqish.webp'),(140,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041183/cook_with_me/uuhyjkma90fks81y7fw9.webp'),(141,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041218/cook_with_me/xw1tpdlkl3mbhxs1vqbq.webp'),(142,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041279/cook_with_me/xtymat24wlvu9dgecut9.webp'),(143,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041295/cook_with_me/f81wr2mczbazdiqahmi4.webp'),(144,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041320/cook_with_me/zliwpn5ajhip1pb31ovx.webp'),(145,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041541/cook_with_me/gfwe4usiuyvst5wk9o0i.webp'),(146,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041552/cook_with_me/sqkipmdb146xsl9uunfk.webp'),(147,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693041586/cook_with_me/byagcaqrnmf437ha9w9q.webp'),(148,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693042217/cook_with_me/ovddjdllfdpq00z1lcjc.webp'),(152,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693042362/cook_with_me/wrqlk92enevozfmizsnr.webp'),(153,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693042363/cook_with_me/ejnnappvbhsztrskp3mm.webp'),(154,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693042363/cook_with_me/txngk15kw2pnuuk7m4ay.webp'),(155,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693042364/cook_with_me/f7crgcuf9a6wm843c69r.webp'),(156,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693074561/cook_with_me/irbfd1aigqejjwkdjav1.webp'),(157,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693074562/cook_with_me/fbp8vucgtuum4ushtkuy.webp'),(158,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693074562/cook_with_me/vcbz8ev0ihqsylx5qnob.webp'),(159,'http://res.cloudinary.com/dufsumsmb/image/upload/v1693074563/cook_with_me/l4xzi7moerhd5kww4srs.webp'),(160,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694477024/cook_with_me/rq3fulfvbgmprwpyw962.webp'),(161,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694477024/cook_with_me/sgmbqbmcthrzae0i8gcq.webp'),(162,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694477025/cook_with_me/h2gbigyfqbijzcqhgdkt.webp'),(163,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694477026/cook_with_me/v25shjdwneaxvtmthfkk.webp'),(164,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694663356/cook_with_me/nk8vprpam8elpdnp8ws0.webp'),(165,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694666073/cook_with_me/sq8ofotplgoio5xabz08.webp'),(194,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694679337/cook_with_me/idrdob03mfqc1zk7dlg5.webp'),(195,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694679542/cook_with_me/vbeh3zr9q3pusskjmv9x.webp'),(196,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694679621/cook_with_me/qozjwuaapt4cmyipyfrj.webp'),(197,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694719255/cook_with_me/jmzgvxymel1zsiss41mi.webp'),(198,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694719995/cook_with_me/mhq2p1hs4pahitx8l7wv.webp'),(199,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694720165/cook_with_me/f2fn5jmliz9aohuengaq.webp'),(200,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694720274/cook_with_me/pjsbjgwar3pnraaiyfai.webp'),(201,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694721257/cook_with_me/vapjvinavlensf6tmz2x.webp'),(202,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694721319/cook_with_me/bpxnym19is7nuxnlgmnl.webp'),(203,'http://res.cloudinary.com/dufsumsmb/image/upload/v1694729639/cook_with_me/j3amhorzs3lzs6sljy9z.webp'),(214,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394492/cook_with_me/fez6a1fgl0qu2gmockyd.webp'),(215,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394590/cook_with_me/xnmzwvma8ifnlfua1qfr.webp'),(216,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394624/cook_with_me/jzjylcupntz0l2ntzphn.webp'),(217,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394640/cook_with_me/knlrzhldl95bahtsewbj.webp'),(218,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394675/cook_with_me/llite9zy3nn4f9pqmyhm.webp'),(219,'http://res.cloudinary.com/dufsumsmb/image/upload/v1696394733/cook_with_me/n26rxsf0jsnyalk51dzv.webp');
/*!40000 ALTER TABLE `cookbook_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_ingredient`
--

DROP TABLE IF EXISTS `cookbook_ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_ingredient` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_ingredient`
--

LOCK TABLES `cookbook_ingredient` WRITE;
/*!40000 ALTER TABLE `cookbook_ingredient` DISABLE KEYS */;
INSERT INTO `cookbook_ingredient` VALUES (5,'all-purpose or light soy sauce'),(6,'white sugar'),(7,'minced garlic'),(8,'black pepper'),(9,'sesame oil'),(10,'cooking/kosher salt'),(11,'sweet potato noodles'),(12,'Vegetable oil'),(13,'onion'),(14,'green onion stems'),(15,'shiitake mushrooms'),(16,'carrots'),(17,'capsicum/bell pepper'),(18,'baby spinach'),(19,'white sesame seeds'),(20,'all-purpose or light soy'),(21,'finely minced garlic'),(22,'shitake'),(46,'Zucchini'),(47,'canola oil'),(48,'crispy fried shallots'),(49,'green onion stem'),(50,'garlic cloves'),(51,'sambal oelak'),(52,'soy sauce'),(53,'mirin'),(54,'dried ramen noodles'),(55,'unsalted butter'),(56,'small bok choys'),(57,'cornflour/cornstarch'),(58,'plain flour'),(59,'rice flour'),(60,'icing sugar'),(61,'salt'),(63,'eggs'),(64,'caster sugar/ super-fine sugar'),(65,'flour'),(66,'lemon zest'),(67,'lemon juice'),(92,'mayonnaise'),(93,'garli'),(95,'onions'),(96,'butter'),(97,'brown sugar'),(98,'balsamic vinegar'),(99,'salt and pepper'),(100,'steak'),(102,'tomatoes'),(103,'arugula'),(104,'mustard'),(105,'turkish bread'),(106,'steaks'),(107,'dijon mustard'),(108,'onion powder'),(109,'oil'),(110,'worcestershire sauce'),(111,'bals'),(112,'guanciale'),(113,'yolks'),(114,'parmigiano reggiano'),(115,'spaghetti'),(117,'garlic clove'),(271,'chicken breast'),(272,'buttermilk'),(273,'egg'),(274,'soft buns'),(275,'iceberg lettuce'),(276,'gherkins / dill pickles'),(277,'garlic'),(278,'corn flour'),(279,'celery'),(280,'sweet paprika'),(281,'cayenne pepper'),(282,'garlic powder'),(283,'mustard powder'),(284,'ginger powder'),(285,'dried thyme'),(286,'dried oregano');
/*!40000 ALTER TABLE `cookbook_ingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_instruction`
--

DROP TABLE IF EXISTS `cookbook_instruction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_instruction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext NOT NULL,
  `step_id` int NOT NULL,
  `image_id` bigint DEFAULT NULL,
  `recipe_instructional_component_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_instruction_image_id_9f069fc8_fk_cookbook_image_id` (`image_id`),
  KEY `cookbook_instruction_recipe_instructional_11ccf73d_fk_cookbook_` (`recipe_instructional_component_id`),
  CONSTRAINT `cookbook_instruction_image_id_9f069fc8_fk_cookbook_image_id` FOREIGN KEY (`image_id`) REFERENCES `cookbook_image` (`id`),
  CONSTRAINT `cookbook_instruction_recipe_instructional_11ccf73d_fk_cookbook_` FOREIGN KEY (`recipe_instructional_component_id`) REFERENCES `cookbook_recipeinstructionalcomponent` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=335 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_instruction`
--

LOCK TABLES `cookbook_instruction` WRITE;
/*!40000 ALTER TABLE `cookbook_instruction` DISABLE KEYS */;
INSERT INTO `cookbook_instruction` VALUES (88,'Cut beef into strips that are ~ 5mm thick, 1cm wide and about 5cm long (1/5\\\" x 2/5\\\" x 2\\\"). If using shortribs, trim excess fat, cut the meat off the bone. Then cut each piece in half lengthwise (to form 2 \\\"steaks\\\") then slice into 5mm thick. (See step photos in post or video at 0.11s, Note 6)',1,114,1),(89,'Marinate – Put beef in a bowl. Add marinade ingredients, then mix. Set aside marinate while you proceed with recipe, ~15 – 20 minutes is all it needs. (Note 5)',2,NULL,1),(90,'Sauce – Mix the Sauce ingredients in a very large mixing bowl.',1,115,2),(91,'Noodles – Cook sweet potato noodles per packet directions (normally 8 min in boiling water). Drain, briefly rinse under tap water then shake off excess water well. Add noodles into the bowl with the dressing. DO NOT MIX.',2,NULL,2),(92,'Batch 1 – Heat 2 tablespoons of oil in a large non-stick pan (30cm/12\\\") over high heat. Cook the brown onion, white part of green onion and shiitake mushrooms with 1/2 tsp salt for 2 1/2 to 3 minutes, stirring constantly, just until starting to soften but not going golden. Pour on top of the noodles – don\'t mix yet!',1,116,3),(93,'Batch 2 – Using the same pan still on high heat, heat 1 tbsp oil then cook the carrot and capsicum for 1 1/2 minutes, constantly stirring. Add spinach, green onion and the final 1/2 tsp salt. Keep cooking for 1 1/2 minutes until the spinach is wilted. Transfer into the noodle bowl – still don\'t mix!',2,NULL,3),(94,'Cook beef – In the same pan, heat the final 1 tbsp of oil still on high heat. Add beef and cook for 1 1/2 minutes until very lightly golden and just cooked through. Add to the noodle bowl. Don\'t mix!',3,NULL,3),(95,'Mix! Add most of the sesame seeds (reserve some for topping). NOW you can mix! Toss, toss, toss.',4,NULL,3),(96,'Serve – Transfer into a serving bowl, sprinkle with remaining sesame seeds. This is meant to be eaten warm, not piping hot. Eat!',5,NULL,3),(104,'Toss the zucchini in oil then sprinkle with salt and toss to (roughly) coat all over.',1,157,4),(105,'Cook – Heat a large non-stick pan over medium-high heat. Place half the zucchini cut side down and cook for 3 to 4 minutes until the surface is golden. Turn and cook the skin side for 3 minutes. Pile onto a serving plate and repeat with remaining zucchini.',2,NULL,4),(106,'Sauce – cool the pan slightly then return to medium heat. Heat the oil then sauté the garlic until light golden. Add remaining Sauce ingredients, simmer for 30 seconds until syrupy.\n',3,158,4),(107,'Serve – Pour over zucchini, pile on Crispy Asian Shallots and green onion. Eat!',4,159,4),(108,'Noodles – Cook the noodles in a large saucepan per packet directions. Scoop out ~1/2 cup cooking water. Strain noodles and set aside.',1,161,5),(109,'Sauce – Melt butter in the same saucepan over medium heat. Add garlic and cook, stirring until soft. Add oyster sauce, fish sauce, Maggi seasoning and 1/4 cup cooking water. Stir to combine.',2,162,5),(110,'Toss – Add cooked noodles, parmesan and green onion. Toss until the noodles are all coated, and the sauce is not pooled in the bottom of the saucepan. Add more cooking water 1 tbsp at the time, if needed to loosen the noodles.',3,NULL,5),(111,'Serve immediately!',4,163,5),(112,'Serving suggestion: fried egg and broccolini cooked with the noodles*, tossed with Asian Sesame Dressing you always have in your fridge.\n* Broccolini takes about 3 minutes, so put it into the water before/after/with the noodles depending on the noodle cooking time.',5,NULL,5),(113,'Cutting – Trim the base of the bok choy then separate all the leaves. Leave the delicate baby bok choy in the centre intact, it\'s precious! Cut giant stems in half lengthwise so they are all roughly the same size. Rinse in colander, shake off excess water (don\'t need to dry fully).',1,NULL,6),(114,'Sauce – Stir Sauce ingredients except water in a jug until cornflour is dissolved. (Easier to make lump free with less liquid). Then stir in water.',2,NULL,6),(115,'Gingery oil – Put the ginger and oil in a large non-stick pan. Turn onto medium heat. Once the ginger starts sizzling, sauté for 1 minute until it turns light golden and is a bit floppy. Add bok choy then use 2 spatulas to toss the ginger for around 15 seconds to coat.',3,NULL,6),(116,'Steam – Turn heat up to medium, pour water over. Cover with lid and steam for just 45 seconds.',4,NULL,6),(117,'Sauce – Remove lid (bok choy will still be a bit underdone), pour in sauce, toss for 30 seconds until sauce changes from murky to clear, and thickens. Bok choy should be just floppy but still soft crunch, not mushy. If your sauce gets too thick (Note 4), add a tiny splash of water and mix.',5,NULL,6),(118,'Serve – Pour the bok choy and all the sauce onto a serving plate, then eat!\n',6,NULL,6),(119,'Preheat oven to 180C/350F (160C fan). Spray a 20cm/8\" square tin with oil and line with baking/parchment paper with overhang (so it can be lifted out once cooked).',1,NULL,7),(120,'Base – Place Shortbread Base ingredients in a food processor fitted with the standard \"S\" blade. Pulse 5 to 10 times until it becomes like sand. (Or use tips of fingers, Note 2). Pour into the tin, spread, then press firmly into the base, pushing it right up to the edges. Using something flat to press in is helpful!',2,NULL,7),(121,'Bake base for 20 minutes or until golden on the edges and pale golden in the middle. Remove from oven. (⚠️ Note: don\'t let it cool, pour in curd immediately).',3,NULL,7),(122,'Lemon Curd – While the base is baking, place Lemon Topping ingredients in a bowl and whisk until combined.',4,NULL,7),(123,'Bake 20 minutes – Pour Lemon Curd onto base, then bake for 20 minutes until the topping is set but still soft.',5,NULL,7),(124,'Cool – Remove from then oven and cool on the counter for 1 hour, then fridge for at least 2 hours. Slice into 16 squares. Dust with icing sugar (confectionary sugar) and serve!',6,NULL,7),(140,'Garlic Aioli: Mix mayonnaise and garlic together. Set aside for 30 minutes+ for the flavour to develop (do not keep for more than 3 days tops).',1,NULL,8),(141,'Caramelised Onion: Melt butter in a skillet over medium low heat. Add onions and stir to coat in butter. Place lid on (or place a baking tray over skillet) and leave for 20 minutes, stirring once or twice. Remove lid then cook for a further 20 minutes, stirring every now and then, until onion is golden (increase heat slightly if the colour is not changing). Add sugar, vinegar, salt and pepper. Cook for a further 10 minutes until jammy. Remove from heat and keep warm.',2,NULL,8),(142,'Take beef out of fridge 20 minutes before cooking. Season generously with salt and pepper.',1,NULL,9),(143,'Heat oil in a skillet over high heat (or heat BBQ). Cook steak to your liking - if using a secondary cut like Bavette, skirt or flat iron, it\'s best medium rare.',2,NULL,9),(144,'Transfer beef to a plate, cover loosely with foil and rest for 5 - 10 minutes. Then slice thinly against the grain.',3,NULL,9),(145,'Cut turkish bread into 15cm/6\" lengths and split into half. Toast lightly.\n',1,NULL,10),(146,'Spread the bottom piece generously with garlic aioli. Top with rocket, then tomato slices, beef, caramelised onion. Spread the top piece of bread with mustard then place on top.\n',2,NULL,10),(182,'Mix together mustard, garlic and onion powder. Then mix in remaining ingredients.\n',1,NULL,11),(183,'Place beef in a ziplock bag with Marinade and marinade overnight (12 - 24 hours).\n',2,NULL,11),(184,'Remove from the fridge 30 minutes before cooking to bring to room temperature - key for even cooking of steaks. Shake off excess marinade.\n',3,NULL,11),(185,'Brush BBQ Grills with oil, then heat on high heat until is really hot - you should see wisps of smoke. Or heat a heavy based skillet on high until very hot, then add oil - it will heat almost instantly.\n',4,NULL,11),(186,'Add steaks. For 2cm / 3/4\" thick steaks, cook the first side for 2 minutes, then turn and cook the other side for 2 minutes (medium rare 52°C/125°F, chart below for other doneness temps). (Note 3)\n',5,NULL,11),(187,'Remove from skillet onto a WARM plate, cover loosely with foil and set aside for 5 minutes.\n',6,NULL,11),(188,'Serve! I couldn\'t resist garlic butter - see recipe in notes.\n',7,NULL,11),(189,'Guanciale – Cut into 0.5cm / 1/5\" thick slices then into batons.',1,NULL,12),(190,'Carbonara sauce – Place eggs and yolks in a large bowl. Whisk to combine. Then stir in the parmesan and pepper.',2,NULL,12),(191,'Cook pasta – Bring 4 litres (4 quarts) of water to the boil with the salt. Add pasta and cook per the packet directions.\n',3,NULL,12),(192,'Reserve pasta water – Just before draining, scoop out 1 cup of pasta cooking water, then drain the pasta.\n',4,NULL,12),(193,'Pasta in pan – Tip the hot pasta into the pan and toss to coat in guanciale fat.',5,NULL,12),(194,'Mix pasta in sauce – Transfer the pasta and any residual fat in the pan into the bowl with the egg. Add 1/2 cup (125 ml) pasta cooking water. Stir vigorously using the handle of a wooden spoon for 1 minute and watch as the sauce transforms from watery to creamy and clings to the pasta strands!',6,NULL,12),(195,'Serve – Transfer into warm bowls. Serve immediately, garnished with a little extra parmigiana reggiano if desired, and a pinch of black pepper and finely chopped parsley.',7,NULL,12),(328,'Chicken – Cover the chicken with a freezer bag or plastic sheet and pound to 1cm / 0.4\" even thickness. Trim to just a touch larger than the size of your bun. Save off-cuts for another use (stir fry – or Dozer, in my case!).\n',1,NULL,48),(329,'Marinade – Whisk Marinade ingredients in a bowl. Add chicken, toss. Marinate in the fridge for 3 hours minimum, to overnight (don\'t go beyond 24 hrs).\n',2,NULL,48),(330,'Garlic mayo – Mix in a small bowl and refrigerate until required.\n',3,NULL,48),(331,'Prepare crunchy coating – Mix flour, cornflour and Seasoning ingredients in a bowl. Drizzle over 2 tablespoons of the marinade, then use fingers to mix through to form lumps – when this sticks to the chicken, it fries up into awesome crunchy bits!!\n',4,NULL,48),(332,'Heat oil in a large heavy based pot over medium high heat to 180°C/350°F (Note 2).\n',5,NULL,48),(333,'Coat chicken – Pick up a piece of chicken and allow excess marinade to drip off. Press to coat in flour coating. Shake off excess, then fry for 2 minutes on each side until golden. DO NOT TOUCH for the first 90 seconds to allow the coating to adhere. I fry 2 at a time. Drain on paper towels, cook remaining chicken.\n',6,NULL,48),(334,'Assemble – Smear garlic mayo on the top and bottom of the buns. Pile lettuce on the base, top with tomato if using. Then chicken, gherkins and put the lid on. Sink your teeth into it immediately and enjoy!\n',7,NULL,48);
/*!40000 ALTER TABLE `cookbook_instruction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_metric`
--

DROP TABLE IF EXISTS `cookbook_metric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_metric` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_metric`
--

LOCK TABLES `cookbook_metric` WRITE;
/*!40000 ALTER TABLE `cookbook_metric` DISABLE KEYS */;
INSERT INTO `cookbook_metric` VALUES (1,'cup(s)'),(2,'tsp'),(3,'tbsp'),(4,'gram(s)'),(24,''),(25,'cups');
/*!40000 ALTER TABLE `cookbook_metric` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_note`
--

DROP TABLE IF EXISTS `cookbook_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_note` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` longtext NOT NULL,
  `recipe_id` bigint NOT NULL,
  `step_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_note_recipe_id_51353a13_fk_cookbook_recipe_id` (`recipe_id`),
  CONSTRAINT `cookbook_note_recipe_id_51353a13_fk_cookbook_recipe_id` FOREIGN KEY (`recipe_id`) REFERENCES `cookbook_recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=261 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_note`
--

LOCK TABLES `cookbook_note` WRITE;
/*!40000 ALTER TABLE `cookbook_note` DISABLE KEYS */;
INSERT INTO `cookbook_note` VALUES (57,'Beef quality matters here because the strips of beef are so thin they will overcook in a flash.',66,1),(58,'Beef short ribs when sliced thinly is excellent for fast-cook stir frying – superior flavour, juicy and tender. Only needs to be slow cooked to “fall-apart-tender” when it’s served whole!',66,2),(59,'Soy sauce – Use all purpose or a light soy sauce. Not dark soy sauce, colour and flavour is too intense.',66,3),(60,'Korean noodles that are sweet potato noodles called “dangmyeon” sold in dried form that looks a bit clear, like glass noodles. Sold in the Asian aisle of large grocery stores here in Australia, cheaper in Asian stores. Cooked by boiling – follow packet times.',66,4),(61,'Shiitake mushrooms – Asian mushrooms with a more intense mushroomy flavour than standard white mushrooms, brown/cremini mushrooms (though feel free to sub!).',66,5),(62,'Marinating – No need to marinate overnight though you can.',66,6),(63,'Beef cutting – Aim for thin strips so you get plenty dispersed throughout the noodles.',66,7),(64,'Leftovers make great lunch! Keeps for 3 days in the fridge. Not suitable for freezing.',66,8),(73,'Zucchini – Use small / medium (~15 – 18cm long (6 – 7″) so they cook on the stove or BBQ. If yours are giant, cut it into quarters.',105,1),(74,'Doneness – I only take the zucchini to barely cooked (ie still pretty firm), it will keep cooking as you plate up. When super soft, it’s quite watery which dilutes flavour. A reader suggested searing then finishing in oven if you want yours super soft, use temps below!',105,2),(75,'Oven – Won’t get the same seared colour but works fine, also easier to cook through until very soft (stove might overly brown). 200°C/375°F (180°C fan) for 25 minutes or until done to your taste. ',105,3),(76,'Crispy Fried Shallots – Asian garnish widely available these days, salty, oily, crispy. Such a frequent player in my recipes I even wrote an About page here. Find it in the Asian section of supermarket but cheaper at Asian stores!',105,4),(77,'Sambal Oelak – chilli paste which makes a nice sauce for smothering. Made with fresh chillis (no oil or flavourings), found in large grocery stores and Asian stores. Substitute with sriracha or a not-too-spicy chilli crisp (taste and check) – sauce will have chilli crunch chunks and be oilier (yum!). A reader also made and loved this with Gochujang!',105,5),(78,'Soy sauce – Don’t use soy sauce labelled “dark soy sauce”, way too intense and salty, will ruin the dish. Any general “soy sauce” or “light soy sauce” can be used.',105,6),(79,'Mirin is a sweet Japanese cooking wine that is found in large grocery stores and Asian stores. Brings a depth of flavour and sweetness into an otherwise simple sauce, is one of 3 core sauces in Japanese cooking (ie it’s good stuff!). Sub with honey for a non alcoholic version – sauce still great but not quite the same restaurant-y complexity of flavour.',105,7),(80,'Storage – Keeps in the fridge for 2 days though the sauce does go watery because the zucchini will continue to sweat water as it cools. Still tasty though because the sauce is quite intense so it can take some watering down!',105,8),(81,'Noodles – I like this best with ramen noodles / noodle cakes ie wrinkly, because the garlic bits and sauce clings better. Fresh egg noodles (ie from fridge section, yellow) are a close second – thick or thin (like hokkien, lo mein), use 220g/8oz – or dried egg noodles (amount per recipe).',106,1),(82,'Angel hair pasta or spaghetti can also be used (amount per recipe) but I prefer noodles as pasta doesn’t have the same “chew” as noodles. If I only had pasta, I’d still make this! Rice noodles also works but texture is different.',106,2),(83,'Fish sauce will give the best savoury flavour here (doesn’t taste fishy!) but can be substituted with soy sauce (light or all-purpose, not dark soy).',106,3),(84,'Maggi Seasoning is a savoury Asian sauce, I think of it like soy sauce + an Asian Worcestershire sauce. Find it in the Asian aisle of large grocery stores (Coles, Woolies) or Asian stores. Staple sauce in South East Asia! Sub with soy sauce (light or all-purpose, not dark soy).',106,4),(85,'Cooking water – This is what creates the sauce that coats the noodles. The starch in the water helps thicken the sauce.',106,5),(86,'Freshly grated parmesan required for smooth melt that disappears into the noodles. Store bought sandy or finely shredded grated won’t melt as perfectly but if that’s all you’ve got, do it!',106,6),(87,'Leftovers will keep for 3 days in the fridge, loosen with a touch of water.',106,7),(88,'Bok Choy & other asian greens – can use other leafy Asian greens, such as pak choy, choy sum, baby and full size. For short ones, like the pictured baby bok choy, just trim the base and separate the leaves (keep stem and leafy part attached). For long ones, cut into 7.5cm/3″ (ish) lengths (see photos in post). If the stems are really thick, cut in half. Toss the stems in first to give them a head start, then add the leafy part just at the end before adding water to steam.\nRecipe will work with gai lan (Chinese broccoli) too, just get the stem going first (it’s thicker so will take longer to cook) and steam it for a little longer (around 2 minutes in total).',107,1),(89,'Soy sauce – Use either light or all purpose soy sauce. But not dark soy sauce – flavour is too strong and the colour is too intense! More on which soy sauce to use when here.',107,2),(90,'Chinese cooking wine (“Shaoxing wine”) is an essential ingredient for making truly “restaurant standard” Asian sauces, adds depth of flavour. More info on it here. Substitute with Mirin, cooking sake or dry sherry. Non alcoholic sub – sub both the cooking wine AND water with low sodium chicken broth/stock.',107,3),(91,'Sauce relies on some water coming out of the bok choy as it steams. If your bok choy is old and shrivelled, not enough water will come out. Easy fix – just add a tiny splash of water!',107,4),(92,'Charlie option – To make this using Charlie (my all-purpose stir fry sauce), mix 2 tablespoons of Charlie with 1/4 cup water. Then use as the Sauce!',107,5),(93,'Leftovers will keep for 2 days but the vegetables do tend to get watery/floppy.',107,6),(94,'Rice flour – Gives the base the traditional crumbly shortbread texture. Cornflour / cornstarch is also used which gives it a slightly more “melt in your mouth” texture. Both are delicious!',108,1),(95,'Base making – If you don’t have a food processor, you can use your fingers to “rub” the butter into the dry ingredients and you’ll end up with the same crumbs that you see in the photos.',108,2),(96,'Storage – Once chilled and set, it can be kept at room temperature if it’s fairly cool in your pantry. Otherwise, keep it in your fridge but bring to room temp before serving! Lasts 5 days.',108,3),(97,'Nutrition per serving i.e. 1 slice of the 16 bars this recipe makes.',108,4),(108,'I made this as a quick meal using a shortcut garlic aioli. If you\'d like to try your hand at a homemade one, here\'s how: Place 2 garlic cloves (minced) and 2 egg yolks in a small food processor. Whizz briefly to combine. Then while processing on medium low speed, slowly pour in 3/4 cup (185ml) olive oil (NOT EXTRA VIRGIN, too strong). At the end, add salt to taste, 1/2 tsp Dijon mustard and a squeeze of lemon juice.',139,1),(109,'The Caramelised Onion really takes it to that next level! But if you are pressed for time, I suggest just cooking onions in butter over medium high heat until softened. You\'ll only need 2 onions if you do this. To make it sort of like caramelised onions, add 2 tbsp of brown sugar towards the end.',139,2),(110,'I made this using Bavette Beef which is also known as flap meat, flap steak, sirloin flap steak and sirloin tip. BRILLIANT value for money, it\'s a secondary cut that\'s more flavourful (beefy) than more expensive mainstream steaks like porterhouse etc. When cooked no more than medium at most (preferably medium rare) and sliced thinly against the grain, every piece is beautifully tender.\nIt\'s like skirt steak but thicker which I really like because that\'s my gripe about skirt steak! It\'s like flat iron but more fibrous so when sliced thinly across the grain, each piece is more tender. I am a huge fan of this new discovery! I purchased the Bavette from Harris Farms in Australia - it\'s part of their Curious Cuts range.\nThis recipe is suited to any cut of beef suitable for grilling.\nFor Bavette at room temperature (about 2cm thick), I cooked it for 3 minutes on the first side and 2 minutes on the other for medium rare.',139,3),(111,'Steak Sandwich nutrition per serving. 153 calories of the total is attributable to the Garlic Aioli, 126 calories is for the Caramelised Onions.',139,4),(140,'Choosing steak: Use this for any good value cut of steak, not prime cuts. Typically, most steak cuts purchased in supermarkets are what I would consider good value steaks. Basically, the more you pay, the better the steak!',145,1),(141,'And remember, it\'s not just the steak cut that determine quality. There are different grades for the same cut of steak. Rib Eye at my butcher costs almost twice as much as it does at the supermarket. I would never marinade the one from the butcher!',145,2),(142,'Soy sauce - use an all purpose, normal soy sauce. I use Kikkoman. Do not use light soy sauce (too salty), tamari or dark soy sauce (too much flavour)',145,3),(143,'Internal temperature of cooked steak. The most popular (and my personal preference) is medium rare. Cook times differ drastically depending on how thick your cut is.',145,4),(144,'Garlic butter: 100g / 1 stick unsalted softened butter, 1 small garlic clove very finely minced (using crusher is best), 3/4 tsp salt, 1/4 cup finely chopped parsley. Mix together, place on baking paper to form a log. Roll up then twist ends tightly repeatedly until it forms a neat log. Refrigerate until firm, cut to serve.',145,5),(145,'Nutrition per serving for a 400g/14oz bone in steak (T-bone, ~300g/10oz exc bone), excluding butter.',145,6),(146,'Guanciale is the cured pork traditionally used in carbonara. Sold in block form that you cut yourself, it can be found in Italian/speciality delis, Harris Farms (Syd, Brisbane) and some butchers. It’s very fatty and has a stronger flavour than pancetta and bacon. Substitute with block bacon or pancetta (so you can cut batons), or thick pre-sliced bacon. Must use streaky as sauce needs fat to thicken (read in post for why).',146,1),(147,'Eggs – Use large eggs (cartons labelled as such) which are 55-60g / 2oz each.',146,2),(148,'Parmigiano reggiano is a premium aged type of parmesan. Pecorino is also commonly used. Sub parmesan. Do not use store bough pre-grated as it will not melt properly. Must finely shred it yourself!\n100g/3.5oz is one tightly packed cup ie shred, put in a cup and pack it down tightly.',146,3),(149,'Garlic not traditional but it adds extra flavour and I can’t resist. Sorry Italy!',146,4),(150,'Leftovers will keep for 3 days but pasta really is always best eaten freshly made, in particular for carbonara!',146,5),(256,'Buttermilk is the traditional marinating ingredient for Southern Fried Chicken. Find it in near milk in large grocery stores. Sub with 1/2 cup yogurt + 1/4 cup milk, it works nearly as well (yogurt is an excellent marinading ingredient). Next best sub: stir 1 1/2 tsp white vinegar into milk, leave 10 minutes. Will curdle. Use per recipe.\n',181,1),(257,'Frying vessel – I feel safe using a heavy cast iron pot. For most oil efficiency, use a wok – shape means you will use about 30% less oil with same surface area for frying. If you have a deep fryer, I salute you!\n',181,2),(258,'Oil temperature – use a thermometer. If you don’t have one, test by throwing in a small cube of bread, at 180C/350F it should turn golden in 15 seconds. OR stick a bamboo chopstick in and touch the base of the pot – if bubbles immediately rise from floor of pot, oil is hot enough.\n',181,3),(259,'Re-using oil – The oil gets a little too dirty with fried chicken, because of the heavy seasoning in the coating. You could re-use it once more for another batch of this recipe, but I wouldn’t use it for another recipe.\n',181,4),(260,'Leftover cooked chicken will keep for 3 days but, well, you know. Soggy.\n',181,5);
/*!40000 ALTER TABLE `cookbook_note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_recipe`
--

DROP TABLE IF EXISTS `cookbook_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_recipe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `author` varchar(128) DEFAULT NULL,
  `prep_time` int NOT NULL,
  `cook_time` int NOT NULL,
  `serves` int NOT NULL,
  `cuisine` varchar(128) NOT NULL,
  `url_slug` varchar(128) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `image_id` bigint DEFAULT NULL,
  `source_link` longtext,
  `status` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_recipe_category_id_bb7f8f45_fk_cookbook_category_id` (`category_id`),
  KEY `cookbook_recipe_image_id_33b05fe9_fk_cookbook_image_id` (`image_id`),
  CONSTRAINT `cookbook_recipe_category_id_bb7f8f45_fk_cookbook_category_id` FOREIGN KEY (`category_id`) REFERENCES `cookbook_category` (`id`),
  CONSTRAINT `cookbook_recipe_image_id_33b05fe9_fk_cookbook_image_id` FOREIGN KEY (`image_id`) REFERENCES `cookbook_image` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_recipe`
--

LOCK TABLES `cookbook_recipe` WRITE;
/*!40000 ALTER TABLE `cookbook_recipe` DISABLE KEYS */;
INSERT INTO `cookbook_recipe` VALUES (66,'Japchae – Korean noodles','JNagi',20,15,5,'Korean','/japchae_korean_noodles',6,113,'https://www.recipetineats.com/japchae-korean-noodles/','published'),(105,'Spicy Asian Zucchini','Nagi',5,10,5,'Asian','/spicy_asian_zucchini',27,156,'https://www.recipetineats.com/spicy-asian-zucchini-recipe/','published'),(106,'Garlic Noodles','Nagi',6,6,1,'Asian Esque','/garlic_noodles',27,160,'https://www.recipetineats.com/garlic-noodles/','published'),(107,'Bok Choy in Ginger Sauce','Nagi',3,3,4,'Asian','/bok_choy_in_ginger_sauce',27,164,'https://www.recipetineats.com/bok-choy-in-ginger-sauce/','Unpublished'),(108,'Easy Lemon Bars','Nagi',15,40,16,'Western','/easy_lemon_bars',30,165,'https://www.recipetineats.com/lemon-bars/','Unpublished'),(139,'Steak Sandwich','Nagi',10,60,4,'Western','/steak_sandwich',59,196,'https://www.recipetineats.com/steak-sandwich/','Unpublished'),(145,'Beef Steak Marinade','Nagi',5,5,2,'Western','/beef_steak_marinade',6,202,'https://www.recipetineats.com/beef-steak-marinade/','Unpublished'),(146,'Carbonara','Nagi',5,15,4,'Italian','/carbonara',6,203,'https://www.recipetineats.com/carbonara/','Unpublished'),(181,'Ultra Crunchy Fried Chicken Burger','Nagi',15,15,4,'Western','/ultra_crunchy_fried_chicken_burger',73,219,'https://www.recipetineats.com/crispy-fried-chicken-burger/','published');
/*!40000 ALTER TABLE `cookbook_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_recipeingredient`
--

DROP TABLE IF EXISTS `cookbook_recipeingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_recipeingredient` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ingredient_id` bigint NOT NULL,
  `amount` double DEFAULT NULL,
  `recipe_ingredient_component_id` bigint DEFAULT NULL,
  `metric_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_recipeingre_ingredient_id_e81099ac_fk_cookbook_` (`ingredient_id`),
  KEY `cookbook_recipeingre_recipe_ingredient_co_cd403393_fk_cookbook_` (`recipe_ingredient_component_id`),
  KEY `cookbook_recipeingre_metric_id_bbc72ec1_fk_cookbook_` (`metric_id`),
  CONSTRAINT `cookbook_recipeingre_ingredient_id_e81099ac_fk_cookbook_` FOREIGN KEY (`ingredient_id`) REFERENCES `cookbook_ingredient` (`id`),
  CONSTRAINT `cookbook_recipeingre_metric_id_bbc72ec1_fk_cookbook_` FOREIGN KEY (`metric_id`) REFERENCES `cookbook_metric` (`id`),
  CONSTRAINT `cookbook_recipeingre_recipe_ingredient_co_cd403393_fk_cookbook_` FOREIGN KEY (`recipe_ingredient_component_id`) REFERENCES `cookbook_recipeingredientcomponent` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=734 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_recipeingredient`
--

LOCK TABLES `cookbook_recipeingredient` WRITE;
/*!40000 ALTER TABLE `cookbook_recipeingredient` DISABLE KEYS */;
INSERT INTO `cookbook_recipeingredient` VALUES (209,20,2,1,2),(210,6,2,1,2),(211,21,2,1,2),(212,8,0.5,1,2),(213,5,0.25,2,1),(214,6,2,2,2),(215,7,0.5,2,2),(216,9,1.5,2,2),(217,10,0.5,2,2),(218,8,1,2,2),(219,11,250,3,4),(220,12,4,3,3),(221,10,1,3,2),(222,13,1,3,NULL),(223,14,3,3,NULL),(224,22,200,3,4),(225,16,2,3,NULL),(226,17,1,3,NULL),(227,18,4.5,3,1),(228,19,2,3,3),(242,46,5,4,NULL),(243,47,1,4,3),(244,10,0.75,4,NULL),(245,48,0.25,4,NULL),(246,49,1,4,NULL),(247,47,1,5,NULL),(248,50,3,5,NULL),(249,51,1,5,NULL),(250,9,1,5,NULL),(251,52,1,5,NULL),(252,53,2,5,3),(253,54,140,6,4),(254,55,30,7,4),(255,56,6,8,NULL),(256,57,3,9,2),(257,58,0.75,10,1),(258,59,0.25,10,1),(259,60,0.5,10,1),(260,61,0.5,10,NULL),(262,63,3,11,NULL),(263,64,1,11,1),(264,65,2,11,3),(265,66,1,11,3),(266,67,0.5,11,1),(314,92,0.75,14,1),(315,7,1,14,NULL),(316,95,3,13,NULL),(317,96,3,13,3),(318,97,2,13,3),(319,98,1,13,NULL),(320,99,0.25,13,3),(321,100,700,14,4),(322,99,NULL,14,NULL),(324,102,2,14,NULL),(325,103,60,14,4),(326,104,NULL,14,NULL),(327,105,NULL,14,NULL),(350,106,2,15,NULL),(351,107,1,16,2),(352,7,0.5,16,2),(353,108,0.5,16,2),(354,52,1,16,3),(355,109,1,16,3),(356,110,1,16,3),(357,111,1,16,3),(358,8,NULL,16,NULL),(359,112,175,17,4),(360,63,2,17,NULL),(361,113,2,17,NULL),(362,114,100,17,4),(363,8,0.25,17,3),(364,115,400,17,4),(366,117,1,17,NULL),(710,271,2,141,24),(711,272,0.75,142,1),(712,10,1.5,142,2),(713,273,1,142,24),(714,274,4,143,24),(715,275,3,143,25),(716,102,2,143,24),(717,276,2,143,24),(718,92,0.67,144,1),(719,277,0.75,144,2),(720,65,0.75,145,1),(721,278,0.25,145,1),(722,279,0.25,146,2),(723,280,0.5,146,2),(724,281,0.125,146,2),(725,108,0.5,146,2),(726,282,1,146,2),(727,283,0.25,146,2),(728,284,0.5,146,2),(729,285,0.5,146,2),(730,286,0.5,146,2),(731,10,0.5,146,2),(732,8,1.5,146,2),(733,12,3,147,1);
/*!40000 ALTER TABLE `cookbook_recipeingredient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_recipeingredientcomponent`
--

DROP TABLE IF EXISTS `cookbook_recipeingredientcomponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_recipeingredientcomponent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `component_name` varchar(128) NOT NULL,
  `recipe_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_recipeingre_recipe_id_d26f6c01_fk_cookbook_` (`recipe_id`),
  CONSTRAINT `cookbook_recipeingre_recipe_id_d26f6c01_fk_cookbook_` FOREIGN KEY (`recipe_id`) REFERENCES `cookbook_recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_recipeingredientcomponent`
--

LOCK TABLES `cookbook_recipeingredientcomponent` WRITE;
/*!40000 ALTER TABLE `cookbook_recipeingredientcomponent` DISABLE KEYS */;
INSERT INTO `cookbook_recipeingredientcomponent` VALUES (1,'BEEF AND MARINADE',66),(2,'NOODLE DRESSING',66),(3,'NOODLES & VEGETABLES',66),(4,'General',105),(5,'SPICY SAUCE',105),(6,'Noodles',106),(7,'Garlic Sauce',106),(8,'Bok Choy Ingredients',107),(9,'Bok Choy Sauce',107),(10,'Shortbread base',108),(11,'Lemon curd topping',108),(12,'General Sandwich Ingredients',139),(13,'CARAMELISED ONION',139),(14,'STEAK SANDWICH',139),(15,'General Steak Ingredients',145),(16,'MARINADE',145),(17,'General Carbonara Ingredients',146),(141,'CHICKEN CHOICES',181),(142,'MARINADE',181),(143,'BURGER',181),(144,'GARLIC MAYO',181),(145,'CRUNCHY COATING',181),(146,'FRIED CHICKEN SEASONING',181),(147,'TO FRY',181);
/*!40000 ALTER TABLE `cookbook_recipeingredientcomponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_recipeinstructionalcomponent`
--

DROP TABLE IF EXISTS `cookbook_recipeinstructionalcomponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_recipeinstructionalcomponent` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `component_name` varchar(128) NOT NULL,
  `recipe_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_recipeinstr_recipe_id_3ceb1e5d_fk_cookbook_` (`recipe_id`),
  CONSTRAINT `cookbook_recipeinstr_recipe_id_3ceb1e5d_fk_cookbook_` FOREIGN KEY (`recipe_id`) REFERENCES `cookbook_recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_recipeinstructionalcomponent`
--

LOCK TABLES `cookbook_recipeinstructionalcomponent` WRITE;
/*!40000 ALTER TABLE `cookbook_recipeinstructionalcomponent` DISABLE KEYS */;
INSERT INTO `cookbook_recipeinstructionalcomponent` VALUES (1,'QUICK BEEF MARINADE',66),(2,'SAUCE AND NOODLES',66),(3,'VEGETABLES',66),(4,'General Spicy Asian Zucchini',105),(5,'General Garlic Noodles',106),(6,'General Bok Choy',107),(7,'General Easy Lemon Bars',108),(8,'General Steak Sandwich',139),(9,'BEEF',139),(10,'ASSEMBLE SANDWICH',139),(11,'General Instructions Beef Steak Marinade',145),(12,'General Directions Carbonara',146),(48,'GENERAL:',181);
/*!40000 ALTER TABLE `cookbook_recipeinstructionalcomponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookbook_recipesummary`
--

DROP TABLE IF EXISTS `cookbook_recipesummary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookbook_recipesummary` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `summary` longtext NOT NULL,
  `recipe_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cookbook_recipesummary_recipe_id_2c5ba412_fk_cookbook_recipe_id` (`recipe_id`),
  CONSTRAINT `cookbook_recipesummary_recipe_id_2c5ba412_fk_cookbook_recipe_id` FOREIGN KEY (`recipe_id`) REFERENCES `cookbook_recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookbook_recipesummary`
--

LOCK TABLES `cookbook_recipesummary` WRITE;
/*!40000 ALTER TABLE `cookbook_recipesummary` DISABLE KEYS */;
INSERT INTO `cookbook_recipesummary` VALUES (46,'\"Sort of a stir fry, sort of a noodle salad, this big, colourful Korean noodle dish is tossed together in a bowl rather than on the stove and served barely warm. Made with chewy, slippery sweet potato noodles (dangmyeon) which are available in large grocery stores, though can be substitute with glass noodles (bean thread noodles) or vermicelli noodles in a pinch. Makes a big batch – leftovers make for a terrific lunch!\"',66),(84,'\"Here\'s a great new quick and easy way to use zucchinis! Meaty zucchini halves stove seared then doused in a mild spicy Asian chilli garlic sauce.\\nThe stove works so well here – great colour, and cooks them through just enough so they\'re tender-crisp rather than watery-mushy. Though, if you want soft all the way through, it\'ll be easier to do them in the oven – see notes. Serve as a substantial side or a hearty healthy lunch!\"',105),(85,'\"This is yet another example of an excellent fusion Asian dish that brings together Asian and Western ingredients to create something incredibly tasty. Big garlic flavours – with a secret ingredient: parmesan. Yes, you read that right! Parmesan. Mixed with Asian sauces (oyster, fish sauce and Maggi seasoning or soy sauce) and a stack of garlic, it adds a punch of savoury flavour when it melts into the sauce. And it goes amazingly well with the Asian flavours!\"',106),(86,'\"My favourite way to cook bok choy is with a lovely shiny, ginger sauce. Great way to load up on leafy Asian greens quickly and easily! Be careful not to overcook the bok choy, it cooks really fast. Pan-steam for just 45 seconds, then it finishes cooking in 30 seconds with the sauce.\\nRecipe also works great with other Asian Greens like pak choy, choy sum (see Note 1). Make this ginger version one day then garlic the next! Serve as a side, with fluffy rice or over noodles in soup.\"',107),(87,'\"These Lemon Bars are like a simpler form of Lemon Tart which is made with a shortcrust pastry that’s chilled, rolled out, blind baked then cooled before filled with lemon curd, then baked again, then cooled.\\n\\nBeautiful. Elegant. Impressive.\\n\\nBut for the days when you don’t have time for all that, Lemon Bars is what you make! It’s incredibly simple: the base is blitzed in a food processor, pressed in a pan, baked, then just pour over a simple lemon curd mixture and bake again.\\n\\nLOVE the lemon curd! Jammy, a bit custardy, tangy and not-too-sweet. Hits the spot!\"',108),(118,'\"A juicy steak sandwich, piled high with tender slices of steak, tomato, lettuce, caramelised onion, garlic aioli and mustard. The caramelised onion really gives this a \\\"gourmet\\\" spin but see notes for faster suggestions.\"',139),(124,'\"Steaks are like wine – the more you spend, the better they are. Juicier, more flavour, more tender, no random bits of sinew throughout.\\n\\nAnd as much as we’d all like to be able to splurge on premium quality beef every time we have a hankering for steak, the reality is that most of us cannot!\\n\\nBut you can turn every day beef steaks into something that tastes as good as a premium cut (in my humble opinion) by using a great beef steak marinade!\"',145),(125,'\"Carbonara is a beautiful, classic Italian pasta that’s so creamy, you’d swear there’s a good amount of cream in it. And indeed, there’s plenty of recipes that cheat by adding in cream.\\n\\nBut today, we’re making spaghetti carbonara properly, the authentic, traditional way. No cream. Just egg, cheese and a splash of starchy pasta cooking water.\\n\\n15 minutes later, THIS is the sight that will be in front of you. And you’ll make 60 million Italians beam with pride!\"',146),(160,'KFC, eat your heart out! Our Fried Chicken Burger is way crunchier than yours, the chicken is way juicier and it tastes way better! The trick is to mix a bit of marinade into the flour coating – this creates lumps that fries up into an awesome ultra crunchy crust. See my Fried Chicken recipe for ravings and musings about this method.',181);
/*!40000 ALTER TABLE `cookbook_recipesummary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=303 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-08-21 17:47:18.946908','2','{\'asset_id\': \'238e6c965efc57a48a9709a5ffe61b79\', \'public_id\': \'cook_with_me/ngjeddhywg4kcvaahjer\', \'version\': 1692639970, \'version_id\': \'ac0e382e1ca207759de423bf2248178d\', \'signature\': \'8ae4eb97452b1f',3,'',8,1),(2,'2023-08-21 17:47:18.954080','1','{\'asset_id\': \'e06b36d858d59e0cda8063132dd24d04\', \'public_id\': \'cook_with_me/crhnvrote1fj8jegzjow\', \'version\': 1692639929, \'version_id\': \'f8da6c8ee3520dfbcaec5c12f4a943da\', \'signature\': \'0fd1399956b91c',3,'',8,1),(3,'2023-08-21 17:47:40.429058','2','2: Entree',3,'',13,1),(4,'2023-08-21 17:47:40.432975','1','1: Entree ',3,'',13,1),(5,'2023-08-21 18:52:03.266086','23','23: Japchae – Korean noodles ',3,'',7,1),(6,'2023-08-21 18:52:03.269747','22','22: Japchae – Korean noodles ',3,'',7,1),(7,'2023-08-21 18:52:03.271868','21','21: Japchae – Korean noodles ',3,'',7,1),(8,'2023-08-21 18:52:03.273360','20','20: Japchae – Korean noodles ',3,'',7,1),(9,'2023-08-21 18:52:03.275351','19','19: Japchae – Korean noodles ',3,'',7,1),(10,'2023-08-21 18:52:03.276677','18','18: Japchae – Korean noodles ',3,'',7,1),(11,'2023-08-21 18:52:03.277869','17','17: Japchae – Korean noodles ',3,'',7,1),(12,'2023-08-21 18:52:03.279252','16','16: Japchae – Korean noodles ',3,'',7,1),(13,'2023-08-21 18:52:03.280520','15','15: Japchae – Korean noodles ',3,'',7,1),(14,'2023-08-21 18:52:03.281574','14','14: Japchae – Korean noodles ',3,'',7,1),(15,'2023-08-21 18:52:03.282773','13','13: Japchae – Korean noodles ',3,'',7,1),(16,'2023-08-21 18:52:03.284122','12','12: Japchae – Korean noodles ',3,'',7,1),(17,'2023-08-21 18:52:03.285688','11','11: Japchae – Korean noodles ',3,'',7,1),(18,'2023-08-21 18:52:03.287330','10','10: Japchae – Korean noodles ',3,'',7,1),(19,'2023-08-21 18:52:03.288355','9','9: Japchae – Korean noodles ',3,'',7,1),(20,'2023-08-21 18:52:03.289528','8','8: Japchae – Korean noodles ',3,'',7,1),(21,'2023-08-21 18:52:03.290462','7','7: Japchae – Korean noodles ',3,'',7,1),(22,'2023-08-21 18:52:03.291612','6','6: Japchae – Korean noodles ',3,'',7,1),(23,'2023-08-21 18:52:03.293039','5','5: Japchae – Korean noodles ',3,'',7,1),(24,'2023-08-21 18:52:03.295089','4','4: Japchae – Korean noodles ',3,'',7,1),(25,'2023-08-21 18:52:03.296150','3','3: Japchae – Korean noodles ',3,'',7,1),(26,'2023-08-21 18:52:10.105001','31','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643896/cook_with_me/xbmqvotnlekiurfx3j3h.webp',3,'',8,1),(27,'2023-08-21 18:52:10.109513','30','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643896/cook_with_me/yd3kxphivs1viut4loee.webp',3,'',8,1),(28,'2023-08-21 18:52:10.112060','29','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643848/cook_with_me/n8czjwywsuggpzwjvohb.webp',3,'',8,1),(29,'2023-08-21 18:52:10.114559','28','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643848/cook_with_me/jnwueedrguxck2qv2ngf.webp',3,'',8,1),(30,'2023-08-21 18:52:10.116732','27','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643768/cook_with_me/vwcwefdycim18zylxjzg.webp',3,'',8,1),(31,'2023-08-21 18:52:10.118843','26','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643767/cook_with_me/nbfne2h3sdqmwqijfyil.webp',3,'',8,1),(32,'2023-08-21 18:52:10.122471','25','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643668/cook_with_me/n0jzmjjeovgfp7j9w17j.webp',3,'',8,1),(33,'2023-08-21 18:52:10.124401','24','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643668/cook_with_me/rsirotwwveadsezger7h.webp',3,'',8,1),(34,'2023-08-21 18:52:10.126942','23','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643654/cook_with_me/znm7cecx3tenixpl7xuv.webp',3,'',8,1),(35,'2023-08-21 18:52:10.129163','22','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643653/cook_with_me/zm3twuepeny6ref2p1lh.webp',3,'',8,1),(36,'2023-08-21 18:52:10.130747','21','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643487/cook_with_me/dnlt0pjflbjonhlcnlid.webp',3,'',8,1),(37,'2023-08-21 18:52:10.132237','20','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643487/cook_with_me/tpfswl4nlcx3codiupgx.webp',3,'',8,1),(38,'2023-08-21 18:52:10.133829','19','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643469/cook_with_me/p4h7templbmjiyhwbrni.webp',3,'',8,1),(39,'2023-08-21 18:52:10.135231','18','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643467/cook_with_me/bbk8yqtp4ddzvmzim9br.webp',3,'',8,1),(40,'2023-08-21 18:52:10.136754','17','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643431/cook_with_me/kwyyl5iok75c37hbjwkk.webp',3,'',8,1),(41,'2023-08-21 18:52:10.138334','16','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643430/cook_with_me/romub4qncdxjx7ra3dvh.webp',3,'',8,1),(42,'2023-08-21 18:52:10.140252','15','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643374/cook_with_me/g1x8hsmnm8tl5lx7pyxx.webp',3,'',8,1),(43,'2023-08-21 18:52:10.141763','14','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643351/cook_with_me/dtur4xd7mss1d16g1r9m.webp',3,'',8,1),(44,'2023-08-21 18:52:10.143650','13','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643321/cook_with_me/bxjakmkldbjbhnvsu8nx.webp',3,'',8,1),(45,'2023-08-21 18:52:10.145090','12','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643236/cook_with_me/cqfhjcxrim1jisbjy0f1.webp',3,'',8,1),(46,'2023-08-21 18:52:10.146737','11','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643228/cook_with_me/bon32ip1nyrrpabpmcms.webp',3,'',8,1),(47,'2023-08-21 18:52:10.148005','10','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643192/cook_with_me/e6k9jappenjdzy2lthbw.webp',3,'',8,1),(48,'2023-08-21 18:52:10.149448','9','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643155/cook_with_me/gzlfsfb09iiihuixmpmv.webp',3,'',8,1),(49,'2023-08-21 18:52:10.150416','8','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643088/cook_with_me/u2x3rqm6rayrm9sman5b.webp',3,'',8,1),(50,'2023-08-21 18:52:10.152317','7','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643087/cook_with_me/wgpgbyxfoj9blkg8i4jw.webp',3,'',8,1),(51,'2023-08-21 18:52:10.153998','6','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643005/cook_with_me/df2kqwj1bcvsgavkd9cp.webp',3,'',8,1),(52,'2023-08-21 18:52:10.154949','5','http://res.cloudinary.com/dufsumsmb/image/upload/v1692642906/cook_with_me/bgjzqxty6htx7yzdefte.webp',3,'',8,1),(53,'2023-08-21 18:52:10.156199','4','http://res.cloudinary.com/dufsumsmb/image/upload/v1692642748/cook_with_me/k4szjeekys29fuaoyy6k.webp',3,'',8,1),(54,'2023-08-21 18:52:10.157642','3','http://res.cloudinary.com/dufsumsmb/image/upload/v1692640092/cook_with_me/p6umvuaefzm44xk1eqvb.jpg',3,'',8,1),(55,'2023-08-21 18:52:19.621154','4','4: black pepper',3,'',9,1),(56,'2023-08-21 18:52:19.626328','3','3: minced garlic',3,'',9,1),(57,'2023-08-21 18:52:19.630622','2','2: white sugar',3,'',9,1),(58,'2023-08-21 18:52:19.633541','1','1: all-purpose or light soy sauce',3,'',9,1),(59,'2023-08-21 18:57:18.343987','27','27: Japchae – Korean noodles ',3,'',7,1),(60,'2023-08-21 18:57:18.348969','26','26: Japchae – Korean noodles ',3,'',7,1),(61,'2023-08-21 18:57:18.351008','25','25: Japchae – Korean noodles ',3,'',7,1),(62,'2023-08-21 18:57:18.352662','24','24: Japchae – Korean noodles ',3,'',7,1),(63,'2023-08-21 18:57:23.117572','39','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644196/cook_with_me/yqtutl8zrlplps6rzmha.webp',3,'',8,1),(64,'2023-08-21 18:57:23.123526','38','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644195/cook_with_me/snvopcbovas43xseon4z.webp',3,'',8,1),(65,'2023-08-21 18:57:23.127291','37','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644177/cook_with_me/n9w9proxmjenpuio60um.webp',3,'',8,1),(66,'2023-08-21 18:57:23.130931','36','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644177/cook_with_me/ilytkoeeqd21twa1imqn.webp',3,'',8,1),(67,'2023-08-21 18:57:23.134387','35','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644134/cook_with_me/wu58khldu9ovupdb3q6y.webp',3,'',8,1),(68,'2023-08-21 18:57:23.136929','34','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644133/cook_with_me/seevzubvuvweqghk9cji.webp',3,'',8,1),(69,'2023-08-21 18:57:23.139361','33','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643951/cook_with_me/tjtzsyjpjkyvzkjwc3mw.webp',3,'',8,1),(70,'2023-08-21 18:57:23.141764','32','http://res.cloudinary.com/dufsumsmb/image/upload/v1692643950/cook_with_me/x63bhs0pcbro6h76dx4c.webp',3,'',8,1),(71,'2023-08-21 19:14:39.431830','32','32: Japchae – Korean noodles ',3,'',7,1),(72,'2023-08-21 19:14:39.463965','31','31: Japchae – Korean noodles ',3,'',7,1),(73,'2023-08-21 19:14:39.477576','30','30: Japchae – Korean noodles ',3,'',7,1),(74,'2023-08-21 19:14:39.482243','29','29: Japchae – Korean noodles ',3,'',7,1),(75,'2023-08-21 19:14:39.485221','28','28: Japchae – Korean noodles ',3,'',7,1),(76,'2023-08-21 19:14:46.195118','44','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644951/cook_with_me/hw2nfiyvitaisnpnrdhf.webp',3,'',8,1),(77,'2023-08-21 19:14:46.199871','43','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644877/cook_with_me/pvf5qxnt0pkaqhisawta.webp',3,'',8,1),(78,'2023-08-21 19:14:46.203419','42','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644798/cook_with_me/vwx3nz6dzuz3e3igygfx.webp',3,'',8,1),(79,'2023-08-21 19:14:46.206205','41','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644798/cook_with_me/de0nc0gdyrfkypp1zeww.webp',3,'',8,1),(80,'2023-08-21 19:14:46.208950','40','http://res.cloudinary.com/dufsumsmb/image/upload/v1692644639/cook_with_me/vbmvn3yaybxtzutabiyd.webp',3,'',8,1),(81,'2023-08-21 19:15:28.720357','33','33: Japchae – Korean noodles ',3,'',7,1),(82,'2023-08-21 19:15:34.919602','45','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645289/cook_with_me/t5lbtrsogpmrlpdrizoq.webp',3,'',8,1),(83,'2023-08-21 19:31:32.001970','42','42: Japchae – Korean noodles',3,'',7,1),(84,'2023-08-21 19:31:32.005747','41','41: Japchae – Korean noodles',3,'',7,1),(85,'2023-08-21 19:31:32.007631','40','40: Japchae – Korean noodles',3,'',7,1),(86,'2023-08-21 19:31:32.009108','39','39: Japchae – Korean noodles',3,'',7,1),(87,'2023-08-21 19:31:32.010721','38','38: Japchae – Korean noodles',3,'',7,1),(88,'2023-08-21 19:31:32.012024','37','37: Japchae – Korean noodles',3,'',7,1),(89,'2023-08-21 19:31:32.013402','36','36: Japchae – Korean noodles',3,'',7,1),(90,'2023-08-21 19:31:32.014611','35','35: Japchae – Korean noodles',3,'',7,1),(91,'2023-08-21 19:31:32.015811','34','34: Japchae – Korean noodles ',3,'',7,1),(92,'2023-08-21 19:31:38.926903','60','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646270/cook_with_me/rd2tra9alnodalxaaktv.webp',3,'',8,1),(93,'2023-08-21 19:31:38.929255','59','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646270/cook_with_me/sylznptnhsizwldzja97.webp',3,'',8,1),(94,'2023-08-21 19:31:38.931177','58','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646269/cook_with_me/nkhoufbd8yjrv0ru5jfg.webp',3,'',8,1),(95,'2023-08-21 19:31:38.932455','57','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646269/cook_with_me/yaqyzoczuljpp3t53ppu.webp',3,'',8,1),(96,'2023-08-21 19:31:38.934494','56','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646015/cook_with_me/lwirxgdqduyrnnietonr.webp',3,'',8,1),(97,'2023-08-21 19:31:38.935920','55','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646015/cook_with_me/eumecwtf6hod2t13tnqm.webp',3,'',8,1),(98,'2023-08-21 19:31:38.937644','54','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646014/cook_with_me/o3vqqvomjdc9xnshvm5r.webp',3,'',8,1),(99,'2023-08-21 19:31:38.938862','53','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646014/cook_with_me/dxlbkvi3qqwoxy0zxshc.webp',3,'',8,1),(100,'2023-08-21 19:31:38.940025','52','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645953/cook_with_me/a2wcsuel0qhvnlznc6ap.webp',3,'',8,1),(101,'2023-08-21 19:31:38.941256','51','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645931/cook_with_me/w9nzd5yl1ubflapxubdl.webp',3,'',8,1),(102,'2023-08-21 19:31:38.942344','50','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645594/cook_with_me/crwct5nrprdo6vjkqnuv.webp',3,'',8,1),(103,'2023-08-21 19:31:38.943599','49','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645562/cook_with_me/obin3vttl609rm0me0na.webp',3,'',8,1),(104,'2023-08-21 19:31:38.944727','48','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645525/cook_with_me/u8pnptcsoojupbcicxri.webp',3,'',8,1),(105,'2023-08-21 19:31:38.946298','47','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645455/cook_with_me/yf8kg6ulghmdjkqojz4x.webp',3,'',8,1),(106,'2023-08-21 19:31:38.947387','46','http://res.cloudinary.com/dufsumsmb/image/upload/v1692645346/cook_with_me/vlmy7fmqwy06wewfowvl.webp',3,'',8,1),(107,'2023-08-21 22:00:26.573904','45','45: ',3,'',7,1),(108,'2023-08-21 22:00:26.579835','44','44: ',3,'',7,1),(109,'2023-08-22 00:57:09.803180','58','58: Japchae – Korean noodles',3,'',7,1),(110,'2023-08-22 00:57:09.811191','57','57: Japchae – Korean noodles',3,'',7,1),(111,'2023-08-22 00:57:09.813940','56','56: Japchae – Korean noodles',3,'',7,1),(112,'2023-08-22 00:57:09.815896','55','55: Japchae – Korean noodles',3,'',7,1),(113,'2023-08-22 00:57:09.817507','54','54: tests',3,'',7,1),(114,'2023-08-22 00:57:09.818924','53','53: tests',3,'',7,1),(115,'2023-08-22 00:57:09.820323','52','52: tests',3,'',7,1),(116,'2023-08-22 00:57:09.821588','51','51: tests',3,'',7,1),(117,'2023-08-22 00:57:09.823008','50','50: tests',3,'',7,1),(118,'2023-08-22 00:57:09.824601','49','49: tests',3,'',7,1),(119,'2023-08-22 00:57:09.825712','48','48: tests',3,'',7,1),(120,'2023-08-22 00:57:09.827669','47','47: ',3,'',7,1),(121,'2023-08-22 00:57:09.828961','46','46: ',3,'',7,1),(122,'2023-08-22 00:57:09.831356','43','43: Japchae – Korean noodles',3,'',7,1),(123,'2023-08-22 00:57:21.681683','82','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659455/cook_with_me/s4rfwl9xb77syb9bdep7.webp',3,'',8,1),(124,'2023-08-22 00:57:21.687374','81','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659454/cook_with_me/uzqpbja7nlwqufcpjcfq.webp',3,'',8,1),(125,'2023-08-22 00:57:21.692336','80','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659434/cook_with_me/gtknxpbj9ovfqcw7binu.webp',3,'',8,1),(126,'2023-08-22 00:57:21.695393','79','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659433/cook_with_me/ccrsh60cxma3a0lkfzuy.webp',3,'',8,1),(127,'2023-08-22 00:57:21.697917','78','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659388/cook_with_me/v59q0vjm2fcuv53wk1sy.webp',3,'',8,1),(128,'2023-08-22 00:57:21.700477','77','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659387/cook_with_me/jn6jax3o8goxpbmmer6n.webp',3,'',8,1),(129,'2023-08-22 00:57:21.703434','76','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659378/cook_with_me/swhbx0uiytjqr6m3ozws.webp',3,'',8,1),(130,'2023-08-22 00:57:21.705813','75','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659286/cook_with_me/csbodd1dcuenqfporuc1.webp',3,'',8,1),(131,'2023-08-22 00:57:21.707430','74','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659256/cook_with_me/zxvkeva2t24k8pbf4goj.webp',3,'',8,1),(132,'2023-08-22 00:57:21.709269','73','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659151/cook_with_me/xxs6pimhmq9idtzelqbr.webp',3,'',8,1),(133,'2023-08-22 00:57:21.710992','72','http://res.cloudinary.com/dufsumsmb/image/upload/v1692659070/cook_with_me/lmdnxp1m9mvo8thpjmv2.webp',3,'',8,1),(134,'2023-08-22 00:57:21.713226','71','http://res.cloudinary.com/dufsumsmb/image/upload/v1692658985/cook_with_me/pwcfzp8s5rs91hyfnwxx.webp',3,'',8,1),(135,'2023-08-22 00:57:21.715383','70','http://res.cloudinary.com/dufsumsmb/image/upload/v1692658912/cook_with_me/sb3s7ltu1txuisz6jjri.webp',3,'',8,1),(136,'2023-08-22 00:57:21.720996','69','http://res.cloudinary.com/dufsumsmb/image/upload/v1692658763/cook_with_me/du6xqf4pfxkhvd8k8xkq.webp',3,'',8,1),(137,'2023-08-22 00:57:21.723463','68','http://res.cloudinary.com/dufsumsmb/image/upload/v1692657842/cook_with_me/sp9nqlvlzqenc5pqxgjs.webp',3,'',8,1),(138,'2023-08-22 00:57:21.725181','67','http://res.cloudinary.com/dufsumsmb/image/upload/v1692655255/cook_with_me/nfsedgcnch8gz28ina7d.webp',3,'',8,1),(139,'2023-08-22 00:57:21.726818','66','http://res.cloudinary.com/dufsumsmb/image/upload/v1692654809/cook_with_me/lb1sy7evda2kbhwkz0wr.webp',3,'',8,1),(140,'2023-08-22 00:57:21.728590','65','http://res.cloudinary.com/dufsumsmb/image/upload/v1692654770/cook_with_me/hal5sihnvfzurys0jhxh.webp',3,'',8,1),(141,'2023-08-22 00:57:21.729881','64','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646306/cook_with_me/kunobh4d0lxlqmcvzxup.webp',3,'',8,1),(142,'2023-08-22 00:57:21.731278','63','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646306/cook_with_me/xza1yayhud9ziawmao47.webp',3,'',8,1),(143,'2023-08-22 00:57:21.732882','62','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646305/cook_with_me/ydsastbwoabsll41bf8a.webp',3,'',8,1),(144,'2023-08-22 00:57:21.734174','61','http://res.cloudinary.com/dufsumsmb/image/upload/v1692646305/cook_with_me/ypoiipv8cunnuv3cr6dl.webp',3,'',8,1),(145,'2023-08-22 00:57:30.574752','5','5: ',3,'',13,1),(146,'2023-08-22 00:57:30.580730','4','4: Entree',3,'',13,1),(147,'2023-08-22 00:57:30.583979','3','3: Entree ',3,'',13,1),(148,'2023-08-22 01:16:30.071320','61','61: Japchae – Korean noodles',3,'',7,1),(149,'2023-08-22 01:16:30.077594','60','60: Japchae – Korean noodles',3,'',7,1),(150,'2023-08-22 01:16:30.080312','59','59: Japchae – Korean noodles',3,'',7,1),(151,'2023-08-22 01:16:40.182625','96','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666965/cook_with_me/iswhpv2smkcrlbrz6s0s.webp',3,'',8,1),(152,'2023-08-22 01:16:40.187015','95','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666965/cook_with_me/bbzzr2ic3dxonspl34ps.webp',3,'',8,1),(153,'2023-08-22 01:16:40.190135','94','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666964/cook_with_me/oqedmr35vfsjawuhtxnl.webp',3,'',8,1),(154,'2023-08-22 01:16:40.192001','93','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666964/cook_with_me/daa33yjhfbuip9obbu0e.webp',3,'',8,1),(155,'2023-08-22 01:16:40.194958','92','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666899/cook_with_me/ywt5tgmt6ghp0l5mmng7.webp',3,'',8,1),(156,'2023-08-22 01:16:40.198640','91','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666898/cook_with_me/vw5isqkikdvyu44r8cup.webp',3,'',8,1),(157,'2023-08-22 01:16:40.200974','90','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666898/cook_with_me/wsfrfrtejtug7wgjbrov.webp',3,'',8,1),(158,'2023-08-22 01:16:40.203852','89','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666897/cook_with_me/gpg9xnokerit9iztc73y.webp',3,'',8,1),(159,'2023-08-22 01:16:40.205808','88','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666794/cook_with_me/gyl0y7ll1ctc2tqhrxae.webp',3,'',8,1),(160,'2023-08-22 01:16:40.207812','87','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666794/cook_with_me/q29sqzgp04ezl1rarcvr.webp',3,'',8,1),(161,'2023-08-22 01:16:40.209784','86','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666793/cook_with_me/me0o1o00bgwlqyqrfnnj.webp',3,'',8,1),(162,'2023-08-22 01:16:40.211375','85','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666792/cook_with_me/fet4cor8b1mwanb8uoaf.webp',3,'',8,1),(163,'2023-08-22 01:16:40.212875','84','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666069/cook_with_me/zji4ohn6zkxgbblcabsb.webp',3,'',8,1),(164,'2023-08-22 01:16:40.215268','83','http://res.cloudinary.com/dufsumsmb/image/upload/v1692666031/cook_with_me/qc612jjyinej2xa0qfqb.webp',3,'',8,1),(165,'2023-08-22 05:37:49.636801','63','63: Japchae – Korean noodles',3,'',7,1),(166,'2023-08-22 05:37:49.640492','62','62: Japchae – Korean noodles',3,'',7,1),(167,'2023-08-22 18:07:27.886701','65','65: Japchae – Korean noodles',3,'',7,1),(168,'2023-08-22 18:07:27.891102','64','64: Japchae – Korean noodles',3,'',7,1),(169,'2023-08-22 18:07:39.357441','112','http://res.cloudinary.com/dufsumsmb/image/upload/v1692727639/cook_with_me/pu2t4eycwf21phny4jxv.webp',3,'',8,1),(170,'2023-08-22 18:07:39.361785','111','http://res.cloudinary.com/dufsumsmb/image/upload/v1692727638/cook_with_me/rvogzorbr0hijx63aho6.webp',3,'',8,1),(171,'2023-08-22 18:07:39.365005','110','http://res.cloudinary.com/dufsumsmb/image/upload/v1692727637/cook_with_me/xedxjwe5coy3qfvz3vh6.webp',3,'',8,1),(172,'2023-08-22 18:07:39.368780','109','http://res.cloudinary.com/dufsumsmb/image/upload/v1692727636/cook_with_me/dcf4iosekoorg3wtduo7.webp',3,'',8,1),(173,'2023-08-22 18:07:39.371731','108','http://res.cloudinary.com/dufsumsmb/image/upload/v1692682606/cook_with_me/cgaarfkpxtsifldg9knf.webp',3,'',8,1),(174,'2023-08-22 18:07:39.374648','107','http://res.cloudinary.com/dufsumsmb/image/upload/v1692682605/cook_with_me/gnj96jg9zvatqhvija9d.webp',3,'',8,1),(175,'2023-08-22 18:07:39.378205','106','http://res.cloudinary.com/dufsumsmb/image/upload/v1692682605/cook_with_me/kexpaw1nbnpotsoglwrb.webp',3,'',8,1),(176,'2023-08-22 18:07:39.380542','105','http://res.cloudinary.com/dufsumsmb/image/upload/v1692682604/cook_with_me/qtytgg7jktuqvo19s8fm.webp',3,'',8,1),(177,'2023-08-22 18:07:39.382811','104','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667189/cook_with_me/savflczr5aoph8hgulvb.webp',3,'',8,1),(178,'2023-08-22 18:07:39.385196','103','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667178/cook_with_me/rn0e5fouc7cde7nvi5c1.webp',3,'',8,1),(179,'2023-08-22 18:07:39.387432','102','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667176/cook_with_me/s88duvrrdtuzsvoo55ki.webp',3,'',8,1),(180,'2023-08-22 18:07:39.389165','101','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667170/cook_with_me/wqebpagfstztj9zmoadt.webp',3,'',8,1),(181,'2023-08-22 18:07:39.391335','100','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667082/cook_with_me/olarhrsk8wuyin7s9kkn.webp',3,'',8,1),(182,'2023-08-22 18:07:39.394104','99','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667079/cook_with_me/egeebc5djkwvlqwdflgr.webp',3,'',8,1),(183,'2023-08-22 18:07:39.396944','98','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667078/cook_with_me/mwihoplej9lmoupfdpeg.webp',3,'',8,1),(184,'2023-08-22 18:07:39.399424','97','http://res.cloudinary.com/dufsumsmb/image/upload/v1692667076/cook_with_me/xnqkojhpjwpvfgglxiai.webp',3,'',8,1),(185,'2023-08-24 22:00:45.150825','66','66: Japchae – Korean noodles',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(186,'2023-08-26 09:20:33.990947','100','100: Spicy Asian Zucchini',3,'',7,1),(187,'2023-08-26 09:20:33.993628','99','99: Spicy Asian Zucchini',3,'',7,1),(188,'2023-08-26 09:20:33.995963','98','98: Spicy Asian Zucchini',3,'',7,1),(189,'2023-08-26 09:20:33.997299','97','97: Spicy Asian Zucchini',3,'',7,1),(190,'2023-08-26 09:20:33.998730','96','96: Spicy Asian Zucchini',3,'',7,1),(191,'2023-08-26 09:20:34.000053','95','95: Spicy Asian Zucchini',3,'',7,1),(192,'2023-08-26 09:20:34.001470','94','94: Spicy Asian Zucchini',3,'',7,1),(193,'2023-08-26 09:20:34.002258','93','93: Spicy Asian Zucchini',3,'',7,1),(194,'2023-08-26 09:20:34.003435','92','92: Spicy Asian Zucchini',3,'',7,1),(195,'2023-08-26 09:20:34.004497','88','88: Spicy Asian Zucchini',3,'',7,1),(196,'2023-08-26 09:20:34.005864','87','87: Spicy Asian Zucchini',3,'',7,1),(197,'2023-08-26 09:21:09.950298','101','101: Spicy Asian Zucchini',2,'[{\"changed\": {\"fields\": [\"Serves\", \"Source link\", \"Is published\"]}}]',7,1),(198,'2023-08-26 09:23:56.792093','101','101: Spicy Asian Zucchini',2,'[{\"changed\": {\"fields\": [\"Prep time\", \"Cook time\"]}}]',7,1),(199,'2023-08-26 09:24:28.727626','80','80: \"Here\'s a great new quick and easy way to use zucchinis! Meaty zucchini halves stove seared then doused in a mild spicy Asian chilli garlic sauce.\r\nThe stove works so well here – great colour, and',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(200,'2023-08-26 09:26:12.535458','101','101: Spicy Asian Zucchini',3,'',7,1),(201,'2023-08-26 09:30:45.771965','28','28: ',3,'',13,1),(202,'2023-08-26 18:31:42.121055','104','104: Spicy Asian Zucchini',3,'',7,1),(203,'2023-08-26 18:31:42.127852','102','102: Spicy Asian Zucchini',3,'',7,1),(204,'2023-08-26 18:52:07.425487','105','105: Spicy Asian Zucchini',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(205,'2023-08-27 01:33:32.445079','218','107: NOODLE DRESSING: black pepper',2,'[{\"changed\": {\"fields\": [\"Amount\"]}}]',11,1),(206,'2023-09-11 01:45:32.216529','84','84: Here\'s a great new quick and easy way to use zucchinis! Meaty zucchini halves stove seared then doused in a mild spicy Asian chilli garlic sauce.\\nThe stove works so well here – great colour, and ',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(207,'2023-09-11 20:05:48.370906','243','163: General: canola oil',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(208,'2023-09-12 00:05:03.711016','106','106: Garlic Noodles',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(209,'2023-09-14 03:49:45.929668','107','107: Bok Choy in Ginger Sauce',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(210,'2023-09-14 04:34:57.601999','108','108: Easy Lemon Bars',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(211,'2023-09-14 04:35:38.006430','62','62: unsalted butter',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',9,1),(212,'2023-09-14 05:13:44.025810','62','62: unsalted butter',3,'',9,1),(213,'2023-09-14 08:16:02.112732','137','137: Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(214,'2023-09-14 08:16:14.216747','137','137: Steak Sandwich',2,'[]',7,1),(215,'2023-09-14 08:19:26.005369','137','137: Steak Sandwich',3,'',7,1),(216,'2023-09-14 08:19:28.839528','138','138: Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(217,'2023-09-14 08:20:34.172427','138','138: Steak Sandwich',3,'',7,1),(218,'2023-09-14 08:20:38.965831','139','139: Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(219,'2023-09-14 18:37:51.603259','46','46: Sort of a stir fry, sort of a noodle salad, this big, colourful Korean noodle dish is tossed together in a bowl rather than on the stove and served barely warm. Made with chewy, slippery sweet pot',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(220,'2023-09-14 18:38:57.129986','87','87: These Lemon Bars are like a simpler form of Lemon Tart which is made with a shortcrust pastry that’s chilled, rolled out, blind baked then cooled before filled with lemon curd, then baked again, t',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(221,'2023-09-14 18:57:08.411287','87','87: \"These Lemon Bars are like a simpler form of Lemon Tart which is made with a shortcrust pastry that’s chilled, rolled out, blind baked then cooled before filled with lemon curd, then baked again, ',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(222,'2023-09-14 19:21:33.099197','140','140: Steak Sandwich',3,'',7,1),(223,'2023-09-14 19:25:33.695043','118','118: A juicy steak sandwich, piled high with tender slices of steak, tomato, lettuce, caramelised onion, garlic aioli and mustard. The caramelised onion really gives this a \\\"gourmet\\\" spin but see no',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(224,'2023-09-14 19:27:13.614392','87','87: These Lemon Bars are like a simpler form of Lemon Tart which is made with a shortcrust pastry that’s chilled, rolled out, blind baked then cooled before filled with lemon curd, then baked again, t',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(225,'2023-09-14 19:28:31.169490','98','98: ',3,'',10,1),(226,'2023-09-14 19:33:39.619501','141','141: Beef Steak Marinade',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(227,'2023-09-14 19:36:22.666112','141','141: Beef Steak Marinade',3,'',7,1),(228,'2023-09-14 19:36:27.158802','142','142: Beef Steak Marinade',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(229,'2023-09-14 19:38:01.874136','143','143: Beef Steak Marinade',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(230,'2023-09-14 19:38:15.411827','142','142: Beef Steak Marinade',3,'',7,1),(231,'2023-09-14 19:51:43.251872','94','94: ',3,'',9,1),(232,'2023-09-14 19:51:52.316956','101','101: ve',3,'',9,1),(233,'2023-09-14 19:55:59.889597','144','144: Beef Steak Marinade',3,'',7,1),(234,'2023-09-14 19:55:59.896614','143','143: Beef Steak Marinade',3,'',7,1),(235,'2023-09-14 19:56:03.226419','145','145: Beef Steak Marinade',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(236,'2023-09-14 20:19:07.211730','243','163: General: canola oil',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(237,'2023-09-14 20:20:30.927689','84','84: \"Here\'s a great new quick and easy way to use zucchinis! Meaty zucchini halves stove seared then doused in a mild spicy Asian chilli garlic sauce.\\nThe stove works so well here – great colour, and',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(238,'2023-09-14 21:45:00.925820','46','46: \"Sort of a stir fry, sort of a noodle salad, this big, colourful Korean noodle dish is tossed together in a bowl rather than on the stove and served barely warm. Made with chewy, slippery sweet po',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(239,'2023-09-14 21:45:12.584676','87','87: \"These Lemon Bars are like a simpler form of Lemon Tart which is made with a shortcrust pastry that’s chilled, rolled out, blind baked then cooled before filled with lemon curd, then baked again, ',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(240,'2023-09-14 21:45:17.923999','118','118: \"A juicy steak sandwich, piled high with tender slices of steak, tomato, lettuce, caramelised onion, garlic aioli and mustard. The caramelised onion really gives this a \\\"gourmet\\\" spin but see n',2,'[{\"changed\": {\"fields\": [\"Summary\"]}}]',14,1),(241,'2023-09-14 21:49:14.764644','320','196: CARAMELISED ONION: salt and pepper',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(242,'2023-09-14 22:15:11.248093','146','146: Carbonara',2,'[{\"changed\": {\"fields\": [\"Is published\"]}}]',7,1),(243,'2023-09-14 22:16:28.360065','116','116: cooking/kosher salt',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',9,1),(244,'2023-10-01 04:38:11.276381','165','165: General Zucchini',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(245,'2023-10-01 04:38:17.373571','168','168: General Garlic Noods',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(246,'2023-10-01 04:38:34.422324','167','167: General Garlic Sauce',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(247,'2023-10-01 04:38:40.859464','169','169: General Bok Choy',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(248,'2023-10-01 04:38:47.831014','171','171: General Bok Choy',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(249,'2023-10-01 04:39:02.254574','174','174: General Lemon Bars',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(250,'2023-10-01 04:39:06.884761','195','195: General Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(251,'2023-10-01 04:39:13.469445','198','198: General Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(252,'2023-10-01 04:39:31.275461','219','219: General Beef Steak',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(253,'2023-10-01 04:39:38.927529','221','221: General Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(254,'2023-10-01 04:39:48.781066','222','222: General Carbonara',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(255,'2023-10-01 04:39:52.931784','223','223: General Carbonara',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',15,1),(256,'2023-10-01 06:08:46.319448','209','106: BEEF AND MARINADE: all-purpose or light soy',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(257,'2023-10-01 06:08:52.863366','210','106: BEEF AND MARINADE: white sugar',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(258,'2023-10-01 06:10:36.929004','211','106: BEEF AND MARINADE: finely minced garlic',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(259,'2023-10-01 06:10:53.086883','224','108: NOODLES & VEGETABLES: shitake',2,'[{\"changed\": {\"fields\": [\"Metric\"]}}]',11,1),(260,'2023-10-01 06:41:20.097608','4','4: General Spicy Asian Zucchini',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(261,'2023-10-01 06:41:34.071843','5','5: General Garlic Noodles',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(262,'2023-10-01 06:41:43.339959','6','6: General Bok Choy',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(263,'2023-10-01 06:41:52.003325','7','7: General Easy Lemon Bars',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(264,'2023-10-01 06:42:03.676758','8','8: General Steak Sandwich',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(265,'2023-10-01 06:42:20.303451','11','11: General Instructions Beef Steak Marinade',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(266,'2023-10-01 06:42:29.806128','12','12: General Directions Carbonara',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',17,1),(267,'2023-10-01 06:54:32.982150','8','8: Bok Choy Ingredients',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(268,'2023-10-01 06:54:45.603824','9','9: Bok Choy Sauce',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(269,'2023-10-01 06:54:53.084391','7','7: Garlic Sauce',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(270,'2023-10-01 06:55:13.303903','12','12: General Sandwich Ingredients',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(271,'2023-10-01 06:55:25.241997','15','15: General Steak Ingredients',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(272,'2023-10-01 06:55:39.282601','17','17: General Carbonara Ingredients',2,'[{\"changed\": {\"fields\": [\"Component name\"]}}]',18,1),(273,'2023-10-01 07:06:02.138881','256','170: Sauce: cornflour/cornstarch',2,'[{\"changed\": {\"fields\": [\"Recipe ingredient component\"]}}]',11,1),(274,'2023-10-03 08:52:25.954145','147','147: Test',3,'',7,1),(275,'2023-10-03 09:06:23.869717','151','151: Test',3,'',7,1),(276,'2023-10-03 09:06:23.878967','150','150: Test',3,'',7,1),(277,'2023-10-03 09:06:23.883620','149','149: Test',3,'',7,1),(278,'2023-10-03 09:06:23.886222','148','148: Test',3,'',7,1),(279,'2023-10-03 09:27:11.729047','165','165: taetasetaest',3,'',7,1),(280,'2023-10-03 09:27:11.735249','164','164: taetasetaest',3,'',7,1),(281,'2023-10-03 09:27:11.738322','163','163: test',3,'',7,1),(282,'2023-10-03 09:27:11.740875','162','162: test',3,'',7,1),(283,'2023-10-03 09:27:11.742852','161','161: Test',3,'',7,1),(284,'2023-10-03 09:27:11.744669','160','160: Test',3,'',7,1),(285,'2023-10-03 09:27:11.745946','159','159: Test',3,'',7,1),(286,'2023-10-03 09:27:11.747672','158','158: Test',3,'',7,1),(287,'2023-10-03 09:27:11.749619','157','157: Test',3,'',7,1),(288,'2023-10-03 09:27:11.751482','156','156: Test',3,'',7,1),(289,'2023-10-03 09:27:11.752923','155','155: Test',3,'',7,1),(290,'2023-10-03 09:27:11.754445','154','154: Test',3,'',7,1),(291,'2023-10-03 09:27:11.755986','153','153: Test',3,'',7,1),(292,'2023-10-03 09:27:11.758047','152','152: Test',3,'',7,1),(293,'2023-10-03 09:27:18.563967','61','61: asetasetase',3,'',13,1),(294,'2023-10-03 09:27:38.850035','107','107: Bok Choy in Ginger Sauce',2,'[{\"changed\": {\"fields\": [\"Category\"]}}]',7,1),(295,'2023-10-03 09:27:44.438841','106','106: Garlic Noodles',2,'[{\"changed\": {\"fields\": [\"Category\"]}}]',7,1),(296,'2023-10-03 09:27:51.596939','29','29: Side Dish',3,'',13,1),(297,'2023-10-04 04:39:02.664636','116','116: cooking/kosher salt',3,'',9,1),(298,'2023-10-04 04:45:58.787276','180','180: Ultra Crunchy Fried Chicken Burger',3,'',7,1),(299,'2023-10-04 04:45:58.790755','179','179: Ultra Crunchy Fried Chicken Burger',3,'',7,1),(300,'2023-10-04 04:45:58.792239','178','178: Ultra Crunchy Fried Chicken Burger',3,'',7,1),(301,'2023-10-04 04:45:58.794225','177','177: Ultra Crunchy Fried Chicken Burger',3,'',7,1),(302,'2023-10-04 04:45:58.795829','176','176: Ultra Crunchy Fried Chicken Burger',3,'',7,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(13,'cookbook','category'),(8,'cookbook','image'),(9,'cookbook','ingredient'),(12,'cookbook','instruction'),(16,'cookbook','metric'),(10,'cookbook','note'),(7,'cookbook','recipe'),(15,'cookbook','recipecomponent'),(11,'cookbook','recipeingredient'),(18,'cookbook','recipeingredientcomponent'),(17,'cookbook','recipeinstructionalcomponent'),(14,'cookbook','recipesummary'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-08-21 08:30:58.999215'),(2,'auth','0001_initial','2023-08-21 08:30:59.176129'),(3,'admin','0001_initial','2023-08-21 08:30:59.234628'),(4,'admin','0002_logentry_remove_auto_add','2023-08-21 08:30:59.238801'),(5,'admin','0003_logentry_add_action_flag_choices','2023-08-21 08:30:59.242486'),(6,'contenttypes','0002_remove_content_type_name','2023-08-21 08:30:59.270116'),(7,'auth','0002_alter_permission_name_max_length','2023-08-21 08:30:59.290685'),(8,'auth','0003_alter_user_email_max_length','2023-08-21 08:30:59.301309'),(9,'auth','0004_alter_user_username_opts','2023-08-21 08:30:59.305066'),(10,'auth','0005_alter_user_last_login_null','2023-08-21 08:30:59.322950'),(11,'auth','0006_require_contenttypes_0002','2023-08-21 08:30:59.324840'),(12,'auth','0007_alter_validators_add_error_messages','2023-08-21 08:30:59.329002'),(13,'auth','0008_alter_user_username_max_length','2023-08-21 08:30:59.348455'),(14,'auth','0009_alter_user_last_name_max_length','2023-08-21 08:30:59.368379'),(15,'auth','0010_alter_group_name_max_length','2023-08-21 08:30:59.376873'),(16,'auth','0011_update_proxy_permissions','2023-08-21 08:30:59.381126'),(17,'auth','0012_alter_user_first_name_max_length','2023-08-21 08:30:59.402363'),(18,'cookbook','0001_initial','2023-08-21 08:30:59.410705'),(19,'cookbook','0002_image_ingredient_note','2023-08-21 08:30:59.448886'),(20,'cookbook','0003_instruction_recipeingredient','2023-08-21 08:30:59.540481'),(21,'cookbook','0004_category_rename_servings_recipe_serves_and_more','2023-08-21 08:30:59.890337'),(22,'cookbook','0005_recipecomponent_type','2023-08-21 08:30:59.904354'),(23,'cookbook','0006_remove_instruction_is_image_remove_note_is_image_and_more','2023-08-21 08:31:00.016459'),(24,'sessions','0001_initial','2023-08-21 08:31:00.035389'),(25,'cookbook','0007_alter_recipe_image','2023-08-21 08:38:53.968167'),(26,'cookbook','0008_alter_image_path','2023-08-21 17:44:52.704067'),(27,'cookbook','0009_alter_instruction_image_alter_recipe_author_and_more','2023-08-21 23:16:53.716879'),(28,'cookbook','0010_alter_recipe_source_link','2023-08-22 01:05:59.508949'),(29,'cookbook','0011_alter_recipeingredient_amount','2023-09-14 07:55:05.600983'),(30,'cookbook','0012_remove_recipe_is_published_recipe_status','2023-10-01 04:36:16.769294'),(31,'cookbook','0013_metric_alter_recipe_status_and_more','2023-10-01 04:36:16.840125'),(32,'cookbook','0014_rename_metric_recipeingredient_metric_back_up_and_more','2023-10-01 04:36:16.906615'),(33,'cookbook','0015_recipeingredient_metric','2023-10-01 05:30:31.266644'),(34,'cookbook','0016_remove_instruction_recipe_component_and_more','2023-10-01 07:22:18.122114');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1t31xqql270h7irnr21k0p5l8dsam5fq','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qZIKr:EU9auk7Zasr2tALpNVFlqdcT4_KE8knQsOWlziDtSN4','2023-09-07 21:57:49.985617'),('2j8kcz5brb67f6w04karg0453jaxro5k','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qmoC8:vqzhBvlxea0OOzQLGV_ycT6qzH9f3uPrAihx6EGOcFw','2023-10-15 04:36:40.743898'),('4me3w6cfx1zmevr8g97ssgt992wrvaip','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qmpc5:CLKejZjmfQHTqW1mvscyWDUJSsBdAab9ELrA1s8eUN0','2023-10-15 06:07:33.930923'),('gxx3gj2xel36so22u1cemc0b2w5bk496','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qmqnE:_kO-ZXB7c9_la0F5ZoP1mOIfdq9ThUCQuyEWKzIGEhU','2023-10-15 07:23:08.133475'),('l1amu1ng6d9jpa18paw8uxisu2kl8w40','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qfVqz:tVz1Th_M3ClIJ4ky3EgbXaWI2adEXmR0a4XYNcWHuFE','2023-09-25 01:36:41.383093'),('rh9tn6o5ihtbtw4jpmkpzu0bdgjd9jft','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qfn9x:EKZ7Py5Tl__uXWdAle3-TbhSLsbOax-_8G-4JHogQmI','2023-09-25 20:05:25.187746'),('t2mcd2o8fccj66oogj4fre5r9wev1q03','.eJxVjEEOwiAQRe_C2hAoIMSle89AZjozUjWQlHZlvLtt0oVu_3vvv1WGdSl57TznidRFWXX63RDGJ9cd0APqvemx1WWeUO-KPmjXt0b8uh7u30GBXrZ6iOLAAETrA0kI6IxDYfaOGSgkBBIBQXLe25RINhIH72M6G-tA1OcLCvg4tw:1qY8z3:XsgV5GW4OwQM7rfx7YuPRMKFwPpQ2n0ehBTBsceANNs','2023-09-04 17:46:33.223448');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-04 19:08:22
