package com.unir.forum.subscriber.service;

import static lombok.AccessLevel.PRIVATE;

import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class SubscriberService {

  JmsTemplate topicJmsTemplate;

  @NonFinal
  @Value("${forum.userId}")
  String userId;

  @JmsListener(destination = "tema1", containerFactory = "jmsFactoryTopic", subscription = "topic1Sub")
  public void listenTopic1(String message) {
    log.info("El usuario {} recibió un mensaje del tema1: {}", userId, message);
  }

  @JmsListener(destination = "tema2", containerFactory = "jmsFactoryTopic", subscription = "topic2Sub")
  public void listenTopic2(String message) {
    log.info("El usuario {} recibió un mensaje del tema2: {}", userId, message);
  }

  @JmsListener(destination = "tema3", containerFactory = "jmsFactoryTopic", subscription = "topic3Sub")
  public void listenTopic3(String message) {
    log.info("El usuario {} recibió un mensaje del tema3: {}", userId, message);
  }

  @JmsListener(destination = "tema4", containerFactory = "jmsFactoryTopic", subscription = "topic4Sub")
  public void listenTopic4(String message) {
    log.info("El usuario {} recibió un mensaje del tema4: {}", userId, message);
  }

  @JmsListener(destination = "${forum.userId}", containerFactory = "jmsFactoryQueue")
  public void listenDirectMessage(String message) {
    log.info("El usuario {} recibió un mensaje directo: {}", userId, message);
  }

  public void publishToTopic(String topic, String message) {
    topicJmsTemplate.convertAndSend(topic, message);
  }
}
