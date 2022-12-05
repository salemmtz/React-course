import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Test in 02-template-string", () => {
  test('getSaludo should return "Hola Salem', () => {
    const name = "Salem";
    const msg = getSaludo(name);
    expect(msg).toBe(`Hola ${name}`);
  });
});
