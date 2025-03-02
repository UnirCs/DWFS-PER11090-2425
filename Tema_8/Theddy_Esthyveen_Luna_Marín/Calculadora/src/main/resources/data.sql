-- Datos de la tabla sumas
INSERT INTO sumas (id, resultado) VALUES (1, 15.0), (2, 30.0), (3, 45.0), (4, 60.0), (5, 75.0);
INSERT INTO suma_numeros (suma_id, numeros) VALUES
                                                  (1, 5.0), (1, 10.0),
                                                  (2, 10.0), (2, 20.0),
                                                  (3, 15.0), (3, 30.0),
                                                  (4, 20.0), (4, 40.0),
                                                  (5, 25.0), (5, 50.0);

-- Datos de la tabla restas
INSERT INTO restas (id, resultado) VALUES (1, 3.0), (2, 5.0), (3, 8.0), (4, 12.0), (5, 20.0);
INSERT INTO resta_numeros (resta_id, numeros) VALUES
                                                    (1, 10.0), (1, 7.0),
                                                    (2, 15.0), (2, 10.0),
                                                    (3, 20.0), (3, 12.0),
                                                    (4, 30.0), (4, 18.0),
                                                    (5, 50.0), (5, 30.0);

-- Datos de la tabla multiplicaciones
INSERT INTO multiplicaciones (id, resultado) VALUES (1, 50.0), (2, 200.0), (3, 600.0), (4, 1200.0), (5, 2500.0);
INSERT INTO multiplicacion_numeros (multiplicacion_id, numeros) VALUES
                                                                        (1, 5.0), (1, 10.0),
                                                                        (2, 10.0), (2, 20.0),
                                                                        (3, 20.0), (3, 30.0),
                                                                        (4, 30.0), (4, 40.0),
                                                                        (5, 50.0), (5, 50.0);

-- Datos de la tabla divisiones
INSERT INTO divisiones (id, resultado) VALUES (1, 2.0), (2, 5.0), (3, 4.0), (4, 3.0), (5, 10.0);
INSERT INTO division_numeros (division_id, numeros) VALUES
                                                            (1, 10.0), (1, 5.0),
                                                            (2, 20.0), (2, 4.0),
                                                            (3, 40.0), (3, 10.0),
                                                            (4, 30.0), (4, 10.0),
                                                            (5, 100.0), (5, 10.0);

-- Datos de la tabla potencias
INSERT INTO potencias (id, numero, exponente, resultado) VALUES
                                                             (1, 2.0, 3, 8.0),
                                                             (2, 3.0, 2, 9.0),
                                                             (3, 5.0, 4, 625.0),
                                                             (4, 7.0, 3, 343.0),
                                                             (5, 10.0, 5, 100000.0);

-- Datos de la tabla raices
INSERT INTO raices (id, numero, grado, resultado) VALUES
                                                      (1, 27.0, 3, 3.0),
                                                      (2, 16.0, 4, 2.0),
                                                      (3, 81.0, 2, 9.0),
                                                      (4, 625.0, 4, 5.0),
                                                      (5, 1000000.0, 6, 10.0);
