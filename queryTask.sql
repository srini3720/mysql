USE COLLEGE_ADMIN;


SELECT COUNT(student_id) AS NUNBER_OF_STUDENTS FROM STUDENTS;

SELECT * FROM MARKSHEET WHERE subject_id=4;

SELECT COUNT(mark_id) as NO_OF_STUDENTS FROM MARKSHEET WHERE subject_id=1 AND mark>=50;

SELECT * FROM MARKSHEET WHERE subject_id=3 LIMIT 10;

SELECT * FROM MARKSHEET WHERE mark>=70 AND mark<=80;

SELECT * FROM MARKSHEET ORDER BY mark DESC  lIMIT 1;

SELECT AVG(mark) AS AVERAGE_MARKS FROM MARKSHEET WHERE class_id=1 AND subject_id=5