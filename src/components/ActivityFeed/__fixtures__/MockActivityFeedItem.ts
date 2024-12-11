import { faker } from "@faker-js/faker/.";
import { ActivityFeedItem } from "../types";

export function MockActivityFeedItem(
  overrides: Partial<ActivityFeedItem> = {}
): ActivityFeedItem {
  const result = {
    eventType: faker.word.words(),
    createdAt: new Date(faker.date.recent()).getTime(),
    updatedAt: new Date(faker.date.recent()).getTime(),
  };
  return { ...result, ...overrides };
}
