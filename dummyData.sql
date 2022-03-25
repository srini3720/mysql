USE COLLEGE_ADMIN;


INSERT INTO SUBJECT VALUES   (default,'Engligh','ENG34'),
                             (default,'tamil','TAM34'),
                             (default,'physics','PHY34'),
						     (default,'biology','BIO34'),
                             (default,'chemistry','SCI34');
                             
INSERT INTO DEPT VALUES  (default,'EEE','20EEE',3),
						 (default,'ECE','20ECE',1),
                         (default,'IT','20IT',1),
                         (default,'ME','20ME',1),
                         (default,'MA','20MA',1);
                         
INSERT INTO TEACHER VALUES (default,'gowri',1,2,'erode'),
                           (default,'selva',2,3,'erode'),
						   (default,'raja',5,4,'erode'),
                           (default,'kumar',5,5,'erode'),
                           (default,'roja',4,5,'erode');
                           
INSERT INTO CLASS VALUES (default,'cse1b',30,1),
                         (default,'cse2b',30,3);
                         
                         
                         
INSERT INTO STUDENTS VALUES (default,1,'vasan',25,2),
                            (default,2,'ranga',26,3),
                            (default,1,'sri',27,4),
                            (default,2,'junga',28,5),
                            (default,1,'sentil',65,4),
                            (default,2,'guna',58,1),
                            (default,1,'valu',36,2),
                            (default,2,'bala',75,3),
                            (default,1,'adam',66,4),
                            (default,2,'bryan',75,5);
						
INSERT INTO MARKSHEET VALUES (default,1,1,1,90,NULL),
                             (default,1,1,2,58,NULL),
                             (default,1,1,3,75,NULL),
                             (default,1,1,4,85,NULL),
                             (default,1,1,5,52,NULL),
                             (default,2,2,1,75,NULL),
                             (default,2,2,2,75,NULL),
                             (default,2,2,3,75,NULL),
                             (default,2,2,4,96,NULL),
                             (default,2,2,5,25,NULL),
                             (default,3,1,1,63,NULL),
                             (default,3,1,2,85,NULL),
                             (default,3,1,3,75,NULL),
                             (default,3,1,4,52,NULL),
                             (default,3,1,5,75,NULL),
                             (default,4,2,1,14,NULL),
                             (default,4,2,2,85,NULL),
                             (default,4,2,3,66,NULL),
                             (default,4,2,4,75,NULL),
                             (default,4,2,5,96,NULL),
                             (default,5,1,1,25,NULL),
                             (default,5,1,2,75,NULL),
                             (default,5,1,3,62,NULL),
                             (default,5,1,4,75,NULL),
                             (default,5,1,5,75,NULL),
                             (default,6,2,1,94,NULL),
                             (default,6,2,2,52,NULL),
                             (default,6,2,3,25,NULL),
                             (default,6,2,4,85,NULL),
                             (default,6,2,5,42,NULL),
                             (default,7,1,1,24,NULL),
                             (default,7,1,2,42,NULL),
                             (default,7,1,3,48,NULL),
                             (default,7,1,4,47,NULL),
                             (default,7,1,5,45,NULL),
                             (default,8,2,1,26,NULL),
                             (default,8,2,2,94,NULL),
                             (default,8,2,3,26,NULL),
                             (default,8,2,4,35,NULL),
                             (default,8,2,5,42,NULL),
                             (default,9,1,1,75,NULL),
                             (default,9,1,2,78,NULL),
                             (default,9,1,3,97,NULL),
                             (default,9,1,4,75,NULL),
                             (default,9,1,5,65,NULL),
                             (default,10,2,1,80,NULL),
                             (default,10,2,2,70,NULL),
                             (default,10,2,3,60,NULL),
                             (default,10,2,4,20,NULL),
                             (default,10,2,5,60,NULL);
                            



                            