import { faker } from "@faker-js/faker/.";
import { EmailBaseAttributes } from "../types";
import { MockEmailAddress } from "./MockEmailAddress";

export function MockEmailBaseAttributes(
  overrides: Partial<EmailBaseAttributes> = {}
): EmailBaseAttributes {
  const result = {
    senderEmail: MockEmailAddress(),
    toEmails: faker.helpers.multiple(() => MockEmailAddress()),
    subject: faker.word.words(),
    threadId: faker.string.alpha(34),
    messageId: faker.string.alpha(34),
    bodySnippet: faker.word.words(),
    name: faker.helpers.arrayElement([
      "Email Sent",
      "Email Received",
    ]) as EmailBaseAttributes["name"],
    direction: faker.helpers.arrayElement([
      "inbound",
      "outbound",
    ]) as EmailBaseAttributes["direction"],
  };
  return { ...result, ...overrides };
}
