//https://tools.slack.dev/node-slack-sdk/packages/webhook
//https://github.com/hayato94087/nextjs-slack-incoming-webhook-sample
//https://medium.com/@alibadereddin/building-the-backend-for-a-slack-app-with-nextjs-and-vercel-e1503b938e6b
// 'use server';

import { getBaseUrl } from "@/lib/metadata";
import { FormSchemaType } from "./index";
import { IncomingWebhook } from "@slack/webhook";
import { format } from "date-fns";

export async function submitForm(formData: FormSchemaType, locale: string) {
  const { name, email, "job-title": jobTitle } = formData;

  const lang = locale === "en" ? "EN" : "JA";
  const message = null; //'Example message';

  const time = format(new Date(), "yy/MM/dd 'at' HH:mm");
  const siteUrl = getBaseUrl();

  const title = `[${siteUrl}]: Request Demo form (${lang})`;

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
            text: `:construction_worker: *Job Title:*\n${jobTitle}`,
          },
          {
            type: "mrkdwn",
            text: `:clock1: *Time*\n${time}`,
          },
        ],
      },

      ...(message
        ? [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Message:*\n${message}`,
              },
            },
          ]
        : []),
    ],
  };

  try {
    const res = await webhook.send(payload);
    return res;
  } catch (error) {
    throw error;
  }
}
