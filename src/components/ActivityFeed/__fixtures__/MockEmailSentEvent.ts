import { EmailSentEvent } from "../types";
import { MockEmailEvent } from "./MockEmailEvent";

export function MockEmailSentEvent(
  overrides: Partial<EmailSentEvent> = {}
): EmailSentEvent {
  const result = {
    ...MockEmailEvent(),
    name: "Email Sent" as EmailSentEvent["name"],
    direction: "outbound" as EmailSentEvent["direction"],
  };
  return { ...result, ...overrides };
}
