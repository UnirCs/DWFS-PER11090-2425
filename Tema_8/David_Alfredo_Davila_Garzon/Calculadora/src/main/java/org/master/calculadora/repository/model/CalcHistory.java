package org.master.calculadora.repository.model;

import static jakarta.persistence.GenerationType.SEQUENCE;
import static lombok.AccessLevel.PRIVATE;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "CALC_HISTORY")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = PRIVATE)
public class CalcHistory {

  private static final String CUSTOM_SEC = "CALC_HISTORY_SEQ";

  @Id
  @GeneratedValue(strategy = SEQUENCE, generator = CUSTOM_SEC)
  @SequenceGenerator(name = CUSTOM_SEC, sequenceName = CUSTOM_SEC, allocationSize = 1)
  Long id;

  String operation;
  String numbers;
  Double result;
}
