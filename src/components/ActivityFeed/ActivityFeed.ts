import { ActivityFeedItemLike } from "./types";

export function ActivityFeed(events: Array<ActivityFeedItemLike>) {
  // console.dir(events, { depth: null });

  return events.map((event) => {
    switch (event.eventType) {
      case "email-thread":
        return [
          "# Email thread",
          "==============",
          event.events
            .map((thread) =>
              [
                `From: ${thread.senderEmail.name} (${thread.senderEmail.address})`,
                `To: ${thread.toEmails
                  .map((email) => `${email.name} (${email.address})`)
                  .join(", ")}`,
                `ThreadId: ${thread.threadId}`,
                `MessageId: ${thread.messageId}`,
              ].join("\n")
            )
            .join("\n--------------\n"),
        ].join("\n");
    }
  });
}
