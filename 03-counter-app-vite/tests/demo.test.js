describe("Tests in <DemoComponent />", () => {
  test("This test should not fail", () => {
    // 1. Arrangement : Initialization
    const msg1 = "hello world";
    // 2. Action : stimulus
    const msg2 = msg1.trim();
    // 3. Assertion : observe the behavior
    expect(msg1).toBe(msg2);
  });
});
