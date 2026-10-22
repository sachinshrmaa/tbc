import type { Metadata } from "next";
import Link from "next/link";
import QRCode from "qrcode";
import Markdown from "../../components/Markdown";
import { formatDate, formatPrice, getCohort, type Cohort } from "../../../../data/cohorts";
import { payment, upiLink } from "../../../../data/payment";

export const metadata: Metadata = { title: "You're registered" };

async function UpiPayment({ cohort }: { cohort: Cohort }) {
  const link = upiLink(cohort.price, `TBC ${cohort.title}`);
  const qr = await QRCode.toString(link, { type: "svg", margin: 1 });

  return (
    <div className="mt-8 border-t border-rule pt-8 text-left">
      <p className="label text-center">Step 2 · Pay by UPI</p>
      <div className="mt-6 grid items-center gap-6 sm:grid-cols-[11rem_1fr]">
        <div
          aria-label="UPI QR code"
          role="img"
          className="mx-auto w-44 rounded-lg border border-rule bg-white p-2"
          dangerouslySetInnerHTML={{ __html: qr }}
        />
        <dl className="space-y-3 text-[15px]">
          <div>
            <dt className="text-muted">Amount</dt>
            <dd className="text-2xl font-semibold tracking-tight">{formatPrice(cohort.price)}</dd>
          </div>
          <div>
            <dt className="text-muted">UPI ID</dt>
            <dd className="select-all break-all font-mono">{payment.upiId}</dd>
          </div>
          {payment.payeeName && (
            <div>
              <dt className="text-muted">Name</dt>
              <dd>{payment.payeeName}</dd>
            </div>
          )}
        </dl>
      </div>
      <p className="mt-4 text-center text-sm text-muted sm:text-left">
        Scan with any UPI app — GPay, PhonePe, Paytm, BHIM.
      </p>
      <a href={link} className="btn mt-5 w-full sm:hidden">
        Pay {formatPrice(cohort.price)} with UPI app
      </a>
      <Markdown html={payment.html} className="mt-6 text-[15px] text-muted" />
    </div>
  );
}

export default function ThanksPage({
  searchParams,
}: {
  searchParams: { cohort?: string };
}) {
  const cohort = searchParams.cohort ? getCohort(searchParams.cohort) : undefined;
  const payNow = cohort && cohort.status === "open" && cohort.price > 0 && payment.upiId;

  return (
    <div className="container py-20 sm:py-28">
      <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-xl text-accent">
          ✓
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Thanks — you&apos;re on the list.
        </h1>
        <div className="mt-5 space-y-4 text-muted">
          {cohort && (
            <p>
              You&apos;ve registered for <span className="text-ink">{cohort.title}</span>,
              starting {formatDate(cohort.startDate)}.
            </p>
          )}
          {!payNow && (
            <p>
              I&apos;ll email you within a day with payment details and the joining
              link. Your seat is confirmed once payment is received.
            </p>
          )}
        </div>

        {payNow && <UpiPayment cohort={cohort} />}

        <p className="mt-8 text-sm text-muted">
          Didn&apos;t hear back? Check your spam folder, or write to{" "}
          <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link text-ink">
            mail.sachinshrmaa@gmail.com
          </Link>
          .
        </p>
        <Link href="/" className="btn-ghost mt-8">
          &larr; Back home
        </Link>
      </div>
    </div>
  );
}
