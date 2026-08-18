"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
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

const countries = ["Sweden", "Russia", "Cyprus"];

const services = [
  "Student Visa",
  "Admission Guidance",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-[-200px] top-[450px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        {/* Main */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* Left */}
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
                      info@travelfriends.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-500/10">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Phone / WhatsApp
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      +880 XXX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-500/10">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Destinations
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      Sweden · Russia · Cyprus
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/[0.06] pt-8">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-4 w-4 text-blue-400" />

                  <span className="text-sm text-zinc-500">
                    Study • Travel • Explore
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border border-white/[0.08] bg-[#07101f]/80 p-6 backdrop-blur-xl sm:p-9">
            {success ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center bg-emerald-500/10">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
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

                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Back to Home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Fill out the form and we&apos;ll get back to you.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
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
                        placeholder="you@example.com"
                        className="h-12 w-full border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-blue-500/50 focus:bg-blue-500/[0.03]"
                      />
                    </div>
                  </div>

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

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-14 w-full items-center justify-center gap-3 bg-blue-500 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.2)] transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
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
                    By submitting this form, you agree that Travel Friends may
                    contact you regarding your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
