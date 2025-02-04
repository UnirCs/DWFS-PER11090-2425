package com.calculadora.service;

import com.calculadora.dto.*;
import com.calculadora.modelo.Operacion;

public interface OperacionesService {
    OperationResponseDTO sumar(OperationRequestDTO request);
    OperationResponseDTO restar(OperationRequestDTO request);
    OperationResponseDTO multiplicar(TwoNumberRequestDTO request);
    OperationResponseDTO dividir(TwoNumberRequestDTO request);
    OperationResponseDTO calcularRaiz(RootRequestDTO request);
    OperationResponseDTO calcularPotencia(PowerRequestDTO request);
    Operacion getOperationById(Long id);
    Operacion getOperationByIdAndType(Long id, String operationType);
}