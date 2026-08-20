"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { submitContactForm } from "./contact";

const countries = ["Sweden", "Russia", "Cyprus", "Saudi Arabia", "Other"];

const services = [
  "Student Visa",
  "Admission Guidance",
  "Visit Visa",
  "Umrah Visa",
  "Documentation",
  "Travel Planning",
  "General Consultation",
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await submitContactForm(formData);

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setError("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-320px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-[-240px] top-[420px] h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-220px] h-[620px] w-[620px] rounded-full bg-indigo-600/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.2)_50%,#030712_100%)]" />
      </div>

      <div className="relative z-10">
        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-10 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              Contact MK World
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              LET&apos;S TALK
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                ABOUT YOUR JOURNEY.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Whether you are planning to study abroad, visit another country,
              prepare for Umrah, or simply need guidance, tell us what you are
              looking for.
            </p>
          </div>
        </section>

        {/* =========================================================
            MAIN
        ========================================================== */}

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            {/* =====================================================
                LEFT INFORMATION
            ====================================================== */}

            <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
              <div className="absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[80px]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>

                <h2 className="mt-7 text-2xl font-bold text-white">
                  We&apos;re here to help.
                </h2>

                <p className="mt-4 leading-7 text-zinc-500">
                  Whether you&apos;re just exploring your options or already
                  preparing your application, start a conversation with us.
                </p>

                {/* Contact details */}

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-500/10">
                      <Mail className="h-4 w-4 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-zinc-300">
                        support@mkworld.org
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/*      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-500/10">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div> */}

                    {/*    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                        Phone / WhatsApp
                      </p>

                      <p className="mt-1 text-sm text-zinc-300">
                        +880 XXX XXX XXXX
                      </p>
                    </div> */}
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-500/10">
                      <MapPin className="h-4 w-4 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                        Destinations
                      </p>

                      <p className="mt-1 text-sm leading-6 text-zinc-300">
                        Sweden · Russia · Cyprus · Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services */}

                <div className="mt-10 border-t border-white/[0.06] pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-600">
                    What we help with
                  </p>

                  <div className="mt-5 grid gap-3">
                    {[
                      "Student Visa & Admission",
                      "Visit Visa",
                      "Umrah Visa",
                      "Documentation",
                      "Travel Planning",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-zinc-400"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-t border-white/[0.06] pt-8">
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-4 w-4 text-blue-400" />

                    <span className="text-sm text-zinc-500">
                      Study • Travel • Explore • Umrah
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                FORM
            ====================================================== */}

            <div className="border border-white/[0.08] bg-[#07101f]/80 p-6 backdrop-blur-xl sm:p-9">
              {success ? (
                <div className="flex min-h-[650px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center bg-blue-500/10">
                    <CheckCircle2 className="h-10 w-10 text-blue-400" />
                  </div>

                  <h2 className="mt-8 text-3xl font-bold text-white">
                    Thank you for contacting us!
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-zinc-400">
                    Your message has been received successfully. We&apos;ve also
                    sent a confirmation email to your email address.
                  </p>

                  <p className="mt-3 text-sm text-zinc-600">
                    Our team will review your enquiry and get back to you soon.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/"
                      className="inline-flex h-12 items-center justify-center gap-2 bg-blue-500 px-6 text-sm font-semibold text-white transition hover:bg-blue-400"
                    >
                      Back to Home
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setSuccess(false);
                        setError("");
                      }}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                      <span className="h-px w-8 bg-blue-400" />
                      Enquiry
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                      Send us a message
                    </h2>

                    <p className="mt-2 text-sm text-zinc-500">
                      Tell us what you are planning and we&apos;ll get back to
                      you.
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                        >
                          Full Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          className="h-12 w-full border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-blue-500/50 focus:bg-blue-500/[0.03]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="h-12 w-full border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-blue-500/50 focus:bg-blue-500/[0.03]"
                        />
                      </div>
                    </div>

                    {/* Phone + Country */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                        >
                          Phone / WhatsApp
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="+880..."
                          className="h-12 w-full border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-blue-500/50 focus:bg-blue-500/[0.03]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="country"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                        >
                          Interested Country
                        </label>

                        <select
                          id="country"
                          name="country"
                          required
                          defaultValue=""
                          className="h-12 w-full border border-white/[0.08] bg-[#07101f] px-4 text-sm text-white outline-none transition focus:border-blue-500/50"
                        >
                          <option value="" disabled>
                            Select country
                          </option>

                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service */}

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                      >
                        What can we help with?
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="h-12 w-full border border-white/[0.08] bg-[#07101f] px-4 text-sm text-white outline-none transition focus:border-blue-500/50"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your plans..."
                        className="w-full resize-none border border-white/[0.08] bg-white/[0.025] px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-blue-500/50 focus:bg-blue-500/[0.03]"
                      />
                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex h-14 w-full items-center justify-center gap-3 bg-blue-500 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.2)] transition hover:bg-blue-400 hover:shadow-[0_0_45px_rgba(59,130,246,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs leading-5 text-zinc-600">
                      By submitting this form, you agree that MK World may
                      contact you regarding your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.045]" />

          <div className="absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
            <Compass className="mx-auto h-8 w-8 text-blue-400" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Planning your next journey?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-500">
              From studying abroad and visa preparation to travel planning and
              Umrah, we&apos;re here to help you understand your next steps.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-blue-500 px-7 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/umrah"
                className="inline-flex h-12 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:text-white"
              >
                Explore Umrah
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="relative z-10 border-t border-white/[0.06] bg-[#02050d]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
          {/* Brand */}

          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <Compass className="h-5 w-5 text-blue-400" />
              </div>

              <span className="text-xl font-bold">
                MK<span className="text-blue-400">World</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Student visa, travel, visit visa, and Umrah journey guidance for
              people planning their next international experience.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <Link href="/" className="transition hover:text-blue-400">
                Home
              </Link>

              <Link href="/about" className="transition hover:text-blue-400">
                About
              </Link>

              <Link href="/sweden" className="transition hover:text-blue-400">
                Sweden
              </Link>

              <Link href="/russia" className="transition hover:text-blue-400">
                Russia
              </Link>

              <Link href="/umrah" className="transition hover:text-blue-400">
                Umrah
              </Link>

              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <span>Student Visa</span>
              <span>Admission Guidance</span>
              <span>Visit Visa</span>
              <span>Umrah Visa</span>
              <span>Travel Planning</span>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>© {new Date().getFullYear()} MK World. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Study · Travel · Explore · Umrah</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
