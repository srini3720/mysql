DROP DATABASE IF EXISTS STUDENTS_MANAGEMENT;
CREATE DATABASE STUDENTS_MANAGEMENT;
USE STUDENTS_MANAGEMENT;

CREATE TABLE STUDENTS(
student_id integer NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
roll_no varchar(50), 
class varchar(10) ,
address varchar(100),
phone varchar(50) ,
PRIMARY KEY(`student_id`)
);

INSERT INTO STUDENTS(student_id,name)
                       values (default,'srinivasan'),
                              (default,'sri'),
                              (default,'vasan'),
                              (default,'ravi'),
                              (default,'sam'),
                              (default,'rocky'),
                              (default,'beast'),
                              (default,'pinky');
                              
 UPDATE STUDENTS
 SET class='cse',address='india' 
 WHERE student_id>=1;                             


DELETE FROM STUDENTS
 WHERE student_id=1;
 
INSERT INTO STUDENTS VALUES (default,'srinivasan',1,'cse','Tamil nadu',NULL); 


SELECT * FROM STUDENTS 
ORDER BY roll_no DESC;
