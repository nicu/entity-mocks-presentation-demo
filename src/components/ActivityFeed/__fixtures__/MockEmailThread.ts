import { faker } from "@faker-js/faker/.";
import { EmailThread } from "../types";
import { MockEmailSentEvent } from "./MockEmailSentEvent";
import { MockEmailReceivedEvent } from "./MockEmailReceivedEvent";

export function MockEmailThread(
  overrides: Partial<EmailThread> = {}
): EmailThread {
  const result = {
    eventType: "email-thread" as EmailThread["eventType"],
    threadId: faker.string.alpha(34),
    events: faker.helpers.multiple(() =>
      faker.helpers.arrayElement([
        MockEmailSentEvent(),
        MockEmailReceivedEvent(),
      ])
    ),
  };
  return { ...result, ...overrides };
}
