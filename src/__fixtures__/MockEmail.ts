import { faker } from "@faker-js/faker";
import {
  EmailAddress,
  EmailBaseAttributes,
  EmailReceived,
  EmailSent,
} from "../email";

export function MockEmailAddress(
  overrides: Partial<EmailAddress> = {}
): EmailAddress {
  return {
    name: faker.person.fullName(),
    address: faker.internet.email(),

    ...overrides,
  };
}

export function MockEmailBaseAttributes(
  overrides: Partial<EmailBaseAttributes> = {}
): EmailBaseAttributes {
  return {
    from: MockEmailAddress(),
    to: MockEmailAddress(),
    subject: faker.word.words(3),
    body: faker.word.words(10),

    ...overrides,
  };
}

export function MockEmailSent(overrides: Partial<EmailSent> = {}): EmailSent {
  return {
    ...MockEmailBaseAttributes(),
    type: "email-sent",

    ...overrides,
  };
}

export function MockEmailReceived(
  overrides: Partial<EmailReceived> = {}
): EmailReceived {
  return {
    ...MockEmailBaseAttributes(),
    type: "email-received",

    ...overrides,
  };
}
