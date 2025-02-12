package com.unir.gateway.decorator;

import static lombok.AccessLevel.PRIVATE;
import static org.springframework.cloud.gateway.support.ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.web.util.UriComponentsBuilder.fromUri;

import com.unir.gateway.model.GatewayRequest;
import java.net.URI;
import lombok.NonNull;
import lombok.SneakyThrows;
import lombok.experimental.FieldDefaults;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import reactor.core.publisher.Flux;

@FieldDefaults(level = PRIVATE, makeFinal = true)
public class DeleteRequestDecorator extends ServerHttpRequestDecorator {

  GatewayRequest gatewayRequest;

  public DeleteRequestDecorator(GatewayRequest gatewayRequest) {
    super(gatewayRequest.getExchange().getRequest());
    this.gatewayRequest = gatewayRequest;
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
    return Flux.empty();
  }
}
