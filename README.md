# The Basics Cohort

A text-first site for running live coding cohorts and registering students.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editing content

Site content lives in `content/` as Markdown files. Edit them, commit and push — the
site rebuilds and picks up the changes (locally, `npm run dev` shows them on reload).

- `content/cohorts/*.md` — one file per cohort; the file name is the URL
  (`/cohorts/<file-name>`). Copy `_template.md` to add one. Set `status` to `open`,
  `waitlist` or `closed`. Cohorts are listed by `startDate`.
- `content/testimonials/*.md` — one file per testimonial, shown in file-name order.
- `content/about.md` — About page, plus the "Your teacher" card on the home page.
- `content/payment.md` — your UPI ID. After registering, students see a QR code and a
  "Pay with UPI app" button with the cohort fee pre-filled. Leave `upiId` empty to hide it.
- `content/legal/*.md` — Terms (`/terms`), Privacy (`/privacy`) and Refund Policy
  (`/refund-policy`). Bump `updated` when you change one.

Files whose name starts with `_` are ignored. `data/faq.ts` and `data/working.ts` are
still plain TypeScript.

## Where registrations go

The form on each cohort page (and `/register`) validates input on the server, then:

- **Locally**, with no config: appends one JSON line per registration to
  `registrations.jsonl` (git-ignored).
- **In production** (Vercel etc. can't write files): set `REGISTRATION_WEBHOOK_URL`
  and each registration is POSTed there as JSON:

  ```json
  { "cohort": "python-data-analysis", "name": "…", "email": "…", "phone": "…",
    "level": "…", "goal": "…", "createdAt": "2026-10-21T11:47:01.628Z" }
  ```

### Collecting into a Google Sheet (free, ~5 minutes)

1. Create a Sheet with headers in row 1:
   `createdAt | cohort | name | email | phone | level | goal`
2. Extensions → Apps Script, paste:

   ```js
   function doPost(e) {
     const r = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSheet().appendRow(
       [r.createdAt, r.cohort, r.name, r.email, r.phone, r.level, r.goal]
     );
     return ContentService.createTextOutput("ok");
   }
   ```
3. Deploy → New deployment → Web app → Execute as *Me*, access *Anyone*.
4. Copy the web-app URL into `REGISTRATION_WEBHOOK_URL` (e.g. `.env.local`, or your
   host's environment settings).

Zapier, Make, Formspree-style endpoints or your own API work the same way.
