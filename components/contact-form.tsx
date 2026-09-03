"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type ContactFormContent = {
  formTitle: string;
  formDescription: string;
  fields: {
    name: string;
    email: string;
    projectType: string;
    message: string;
    submit: string;
  };
};

type ContactFormProps = {
  content: ContactFormContent;
  locale: "it" | "en";
};

type FormState = {
  name: string;
  email: string;
  projectType: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  company: "",
};

export function ContactForm({ content, locale }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { success: boolean; error?: string };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error ?? "Request failed");
      }

      setStatus("success");
      setFeedback(
        locale === "it"
          ? "Richiesta inviata correttamente. Bartolomei Systems ti rispondera al piu presto."
          : "Message sent successfully. I will get back to you soon.",
      );
      setFormState(initialState);
    } catch {
      setStatus("error");
      setFeedback(
        locale === "it"
          ? "Invio non riuscito. Verifica i dati inseriti e riprova oppure contatta Bartolomei Systems su WhatsApp."
          : "Sending failed. Check your details and try again.",
      );
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel tech-border rounded-3xl p-8">
      <h2 className="text-3xl font-semibold text-white">{content.formTitle}</h2>
      <p className="mt-4 text-white/70">{content.formDescription}</p>
      <div className="mt-8 grid gap-4">
        <input
          name="name"
          value={formState.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan/50"
          placeholder={content.fields.name}
          autoComplete="name"
          required
        />
        <input
          name="email"
          value={formState.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan/50"
          placeholder={content.fields.email}
          type="email"
          autoComplete="email"
          required
        />
        <input
          name="projectType"
          value={formState.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan/50"
          placeholder={content.fields.projectType}
        />
        <textarea
          name="message"
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-40 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-cyan/50"
          placeholder={content.fields.message}
          required
        />
        <input
          name="company"
          value={formState.company}
          onChange={(event) => updateField("company", event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        {feedback ? (
          <p className={status === "success" ? "text-sm text-cyan" : "text-sm text-red-300"}>{feedback}</p>
        ) : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-fit items-center rounded-full bg-cyan px-6 py-3 font-medium text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading"
            ? locale === "it"
              ? "Invio in corso..."
              : "Sending..."
            : content.fields.submit}
        </button>
      </div>
    </form>
  );
}
