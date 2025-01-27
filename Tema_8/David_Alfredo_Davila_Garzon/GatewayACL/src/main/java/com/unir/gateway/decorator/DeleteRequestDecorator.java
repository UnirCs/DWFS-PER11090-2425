package com.unir.gateway.decorator;

import static lombok.AccessLevel.PRIVATE;
import static org.springframework.cloud.gateway.support.ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.web.util.UriComponentsBuilder.fromUri;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.unir.gateway.model.GatewayRequest;
import java.net.URI;
import lombok.NonNull;
import lombok.SneakyThrows;
import lombok.experimental.FieldDefaults;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import reactor.core.publisher.Flux;

@FieldDefaults(level = PRIVATE, makeFinal = true)
public class DeleteRequestDecorator extends ServerHttpRequestDecorator {

  GatewayRequest gatewayRequest;
  ObjectMapper objectMapper;

  public DeleteRequestDecorator(GatewayRequest gatewayRequest, ObjectMapper objectMapper) {
    super(gatewayRequest.getExchange().getRequest());
    this.gatewayRequest = gatewayRequest;
    this.objectMapper = objectMapper;
  }

  @Override
  @NonNull
  public HttpMethod getMethod() {
    return DELETE;
  }

  @Override
  @NonNull
  public URI getURI() {
    var uri = (URI) gatewayRequest.getExchange().getAttributes().get(GATEWAY_REQUEST_URL_ATTR);

    return fromUri(uri).queryParams(gatewayRequest.getQueryParams()).build().toUri();
  }

  @Override
  @NonNull
  public HttpHeaders getHeaders() {
    return gatewayRequest.getHeaders();
  }

  @Override
  @NonNull
  @SneakyThrows
  public Flux<DataBuffer> getBody() {
    var bufferFactory = new DefaultDataBufferFactory();
    byte[] bodyData = objectMapper.writeValueAsBytes(gatewayRequest.getBody());
    var buffer = bufferFactory.allocateBuffer(bodyData.length);
    buffer.write(bodyData);

    return Flux.just(buffer);
  }
}
