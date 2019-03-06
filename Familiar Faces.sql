CREATE DATABASE familiar_faces_db;

USE familiar_faces_db;

CREATE TABLE celebrity (
  celeb_id      int(10) not null auto_increment,
  celeb_name    varchar(50) default null,
  PRIMARY KEY (celeb_id)
)
;

CREATE TABLE model (
  model_id      int(10) not null auto_increment,
  model_name    varchar(50) default null,
  sample_count  int(10) default null,
  model_desc    varchar(150) default null,
  PRIMARY KEY (model_id)
)
;

CREATE TABLE test_files (
  file_id      int(10) not null auto_increment,
  file_name    varchar(50) default null,
  celeb_id	   int(10) not null,
  PRIMARY KEY (file_id),
  FOREIGN KEY (celeb_id)
	REFERENCES celebrity(celeb_id)
)
;

CREATE TABLE results (
  faces     varchar(50) default null,
  gender   	varchar(50) default null,
  emotion	varchar(50) default null,
  model_id	int(10) not null,
  file_name	varchar(50) not null,
  FOREIGN KEY (model_id)
	REFERENCES model(model_id)
)
;