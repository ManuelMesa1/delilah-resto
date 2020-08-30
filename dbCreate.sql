CREATE DATABASE IF NOT EXISTS `delilah_resto`;
USE `delilah_resto`;

DROP TABLE IF EXISTS `users`
CREATE TABLE `users` (
    `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(30) NOT NULL,
    `password` varchar(30) NOT NULL,
    `email` varchar(30) NOT NULL,
    `address` varchar(100) NOT NULL,
    `firstname` varchar(30) NOT NULL,
    `lastname` varch(30) NOT NULL,
    `phone` int(11) NOT NULL,
    `admin` boolean NOT NULL
    PRIMARY KEY (`user_id`) 
)

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1, 'manu', 'gorilla', 'manu@mail.com', '123 Main Ave', 'Manuel', 'Rodriguez', 8009000, TRUE)
UNLOCK TABLES;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
    `product_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `product_name` varchar(30) NOT NULL,
    `price` int(11) NOT NULL,
    `product_brand` int(11) NOT NULL,
    PRIMARY KEY (`product_id`)  
)

LOCK TABLES `products` WRITE;
INSERT INTO `products` VALUES (1, 'chokis', 1000, 'alpina')
UNLOCK TABLES;

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
    `order_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `order_status` enum('new','confirmed', 'preparing', 'on the way', 'completed') NOT NULL default 'new',
    `order_time` time NOT NULL,
    `order_describe` varchar(30) NOT NULL,
    `order_total` int(11) NOT NULL,
    `pay_method` enum('cash', 'credit', 'debit') NOT NULL default 'cash',
    `user_id` int unsigned NOT NULL,
    CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)  
)

LOCK TABLES `orders` WRITE;
UNLOCK TABLES;
