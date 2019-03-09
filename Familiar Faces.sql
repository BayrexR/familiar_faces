CREATE DATABASE familiar_faces_db;

USE familiar_faces_db;

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
  PRIMARY KEY (file_id)
)
;

CREATE TABLE results (
  model_name	varchar(50) default null,
  file_name		varchar(50) not null,
  detected 		int(10) default null,
  result     	varchar(50) default null,
  FOREIGN KEY (model_name)
	REFERENCES model(model_name)
)
;