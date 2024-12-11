import { faker } from "@faker-js/faker/.";
import { ActivityFeedItemLike } from "../types";
import { MockMessageEvent } from "./MockMessageEvent";
import { MockEmailSentEvent } from "./MockEmailSentEvent";
import { MockEmailReceivedEvent } from "./MockEmailReceivedEvent";
import { MockEmailThread } from "./MockEmailThread";

export function MockActivityFeedItemLike(
  overrides: Partial<ActivityFeedItemLike> = {}
): ActivityFeedItemLike {
  const result = faker.helpers.arrayElement([
    MockMessageEvent(),
    MockEmailSentEvent(),
    MockEmailReceivedEvent(),
    MockEmailThread(),
  ]);

  return { ...result, ...overrides } as ActivityFeedItemLike;
}
