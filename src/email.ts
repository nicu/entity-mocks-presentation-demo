export type EmailAddress = {
  name: string;
  address: string;
};

export type EmailBaseAttributes = {
  from: EmailAddress;
  to: EmailAddress;
  subject: string;
  body: string;
};

export interface EmailSent extends EmailBaseAttributes {
  type: "email-sent";
}

export interface EmailReceived extends EmailBaseAttributes {
  type: "email-received";
}
