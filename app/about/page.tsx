import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Compass,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const destinations = [
  {
    flag: "🇸🇪",
    country: "Sweden",
    description:
      "A destination for students looking for quality education, international exposure, and new opportunities.",
    href: "/sweden",
  },
  {
    flag: "🇷🇺",
    country: "Russia",
    description:
      "Explore educational opportunities while receiving guidance throughout your application and travel journey.",
    href: "/russia",
  },
  {
    flag: "🇨🇾",
    country: "Cyprus",
    description:
      "Discover study opportunities in a welcoming international environment with support from application to travel.",
    href: "/cyprus",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "Every journey is different. We take time to understand your goals, concerns, and plans before suggesting your next step.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Guidance",
    description:
      "We believe visa and travel processes should be understandable, organized, and transparent.",
  },
  {
    icon: Globe2,
    title: "International Focus",
    description:
      "Our focus is connecting students and travelers with opportunities beyond their home country.",
  },
  {
    icon: Users,
    title: "Personal Support",
    description:
      "You are not just another application. We aim to provide friendly support throughout your journey.",
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa Guidance",
    description:
      "Understand the student visa process and prepare for the next stages of your international education journey.",
  },
  {
    icon: FileCheck2,
    title: "Application & Documents",
    description:
      "Get organized guidance around applications and the documentation required for your journey.",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    description:
      "Prepare for the practical side of moving abroad, from travel planning to pre-departure preparation.",
  },
  {
    icon: MessageCircle,
    title: "Personal Consultation",
    description:
      "Discuss your destination, education plans, and questions with our team before making important decisions.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Tell us where you want to go and what you want to achieve.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "We help you understand the available options and requirements.",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Organize your application, documents, and travel preparation.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Take the next step toward your international journey with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-350px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-[-250px] top-[700px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.15)_45%,#030712_100%)]" />
      </div>

      <div className="relative z-10">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative">
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-28">
            {/* Content */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                About Travel Friends
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                YOUR JOURNEY.
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  OUR SUPPORT.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Travel Friends is a student visa and travel guidance platform
                helping people take their next step toward international
                education and new experiences.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-500">
                We focus on Sweden, Russia, and Cyprus, providing personalized
                guidance from the first conversation through application and
                travel preparation.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-blue-400 hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]"
                >
                  Talk to Us
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/"
                  className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:text-white"
                >
                  Back Home
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  Clear guidance
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-blue-400" />
                  Personal support
                </div>

                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-blue-400" />
                  International focus
                </div>
              </div>
            </div>

            {/* AI Morphic Visual */}
            <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute h-[430px] w-[430px] rounded-full border border-blue-400/[0.08]" />

              <div className="absolute h-[340px] w-[340px] rounded-full border border-blue-400/[0.12]" />

              <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-cyan-400/20" />

              <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-500/20 blur-[100px]" />

              <div className="absolute h-[180px] w-[180px] rounded-full bg-cyan-400/20 blur-[70px]" />

              <div className="relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/75 shadow-[0_0_100px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
                <div className="absolute inset-3 rounded-full border border-blue-400/10" />

                <Compass className="h-16 w-16 text-blue-400" />

                <span className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
                  Travel Friends
                </span>
              </div>

              {/* Sweden */}
              <div className="absolute left-0 top-[10%] z-20 border border-white/10 bg-[#091426]/80 p-4 backdrop-blur-xl transition hover:border-blue-400/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🇸🇪</div>

                  <div>
                    <p className="text-sm font-bold text-white">Sweden</p>

                    <p className="text-[10px] text-zinc-500">
                      Study & Explore
                    </p>
                  </div>
                </div>
              </div>

              {/* Russia */}
              <div className="absolute right-0 top-[42%] z-20 border border-white/10 bg-[#091426]/80 p-4 backdrop-blur-xl transition hover:border-blue-400/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🇷🇺</div>

                  <div>
                    <p className="text-sm font-bold text-white">Russia</p>

                    <p className="text-[10px] text-zinc-500">
                      Education & Travel
                    </p>
                  </div>
                </div>
              </div>

              {/* Cyprus */}
              <div className="absolute bottom-[10%] left-[8%] z-20 border border-white/10 bg-[#091426]/80 p-4 backdrop-blur-xl transition hover:border-blue-400/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🇨🇾</div>

                  <div>
                    <p className="text-sm font-bold text-white">Cyprus</p>

                    <p className="text-[10px] text-zinc-500">
                      Your Next Chapter
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[20%] top-[12%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(103,232,249,0.4)]" />

              <div className="absolute bottom-[20%] right-[7%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(96,165,250,0.4)]" />

              <div className="absolute left-[16%] top-[48%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </section>

        {/* =========================================================
            WHO WE ARE
        ========================================================== */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Who We Are
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Built around
                <span className="block text-zinc-500">
                  your ambitions.
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Choosing to study or travel abroad is one of the biggest
                decisions you can make. There are applications to understand,
                documents to prepare, destinations to compare, and many
                questions along the way.
              </p>

              <p>
                Travel Friends exists to make that journey easier to
                understand. We provide student visa and travel guidance with a
                strong focus on personal communication and practical support.
              </p>

              <p>
                Rather than treating every applicant the same, we believe in
                understanding the individual first. Your destination, academic
                plans, circumstances, and goals all matter when deciding what
                your next step should be.
              </p>

              <div className="border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-5">
                <p className="font-medium text-zinc-200">
                  &quot;The goal is not simply to help you submit an
                  application. It is to help you understand the journey
                  ahead.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION & VISION
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="group relative overflow-hidden border border-blue-400/10 bg-blue-500/[0.04] p-8 sm:p-10 lg:p-12">
              <div className="absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-blue-500/10 blur-[80px] transition duration-500 group-hover:bg-blue-500/20" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <Globe2 className="h-5 w-5 text-blue-400" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  What drives us
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Our Mission
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                  To make international education and travel guidance more
                  accessible, understandable, and personal for students and
                  travelers planning their next chapter abroad.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 lg:p-12">
              <div className="absolute bottom-[-80px] right-[-80px] h-60 w-60 rounded-full bg-cyan-500/10 blur-[80px] transition duration-500 group-hover:bg-cyan-500/20" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <Compass className="h-5 w-5 text-blue-400" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Where we are going
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Our Vision
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                  To become a trusted companion for people who want to study,
                  travel, and build new opportunities across borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================== */}
        <section className="border-y border-white/[0.06] bg-[#050b15]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                What We Believe
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The principles behind
                <span className="block text-zinc-500">
                  Travel Friends.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="group bg-[#07101f] p-7 transition hover:bg-[#09172a]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10 transition group-hover:bg-blue-500/20">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>

                    <h3 className="mt-7 text-lg font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            DESTINATIONS
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Where We Help
              <span className="h-px w-10 bg-blue-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Three destinations.
              <span className="block text-zinc-500">
                Endless possibilities.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
              Our current focus is helping students and travelers explore
              opportunities in these three destinations.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.country}
                className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.025] p-8 transition hover:border-blue-400/20 hover:bg-blue-500/[0.03]"
              >
                <div className="absolute right-[-40px] top-[-40px] text-[120px] opacity-[0.04] grayscale transition duration-500 group-hover:scale-110 group-hover:opacity-[0.08]">
                  {destination.flag}
                </div>

                <div className="relative">
                  <div className="text-5xl">{destination.flag}</div>

                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {destination.country}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {destination.description}
                  </p>

                  <Link
                    href={destination.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3"
                  >
                    Explore {destination.country}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================== */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Our Approach
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  From questions
                  <span className="block text-zinc-500">
                    to your next step.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  We keep the journey simple by breaking it down into clear
                  stages.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
                {journey.map((item) => (
                  <div
                    key={item.number}
                    className="bg-[#07101f] p-7 transition hover:bg-[#09172a]"
                  >
                    <div className="text-4xl font-black text-blue-500/20">
                      {item.number}
                    </div>

                    <h3 className="mt-8 text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              What We Do
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Support for the
              <span className="block text-zinc-500">
                important parts of your journey.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex gap-6 border border-white/[0.08] bg-white/[0.02] p-7 transition hover:border-blue-400/20 hover:bg-blue-500/[0.025] sm:p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-500/10 transition group-hover:bg-blue-500/20">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[130px]" />

          <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">
            <BadgeCheck className="mx-auto h-8 w-8 text-blue-400" />

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              A journey abroad should feel
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                exciting, not overwhelming.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              That&apos;s why Travel Friends is here — to help you understand
              your options, prepare for the process, and take your next step
              with greater confidence.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition hover:bg-blue-400 hover:shadow-[0_0_70px_rgba(59,130,246,0.4)]"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.04] hover:text-white"
              >
                Explore Travel Friends
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}