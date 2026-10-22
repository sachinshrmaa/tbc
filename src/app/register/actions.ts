"use server";

import { redirect } from "next/navigation";
import { getCohort } from "../../../data/cohorts";
import { saveRegistration } from "@/lib/registrations";

export interface FormState {
  error?: string;
  fields?: Record<string, string>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{6,16}$/;

export async function register(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const fields = {
    cohort: get("cohort"),
    name: get("name"),
    email: get("email").toLowerCase(),
    phone: get("phone"),
    level: get("level"),
    goal: get("goal"),
  };

  // Honeypot: real people never see or fill this field.
  if (get("website")) {
    redirect(`/register/thanks?cohort=${encodeURIComponent(fields.cohort)}`);
  }

  const cohort = getCohort(fields.cohort);
  if (!cohort) return { error: "Please choose a cohort.", fields };
  if (cohort.status === "closed")
    return { error: "Registrations for this cohort are closed.", fields };
  if (fields.name.length < 2) return { error: "Please enter your name.", fields };
  if (!EMAIL_RE.test(fields.email))
    return { error: "Please enter a valid email address.", fields };
  if (fields.phone && !PHONE_RE.test(fields.phone))
    return { error: "That phone number doesn't look right.", fields };
  if (fields.goal.length > 1000)
    return { error: "Please keep your answer under 1000 characters.", fields };

  try {
    await saveRegistration({ ...fields, createdAt: new Date().toISOString() });
  } catch (err) {
    console.error("Failed to save registration", err);
    return {
      error:
        "Something went wrong saving your registration. Please try again, or email me directly.",
      fields,
    };
  }

  redirect(`/register/thanks?cohort=${encodeURIComponent(cohort.slug)}`);
}
