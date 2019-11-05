#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS jy;
#创建数据库，设置编码
CREATE DATABASE jy CHARSET=UTF8;
#进入创建的数据库
USE jy;
#创建保存用户信息分类数据的表
CREATE TABLE jy_user(
  uid SMALLINT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) UNIQUE,
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(32) NOT NULL UNIQUE,
  gender INT
);

#创建保存套餐数据的表
CREATE TABLE jy_products(
  lid PRIMARY KEY AUTO_INCREMENT,
  lname VARCHAR(32),
  pic VARCHAR(128),
  hot VARCHAR(64),
  phone VARCHAR(32),
  details VARCHAR(256) 
);

#创建保存购物车数据的表
CREATE TABLE jy_cart(
  cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  product_id INT,
  hot VARCHAR(64),
  count INT 
);

INSERT INTO jy_user VALUES(1,'tom','123','760167612@qq.com','15215260309',1);
