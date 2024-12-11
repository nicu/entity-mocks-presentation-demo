import { EmailEvent } from "../types";
import { MockEmailBaseAttributes } from "./MockEmailBaseAttributes";
import { MockActivityFeedItem } from "./MockActivityFeedItem";

export function MockEmailEvent(
  overrides: Partial<EmailEvent> = {}
): EmailEvent {
  const result = {
    ...MockEmailBaseAttributes(),
    ...MockActivityFeedItem(),
    eventType: "email" as EmailEvent["eventType"],
  };
  return { ...result, ...overrides };
}
