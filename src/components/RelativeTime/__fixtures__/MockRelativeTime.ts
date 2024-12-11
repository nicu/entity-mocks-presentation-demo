import { faker } from "@faker-js/faker";
import { Event, Events } from "../RelativeTime";

export function MockEvent(overrides: Partial<Event> = {}): Event {
  return {
    name: faker.word.words(1),
    timestamp: faker.date.anytime(),
    ...overrides,
  };
}

export function MockEvents(overrides?: Events): Events {
  return overrides ?? faker.helpers.multiple(() => MockEvent());
}
