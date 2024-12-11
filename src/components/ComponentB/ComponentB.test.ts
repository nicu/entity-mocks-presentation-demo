import { MockGraphQLResponse } from "./__fixtures__/MockGraphQLResponse";

describe("Component B", () => {
  it("should generate 3 numbers", () => {
    const result = MockGraphQLResponse();
    expect(result.items).toHaveLength(3);
    expect(result.items.every((item) => typeof item === "number")).toBe(true);
  });
});
