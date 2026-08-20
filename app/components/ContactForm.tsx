"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { submitQuickContact } from "./quickContact";

export default function ContactForm() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setResult(null);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await submitQuickContact(formData);

    setResult(response);
    setLoading(false);

    if (response.success) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  function closeForm() {
    if (loading) return;

    setOpen(false);
    setResult(null);
  }

  return (
    <>
      {/* Floating Chat Button */}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open contact form"
          title="Contact us"
          className="
            fixed
            bottom-5
            right-5
            z-[70]
            flex
            h-13
            w-13
            items-center
            justify-center
            rounded-full
            bg-blue-500
            text-white
            shadow-[0_0_30px_rgba(59,130,246,0.30)]
            transition
            duration-300
            hover:scale-105
            hover:bg-blue-400
            hover:shadow-[0_0_40px_rgba(59,130,246,0.45)]
            sm:bottom-6
            sm:right-6
          "
        >
          {/* Pulse */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-blue-400/40
              animate-ping
              [animation-duration:2.5s]
            "
          />

          <MessageCircle className="relative h-5 w-5" />
        </button>
      )}

      {/* Floating Contact Panel */}

      {open && (
        <div
          className="
            fixed
            bottom-4
            right-4
            z-[80]
            w-[calc(100vw-2rem)]
            max-w-[400px]
            overflow-hidden
            border
            border-white/10
            bg-[#07101f]
            shadow-[0_25px_80px_rgba(0,0,0,0.55)]
            sm:bottom-6
            sm:right-6
          "
        >
          {/* Header */}

          <div
            className="
              relative
              border-b
              border-white/[0.06]
              bg-gradient-to-br
              from-[#07101f]
              to-[#0b1830]
              px-5
              py-4
            "
          >
            <button
              type="button"
              onClick={closeForm}
              disabled={loading}
              aria-label="Close contact form"
              className="
                absolute
                right-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                text-zinc-500
                transition
                hover:bg-white/[0.05]
                hover:text-white
                disabled:pointer-events-none
              "
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-500/10">
                <MessageCircle className="h-4 w-4 text-blue-400" />
              </div>

              <div>
                <h2 className="text-base font-bold text-white">
                  Contact Us
                </h2>

                <p className="mt-0.5 text-[11px] text-zinc-500">
                  Send us a quick message
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-3.5 px-5 py-5"
          >
            {/* Name */}

            <div>
              <label
                htmlFor="quick-contact-name"
                className="
                  mb-1.5
                  block
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-zinc-500
                "
              >
                Name
              </label>

              <input
                id="quick-contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                maxLength={150}
                required
                disabled={loading}
                className="
                  h-10
                  w-full
                  border
                  border-white/10
                  bg-[#030712]
                  px-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-700
                  transition
                  focus:border-blue-400/40
                  disabled:opacity-50
                "
              />
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="quick-contact-email"
                className="
                  mb-1.5
                  block
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-zinc-500
                "
              >
                Email
              </label>

              <input
                id="quick-contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                maxLength={200}
                required
                disabled={loading}
                className="
                  h-10
                  w-full
                  border
                  border-white/10
                  bg-[#030712]
                  px-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-700
                  transition
                  focus:border-blue-400/40
                  disabled:opacity-50
                "
              />
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="quick-contact-message"
                className="
                  mb-1.5
                  block
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-zinc-500
                "
              >
                Message
              </label>

              <textarea
                id="quick-contact-message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="How can we help you?"
                maxLength={5000}
                required
                disabled={loading}
                rows={4}
                className="
                  w-full
                  resize-none
                  border
                  border-white/10
                  bg-[#030712]
                  px-3
                  py-2.5
                  text-sm
                  leading-5
                  text-white
                  outline-none
                  placeholder:text-zinc-700
                  transition
                  focus:border-blue-400/40
                  disabled:opacity-50
                "
              />
            </div>

            {/* Result */}

            {result && (
              <div
                className={`px-3 py-2.5 text-xs ${
                  result.success
                    ? "border border-blue-400/20 bg-blue-500/[0.06] text-blue-300"
                    : "border border-red-400/20 bg-red-500/[0.06] text-red-300"
                }`}
              >
                {result.message}
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                bg-blue-500
                text-sm
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(59,130,246,0.15)]
                transition
                hover:bg-blue-400
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-center text-[10px] leading-4 text-zinc-600">
              We&apos;ll reply to the email address you provide.
            </p>
          </form>
        </div>
      )}
    </>
  );
}