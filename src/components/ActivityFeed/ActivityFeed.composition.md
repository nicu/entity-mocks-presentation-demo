# Mainly a joke, but perhaps a good mental model

```ts
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
```

```tsx
<MockEmailThread>
  <MockEmailSentEvent
    senderEmail={agentEmail}
    toEmails={[contactEmail]}
    threadId="message1"
    messageId="message1"
  />
  <MockEmailReceivedEvent
    senderEmail={contactEmail}
    toEmails={[agentEmail]}
    threadId="message1"
  />
</MockEmailThread>
```
