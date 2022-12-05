import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("test in 08-imp-exp", () => {
  test("getHeroeById should return a hero by ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById should return undefined if ID does not exist", () => {
    const id = 100;
    const hero = getHeroeById(id);

    // toBeFalsy works for null, false, undefined
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner should return an array of DC's heroes", () => {
    const owner = "DC";
    const dcHeroes = getHeroesByOwner(owner);

    expect(dcHeroes.length).toBe(3);

    expect(dcHeroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(dcHeroes).toEqual(heroes.filter((hero) => hero.owner === owner));
  });

  test("getHeroesByOwner should return an array of marvel's heroes", () => {
    const owner = "Marvel";
    const marvelHeroes = getHeroesByOwner(owner);

    expect(marvelHeroes.length).toBe(2);

    expect(marvelHeroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
