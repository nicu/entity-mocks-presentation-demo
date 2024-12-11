import { faker } from "@faker-js/faker/.";
import {
  MockEmailAddress,
  MockEmailReceived,
  MockEmailSent,
} from "./__fixtures__/MockEmail";

// npm test -i person

const SEED = 2025; // any number

describe("Email", () => {
  it("should generate a known email address", () => {
    expect(
      MockEmailAddress({ name: "John Doe", address: "john.doe@gmail.com" })
    ).toStrictEqual({ name: "John Doe", address: "john.doe@gmail.com" });
  });

  it("should generate an email sent", () => {
    faker.seed(SEED);
    expect(MockEmailSent()).toStrictEqual({
      body: "zowie via yearly gadzooks devise yowza till garrote whoa omelet",
      from: {
        address: "Madyson45@gmail.com",
        name: "Sonja Kilback",
      },
      subject: "fen sometimes long-term",
      to: {
        address: "Elinore_Orn46@hotmail.com",
        name: "Pamela Greenholt",
      },
      type: "email-sent",
    });
  });

  it("should generate multiple email received", () => {
    faker.seed(SEED);
    expect(MockEmailReceived()).toStrictEqual({
      body: "zowie via yearly gadzooks devise yowza till garrote whoa omelet",
      from: {
        address: "Madyson45@gmail.com",
        name: "Sonja Kilback",
      },
      subject: "fen sometimes long-term",
      to: {
        address: "Elinore_Orn46@hotmail.com",
        name: "Pamela Greenholt",
      },
      type: "email-received",
    });

    expect(MockEmailReceived()).toStrictEqual({
      body: "likely gradient recent wound than usable apropos snowplow institute subdued",
      from: {
        address: "Leanna_Cassin@gmail.com",
        name: "Irene Will",
      },
      subject: "as archaeology woot",
      to: {
        address: "Jena.Willms@gmail.com",
        name: "Candace Hermann",
      },
      type: "email-received",
    });
  });

  it("should generate the same email received multiple times", () => {
    faker.seed(SEED);
    expect(MockEmailReceived({})).toStrictEqual({
      body: "zowie via yearly gadzooks devise yowza till garrote whoa omelet",
      from: {
        address: "Madyson45@gmail.com",
        name: "Sonja Kilback",
      },
      subject: "fen sometimes long-term",
      to: {
        address: "Elinore_Orn46@hotmail.com",
        name: "Pamela Greenholt",
      },
      type: "email-received",
    });

    faker.seed(SEED);
    expect(MockEmailReceived({})).toStrictEqual({
      body: "zowie via yearly gadzooks devise yowza till garrote whoa omelet",
      from: {
        address: "Madyson45@gmail.com",
        name: "Sonja Kilback",
      },
      subject: "fen sometimes long-term",
      to: {
        address: "Elinore_Orn46@hotmail.com",
        name: "Pamela Greenholt",
      },
      type: "email-received",
    });
  });
});
