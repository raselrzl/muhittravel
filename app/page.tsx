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
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  TicketCheck,
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
      "Guidance through student visa processes, admission requirements, documentation, and application preparation.",
    href: "#destinations",
  },
  {
    icon: TicketCheck,
    title: "Visit Visa",
    description:
      "Professional assistance with visit visa documentation, application preparation, and travel planning.",
    href: "/visit-visa",
  },
  {
    icon: TicketCheck,
    title: "Umrah Visa",
    description:
      "Support with Umrah visa processing and travel preparation for your spiritual journey to Saudi Arabia.",
    href: "/umrah",
  },
  {
    icon: BookOpenCheck,
    title: "Admission Guidance",
    description:
      "Explore suitable study opportunities and receive support preparing your education applications.",
    href: "#destinations",
  },
  {
    icon: FileCheck2,
    title: "Documentation",
    description:
      "Organized guidance to help you understand and prepare the documents required for your application.",
    href: "/contact",
  },
  {
    icon: Plane,
    title: "Travel Planning",
    description:
      "Practical travel and pre-departure guidance to help make your international journey smoother.",
    href: "/contact",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Plan",
    description:
      "Share your destination, travel purpose, study plans, or the type of visa you need.",
  },
  {
    number: "02",
    title: "Get Consultation",
    description:
      "We discuss your situation and help you understand the available options and next steps.",
  },
  {
    number: "03",
    title: "Prepare & Apply",
    description:
      "Get guidance with documentation, applications, and the relevant visa process.",
  },
  {
    number: "04",
    title: "Travel Ready",
    description:
      "Once your plans are ready, we help you prepare for your journey and next chapter.",
  },
];

const reasons = [
  "Personalized guidance for every applicant",
  "Student, visit & Umrah visa support",
  "Clear and organized process",
  "International destination guidance",
  "Documentation and application support",
  "Friendly support from consultation to travel",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 animate-pulse rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[500px] h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-500/10 blur-[140px] [animation-duration:7s]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] animate-pulse rounded-full bg-indigo-600/15 blur-[140px] [animation-duration:9s]" />

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
            {/* HERO CONTENT */}

            <div className="relative animate-[fadeIn_0.8s_ease-out]">
              <div className="mb-7 inline-flex animate-pulse items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 [animation-duration:4s]">
                <Sparkles className="h-3.5 w-3.5" />
                Your Global Journey Begins Here
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                GO FURTHER.
                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  LIVE BEYOND.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                Your trusted partner for{" "}
                <span className="font-semibold text-white">
                  student visas, visit visas, Umrah visas and international
                  travel.
                </span>{" "}
                Wherever your journey takes you, we help you move forward with
                confidence.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#services"
                  className="group flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:text-white"
                >
                  Explore Services
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  Human support
                </div>
              </div>
            </div>

            {/* =====================================================
                ANIMATED HERO
            ====================================================== */}

            <div className="relative mx-auto flex min-h-[520px] w-full max-w-[600px] items-center justify-center lg:min-h-[650px]">
              {/* Orbit */}

              <div className="absolute h-[420px] w-[420px] animate-[spin_35s_linear_infinite] rounded-full border border-blue-400/[0.08] sm:h-[500px] sm:w-[500px]" />

              <div className="absolute h-[320px] w-[320px] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-blue-400/[0.12] sm:h-[400px] sm:w-[400px]" />

              <div className="absolute h-[260px] w-[260px] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-cyan-400/20 sm:h-[330px] sm:w-[330px]" />

              <div className="absolute h-[230px] w-[230px] animate-pulse rounded-full bg-blue-500/20 blur-[80px]" />

              <div className="absolute h-[150px] w-[150px] animate-pulse rounded-full bg-cyan-400/20 blur-[60px] [animation-duration:3s]" />

              {/* CENTER */}

              <div className="relative z-10 flex h-48 w-48 animate-pulse flex-col items-center justify-center rounded-full border border-blue-300/20 bg-[#071226]/70 shadow-[0_0_100px_rgba(37,99,235,0.2)] backdrop-blur-2xl [animation-duration:4s] sm:h-56 sm:w-56">
                <div className="absolute inset-3 animate-[spin_20s_linear_infinite] rounded-full border border-blue-400/10" />

                <Globe2 className="h-16 w-16 animate-bounce text-blue-400 [animation-duration:3s] sm:h-20 sm:w-20" />

                <span className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                  Explore
                </span>
              </div>

              {/* SWEDEN */}

              <div className="absolute left-0 top-[12%] z-20 w-[180px] animate-[bounce_5s_ease-in-out_infinite] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl sm:left-[3%] sm:w-[210px]">
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

              {/* RUSSIA */}

              <div className="absolute right-0 top-[42%] z-20 w-[180px] animate-[bounce_6s_ease-in-out_infinite] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl [animation-delay:1s] sm:right-0 sm:w-[210px]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl">🇷🇺</span>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400">
                    RU / 02
                  </span>
                </div>

                <h3 className="font-bold text-white">Russia</h3>

                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  Discover new opportunities.
                </p>
              </div>

              {/* CYPRUS */}

              <div className="absolute bottom-[8%] left-[7%] z-20 w-[180px] animate-[bounce_7s_ease-in-out_infinite] border border-white/10 bg-[#091426]/75 p-4 backdrop-blur-xl [animation-delay:2s] sm:left-[12%] sm:w-[210px]">
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

              {/* PARTICLES */}

              <div className="absolute right-[20%] top-[13%] h-2 w-2 animate-ping rounded-full bg-cyan-300" />

              <div className="absolute bottom-[20%] right-[8%] h-2 w-2 animate-ping rounded-full bg-blue-400 [animation-delay:1s]" />

              <div className="absolute left-[15%] top-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
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
                <p className="font-semibold text-white">Global Services</p>
                <p className="text-sm text-zinc-500">
                  Study & travel destinations
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:justify-center sm:py-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">Student Support</p>
                <p className="text-sm text-zinc-500">
                  Education & visa guidance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:justify-end sm:py-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <HeartHandshake className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">Travel Assistance</p>
                <p className="text-sm text-zinc-500">
                  Visit & Umrah visa support
                </p>
              </div>
            </div>
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                What We Do
                <span className="h-px w-10 bg-blue-400" />
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                One place for your
                <span className="block text-blue-400">
                  international journey.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                Whether you are planning to study abroad, visit another country,
                or perform Umrah, our team helps you understand the process and
                prepare for your journey.
              </p>
            </div>

            <div className="mt-16 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group relative bg-[#060d19] p-8 transition duration-500 hover:-translate-y-1 hover:bg-[#08172c]"
                  >
                    <div className="absolute right-6 top-6 opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5 text-blue-400" />
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center bg-blue-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-400">
                      Learn More
                      <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            VISIT VISA FEATURE
        ========================================================== */}

        <section
          id="visit-visa"
          className="relative overflow-hidden border-b border-white/[0.06]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.10] via-transparent to-cyan-500/[0.06]" />

          <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Visit Visa Processing
              </div>

              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Planning a trip?
                <span className="block text-blue-400">
                  Let&apos;s make it easier.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                Planning to visit family, friends, attend an event, or explore a
                new destination? We provide guidance for visit visa applications
                and help you prepare the relevant documents.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Visit visa consultation",
                  "Application preparation",
                  "Document guidance",
                  "Travel preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <Check className="h-4 w-4 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/visit-visa"
                className="group mt-9 inline-flex items-center gap-3 bg-blue-500 px-7 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore Visit Visa Services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border border-white/[0.08] bg-[#07101f]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-35 transition duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1400&q=85)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#07101f]/40 to-transparent" />

              <div className="absolute left-6 top-6 flex h-14 w-14 animate-bounce items-center justify-center bg-blue-500/20 backdrop-blur-md [animation-duration:4s]">
                <Plane className="h-6 w-6 text-blue-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Travel With Confidence
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Your journey starts before the flight.
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">
                  Get organized guidance before submitting your application and
                  prepare properly for your trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            UMRAH FEATURE
        ========================================================== */}

        <section id="umrah" className="relative overflow-hidden bg-[#050b15]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.12),transparent_45%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-32">
            {/* IMAGE / VISUAL */}

            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-5 animate-pulse bg-blue-500/10 blur-[80px] [animation-duration:5s]" />

              <div className="relative min-h-[500px] overflow-hidden border border-white/[0.08] bg-[#07101f]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 transition duration-1000 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1400&q=85)",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />

                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-xl [animation-duration:4s]">
                  <TicketCheck className="h-12 w-12 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕋</span>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                      Umrah Journey
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold text-white">
                    A journey of faith.
                  </h3>
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div className="order-1 lg:order-2">
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Umrah Visa Processing
              </div>

              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Prepare for your
                <span className="block text-blue-400">spiritual journey.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                We understand that Umrah is more than a trip. It is a deeply
                meaningful journey. Our team provides practical assistance with
                Umrah visa processing and travel preparation.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FileCheck2,
                    title: "Visa Processing",
                    text: "Guidance for the Umrah visa process.",
                  },
                  {
                    icon: Plane,
                    title: "Travel Preparation",
                    text: "Support before your journey begins.",
                  },
                  {
                    icon: Compass,
                    title: "Journey Guidance",
                    text: "Practical information for travelers.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Personal Support",
                    text: "Friendly assistance throughout the process.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
                    >
                      <Icon className="h-5 w-5 text-blue-400 transition group-hover:scale-110" />

                      <h3 className="mt-4 font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-zinc-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/umrah"
                className="group mt-9 inline-flex items-center gap-3 bg-blue-500 px-7 py-4 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore Umrah Services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
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
              Study Destinations
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Three countries.
              <span className="block text-zinc-500">One big future.</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Explore study opportunities and international education options in
              destinations we support.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.country}
                className="group relative min-h-[520px] overflow-hidden border border-white/[0.08] bg-[#07101f] transition duration-500 hover:-translate-y-2 hover:border-blue-400/20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 transition duration-700 group-hover:scale-110 group-hover:opacity-45"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a13] via-[#07101f]/80 to-[#07101f]/20" />

                <div className="relative flex min-h-[520px] flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl transition duration-500 group-hover:scale-110">
                      {destination.flag}
                    </div>

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
            PROCESS
        ========================================================== */}

        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
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
                Whether it is education, travel or Umrah, we help break your
                journey into understandable steps.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative border border-white/[0.08] bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.04]"
                >
                  <div className="text-5xl font-black tracking-tight text-blue-500/20 transition duration-500 group-hover:text-blue-400/30">
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
                Travel Friends is built around a simple idea: international
                travel should feel understandable, organized and personal.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-zinc-500">
                From studying abroad to visiting another country or preparing
                for Umrah, we provide practical guidance and personal support
                throughout the process.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3"
              >
                Meet Our Team
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="group bg-[#07101f] p-6 transition duration-300 hover:bg-[#09182b]"
                >
                  <div className="mb-7 text-sm font-black text-blue-400">
                    0{index + 1}
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400 transition group-hover:scale-125" />

                    <p className="text-sm leading-6 text-zinc-300">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/[0.08]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/15 blur-[130px] [animation-duration:6s]" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
            <Sparkles className="mx-auto h-7 w-7 animate-pulse text-blue-400" />

            <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Wherever you want to go,
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                we&apos;ll help you get started.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
              Study abroad. Visit another country. Begin your Umrah journey.
              Tell us what you are planning and let&apos;s discuss your next
              step.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_0_70px_rgba(59,130,246,0.45)]"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/umrah"
                className="inline-flex h-14 items-center justify-center gap-3 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
              >
                Umrah Visa
                <TicketCheck className="h-4 w-4 text-blue-400" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
