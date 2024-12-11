import { faker } from "@faker-js/faker/.";
import { GraphQLResponse } from "../ComponentA";

export function MockGraphQLResponse(
  overrides: Partial<GraphQLResponse> = {}
): GraphQLResponse {
  return {
    items: faker.helpers.multiple(() => faker.word.words(1)),

    ...overrides,
  };
}
