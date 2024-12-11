import { EmailReceivedEvent } from "../types";
import { MockEmailEvent } from "./MockEmailEvent";

export function MockEmailReceivedEvent(
  overrides: Partial<EmailReceivedEvent> = {}
): EmailReceivedEvent {
  const result = {
    ...MockEmailEvent(),
    name: "Email Received" as EmailReceivedEvent["name"],
    direction: "inbound" as EmailReceivedEvent["direction"],
  };
  return { ...result, ...overrides };
}
