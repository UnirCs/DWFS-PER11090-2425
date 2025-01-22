package org.master.calculadora.repository.model;

import static jakarta.persistence.GenerationType.AUTO;
import static lombok.AccessLevel.PRIVATE;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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

  @Id
  @GeneratedValue(strategy = AUTO)
  Long id;

  String operation;
  String numbers;
  Double result;
}
