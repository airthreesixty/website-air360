// 'use server';

import { getBaseUrl } from "@/lib/metadata";
import { FormSchemaType } from "./index";
import { IncomingWebhook } from "@slack/webhook";
import { format } from "date-fns";

export async function submitForm(formData: FormSchemaType, locale: string) {
  const { firstName, lastName, email, contentTitle } = formData;
  const name = `${firstName} ${lastName}`;

  const lang = locale === "en" ? "EN" : "JA";

  const time = format(new Date(), "yy/MM/dd 'at' HH:mm");
  const siteUrl = getBaseUrl();

  const title = `[${siteUrl}]: Gallery Content form (${lang})`;

  const url = process.env.SLACK_WEBHOOK_URL as string;
  const webhook = new IncomingWebhook(url);
  const payload = {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: title,
        },
      },

      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `:raising_hand: *Name:*\n${name}`,
          },
          {
            type: "mrkdwn",
            text: `:email: *Email:*\n${email}`,
          },
          {
            type: "mrkdwn",
            text: `:clock1: *Content*\n${contentTitle}`,
          },
          {
            type: "mrkdwn",
            text: `:clock1: *Time*\n${time}`,
          },
        ],
      },
    ],
  };

  try {
    const res = await webhook.send(payload);
    return res;
  } catch (error) {
    throw error;
  }
}
