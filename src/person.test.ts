import { faker } from "@faker-js/faker/.";
import { MockPerson } from "./__fixtures__/MockPerson";

// npm test -i person

const SEED = 2025; // any number

describe("Person", () => {
  it("should generate a known person", () => {
    expect(MockPerson({ name: "John Doe", age: 42 })).toStrictEqual({
      name: "John Doe",
      age: 42,
    });
  });

  it("should generate a random known person", () => {
    faker.seed(SEED);
    expect(MockPerson({})).toStrictEqual({
      name: "Sonja Kilback",
      age: 25,
    });
  });

  it("should generate the same people, on each run", () => {
    faker.seed(SEED);

    const personA = MockPerson();
    const personB = MockPerson();
    const personC = MockPerson();

    expect(personA).toStrictEqual({
      name: "Sonja Kilback",
      age: 25,
    });

    expect(personB).toStrictEqual({
      name: "Dr. Jerome Schmidt-Klocko",
      age: 76,
    });

    expect(personC).toStrictEqual({
      name: "Estelle Veum",
      age: 24,
    });
  });

  it("should generate the same person", () => {
    faker.seed(SEED);
    const personA = MockPerson();
    faker.seed(SEED);
    const personB = MockPerson();
    faker.seed(SEED);
    const personC = MockPerson();

    expect(personA).toStrictEqual({
      name: "Sonja Kilback",
      age: 25,
    });

    expect(personB).toStrictEqual({
      name: "Sonja Kilback",
      age: 25,
    });

    expect(personC).toStrictEqual({
      name: "Sonja Kilback",
      age: 25,
    });
  });
});
