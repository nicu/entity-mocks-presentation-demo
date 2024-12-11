import { faker } from "@faker-js/faker";
import { Person } from "../person";

export function MockPerson(overrides: Partial<Person> = {}): Person {
  return {
    name: faker.person.fullName(),
    age: faker.number.int(99),

    ...overrides,
  };
}
