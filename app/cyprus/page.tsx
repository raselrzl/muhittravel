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
      "Explore higher education opportunities in Cyprus across a variety of academic fields and institutions.",
  },
  {
    icon: Globe2,
    title: "International Environment",
    description:
      "Experience an international student environment and connect with people from different backgrounds.",
  },
  {
    icon: Sparkles,
    title: "Mediterranean Lifestyle",
    description:
      "Combine your academic journey with the culture, climate, history, and lifestyle of the Mediterranean.",
  },
  {
    icon: HeartHandshake,
    title: "Student Support",
    description:
      "Get practical guidance as you navigate university applications, documentation, visa preparation, and travel.",
  },
];

const subjects = [
  "Business & Management",
  "Computer Science & IT",
  "Engineering",
  "Hospitality & Tourism",
  "Accounting & Finance",
  "Health Sciences",
  "Social Sciences",
  "Arts & Design",
];

const process = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    description:
      "Share your education background, preferred subject, budget, and what you want to achieve in Cyprus.",
  },
  {
    number: "02",
    title: "Explore Study Options",
    description:
      "Look at suitable universities, colleges, programs, entry requirements, and available study routes.",
  },
  {
    number: "03",
    title: "Prepare Your Application",
    description:
      "Organize your academic and supporting documents and prepare the information required for your application.",
  },
  {
    number: "04",
    title: "Visa Preparation",
    description:
      "After the relevant admission stage, prepare for the applicable student visa or entry process.",
  },
  {
    number: "05",
    title: "Prepare for Cyprus",
    description:
      "Get ready for your journey, accommodation, arrival, and practical life as an international student.",
  },
];

const documents = [
  "Valid passport",
  "Academic certificates",
  "Academic transcripts",
  "Passport-size photographs",
  "University or institution application documents",
  "Admission documentation",
  "Financial/supporting documentation where required",
  "Visa or entry-related documents where required",
];

export default function CyprusPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-320px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="absolute right-[-300px] top-[700px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>
      <div className="relative z-10">
        {/* HERO */}
        <section>
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Study in Cyprus
              </div>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                YOUR NEXT
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  CHAPTER.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Discover study opportunities in Cyprus and get practical
                guidance from your first application to your journey abroad.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                Travel Friends helps students understand study options,
                application requirements, visa preparation, and the practical
                steps involved in preparing for Cyprus.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-blue-400"
                >
                  Start Your Cyprus Journey
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
                  Study guidance
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  Application support
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  Visa guidance
                </div>
              </div>
            </div>

            {/* Morphic Cyprus Visual */}
            <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-400/[0.07]" />

              <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/[0.11]" />

              <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-cyan-400/20" />

              <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="absolute h-[180px] w-[180px] rounded-full bg-cyan-400/20 blur-[70px]" />

              <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/80 shadow-[0_0_120px_rgba(37,99,235,0.25)] backdrop-blur-2xl">
                <div className="absolute inset-4 rounded-full border border-blue-400/10" />

                <div className="text-7xl">🇨🇾</div>

                <span className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
                  Cyprus
                </span>
              </div>

              <div className="absolute left-0 top-[8%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Study Options
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Explore your direction
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-[42%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Visa Guidance
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Understand the requirements
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
                      Get ready for Cyprus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Why Cyprus
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Study where
                <span className="block text-zinc-500">
                  education meets lifestyle.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Cyprus offers international students a combination of higher
                education opportunities, Mediterranean culture, and an
                international environment.
              </p>

              <p>
                Students can explore programs in areas such as business,
                technology, engineering, hospitality, finance, health sciences,
                and other disciplines.
              </p>

              <p>
                Choosing to study abroad is an important decision. Before
                applying, it is important to understand the institution,
                program, admission requirements, costs, visa or entry
                requirements, and practical arrangements.
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

        {/* BENEFITS */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              The Cyprus Experience
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Why consider
              <span className="block text-zinc-500">Cyprus?</span>
            </h2>
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

        {/* SUBJECTS */}
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
                  <span className="block text-zinc-500">field.</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Your suitable program depends on your academic background,
                  interests, eligibility, career plans, and the requirements of
                  the specific institution.
                </p>
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

        {/* APPLICATION + VISA */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden border border-blue-400/10 bg-blue-500/[0.035]">
            <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>

                <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  From application
                  <span className="block text-zinc-500">to your journey.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  Studying in Cyprus involves several stages, from selecting an
                  appropriate institution and program to preparing your
                  documents and completing the applicable visa or entry process.
                </p>

                <p className="mt-4 max-w-xl leading-8 text-zinc-500">
                  Travel Friends can help you understand the different stages
                  and prepare for the next step.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                >
                  Discuss Your Cyprus Plan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="border border-white/[0.07] bg-[#050c18]/70 p-7 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white">
                  We can help you understand
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "University and institution selection",
                    "Program and entry requirements",
                    "Application preparation",
                    "Academic documentation",
                    "Visa or entry preparation",
                    "Pre-departure planning",
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
                  Visa, immigration, admission, and entry requirements can
                  change. Requirements also depend on the applicant and the
                  institution. Always verify current requirements with the
                  relevant authorities.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Preparation
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Prepare your
                  <span className="block text-zinc-500">documents.</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Exact requirements vary depending on your institution,
                  program, nationality, and application route. Preparation may
                  include documents such as:
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

        {/* PROCESS */}
        <section
          id="process"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Your Journey
              <span className="h-px w-10 bg-blue-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Your Cyprus journey,
              <span className="block text-zinc-500">step by step.</span>
            </h2>
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

        {/* STUDENT LIFE */}
        <section className="border-y border-white/[0.06] bg-[#050b15]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Life in Cyprus
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Study.
                  <span className="block text-zinc-500">Live. Explore.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  Moving abroad is about more than a university classroom. You
                  will experience a different culture, environment, community,
                  and way of life.
                </p>

                <p className="mt-5 max-w-xl leading-8 text-zinc-500">
                  Cyprus offers an opportunity to combine international
                  education with the Mediterranean lifestyle and a rich cultural
                  environment.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Globe2,
                    title: "International Community",
                  },
                  {
                    icon: Sparkles,
                    title: "Mediterranean Lifestyle",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Student Experience",
                  },
                  {
                    icon: MapPin,
                    title: "Explore Cyprus",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="border border-white/[0.07] bg-white/[0.02] p-7"
                    >
                      <Icon className="h-5 w-5 text-blue-400" />

                      <h3 className="mt-7 font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
            <BadgeCheck className="mx-auto h-9 w-9 text-blue-400" />

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready to explore
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Cyprus?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              Tell us about your education plans and what you want to study.
              Let&apos;s discuss the options available for your Cyprus journey.
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

              <Link href="/cyprus" className="transition hover:text-blue-400">
                Cyprus
              </Link>

              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Destinations
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <span>🇸🇪 Sweden</span>
              <span>🇷🇺 Russia</span>
              <span className="text-blue-400">🇨🇾 Cyprus</span>
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
