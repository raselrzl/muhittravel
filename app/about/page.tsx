import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Globe2,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";

const team = [
  {
    name: "M A Muhit",
    role: "CEO",
    country: "Sweden",
    countryCode: "🇸🇪",
    email: "muhit@mkworld.org",
    image: "/muhit.jpeg",
    description:
      "Leading the vision of MK World and helping students and travelers connect with opportunities around the world.",
  },
  {
    name: "Tahfim Rahman",
    role: "Chief Consultant",
    country: "Russia",
    countryCode: "🇷🇺",
    email: "tahfim@mkworld.org",
    image: null,
    description:
      "Helping clients understand their options and making international education and travel easier to navigate.",
  },
  {
    name: "Md Ariful Islam",
    role: "International Consultant",
    country: "Cyprus",
    countryCode: "🇨🇾",
    email: "ariful@mkworld.org",
    image: "/arifulislam.jpeg",
    description:
      "Supporting students with practical guidance and connecting them with opportunities in different destinations.",
  },
  {
    name: "Taj Uddin",
    role: "Travel & Education Consultant",
    country: "Bangladesh",
    countryCode: "🇧🇩",
    email: "tajuddin@mkworld.org",
    image: "/tajuddin.png",
    description:
      "Working closely with students and families to make the journey from planning to departure more comfortable.",
  },
  {
    name: "Tauhidur Rahman",
    role: "Travel & Education Consultant",
    country: "Bangladesh",
    countryCode: "🇧🇩",
    email: "tauhid@mkworld.org",
    image: "/taohid.jpeg",
    description:
      "Working closely with students and families to make international education and travel easier to understand.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "People First",
    description:
      "Every international journey is personal. We listen first, understand your situation, and then help you find the right direction.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "International Perspective",
    description:
      "Our team is connected across different countries, giving us local knowledge and a broader understanding of international opportunities.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Simple Communication",
    description:
      "International processes can be complicated. We explain things clearly so you always understand what comes next.",
  },
  {
    icon: Compass,
    number: "04",
    title: "Guidance That Matters",
    description:
      "From choosing a destination to preparing for departure, we focus on practical guidance that helps you move forward.",
  },
];

const destinations = [
  {
    flag: "🇸🇪",
    name: "Sweden",
    description: "Education, opportunities & European experience",
  },
  {
    flag: "🇷🇺",
    name: "Russia",
    description: "Study opportunities & international education",
  },
  {
    flag: "🇨🇾",
    name: "Cyprus",
    description: "Education, travel & Mediterranean experience",
  },
  {
    flag: "🇧🇩",
    name: "Bangladesh",
    description: "Our connection to students and families",
  },
];

const helpItems = [
  "Personal communication",
  "International team",
  "Destination-focused guidance",
  "Application and document support",
  "Pre-departure preparation",
  "Friendly, practical advice",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02050b] text-white selection:bg-blue-500/40 selection:text-white">
      {/* GLOBAL ANIMATED BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] animate-pulse rounded-full bg-blue-600/[0.08] blur-[150px]" />

        <div
          className="absolute right-[-120px] top-[35%] h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/[0.06] blur-[160px]"
          style={{ animationDelay: "1.5s" }}
        />

        <div
          className="absolute bottom-[-150px] left-[15%] h-[450px] w-[450px] animate-pulse rounded-full bg-indigo-600/[0.06] blur-[160px]"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 lg:px-10 lg:pb-36 lg:pt-36">
            <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-8 inline-flex animate-[fadeInUp_0.7s_ease-out_both] items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  About MK World
                </div>

                <h1 className="animate-[fadeInUp_0.8s_ease-out_0.1s_both] text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[92px]">
                  PEOPLE
                  <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                    WITHOUT
                  </span>
                  <span className="block text-zinc-300">BORDERS.</span>
                </h1>

                <p className="mt-8 max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-base leading-8 text-zinc-400 sm:text-lg">
                  MK World connects people with international education, travel,
                  and opportunities through personal guidance and experience.
                </p>

                <p className="mt-5 max-w-xl animate-[fadeInUp_0.8s_ease-out_0.3s_both] text-sm leading-7 text-zinc-600">
                  Different countries. Different experiences. One team helping
                  you understand what comes next.
                </p>

                <div className="mt-9 flex animate-[fadeInUp_0.8s_ease-out_0.4s_both] flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_45px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]"
                  >
                    Talk to Our Team
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#team"
                    className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.025] px-7 font-semibold text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:text-white"
                  >
                    Meet the Team
                  </a>
                </div>
              </div>

              {/* HERO VISUAL */}
              <div className="relative hidden min-h-[460px] lg:block">
                <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-blue-400/10" />

                <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-blue-400/20" />

                <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-[float_5s_ease-in-out_infinite] items-center justify-center border border-blue-400/20 bg-[#07101f]/90 shadow-[0_0_100px_rgba(59,130,246,0.15)] backdrop-blur-xl">
                  <Compass className="h-16 w-16 text-blue-400" />
                </div>

                <div className="absolute left-5 top-12 flex items-center gap-3 border border-white/[0.08] bg-[#07101f]/80 px-4 py-3 backdrop-blur-xl animate-[float_5s_ease-in-out_infinite]">
                  <span className="text-2xl">🇸🇪</span>
                  <div>
                    <p className="text-xs font-bold text-white">Sweden</p>
                    <p className="text-[10px] text-zinc-500">European Team</p>
                  </div>
                </div>

                <div className="absolute right-0 top-36 flex items-center gap-3 border border-white/[0.08] bg-[#07101f]/80 px-4 py-3 backdrop-blur-xl animate-[float_5s_ease-in-out_1s_infinite]">
                  <span className="text-2xl">🇷🇺</span>
                  <div>
                    <p className="text-xs font-bold text-white">Russia</p>
                    <p className="text-[10px] text-zinc-500">Consulting</p>
                  </div>
                </div>

                <div className="absolute bottom-24 left-14 flex items-center gap-3 border border-white/[0.08] bg-[#07101f]/80 px-4 py-3 backdrop-blur-xl animate-[float_5s_ease-in-out_2s_infinite]">
                  <span className="text-2xl">🇨🇾</span>
                  <div>
                    <p className="text-xs font-bold text-white">Cyprus</p>
                    <p className="text-[10px] text-zinc-500">International</p>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 flex items-center gap-3 border border-white/[0.08] bg-[#07101f]/80 px-4 py-3 backdrop-blur-xl animate-[float_5s_ease-in-out_3s_infinite]">
                  <span className="text-2xl">🇧🇩</span>
                  <div>
                    <p className="text-xs font-bold text-white">Bangladesh</p>
                    <p className="text-[10px] text-zinc-500">Home Connection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        </section>

        {/* STORY */}
        <section className="border-y border-white/[0.06] bg-white/[0.012]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Our Story
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                One team.
                <span className="block text-zinc-600">
                  Different countries.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                Moving to another country can feel exciting and overwhelming at
                the same time. There are universities to explore, documents to
                prepare, applications to understand, and countless practical
                questions.
              </p>

              <p>
                MK World was created around people rather than paperwork. Our
                team is connected across different parts of the world, allowing
                us to bring different perspectives and experiences to every
                conversation.
              </p>

              <p>
                Whether you are planning to study in Sweden, explore Russia,
                consider Cyprus, or simply looking for international
                opportunities, we want to make the journey easier to understand.
              </p>

              <div className="relative overflow-hidden border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-6">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl" />

                <p className="relative font-medium text-zinc-200">
                  Different countries. Different experiences. One friendly team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section
          id="team"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Meet Our People
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                The people
                <span className="block text-zinc-600">behind MK World.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => (
              <div
                key={`${person.name}-${person.role}`}
                className="group relative overflow-hidden border border-white/[0.07] bg-[#07101f] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                style={{
                  animation: "fadeInUp 0.7s ease-out both",
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* TOP ACCENT */}
                <div className="absolute left-0 right-0 top-0 z-20 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* IMAGE */}
                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#0a1424]">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale-[10%] transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0c1b32] via-[#081426] to-[#050b15]">
                      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/[0.08] blur-3xl" />

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]" />

                      <div className="relative flex h-full flex-col items-center justify-center">
                        <div className="flex h-28 w-28 items-center justify-center border border-blue-400/20 bg-blue-500/[0.07] shadow-[0_0_60px_rgba(59,130,246,0.1)] transition duration-500 group-hover:scale-110 group-hover:border-blue-400/40">
                          <Users className="h-12 w-12 text-blue-400/70" />
                        </div>

                        <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                          Photo coming soon
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-transparent to-transparent opacity-90" />

                  {/* COUNTRY */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/10 bg-black/40 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl">
                    <span className="text-base">{person.countryCode}</span>
                    <span>{person.country}</span>
                  </div>

                  {/* ROLE */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                      {person.role}
                    </div>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {person.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <a
                      href={`mailto:${person.email}`}
                      className="group/email flex items-center justify-between text-xs font-semibold text-zinc-500 transition hover:text-blue-400"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5" />
                        {person.email}
                      </span>

                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/email:translate-x-0 group-hover/email:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="border-y border-white/[0.06] bg-[#050a13]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Connected Globally
                </div>

                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Our team is
                  <span className="block text-zinc-600">already abroad.</span>
                </h2>

                <p className="mt-7 max-w-xl leading-8 text-zinc-500">
                  Being connected across countries gives us something more than
                  a destination list. We understand that every country has its
                  own culture, systems, opportunities, and practical realities.
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-medium text-zinc-500">
                  <Globe2 className="h-5 w-5 text-blue-400" />
                  <span>Sweden · Russia · Cyprus · Bangladesh</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.name}
                    className="group relative overflow-hidden border border-white/[0.07] bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-500/[0.035]"
                    style={{
                      animation: "fadeInUp 0.7s ease-out both",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-blue-500/[0.05] blur-2xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

                    <div className="relative">
                      <div className="text-4xl transition duration-300 group-hover:scale-110">
                        {destination.flag}
                      </div>

                      <h3 className="mt-7 text-xl font-bold text-white">
                        {destination.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {destination.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-400">
                        <MapPin className="h-3.5 w-3.5" />
                        Team connection
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              What We Believe
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Friendly by nature.
              <span className="block text-zinc-600">
                International by experience.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden border border-white/[0.07] bg-[#07101f] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-400/25"
                  style={{
                    animation: "fadeInUp 0.7s ease-out both",
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="absolute right-0 top-0 text-7xl font-black text-white/[0.025]">
                    {value.number}
                  </div>

                  <div className="relative flex h-12 w-12 items-center justify-center bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW WE HELP */}
        <section className="border-y border-white/[0.06] bg-white/[0.012]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Why MK World
                </div>

                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  You are not
                  <span className="block text-zinc-600">doing it alone.</span>
                </h2>

                <p className="mt-7 max-w-xl leading-8 text-zinc-400">
                  From your first question to your departure day, we want you to
                  have someone you can talk to. Our role is to make complicated
                  international processes feel clearer and more approachable.
                </p>

                <Link
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-3 bg-blue-500 px-7 py-4 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
                >
                  Talk With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-3">
                {helpItems.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:translate-x-2 hover:border-blue-400/20 hover:bg-blue-500/[0.025]"
                    style={{
                      animation: "fadeInRight 0.6s ease-out both",
                      animationDelay: `${index * 80}ms`,
                    }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-500/10 transition group-hover:bg-blue-500/20">
                      <BadgeCheck className="h-4 w-4 text-blue-400" />
                    </div>

                    <span className="text-sm font-medium text-zinc-300">
                      {item}
                    </span>

                    <ArrowRight className="ml-auto h-4 w-4 text-zinc-700 transition group-hover:translate-x-1 group-hover:text-blue-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 bg-blue-600/[0.035]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/[0.08] blur-[130px]" />

          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-36">
            <div className="mx-auto flex h-16 w-16 animate-[float_4s_ease-in-out_infinite] items-center justify-center border border-blue-400/20 bg-blue-500/10">
              <Users className="h-7 w-7 text-blue-400" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Your journey is
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                our conversation.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-500">
              Have a question about studying abroad, choosing a destination, or
              preparing for your next journey? Talk to our international team.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Contact MK World
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-white"
              >
                Explore Destinations
                <Plane className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-[#02050b]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <Compass className="h-5 w-5 text-blue-400" />
              </div>

              <span className="text-xl font-bold">
                MK <span className="text-blue-400">World</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
              Student visa and travel guidance for people planning their next
              educational journey abroad.
            </p>

            <a
              href="mailto:support@mkworld.org"
              className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-blue-400"
            >
              <Mail className="h-3.5 w-3.5" />
              support@mkworld.org
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-600">
              <Link href="/" className="transition hover:text-blue-400">
                Home
              </Link>

              <Link href="/about" className="text-blue-400">
                About
              </Link>

              <Link href="/sweden" className="transition hover:text-blue-400">
                Sweden
              </Link>

              <Link href="/russia" className="transition hover:text-blue-400">
                Russia
              </Link>

              <Link href="/contact" className="transition hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Destinations
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-600">
              <span>🇸🇪 Sweden</span>
              <span>🇷🇺 Russia</span>
              <span>🇨🇾 Cyprus</span>
              <span>🇧🇩 Bangladesh</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>© {new Date().getFullYear()} MK World. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <Globe2 className="h-3 w-3" />
              <span>Sweden · Russia · Cyprus · Bangladesh</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
