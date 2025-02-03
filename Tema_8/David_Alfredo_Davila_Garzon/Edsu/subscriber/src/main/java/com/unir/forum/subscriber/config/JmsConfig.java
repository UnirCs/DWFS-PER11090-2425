package com.unir.forum.subscriber.config;

import static lombok.AccessLevel.PRIVATE;

import jakarta.jms.ConnectionFactory;
import lombok.experimental.FieldDefaults;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;

@Configuration
@EnableJms
@FieldDefaults(level = PRIVATE)
public class JmsConfig {

  @Value("${spring.activemq.broker-url}")
  String brokerUrl;

  @Value("${spring.activemq.user}")
  String username;

  @Value("${spring.activemq.password}")
  String password;

  @Value("${forum.userId}")
  String userId;

  @Bean
  public ConnectionFactory connectionFactory() {
    var activeMQConnectionFactory = new ActiveMQConnectionFactory();
    activeMQConnectionFactory.setBrokerURL(brokerUrl);
    activeMQConnectionFactory.setUserName(username);
    activeMQConnectionFactory.setPassword(password);
    return activeMQConnectionFactory;
  }

  @Bean(name = "topicJmsTemplate")
  public JmsTemplate topicJmsTemplate() {
    var jmsTemplate = new JmsTemplate();
    jmsTemplate.setConnectionFactory(connectionFactory());
    jmsTemplate.setPubSubDomain(true);
    return jmsTemplate;
  }

  @Bean(name = "jmsFactoryQueue")
  public JmsListenerContainerFactory jmsFactoryQueue(ConnectionFactory connectionFactory, DefaultJmsListenerContainerFactoryConfigurer configurer) {
    var factory = new DefaultJmsListenerContainerFactory();
    configurer.configure(factory, connectionFactory);
    factory.setClientId(userId);//Aquí se configura el clientId, coloco el userId como identificador (cesareo, marcelo o julio -> como presenta el enunciado)
    return factory;
  }

  @Bean(name = "jmsFactoryTopic")
  public JmsListenerContainerFactory jmsFactoryTopic(ConnectionFactory connectionFactory, DefaultJmsListenerContainerFactoryConfigurer configurer) {
    var factory = new DefaultJmsListenerContainerFactory();
    configurer.configure(factory, connectionFactory);
    factory.setPubSubDomain(true);
    return factory;
  }
}
