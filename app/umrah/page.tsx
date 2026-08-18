import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Compass,
  FileCheck2,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const preparation = [
  "Passport and personal information",
  "Visa application information",
  "Recent photograph where required",
  "Travel and accommodation information",
  "Required supporting documentation",
  "Pre-departure preparation",
];

const journey = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Tell us about your preferred travel dates and Umrah plans so we can explain the relevant process.",
  },
  {
    number: "02",
    title: "Document Preparation",
    description:
      "Prepare the information and documents required for your visa processing and travel arrangements.",
  },
  {
    number: "03",
    title: "Visa Processing",
    description:
      "We assist with understanding and preparing the relevant Umrah visa application process.",
  },
  {
    number: "04",
    title: "Travel Preparation",
    description:
      "Organize your journey and make sure you are prepared for departure.",
  },
  {
    number: "05",
    title: "Begin Your Journey",
    description:
      "Travel to Saudi Arabia and begin your Umrah journey with your preparations in place.",
  },
];

const support = [
  {
    icon: FileCheck2,
    title: "Visa Processing",
    description:
      "Guidance with the relevant Umrah visa process and documentation.",
  },
  {
    icon: Plane,
    title: "Travel Preparation",
    description:
      "Practical assistance before your departure to Saudi Arabia.",
  },
  {
    icon: Users,
    title: "Family Journey",
    description:
      "Guidance for individuals and families planning their Umrah journey.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Support",
    description:
      "Friendly support throughout the preparation process.",
  },
];

export default function OmrahPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02060d] text-white selection:bg-sky-500/40 selection:text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-350px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="absolute right-[-250px] top-[600px] h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,13,0.25)_50%,#02060d_100%)]" />
      </div>

      <div className="relative z-10">
        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <div className="relative">
              <div className="mb-7 inline-flex items-center gap-2 border border-sky-400/20 bg-sky-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                Umrah Visa Processing
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                BEGIN YOUR
                <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-500 to-sky-300 bg-clip-text text-transparent">
                  UMRAH.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                Prepare for your Umrah journey with visa processing guidance,
                document preparation, and practical travel support.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                Travel Friends helps individuals and families understand the
                relevant visa and travel preparation steps for their journey
                to Saudi Arabia.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-600 px-7 font-semibold text-white shadow-[0_0_40px_rgba(37,99,235,0.2)] transition duration-300 hover:bg-blue-500 hover:shadow-[0_0_55px_rgba(37,99,235,0.3)]"
                >
                  Start Your Umrah Journey

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="#process"
                  className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-300 transition hover:border-sky-400/30 hover:bg-sky-500/[0.04] hover:text-white"
                >
                  See the Process
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-400" />
                  Visa guidance
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-400" />
                  Document support
                </div>

                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-400" />
                  Travel preparation
                </div>
              </div>
            </div>

            {/* =====================================================
                HERO VISUAL
            ====================================================== */}

            <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center">
              <div className="absolute h-[450px] w-[450px] animate-[spin_30s_linear_infinite] rounded-full border border-sky-400/[0.07] motion-reduce:animate-none" />

              <div className="absolute h-[360px] w-[360px] rounded-full border border-sky-400/[0.11]" />

              <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-blue-400/20" />

              <div className="absolute h-[300px] w-[300px] animate-pulse rounded-full bg-blue-600/20 blur-[100px] motion-reduce:animate-none" />

              <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-sky-300/20 bg-[#07111f]/85 shadow-[0_0_120px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
                <div className="absolute inset-4 rounded-full border border-sky-400/10" />

                <div className="relative text-7xl leading-none">
                  <span role="img" aria-label="Kaaba">
                    🕋
                  </span>
                </div>

                <span className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-sky-200">
                  Umrah
                </span>
              </div>

              {/* Visa card */}

              <div className="absolute left-0 top-[8%] border border-white/10 bg-[#081321]/90 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="h-5 w-5 text-sky-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Visa Processing
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Understand the requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel card */}

              <div className="absolute right-0 top-[42%] border border-white/10 bg-[#081321]/90 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-sky-400" />

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

              {/* Support card */}

              <div className="absolute bottom-[8%] left-[8%] border border-white/10 bg-[#081321]/90 p-4 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <HeartHandshake className="h-5 w-5 text-sky-400" />

                  <div>
                    <p className="text-sm font-bold text-white">
                      Personal Support
                    </p>

                    <p className="text-[10px] text-zinc-500">
                      Friendly guidance
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative points */}

              <div
                aria-hidden="true"
                className="absolute right-[18%] top-[14%] h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_20px_6px_rgba(125,211,252,0.3)]"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(96,165,250,0.3)]"
              />

              <div
                aria-hidden="true"
                className="absolute left-[15%] top-[40%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                <span className="h-px w-10 bg-sky-400" />
                Your Sacred Journey
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Prepare with
                <span className="block text-zinc-500">confidence.</span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Umrah is a deeply meaningful journey. Good preparation can
                make the practical side of your travel easier to manage.
              </p>

              <p>
                Our team can help you understand the visa processing steps,
                organize your documentation, and prepare for your departure.
              </p>

              <div className="border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-5">
                <p className="font-medium text-zinc-200">
                  Let us help you prepare for the journey ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              <span className="h-px w-10 bg-sky-400" />
              How We Help
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Support for your
              <span className="block text-zinc-500">
                Umrah preparation.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-500">
              Practical guidance for the important steps involved in preparing
              for your journey.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {support.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#07101b] p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#091725]"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-sky-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-sky-500/20">
                    <Icon className="h-5 w-5 text-sky-400" />
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            DOCUMENTS
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-[#040a12]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  <span className="h-px w-10 bg-sky-400" />
                  Preparation
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Prepare your
                  <span className="block text-zinc-500">documents.</span>
                </h2>

                <p className="mt-6 leading-8 text-zinc-500">
                  Requirements can vary depending on the applicant and the
                  current Saudi Arabian visa process. We can help you
                  understand what information and documentation may be
                  required.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {preparation.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 border border-white/[0.07] bg-[#07101b] p-5 transition duration-300 hover:border-sky-400/20 hover:bg-sky-500/[0.03]"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-sky-500/10">
                      <Check className="h-3.5 w-3.5 text-sky-400" />
                    </div>

                    <span className="text-sm leading-6 text-zinc-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================== */}

        <section
          id="process"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              <span className="h-px w-10 bg-sky-400" />
              Your Journey
              <span className="h-px w-10 bg-sky-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              From preparation
              <span className="block text-zinc-500">to departure.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-500">
              A simple process designed to help you understand each stage of
              your Umrah preparation.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-5">
            {journey.map((step) => (
              <div
                key={step.number}
                className="group bg-[#07101b] p-7 transition duration-500 hover:bg-[#091725]"
              >
                <div className="text-4xl font-black text-blue-500/20 transition group-hover:text-blue-500/40">
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

        {/* =========================================================
            IMPORTANT NOTE
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-24">
            <ShieldCheck className="mx-auto h-8 w-8 text-sky-400" />

            <h2 className="mt-6 text-3xl font-bold text-white">
              Visa requirements can change.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-500">
              Umrah visa eligibility, documentation, fees, processing
              procedures, travel requirements, and entry conditions may change
              according to the relevant Saudi Arabian authorities and current
              regulations. We help you understand the process, but visa
              approval is determined by the relevant authorities.
            </p>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}

        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
            <BadgeCheck className="mx-auto h-9 w-9 text-sky-400" />

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready for your
              <span className="block bg-gradient-to-r from-sky-300 via-blue-500 to-sky-300 bg-clip-text text-transparent">
                Umrah journey?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              Tell us about your travel plans and we&apos;ll help you
              understand the next steps for your Umrah visa preparation.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-3 bg-blue-600 px-8 font-semibold text-white shadow-[0_0_50px_rgba(37,99,235,0.2)] transition hover:bg-blue-500 hover:shadow-[0_0_65px_rgba(37,99,235,0.3)]"
              >
                Start Your Umrah Journey

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-300 transition hover:border-sky-400/30 hover:bg-sky-500/[0.03] hover:text-white"
              >
                Explore Other Services

                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="relative z-10 border-t border-white/[0.06] bg-[#01040a]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-sky-500/10">
                <Compass className="h-5 w-5 text-sky-400" />
              </div>

              <span className="text-xl font-bold">
                Travel<span className="text-sky-400">Friends</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Student visa, travel, visit visa, and Umrah journey guidance for
              people planning their next international experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <Link
                href="/"
                className="transition hover:text-sky-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-sky-400"
              >
                About
              </Link>

              <Link
                href="/sweden"
                className="transition hover:text-sky-400"
              >
                Sweden
              </Link>

              <Link
                href="/russia"
                className="transition hover:text-sky-400"
              >
                Russia
              </Link>

              <Link
                href="/omrah"
                className="transition hover:text-sky-400"
              >
                Umrah
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-sky-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <span>Student Visa</span>
              <span>Visit Visa</span>
              <span>Umrah Visa</span>
              <span>Travel Planning</span>
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
              <span>Study · Travel · Umrah</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}