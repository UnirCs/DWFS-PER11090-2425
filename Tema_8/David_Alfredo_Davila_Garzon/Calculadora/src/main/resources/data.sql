INSERT INTO CALC_HISTORY (id, operation, numbers, result) VALUES (1, 'SUMA', '5,3', 8.0);
INSERT INTO CALC_HISTORY (id, operation, numbers, result) VALUES (2, 'SUMA', '12,8,5', 25.0);
INSERT INTO CALC_HISTORY (id, operation, numbers, result) VALUES (3, 'RESTA', '9,4', 5.0);
INSERT INTO CALC_HISTORY (id, operation, numbers, result) VALUES (4, 'MULTIPLICACIÓN', '4,6', 24.0);
INSERT INTO CALC_HISTORY (id, operation, numbers, result) VALUES (5, 'DIVISION', '10,2', 5.0);
ALTER SEQUENCE CALC_HISTORY_SEQ RESTART WITH 6;