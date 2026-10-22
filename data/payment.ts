import { readMarkdown } from "../src/lib/content";

const file = readMarkdown<{ upiId?: string; payeeName?: string }>("payment.md");

export const payment = {
  upiId: (file.data.upiId ?? "").trim(),
  payeeName: (file.data.payeeName ?? "").trim(),
  html: file.html,
};

// Standard UPI deep link; opens GPay/PhonePe/Paytm etc. with the amount filled in.
export function upiLink(amount: number, note: string): string {
  const params = new URLSearchParams({
    pa: payment.upiId,
    pn: payment.payeeName,
    am: amount.toFixed(2),
    cu: "INR",
    tn: note.slice(0, 50),
  });
  return `upi://pay?${params.toString().replace(/\+/g, "%20")}`;
}
