DROP DATABASE IF EXISTS `COLLEGE_ADMIN`;
CREATE DATABASE `COLLEGE_ADMIN`;
USE `COLLEGE_ADMIN`;

CREATE TABLE  SUBJECT(
subject_id INT NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
course_code varchar(50) NOT NULL,

PRIMARY KEY(`subject_id`)
);
INSERT INTO SUBJECT VALUES (default,'OOAD','18pmt34');


CREATE TABLE DEPT(
dept_id INT NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
code varchar(50) NOT NULL,
section_no varchar(50) NOT NULL,

PRIMARY KEY(`dept_id`)
);
INSERT INTO DEPT VALUES (default,'CSE','20cse',3);


CREATE TABLE TEACHER(
teacher_id INT NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
dept_id INT NOT NULL,
subject_id INT NOT NULL,
address varchar(50) NOT NULL,

PRIMARY KEY(`teacher_id`),
FOREIGN KEY(`subject_id`) REFERENCES SUBJECT(subject_id),
FOREIGN KEY(`dept_id`) REFERENCES DEPT(dept_id)

);

INSERT INTO TEACHER VALUES (default,'selvi',1,1,'erode');


CREATE TABLE CLASS(
class_id INT NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
strength INT NOT NULL,
class_mentor INT NOT NULL,
PRIMARY KEY(`class_id`),
FOREIGN KEY(`class_mentor`) REFERENCES TEACHER(teacher_id)
);
INSERT INTO CLASS VALUES (default,'cse3b',30,1);





CREATE TABLE STUDENTS(
student_id INT NOT NULL AUTO_INCREMENT,
class_id INT NOT NULL,
name varchar(50) NOT NULL,
roll_no varchar(50) NOT NULL,
dept_id INT NOT NULL,

primary key(`student_id`),
FOREIGN KEY (`class_id`) REFERENCES CLASS(class_id),
FOREIGN KEY (`dept_id`) REFERENCES DEPT(dept_id)
);
INSERT INTO STUDENTS VALUES (default,1,'srinivasan',33,1);







CREATE TABLE MARKSHEET(
mark_id INT NOT NULL AUTO_INCREMENT,
student_id INT,
class_id INT,
subject_id INT,
mark INT NOT NULL,
rank_no INT NOT NULL,

PRIMARY KEY(`mark_id`),
FOREIGN KEY(`student_id`) REFERENCES STUDENTS(student_id),
FOREIGN KEY(`class_id`) REFERENCES CLASS(class_id),
FOREIGN KEY(`subject_id`) REFERENCES SUBJECT(subject_id)
);
INSERT INTO MARKSHEET VALUES (default,1,1,1,90,1);







