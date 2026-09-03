import { useState } from "react";
import { eventTypes } from "../data/content";

// NOTE: This form posts to a placeholder endpoint. To make submissions
// actually reach an inbox/database, sign up for a form backend (e.g.
// Formspree, Getform) or wire this to your own API route, then replace
// FORM_ENDPOINT below.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

const fieldClass =
  "w-full bg-parchment border border-ink/15 px-4 py-3 text-ink placeholder:text-umber/50 focus:outline-none focus:border-amber transition-colors";

export default function Booking() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    organization: "",
    date: "",
    location: "",
    eventType: eventTypes[0],
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          organization: "",
          date: "",
          location: "",
          eventType: eventTypes[0],
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="px-6 py-24 md:py-32 bg-sand-deep">
      <div className="max-w-3xl mx-auto">
        <p className="font-display italic text-lg text-clay mb-3">
          Live event booking &amp; contact
        </p>
        <h2 className="font-display text-4xl text-ink mb-4 max-w-[20ch]">
          Bring Alangasa to your worship night, seminar or coaching clinic
        </h2>
        <p className="text-umber leading-relaxed mb-10 max-w-[60ch]">
          Fill in the details below and our team will follow up on
          availability, logistics and next steps.
        </p>

        <form onSubmit={handleSubmit} className="bg-parchment border border-ink/10 p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-umber mb-2">
                Full name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={update("name")}
                className={fieldClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm text-umber mb-2">
                Organization / Church
              </label>
              <input
                id="organization"
                required
                value={form.organization}
                onChange={update("organization")}
                className={fieldClass}
                placeholder="Church or organization name"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm text-umber mb-2">
                Proposed date
              </label>
              <input
                id="date"
                type="date"
                required
                value={form.date}
                onChange={update("date")}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm text-umber mb-2">
                Event location
              </label>
              <input
                id="location"
                required
                value={form.location}
                onChange={update("location")}
                className={fieldClass}
                placeholder="City, venue"
              />
            </div>
          </div>

          <div>
            <label htmlFor="eventType" className="block text-sm text-umber mb-2">
              Event type
            </label>
            <select
              id="eventType"
              value={form.eventType}
              onChange={update("eventType")}
              className={fieldClass}
            >
              {eventTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-umber mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={update("message")}
              className={fieldClass}
              placeholder="Tell us more about the event"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-ink px-7 py-3.5 text-parchment font-medium hover:bg-night transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send booking request"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-clay">
              Thank you — your request has been sent. Our team will be in
              touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-clay">
              Something went wrong. Please connect a form backend (see the
              FORM_ENDPOINT note in Booking.jsx) or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
