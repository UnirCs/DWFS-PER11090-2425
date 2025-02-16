package com.unir.calculadora.service.impl;

import com.unir.calculadora.domain.Numero;
import com.unir.calculadora.domain.Operacion;
import com.unir.calculadora.repository.NumeroRepository;
import com.unir.calculadora.repository.OperacionRepository;
import com.unir.calculadora.service.OperacionService;
import com.unir.calculadora.service.dto.MultiploDTO;
import com.unir.calculadora.service.dto.NumeroDTO;
import com.unir.calculadora.service.dto.OperacionDTO;
import com.unir.calculadora.service.utils.Constantes;
import com.unir.calculadora.web.rest.exception.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class OperacionServiceImpl implements OperacionService {

    private static final Logger log  = LoggerFactory.getLogger(OperacionServiceImpl.class);

    private final OperacionRepository operacionRepository;
    private final NumeroRepository numeroRepository;

    public OperacionServiceImpl(OperacionRepository operacionRepository, NumeroRepository numeroRepository) {
        this.operacionRepository = operacionRepository;
        this.numeroRepository = numeroRepository;
    }

    @Override
    public OperacionDTO sumarRestar(List<Long> numeros, String operation) {
        log.info("Request to sumarRestar : {} {}", numeros, operation);
        Long result = operation.equals(Constantes.SUMAR) ? numeros.stream().reduce(0L, Long::sum) :
                numeros.stream().reduce(numeros.getFirst() * 2, (a, b) -> a - b);

        Operacion operacion =  Operacion.builder().operation(operation).result(result).build();
        operacion = operacionRepository.save(operacion);
        Operacion finalOperacion = operacion;
        List<Numero> numerosList = numeroRepository.saveAll(numeros.stream().map(numero -> Numero.builder().valor(numero).operacion(finalOperacion)
                        .build()).collect(Collectors.toCollection(LinkedList::new)));
        operacion.setNumbers(new HashSet<>(numerosList));
        return getOperacionDTO(operacion);
    }

   @Override
    @Transactional(readOnly = true)
    public OperacionDTO getOperacion(Long id, String operation) {
        log.info("Request to getOperacion : {}", id);
        Operacion operacion = operacionRepository.findById(id).orElseThrow(()-> new NotFoundException("Operacion no encontrada"));
        if(List.of(Constantes.SUMAR, Constantes.RESTAR).contains(operation) && operacion.getOperation().equals(operation)) {
            return getOperacionDTO(operacion);
        }else if (List.of(Constantes.MULTIPLICAR, Constantes.DIVIDIR, Constantes.POTENCIA, Constantes.RAIZ).contains(operation)
                && operacion.getOperation().equals(operation)) {
            return getMultiploDTO(operacion);
        }else {
            throw new NotFoundException("Operacion: "+ operation + " no encontrada con id: " + id);
        }
    }

    @Override
    public OperacionDTO multiplos(Long entrada1, Long entrada2, String operation) {
        log.info("Request to multiplos : {} {}", entrada1, entrada2);
        Long result = switch (operation) {
            case Constantes.MULTIPLICAR -> entrada1 * entrada2;
            case Constantes.DIVIDIR -> entrada1 / entrada2;
            case Constantes.POTENCIA -> (long) Math.pow(entrada1, entrada2);
            case Constantes.RAIZ -> entrada2 == 2L ? (long) Math.sqrt(entrada1) : (long) Math.cbrt(entrada1);
            default -> throw new IllegalArgumentException("Operacion no soportada: " + operation);
        };
        Operacion operacion =  Operacion.builder().operation(operation).result(result).build();
        operacion = operacionRepository.save(operacion);
        Set<Numero> numeros = new HashSet<>();
        numeros.add(Numero.builder().valor(entrada1).operacion(operacion).build());
        numeros.add(Numero.builder().valor(entrada2).operacion(operacion).build());
        List<Numero> numerosList = numeroRepository.saveAll(numeros);
        operacion.setNumbers(new HashSet<>(numerosList));
        return getMultiploDTO(operacion);
    }

    
    private OperacionDTO getOperacionDTO(Operacion operacion) {
        return OperacionDTO.builder().id(operacion.getId()).operation(operacion.getOperation())
                .result(operacion.getResult()).numbers(operacion.getNumbers().stream()
                        .map(numero -> NumeroDTO.builder().id(numero.getId())
                                .valor(numero.getValor()).build()).collect(Collectors.toCollection(LinkedList::new))).build();
    }

    private MultiploDTO getMultiploDTO(Operacion operacion) {
        List<NumeroDTO> numeros = operacion.getNumbers().stream()
                .map(numero -> NumeroDTO.builder().id(numero.getId())
                        .valor(numero.getValor()).build()).collect(Collectors.toCollection(LinkedList::new));
        return new MultiploDTO(operacion.getId(), numeros.get(0).getValor(), numeros.get(1).getValor(), operacion.getResult(), operacion.getOperation(), numeros);

    }
}
