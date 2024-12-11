import { faker } from "@faker-js/faker/.";
import { EmailAddress } from "../types";

export function MockEmailAddress(
  overrides: Partial<EmailAddress> = {}
): EmailAddress {
  const result = {
    name: faker.person.fullName(),
    address: faker.internet.email(),
  };
  return { ...result, ...overrides };
}
