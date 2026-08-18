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
    title: "Quality Education",
    description:
      "Explore internationally oriented study opportunities at Swedish universities and higher education institutions.",
  },
  {
    icon: Globe2,
    title: "International Environment",
    description:
      "Experience a multicultural environment where students from around the world come together to study and build their future.",
  },
  {
    icon: Sparkles,
    title: "Innovation & Creativity",
    description:
      "Sweden is widely associated with innovation, technology, sustainability, and creative thinking.",
  },
  {
    icon: HeartHandshake,
    title: "Student Experience",
    description:
      "Discover a different approach to learning, independence, collaboration, and life in a European country.",
  },
];

const subjects = [
  "Engineering & Technology",
  "Computer Science & IT",
  "Business & Management",
  "Life Sciences",
  "Environmental Studies",
  "Social Sciences",
  "Design & Architecture",
  "Arts & Humanities",
];

const process = [
  {
    number: "01",
    title: "Understand Your Goal",
    description:
      "Tell us about your education, preferred subject, budget, and plans for studying in Sweden.",
  },
  {
    number: "02",
    title: "Explore Study Options",
    description:
      "Review suitable universities, programs, entry requirements, and important application information.",
  },
  {
    number: "03",
    title: "Prepare Your Application",
    description:
      "Organize your academic documents and prepare the information required for your application.",
  },
  {
    number: "04",
    title: "Residence Permit",
    description:
      "After admission and the relevant conditions are met, prepare for the Swedish residence permit process.",
  },
  {
    number: "05",
    title: "Prepare for Sweden",
    description:
      "Get ready for your journey, accommodation, arrival, and practical life as an international student.",
  },
];

const documents = [
  "Valid passport",
  "Academic certificates",
  "Academic transcripts",
  "Proof of English proficiency where required",
  "University application documents",
  "Admission decision",
  "Financial/supporting documentation where required",
  "Residence permit documentation",
];

export default function SwedenPage() {
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
        <section className="relative">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Study in Sweden
              </div>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                DISCOVER
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  SWEDEN.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Take your next academic step in Sweden with guidance from
                choosing your study direction to preparing for your journey.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                Travel Friends helps students understand Swedish university
                applications, residence permit preparation, and the practical
                steps involved in moving abroad.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-blue-400"
                >
                  Start Your Sweden Journey
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
                  Residence permit guidance
                </div>
              </div>
            </div>

            {/* Morphic Sweden Visual */}
            <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-400/[0.07]" />

              <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/[0.11]" />

              <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-cyan-400/20" />

              <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[100px]" />

              <div className="absolute h-[180px] w-[180px] rounded-full bg-cyan-400/20 blur-[70px]" />

              <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/80 shadow-[0_0_120px_rgba(37,99,235,0.25)] backdrop-blur-2xl">
                <div className="absolute inset-4 rounded-full border border-blue-400/10" />

                <div className="text-7xl">🇸🇪</div>

                <span className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-200">
                  Sweden
                </span>
              </div>

              <div className="absolute left-0 top-[8%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Swedish Education
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Explore study options
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-[42%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-cyan-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Residence Permit
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Understand the process
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[8%] left-[8%] border border-white/10 bg-[#091426]/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-blue-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Prepare for Sweden
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Get ready for departure
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
                Why Sweden
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Study in a country
                <span className="block text-zinc-500">
                  built around ideas.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Sweden is known for its strong focus on innovation, research,
                sustainability, technology, and international collaboration.
              </p>

              <p>
                Swedish universities offer programs across many academic
                disciplines, with a significant number of programs taught in
                English.
              </p>

              <p>
                For international students, studying in Sweden can be an
                opportunity to experience a new education system, culture, and
                international environment.
              </p>

              <div className="border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-5">
                <p className="font-medium text-zinc-200">
                  Your Swedish journey starts with understanding the right
                  options for you.
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
              The Swedish Experience
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Why students
              <span className="block text-zinc-500">
                choose Sweden.
              </span>
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
                  <span className="block text-zinc-500">
                    field.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Your ideal program depends on your previous education,
                  interests, eligibility, career plans, and the specific
                  requirements of each university and program.
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

        {/* APPLICATION + RESIDENCE PERMIT */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden border border-blue-400/10 bg-blue-500/[0.035]">
            <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10">
                  <ShieldCheck className="h-6 w-6 text-blue-400" />
                </div>

                <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  From admission
                  <span className="block text-zinc-500">
                    to residence permit.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  Studying in Sweden involves several stages. Depending on
                  your circumstances, you may need to complete a university
                  application and, after admission, prepare for a Swedish
                  residence permit for studies.
                </p>

                <p className="mt-4 max-w-xl leading-8 text-zinc-500">
                  Travel Friends helps you understand the different stages and
                  organize your preparation.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                >
                  Discuss Your Sweden Plan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="border border-white/[0.07] bg-[#050c18]/70 p-7 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white">
                  We can help you understand
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    "University and program selection",
                    "Application preparation",
                    "Academic documentation",
                    "Admission-related requirements",
                    "Residence permit preparation",
                    "Pre-departure planning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                      <span className="text-sm leading-6 text-zinc-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/[0.07] pt-6 text-xs leading-6 text-zinc-600">
                  Residence permit requirements, fees, processing times, and
                  immigration decisions are determined by the relevant Swedish
                  authorities and can change.
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
                  <span className="block text-zinc-500">
                    application.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Requirements vary depending on the university, program,
                  nationality, and stage of the process. Depending on your
                  situation, preparation may include:
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
              Your path to Sweden,
              <span className="block text-zinc-500">
                step by step.
              </span>
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
                  Life in Sweden
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  More than
                  <span className="block text-zinc-500">
                    just studying.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  Moving to another country is also about learning how to live
                  independently, adapting to a new environment, meeting people,
                  and experiencing a different culture.
                </p>

                <p className="mt-5 max-w-xl leading-8 text-zinc-500">
                  Sweden offers students the opportunity to experience
                  Scandinavian culture while living in an internationally
                  connected society.
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
                    title: "Innovation Culture",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Independent Lifestyle",
                  },
                  {
                    icon: MapPin,
                    title: "Explore Scandinavia",
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
                Sweden?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              Tell us about your academic background and what you want to
              study. We&apos;ll help you understand the next steps.
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
              <Link
                href="/"
                className="transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/sweden"
                className="transition hover:text-blue-400"
              >
                Sweden
              </Link>

              <Link
                href="/russia"
                className="transition hover:text-blue-400"
              >
                Russia
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Destinations
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <span className="text-blue-400">🇸🇪 Sweden</span>
              <span>🇷🇺 Russia</span>
              <span>🇨🇾 Cyprus</span>
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