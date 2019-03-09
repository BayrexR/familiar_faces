USE familiar_faces_db;

CREATE OR REPLACE VIEW results_vw

AS

SELECT
a.model_name AS model_desc,
b.model_name AS model_name,
a.file_name,
a.result,

CASE 
WHEN SUBSTRING(a.file_name, 1, 1) = 'F' THEN 'female'
WHEN SUBSTRING(a.file_name, 1, 1) = 'M' THEN 'male'
END AS test_gender,

CASE 
WHEN SUBSTRING(a.file_name, 3, 2) =  'AF' THEN "afraid"
WHEN SUBSTRING(a.file_name, 3, 2) =  'AN' THEN "angry"
WHEN SUBSTRING(a.file_name, 3, 2) =  'DS' THEN "disgusted"
WHEN SUBSTRING(a.file_name, 3, 2) =  'HP' THEN "happy"
WHEN SUBSTRING(a.file_name, 3, 2) =  'NE' THEN "neutral"
WHEN SUBSTRING(a.file_name, 3, 2) =  'SA' THEN "sad"
WHEN SUBSTRING(a.file_name, 3, 2) =  'SU' THEN "surprised"
END AS test_emotion,

CASE
WHEN b.model_name IN('M2', 'M5', 'M10', 'M35', 'M70', 'S2', 'S5', 'S10', 'S35', 'S70')
AND
(SUBSTRING(a.file_name, 1, 1) ='F' AND result = 'female')
OR
(SUBSTRING(a.file_name, 1, 1) ='M' AND result = 'male') THEN 1
WHEN b.model_name NOT IN('M2', 'M5', 'M10', 'M35', 'M70', 'S2', 'S5', 'S10', 'S35', 'S70')
AND
(SUBSTRING(a.file_name, 3, 2) =  'AF' AND result = "afraid" OR
SUBSTRING(a.file_name, 3, 2) =  'AN' AND result = "angry" OR
SUBSTRING(a.file_name, 3, 2) =  'DS' AND result = "disgusted" OR
SUBSTRING(a.file_name, 3, 2) =  'HP' AND result = "happy" OR
SUBSTRING(a.file_name, 3, 2) =  'NE' AND result = "neutral" OR
SUBSTRING(a.file_name, 3, 2) =  'SA' AND result = "sad" OR
SUBSTRING(a.file_name, 3, 2) =  'SU' AND result = "surprised") THEN 1
ELSE 0
END AS correct

FROM results as a
JOIN model as b
ON a.model_name = b.model_desc