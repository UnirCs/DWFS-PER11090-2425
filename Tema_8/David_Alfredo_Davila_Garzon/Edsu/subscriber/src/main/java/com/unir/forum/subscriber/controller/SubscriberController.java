package com.unir.forum.subscriber.controller;

import static lombok.AccessLevel.PRIVATE;

import com.unir.forum.subscriber.model.ForumMessage;
import com.unir.forum.subscriber.service.SubscriberService;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class SubscriberController {

  SubscriberService subscriberService;

  @NonFinal
  @Value("${forum.userId}")
  String userId;

  @PostMapping(value="/api/topics/{topic}")
  public ResponseEntity<?> broadcastMessage(@PathVariable String topic, @RequestBody ForumMessage message) {
    subscriberService.publishToTopic(topic, String.format("%s: %s", userId, message.getMessage()));
    return ResponseEntity.ok().build();
  }
}