import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { setup, suggest } from "./butacas.js";

const N = 10;
let butacas = [];

beforeEach(() => butacas = setup(N));

test("Reserva las butacas empezando en la fila más lejana", () => {
  let reserva = suggest(butacas, 7);
  let expected = new Set([91, 92, 93, 94, 95, 96, 97]);
  assert.deepEqual(reserva, expected);
});

test("Si no hay hueco en la fila, reserva en la siguiente", () => {
  suggest(butacas, 7);
  let reserva = suggest(butacas, 4);
  let expected = new Set([81, 82, 83, 84]);

  assert.deepEqual(reserva, expected);
});

test("Reserva en la primera fila en la que hay hueco", () => {
  suggest(butacas, 7);
  suggest(butacas, 4);
  let reserva = suggest(butacas, 2);
  let expected = new Set([98, 99]);

  assert.deepEqual(reserva, expected);
});

test("Devuelve un set vacío si se piden más butacas de las que hay en una fila", () => {
  let reserva = suggest(butacas, 11);
  let expected = new Set();

  assert.deepEqual(reserva, expected);
});

test("Devuelve un set vacío si no hay butacas disponibles", () => {
  for (let i = 0; i < N; i++) {
    suggest(butacas, 7)
  }
  let reserva = suggest(butacas, 4 );
  let expected = new Set();

  assert.deepEqual(reserva, expected);
});