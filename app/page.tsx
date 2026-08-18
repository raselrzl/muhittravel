import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  Compass,
  FileCheck2,
  Globe2,
  GraduationCap,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const destinations = [
  {
    country: "Sweden",
    flag: "🇸🇪",
    code: "SE",
    href: "/sweden",
    description:
      "Explore study opportunities and receive guidance throughout your student visa journey.",
    features: [
      "University guidance",
      "Student residence support",
      "Documentation assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=85",
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    code: "RU",
    href: "/russia",
    description:
      "Start your educational journey with guidance for admissions, visas, and travel preparation.",
    features: [
      "Admission guidance",
      "Student visa support",
      "Pre-departure assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
    code: "CY",
    href: "/cyprus",
    description:
      "Get support navigating study options, application requirements, and your move abroad.",
    features: [
      "College & university options",
      "Application support",
      "Travel preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Guidance through the student visa process, requirements, and application preparation.",
  },
  {
    icon: BookOpenCheck,
    title: "Admission Guidance",
    description:
      "Support finding suitable study opportunities and preparing your applications.",
  },
  {
    icon: FileCheck2,
    title: "Documentation",
    description:
      "Organized support to help you understand and prepare the required documents.",
  },
  {
    icon: Plane,
    title: "Travel Planning",
    description:
      "Practical pre-departure guidance to help make your journey smoother.",
  },
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "Speak with our team and get personalized guidance based on your plans.",
  },
  {
    icon: Globe2,
    title: "Journey Support",
    description:
      "From your first consultation to travel preparation, we help guide your next steps.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    description:
      "Share your preferred destination, study plans, and the support you are looking for.",
  },
  {
    number: "02",
    title: "Get Consultation",
    description:
      "We discuss your options and help you understand the next steps in your journey.",
  },
  {
    number: "03",
    title: "Prepare & Apply",
    description:
      "Get guidance with applications, documents, and the relevant process.",
  },
  {
    number: "04",
    title: "Travel Ready",
    description:
      "Prepare for your journey with practical pre-departure and travel guidance.",
  },
];

const reasons = [
  "Personalized guidance for every applicant",
  "Clear and organized process",
  "Support for Sweden, Russia & Cyprus",
  "Student-focused consultation",
  "Travel and pre-departure guidance",
  "Friendly support from start to journey",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[500px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/15 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.2)_45%,#030712_100%)]" />
      </div>

      <div className="relative z-10">
        {/* =========================================================
            HERO
        ========================================================== */}

        <section
          id="home"
          className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero content */}

            <div className="relative">
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Your Global Journey Begins Here
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                GO FURTHER.
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  STUDY BEYOND.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                Personalized student visa and travel guidance for ambitious
                students planning their next chapter in{" "}
                <span className="font-semibold text-white">
                  Sweden, Russia and Cyprus.
                </span>
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition duration-300 hover:bg-blue-400 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                >
                  Start Your Journey

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#destinations"
                  className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-200 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:text-white"
                >
                  Explore Destinations

                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  Personalized guidance
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-blue-400" />
                  Clear process
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  Student focused
                </div>
              </div>
            </div>

            {/* =====================================================
                AI MORPHIC HERO
            ====================================================== */}

            <div className="relative mx-auto flex min-h-[520px] w-full max-w-[600px] items-center justify-center lg:min-h-[650px]">
              <div className="absolute h-[420px] w-[420px] rounded-full border border-blue-400/[0.08] sm:h-[500px] sm:w-[500px]" />

              <div className="absolute h-[320px] w-[320px] rounded-full border border-blue-400/[0.12] sm:h-[400px] sm:w-[400px]" />

              <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-cyan-400/20 sm:h-[330px] sm:w-[330px]" />

              <div className="absolute h-[230px] w-[230px] rounded-full bg-blue-500/20 blur-[80px]" />

              <div className="absolute h-[150px] w-[150px] rounded-full bg-cyan-400/20 blur-[60px]" />

              {/* Center */}

              <div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/70 shadow-[0_0_100px_rgba(37,99,235,0.2)] backdrop-blur-2xl sm:h-56 sm:w-56">
                <div className="absolute inset-3 rounded-full border border-blue-400/10" />

                <Globe2 className="h-16 w-16 text-blue-400 sm:h-20 sm:w-20" />

                <span className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                  Explore
                </span>
              </div>

              {/* Sweden */}

              <div className="absolute left-0 top-[12%] z-20 w-[180px] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl sm:left-[3%] sm:w-[210px]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl">🇸🇪</span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400">
                    SE / 01
                  </span>
                </div>

                <h3 className="font-bold text-white">Sweden</h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Study. Explore. Build your future.
                </p>
              </div>

              {/* Russia */}

              <div className="absolute right-0 top-[42%] z-20 w-[180px] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl sm:right-0 sm:w-[210px]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl">🇷🇺</span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400">
                    RU / 02
                  </span>
                </div>

                <h3 className="font-bold text-white">Russia</h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Discover new educational opportunities.
                </p>
              </div>

              {/* Cyprus */}

              <div className="absolute bottom-[8%] left-[7%] z-20 w-[180px] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl sm:left-[12%] sm:w-[210px]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl">🇨🇾</span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400">
                    CY / 03
                  </span>
                </div>

                <h3 className="font-bold text-white">Cyprus</h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Begin your international journey.
                </p>
              </div>

              {/* Particles */}

              <div className="absolute right-[20%] top-[13%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_6px_rgba(103,232,249,0.4)]" />

              <div className="absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(96,165,250,0.4)]" />

              <div className="absolute left-[15%] top-[40%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </section>

        {/* =========================================================
            TRUST BAR
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.06] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
            <div className="flex items-center gap-4 py-6 sm:py-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <Globe2 className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">3 Destinations</p>
                <p className="text-sm text-zinc-500">
                  Sweden, Russia & Cyprus
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:justify-center sm:py-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">Student Focused</p>
                <p className="text-sm text-zinc-500">
                  Guidance for your education journey
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:justify-end sm:py-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <MessageCircle className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">Personal Support</p>
                <p className="text-sm text-zinc-500">
                  Start with a consultation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DESTINATIONS
        ========================================================== */}

        <section
          id="destinations"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Choose Your Destination
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Three countries.
              <span className="block text-zinc-500">One big future.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Explore study and travel opportunities and choose the destination
              that best fits your ambitions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.country}
                className="group relative min-h-[520px] overflow-hidden border border-white/[0.08] bg-[#07101f]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-45"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a13] via-[#07101f]/80 to-[#07101f]/20" />

                <div className="relative flex min-h-[520px] flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{destination.flag}</div>

                    <div className="border border-white/10 bg-black/20 px-3 py-2 text-[10px] font-bold tracking-[0.2em] text-blue-300 backdrop-blur-md">
                      {destination.code}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white">
                      {destination.country}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {destination.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {destination.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <Check className="h-4 w-4 shrink-0 text-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={destination.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-400 transition hover:gap-3"
                    >
                      Explore {destination.country}

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}

        <section
          id="services"
          className="border-y border-white/[0.06] bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Our Services
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  More than just a visa.
                </h2>

                <p className="mt-6 leading-8 text-zinc-400">
                  Your journey can involve many steps. We provide guidance to
                  help you understand the process and prepare for what comes
                  next.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 bg-blue-500 px-6 py-3.5 text-sm font-semibold transition hover:bg-blue-400"
                >
                  Talk to Us

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="group bg-[#060d19] p-7 transition hover:bg-[#08172c]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center bg-blue-500/10 transition group-hover:bg-blue-500/20">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>

                      <h3 className="mt-6 text-lg font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-zinc-500">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================== */}

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              How It Works
              <span className="h-px w-10 bg-blue-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A clearer path forward.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
              We help break your journey into understandable steps.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative border border-white/[0.08] bg-white/[0.02] p-7"
              >
                <div className="text-5xl font-black tracking-tight text-blue-500/20">
                  {step.number}
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 bg-[#030712] p-1 text-blue-400 lg:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================== */}

        <section
          id="about"
          className="border-y border-white/[0.06] bg-[#050b15]"
        >
          <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Why Travel Friends
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Your journey deserves
                <span className="block text-blue-400">a human touch.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                Moving abroad for study is a major decision. Travel Friends is
                designed to provide friendly, organized guidance while helping
                you understand the different stages of your journey.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-zinc-500">
                Whether you are exploring Sweden, Russia or Cyprus, we aim to
                make the process feel less overwhelming and more understandable.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3"
              >
                Learn more about Travel Friends
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={reason} className="bg-[#07101f] p-6">
                  <div className="mb-7 text-sm font-black text-blue-400">
                    0{index + 1}
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                    <p className="text-sm leading-6 text-zinc-300">
                      {reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/[0.08]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
            <Sparkles className="mx-auto h-7 w-7 text-blue-400" />

            <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Your next destination
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                could be closer than you think.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
              Take the first step. Tell us where you want to go and let&apos;s
              discuss your journey.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition hover:bg-blue-400 hover:shadow-[0_0_70px_rgba(59,130,246,0.45)]"
              >
                Book a Consultation

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}