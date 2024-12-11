import { faker } from "@faker-js/faker/.";
import { MockEvent, MockEvents } from "./__fixtures__/MockRelativeTime";
import { RelativeTime } from "./RelativeTime";

describe("RelativeTime", () => {
  it("should generate events in chronological order ", () => {
    let currentTimestamp = new Date();
    const chronologicalEvents = faker.helpers.multiple(() => {
      currentTimestamp = faker.date.recent({ refDate: currentTimestamp });
      return MockEvent({ timestamp: currentTimestamp });
    });

    const events = MockEvents(chronologicalEvents);

    const sortedEvents = events.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );

    expect(chronologicalEvents).toStrictEqual(sortedEvents);
  });

  it("should generate relative times", () => {
    const now = new Date();
    const nowInMs = now.getTime();

    // https://day.js.org/docs/en/display/from-now#list-of-breakdown-range
    const timestamps = [
      now, // a few seconds ago
      new Date(new Date(nowInMs).setHours(now.getHours() - 1)), // an hour ago
      new Date(new Date(nowInMs).setMonth(now.getMonth() - 1)), // a month ago
      new Date(new Date(nowInMs).setFullYear(now.getFullYear() - 2)), // 2 years ago
      new Date(new Date(nowInMs).setDate(now.getDate() + 1)), // in a day
    ];

    const events = MockEvents(
      faker.helpers.multiple(
        (_, index) =>
          MockEvent({
            timestamp: timestamps[index],
          }),
        { count: 5 }
      )
    );

    expect(RelativeTime(events)).toStrictEqual([
      "a few seconds ago",
      "an hour ago",
      "a month ago",
      "2 years ago",
      "in a day",
    ]);
  });
});
