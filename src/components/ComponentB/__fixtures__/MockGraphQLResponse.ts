import { faker } from "@faker-js/faker/.";
import { GraphQLResponse } from "../ComponentB";

export function MockGraphQLResponse(
  overrides: Partial<GraphQLResponse> = {}
): GraphQLResponse {
  return {
    items: faker.helpers.multiple(() => faker.number.int(100)),

    ...overrides,
  };
}
