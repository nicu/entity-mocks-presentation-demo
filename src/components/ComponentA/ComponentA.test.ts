import { MockGraphQLResponse } from "./__fixtures__/MockGraphQLResponse";

describe("Component A", () => {
  it("should generate 3 words", () => {
    const result = MockGraphQLResponse();
    expect(result.items).toHaveLength(3);
    expect(result.items.every((item) => typeof item === "string")).toBe(true);
  });
});
