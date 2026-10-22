"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register, type FormState } from "../register/actions";
import type { Cohort } from "../../../data/cohorts";

interface Props {
  cohorts: Pick<Cohort, "slug" | "title" | "status">[];
  defaultCohort?: string;
}

const levels = [
  "I've never written code",
  "I've done a few tutorials",
  "I can build small programs",
];

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn" disabled={pending}>
      {pending ? "Sending…" : "Reserve my seat"}
    </button>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[15px] font-medium">{label}</span>
      {hint && <span className="ml-2 text-sm text-muted">{hint}</span>}
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

export default function RegisterForm({ cohorts, defaultCohort }: Props) {
  const [state, action] = useFormState<FormState, FormData>(register, {});
  const f = state.fields ?? {};
  const open = cohorts.filter((c) => c.status !== "closed");

  return (
    <form action={action} className="space-y-6">
      {open.length === 1 ? (
        <input type="hidden" name="cohort" value={open[0].slug} />
      ) : (
        <Field label="Cohort">
          <select
            name="cohort"
            required
            defaultValue={f.cohort ?? defaultCohort ?? ""}
            className="field"
          >
            <option value="" disabled>
              Choose a cohort
            </option>
            {open.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
                {c.status === "waitlist" ? " (waitlist)" : ""}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field label="Full name">
        <input name="name" required autoComplete="name" defaultValue={f.name} className="field" />
      </Field>

      <Field label="Email" hint="Payment details and joining link go here">
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={f.email}
          className="field"
        />
      </Field>

      <Field label="WhatsApp number" hint="Optional">
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          defaultValue={f.phone}
          className="field"
        />
      </Field>

      <fieldset>
        <legend className="text-[15px] font-medium">Your coding experience</legend>
        <div className="mt-2 space-y-1.5">
          {levels.map((l, i) => (
            <label key={l} className="flex items-center gap-3 text-muted has-[:checked]:text-ink">
              <input
                type="radio"
                name="level"
                value={l}
                required
                defaultChecked={f.level ? f.level === l : i === 0}
                className="accent-[rgb(var(--accent))]"
              />
              {l}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="What do you want to get out of this?" hint="Optional">
        <textarea name="goal" rows={3} maxLength={1000} defaultValue={f.goal} className="field" />
      </Field>

      {/* Honeypot for bots; hidden from people and screen readers. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.error && (
        <p role="alert" className="text-[15px] text-red-700 dark:text-red-400">
          {state.error}
        </p>
      )}

      <Submit />
    </form>
  );
}
