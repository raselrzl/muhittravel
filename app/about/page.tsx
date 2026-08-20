import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Globe2,
  HeartHandshake,
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
    image: "/muhit.jpeg",
    description:
      "Leading the vision of the company and helping students and travelers connect with opportunities around the world.",
  },
  {
    name: "Your Name",
    role: "Chief Consultant",
    country: "Russia",
    countryCode: "🇷🇺",
    image: "/team/consultant-1.jpg",
    description:
      "Helping clients understand their options and making international education and travel easier to navigate.",
  },
  {
    name: "Md Ariful Islam",
    role: "International Consultant",
    country: "Cyprus",
    countryCode: "🇨🇾",
    image: "/arifulislam.jpeg",
    description:
      "Supporting students with practical guidance and connecting them with opportunities in different destinations.",
  },
  {
    name: "Sheikh Karima",
    role: "Travel & Education Consultant",
    /*    country: "Bangladesh",
    countryCode: "🇧🇩", */ /* 
    image: "/team/consultant-3.jpg", */
    description:
      "Working closely with students and families to make the journey from planning to departure more comfortable.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "People First",
    description:
      "We believe every international journey is personal. We listen first and then help people find the right direction.",
  },
  {
    icon: Globe2,
    title: "International Perspective",
    description:
      "Our team lives and works across different countries, giving us a broader understanding of international education and travel.",
  },
  {
    icon: MessageCircle,
    title: "Simple Communication",
    description:
      "International processes can be complicated. Our goal is to explain things clearly and make every step easier to understand.",
  },
  {
    icon: Compass,
    title: "Guidance That Matters",
    description:
      "From choosing a destination to preparing for departure, we focus on practical guidance that helps people move forward.",
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

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white selection:bg-blue-500/40 selection:text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-[-350px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="absolute right-[-300px] top-[900px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 lg:px-10 lg:pb-32 lg:pt-32">
            <div className="max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                About MK World
              </div>

              <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                PEOPLE
                <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  WITHOUT BORDERS.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                MK World is built around a simple idea: international education
                and travel should feel more personal, understandable, and
                connected.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
                Our team is connected across different countries and
                backgrounds, bringing together local knowledge, international
                experience, and a friendly approach to helping people plan their
                next journey.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-7 font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-blue-400"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#team"
                  className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-7 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-white"
                >
                  Meet the Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL INTRO */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                <span className="h-px w-10 bg-blue-400" />
                Our Story
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                One team.
                <span className="block text-zinc-500">
                  Different countries.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400">
              <p>
                We understand that moving to another country can feel exciting
                and overwhelming at the same time. There are universities to
                explore, documents to prepare, applications to understand, and
                countless practical questions.
              </p>

              <p>
                That is why MK World was created around people rather than
                paperwork. Our team members are based in different parts of the
                world, allowing us to bring different perspectives and
                experiences to every conversation.
              </p>

              <p>
                Whether you are planning to study in Sweden, explore Russia,
                consider Cyprus, or simply looking for international
                opportunities, we want to make the journey easier to understand.
              </p>

              <div className="border-l-2 border-blue-500 bg-blue-500/[0.04] px-6 py-5">
                <p className="font-medium text-zinc-200">
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
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              Meet Our People
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The people behind
              <span className="block text-zinc-500">MK World.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-zinc-500">
              Our team brings together people living in different countries,
              with different experiences and perspectives, but with the same
              goal: helping people move confidently toward their next
              international journey.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div
                key={`${person.name}-${person.role}`}
                className="group overflow-hidden border border-white/[0.07] bg-[#07101f] transition duration-300 hover:border-blue-400/20 hover:bg-[#09172a]"
              >
                {/* IMAGE / FALLBACK */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#0b1627]">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover grayscale-[15%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0b1627] via-[#0a1424] to-[#07101f]">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.08]">
                        <Users className="h-10 w-10 text-blue-400/70" />
                      </div>

                      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                        Photo coming soon
                      </span>
                    </div>
                  )}

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-transparent to-transparent" />

                  {/* Country */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/10 bg-black/40 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl">
                    <span className="text-base">{person.countryCode}</span>
                    <span>{person.country}</span>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {person.role}
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {person.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="border-y border-white/[0.06] bg-[#050b15]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Connected Globally
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Our team is
                  <span className="block text-zinc-500">already abroad.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-500">
                  Being connected across countries gives us something more than
                  a destination list. We understand that every country has its
                  own culture, systems, opportunities, and practical realities.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {destinations.map((destination) => (
                  <div
                    key={destination.name}
                    className="border border-white/[0.07] bg-white/[0.02] p-7 transition hover:border-blue-400/20 hover:bg-blue-500/[0.03]"
                  >
                    <div className="text-4xl">{destination.flag}</div>

                    <h3 className="mt-6 text-xl font-bold text-white">
                      {destination.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {destination.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-400">
                      <MapPin className="h-3.5 w-3.5" />
                      Team connection
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              <span className="h-px w-10 bg-blue-400" />
              What We Believe
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Friendly by nature.
              <span className="block text-zinc-500">
                International by experience.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
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
        </section>

        {/* HOW WE HELP */}
        <section className="border-y border-white/[0.06] bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-10 bg-blue-400" />
                  Why MK World
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  You are not
                  <span className="block text-zinc-500">doing it alone.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  From your first question to your departure day, we want you to
                  have someone you can talk to. Our role is to make complicated
                  international processes feel clearer and more approachable.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                >
                  Talk With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  "Personal communication",
                  "International team",
                  "Destination-focused guidance",
                  "Application and document support",
                  "Pre-departure preparation",
                  "Friendly, practical advice",
                ].map((item) => (
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
            <Users className="mx-auto h-9 w-9 text-blue-400" />

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Your journey is
              <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                our conversation.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
              Have a question about studying abroad, choosing a destination, or
              preparing for your next journey? Talk to our international team.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-14 items-center justify-center gap-3 bg-blue-500 px-8 font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
              >
                Contact MK World
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-8 font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-white"
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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-500/10">
                <Compass className="h-5 w-5 text-blue-400" />
              </div>

              <span className="text-xl font-bold">
                MK <span className="text-blue-400">World</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Student visa and travel guidance for people planning their next
              educational journey abroad.
            </p>

            <a
              href="mailto:support@mkworld.org"
              className="mt-4 inline-block text-sm text-zinc-500 transition hover:text-blue-400"
            >
              support@mkworld.org
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
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
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Destinations
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-500">
              <span>🇸🇪 Sweden</span>
              <span>🇷🇺 Russia</span>
              <span>🇨🇾 Cyprus</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>© {new Date().getFullYear()} MK World. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <Globe2 className="h-3 w-3" />
              <span>Sweden · Russia · Cyprus · Bangladesh</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
