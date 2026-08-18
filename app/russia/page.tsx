import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Compass,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  University,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Study Opportunities",
    description:
      "Explore higher education opportunities in Russia and consider study paths that align with your academic background and future goals.",
  },
  {
    icon: University,
    title: "University Options",
    description:
      "Explore institutions and programs across fields such as medicine, engineering, technology, business, science, and more.",
  },
  {
    icon: FileCheck2,
    title: "Application Guidance",
    description:
      "Understand the application process, organize your documents, and prepare for the different stages of your application.",
  },
  {
    icon: Globe2,
    title: "International Experience",
    description:
      "Prepare to experience a new academic environment, culture, and international setting while continuing your education.",
  },
];

const subjects = [
  "Medicine",
  "Engineering",
  "Information Technology",
  "Business & Management",
  "Science",
  "Architecture",
  "Economics",
  "Other Disciplines",
];

const process = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    description:
      "Share your academic background, preferred subject, and what you are hoping to study in Russia.",
  },
  {
    number: "02",
    title: "Explore Your Options",
    description:
      "Understand possible universities, programs, entry requirements, and other factors relevant to your plans.",
  },
  {
    number: "03",
    title: "Prepare Your Application",
    description:
      "Organize your academic and supporting documents and prepare for the relevant application steps.",
  },
  {
    number: "04",
    title: "Prepare for Your Visa",
    description:
      "Once the relevant admission stage progresses, understand the student visa process and required preparation.",
  },
  {
    number: "05",
    title: "Get Ready to Travel",
    description:
      "Prepare for departure with practical travel information and pre-departure guidance.",
  },
];

const documents = [
  "Valid passport",
  "Academic certificates and transcripts",
  "Passport-size photographs",
  "University admission documents",
  "Required application forms",
  "Supporting documents requested for your application",
];

const supportItems = [
  "Destination and study planning",
  "University and program guidance",
  "Application preparation",
  "Document organization",
  "Student visa preparation",
  "Pre-departure guidance",
];

const footerDestinations = [
  {
    flag: "🇸🇪",
    name: "Sweden",
    href: "/sweden",
  },
  {
    flag: "🇷🇺",
    name: "Russia",
    href: "/russia",
    active: true,
  },
  {
    flag: "🇨🇾",
    name: "Cyprus",
    href: "/cyprus",
  },
];

export default function RussiaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="absolute right-[-300px] top-[700px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>
      <div className="relative z-10">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            {/* Content */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Study in Russia
              </div>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                YOUR FUTURE
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  STARTS HERE.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Explore opportunities to study in Russia and get practical,
                personal guidance throughout your international education
                journey.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                From exploring study options and preparing your application to
                understanding student visa requirements and getting ready for
                departure, Travel Friends helps you understand each stage.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-blue-400"
                >
                  Start Your Russia Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#process"
                  className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  Personal guidance
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  Application support
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  Pre-departure guidance
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-400/[0.07]" />

              <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/[0.11]" />

              <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-cyan-400/20" />

              <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="absolute h-[180px] w-[180px] rounded-full bg-cyan-400/20 blur-[70px]" />

              <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/80 shadow-[0_0_120px_rgba(37,99,235,0.25)] backdrop-blur-2xl">
                <div className="absolute inset-4 rounded-full border border-blue-400/10" />

                <div className="text-7xl">🇷🇺</div>

                <span className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
                  Russia
                </span>
              </div>

              {/* Floating cards */}
              <div className="absolute left-0 top-[8%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      International Study
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Explore your options
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-[42%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Application Support
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Prepare with clarity
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[8%] left-[8%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Travel Preparation
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Prepare for departure
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-[18%] top-[13%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(103,232,249,0.4)]" />

              <div className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(96,165,250,0.4)]" />

              <div className="absolute left-[17%] top-[48%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </section>

        {/* Why Russia */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Why Russia
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A new place.
                <span className="block text-zinc-500">A new opportunity.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Russia has a broad higher education landscape with universities
                and institutions offering programs across many academic
                disciplines.
              </p>

              <p>
                Students considering Russia may explore fields such as medicine,
                engineering, technology, science, business, economics,
                architecture, and other areas of study.
              </p>

              <p>
                Studying abroad is an important decision. Before moving forward,
                it is important to understand the university, program, admission
                requirements, documentation, visa process, and practical
                arrangements involved.
              </p>

              <div className="border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-5">
                <p className="font-medium text-zinc-200">
                  Travel Friends helps you understand the journey before you
                  take the next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Study Opportunities
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Why consider
              <span className="block text-zinc-500">studying in Russia?</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-zinc-500">
              Every student has different academic goals. The right choice
              depends on your background, preferred field, program, institution,
              and current requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group bg-[#07101f] p-7 transition hover:bg-[#09172a]"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10 transition group-hover:bg-blue-500/20">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Areas of Study */}
        <section className="border-y border-white/[0.06] bg-[#050b15]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Areas of Study
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Find your
                  <span className="block text-zinc-500">direction.</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Your ideal study path depends on your academic background,
                  interests, future plans, and the requirements of the specific
                  institution and program.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3"
                >
                  Discuss your study plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-4 border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition hover:border-blue-400/20 hover:bg-blue-500/[0.03]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-blue-500/10">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>

                    <span className="text-sm font-medium text-zinc-300">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visa Guidance */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden border border-blue-400/10 bg-blue-500/[0.035]">
            <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>

                <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Student visa
                  <span className="block text-zinc-500">preparation.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  The student visa process involves several stages and can
                  depend on your admission, documentation, application details,
                  and the requirements in force at the time you apply.
                </p>

                <p className="mt-4 max-w-xl leading-8 text-zinc-500">
                  We help you understand the relevant steps and organize your
                  preparation so you can approach the process with greater
                  clarity.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                >
                  Discuss Your Visa Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="border border-white/[0.07] bg-[#050c18]/70 p-7 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white">
                  What we can help you understand
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "Application requirements",
                    "Document preparation",
                    "Admission-related steps",
                    "Student visa preparation",
                    "Travel and departure preparation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                      <span className="text-sm leading-6 text-zinc-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/[0.07] pt-6 text-xs leading-6 text-zinc-600">
                  Visa requirements and immigration decisions are determined by
                  the relevant authorities and may change. Always verify the
                  latest official requirements before submitting an application.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Preparation
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Get your
                  <span className="block text-zinc-500">documents ready.</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Exact requirements can vary depending on your university,
                  program, application route, and current official requirements.
                  Your preparation may involve documents such as:
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {documents.map((document) => (
                  <div
                    key={document}
                    className="flex items-start gap-3 border border-white/[0.07] bg-[#07101f] p-5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-blue-500/10">
                      <Check className="h-3.5 w-3.5 text-blue-400" />
                    </div>

                    <span className="text-sm leading-6 text-zinc-400">
                      {document}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Your Journey
              <span className="h-px w-10 bg-blue-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              From first conversation
              <span className="block text-zinc-500">to departure.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-500">
              We break the process into clear stages so you can understand what
              comes next.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="bg-[#07101f] p-7 transition hover:bg-[#09172a]"
              >
                <div className="text-4xl font-black text-blue-500/20">
                  {step.number}
                </div>

                <h3 className="mt-8 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Travel Friends */}
        <section className="border-y border-white/[0.06] bg-[#050b15]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Why Travel Friends
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  You don&apos;t have to
                  <span className="block text-zinc-500">
                    figure it all out alone.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  International education can involve unfamiliar steps,
                  documents, deadlines, and decisions. Having someone explain
                  the process can make planning easier and more organized.
                </p>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3"
                >
                  Learn more about Travel Friends
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {supportItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-500/10">
                      <BadgeCheck className="h-4 w-4 text-blue-400" />
                    </div>

                    <span className="text-sm font-medium text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
            <HeartHandshake className="mx-auto h-9 w-9 text-blue-400" />

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Thinking about
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                studying in Russia?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              Tell us about your education plans and let&apos;s discuss the
              options and next steps that may be relevant to your journey.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
              >
                Contact Travel Friends
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-white"
              >
                Explore Other Destinations
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#02050b]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <Compass className="h-5 w-5 text-blue-400" />
              </div>

              <span className="text-xl font-bold">
                Travel<span className="text-blue-400">Friends</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Student visa and travel guidance for people planning their next
              educational journey abroad.
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

              <Link href="/russia" className="text-blue-400">
                Russia
              </Link>

              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Destinations
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              {footerDestinations.map((destination) => (
                <Link
                  key={destination.name}
                  href={destination.href}
                  className={
                    destination.active
                      ? "text-blue-400"
                      : "transition hover:text-blue-400"
                  }
                >
                  {destination.flag} {destination.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>
              © {new Date().getFullYear()} Travel Friends. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Sweden · Russia · Cyprus</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
