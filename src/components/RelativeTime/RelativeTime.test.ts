import { faker } from "@faker-js/faker/.";
import { MockEvent, MockEvents } from "./__fixtures__/MockRelativeTime";
import { RelativeTime } from "./RelativeTime";

// https://day.js.org/docs/en/display/from-now#list-of-breakdown-range
describe("RelativeTime", () => {
  it("should generate events in chronological order ", () => {
    let currentTimestamp = new Date();
    const chronologicalEvents = faker.helpers.multiple(
      () => {
        currentTimestamp = faker.date.recent({ refDate: currentTimestamp });
        return MockEvent({ timestamp: currentTimestamp });
      },
      { count: 30 }
    );
    const events = MockEvents(chronologicalEvents);
    const sortedEvents = events.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );

    expect(chronologicalEvents).toStrictEqual(sortedEvents);
  });

  it("should generate 'a few seconds ago'", () => {
    const now = new Date();
    const nowMs = now.getTime();

    const timestamps = [
      now,
      new Date(new Date(nowMs).setHours(now.getHours() - 1)),
      new Date(new Date(nowMs).setMonth(now.getMonth() - 1)),
      new Date(new Date(nowMs).setFullYear(now.getFullYear() - 2)),
      new Date(new Date(nowMs).setDate(now.getDate() + 1)),
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
