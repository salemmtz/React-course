import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Test in 11-async-await", () => {
  test("getImagen should return URL of image", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
