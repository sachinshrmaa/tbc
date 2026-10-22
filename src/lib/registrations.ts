import { appendFile } from "node:fs/promises";
import path from "node:path";

export interface Registration {
  cohort: string;
  name: string;
  email: string;
  phone: string;
  level: string;
  goal: string;
  createdAt: string;
}

// Where registrations go:
// - If REGISTRATION_WEBHOOK_URL is set, each registration is POSTed there as JSON
//   (Google Apps Script → Sheet, Zapier, Make, your own API…). See README.
// - Otherwise they are appended to ./registrations.jsonl. This works locally
//   but not on serverless hosts like Vercel, so set the webhook in production.
export async function saveRegistration(reg: Registration): Promise<void> {
  const webhook = process.env.REGISTRATION_WEBHOOK_URL;

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reg),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Webhook responded with ${res.status}`);
    }
    return;
  }

  const file = path.join(process.cwd(), "registrations.jsonl");
  await appendFile(file, JSON.stringify(reg) + "\n", "utf8");
}
