import { faker } from "@faker-js/faker/.";
import { MockEmailReceivedEvent } from "./__fixtures__/MockEmailReceivedEvent";
import { MockEmailSentEvent } from "./__fixtures__/MockEmailSentEvent";
import { MockEmailThread } from "./__fixtures__/MockEmailThread";
import { ActivityFeed } from "./ActivityFeed";
import { EmailAddress } from "./types";

describe("ActivityFeed", () => {
  it("should render an email thread", () => {
    const agentEmail: EmailAddress = {
      name: "Michael Scott",
      address: "michael.scott@regal.io",
    };

    const contactEmail: EmailAddress = {
      name: "Holly Flax",
      address: "holly.flax@gmail.com",
    };

    faker.seed(2025);
    const emailThread = MockEmailThread({
      events: [
        MockEmailSentEvent({
          senderEmail: agentEmail,
          toEmails: [contactEmail],
          threadId: "message1",
          messageId: "message1",
        }),
        MockEmailReceivedEvent({
          senderEmail: contactEmail,
          toEmails: [agentEmail],
          threadId: "message1",
        }),
      ],
    });

    expect(ActivityFeed([emailThread])).toEqual([
      [
        "# Email thread",
        "==============",
        "From: Michael Scott (michael.scott@regal.io)",
        "To: Holly Flax (holly.flax@gmail.com)",
        "ThreadId: message1",
        "MessageId: message1",
        "--------------",
        "From: Holly Flax (holly.flax@gmail.com)",
        "To: Michael Scott (michael.scott@regal.io)",
        "ThreadId: message1",
        "MessageId: kDSBrVMMTLqOPlzMKrgkUbztXSkJnKcjXh",
      ].join("\n"),
    ]);
  });
});
