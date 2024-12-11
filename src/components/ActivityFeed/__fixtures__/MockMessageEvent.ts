import { faker } from "@faker-js/faker/.";
import { MockActivityFeedItem } from "./MockActivityFeedItem";
import { MessageEvent } from "../types";

export function MockMessageEvent(
  overrides: Partial<MessageEvent> = {}
): MessageEvent {
  const result = {
    ...MockActivityFeedItem(),
    content: faker.word.words(),
    direction: faker.helpers.arrayElement([
      "INBOUND",
      "OUTBOUND",
    ]) as MessageEvent["direction"],
    eventType: "message_event" as MessageEvent["eventType"],
  };
  return { ...result, ...overrides };
}
