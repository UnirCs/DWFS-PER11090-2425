package com.unir.forum.subscriber.model;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DirectMessage implements Serializable {

  private String message;

  public String getFormattedMessage() {
    return String.format("Tu profesor te ha enviado un mensaje: %s", message);
  }
}
