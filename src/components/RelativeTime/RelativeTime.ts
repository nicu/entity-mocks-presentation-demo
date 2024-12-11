import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export type Event = {
  name: string;
  timestamp: Date;
};

export type Events = Array<Event>;

export function RelativeTime(events: Events) {
  return events.map((event) => dayjs(event.timestamp).fromNow());
}
