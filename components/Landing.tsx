"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass, ListVideo, Images, ShieldCheck, CloudOff, RefreshCw, Star } from "lucide-react";
import { AndroidIcon, Footer, Header } from "@/components/Chrome";
import { SITE } from "@/lib/site";

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const PROVIDERS = ["Netflix", "Prime Video", "Disney+", "Apple TV+", "HBO Max", "Hulu", "Paramount+", "Peacock", "JioHotstar", "Crunchyroll"];

const FEATURES = [
  {
    icon: Compass,
    kicker: "Discover",
    title: "Trending, in theaters, and what's next.",
    text: "Filter by genre, language, rating and streaming service to find something you'll love fast.",
    chips: ["Trending", "In Theaters", "Upcoming"],
    img: "/screens/s4.png",
  },
  {
    icon: ListVideo,
    kicker: "Watchlists",
    title: "Your lists, on every device.",
    text: "Save favorites and build playlists. They work offline and sync when you sign in.",
    chips: ["Offline", "Cloud sync", "Guest mode"],
    img: "/screens/s5.png",
  },
  {
    icon: Images,
    kicker: "Details",
    title: "Everything about every title.",
    text: "Cast, trailers, reviews and full-screen HD backdrops you can save in one tap.",
    chips: ["Cast", "Trailers", "HD gallery"],
    img: "/screens/s6.png",
  },
];

function Phone({ src, className = "", priority = false }: { src: string; className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-zinc-800 bg-black shadow-2xl sm:rounded-[2.2rem] sm:border-[6px] ${className}`}>
      <Image src={src} alt="StreamOrbit app screen" width={600} height={1300} priority={priority} sizes="(max-width: 640px) 50vw, 300px" className="h-auto w-full" />
    </div>
  );
}

function PrimaryCTA({ label = "Download for Android" }: { label?: string }) {
  return (
    <a
      href={SITE.playUrl}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-black shadow-[0_0_30px_rgba(0,228,117,0.35)] transition hover:scale-[1.02] hover:bg-mint sm:w-auto"
    >
      <AndroidIcon /> {label}
    </a>
  );
}

export default function Landing() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="glow relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-xs text-mint sm:text-sm">
              <Sparkles size={14} /> The Ultimate Entertainment Companion
            </span>
            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Lost in the Streaming Void?{" "}
              <span className="text-gradient">Find Your Next Watch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base text-zinc-400 sm:text-lg lg:mx-0">
              Movies and shows from every platform, and where to stream them, in one place.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryCTA />
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-7 py-4 font-medium text-white transition hover:border-zinc-500 sm:w-auto"
              >
                See how it works <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500 lg:justify-start">
              <span className="flex items-center gap-1.5"><Star size={15} className="fill-brand text-brand" /> Free</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-brand" /> No sign-up needed</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto h-[400px] w-full max-w-[340px] sm:h-[500px] sm:max-w-[420px] lg:h-[580px] lg:max-w-[460px]"
          >
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px] sm:h-80 sm:w-80" />
            <Phone src="/screens/s2.png" className="absolute left-0 top-10 w-[44%] -rotate-[9deg] opacity-60" />
            <Phone src="/screens/s3.png" className="absolute right-0 top-10 w-[44%] rotate-[9deg] opacity-60" />
            <Phone src="/screens/s1.png" priority className="animate-floaty absolute left-1/2 top-0 z-10 w-[54%] -translate-x-1/2 shadow-[0_0_60px_rgba(0,228,117,0.25)]" />
          </motion.div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="border-y border-line bg-[#09090b] py-8">
        <p className="mb-5 px-5 text-center text-xs uppercase tracking-[0.2em] text-zinc-500">Where is it streaming? Now you know.</p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-10 sm:gap-14">
            {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-bold text-zinc-600 sm:text-2xl">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 md:gap-28">
          {FEATURES.map(({ icon: Icon, kicker, title, text, chips, img }, i) => (
            <motion.div
              key={kicker}
              {...fade}
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative w-[62%] max-w-[280px] shrink-0 sm:w-[46%] md:w-[36%]">
                <div className="absolute inset-0 -z-10 rounded-full bg-brand/15 blur-[80px]" />
                <Phone src={img} />
              </div>
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand">
                  <Icon size={16} /> {kicker}
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
                <p className="mx-auto mt-4 max-w-md text-zinc-400 sm:text-lg md:mx-0">{text}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                  {chips.map((c) => (
                    <span key={c} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm text-zinc-300">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="screens" className="pb-20 md:pb-28">
        <motion.h2 {...fade} className="mb-10 px-5 text-center text-3xl font-bold sm:text-4xl">
          Dark, fast, <span className="text-gradient">beautiful.</span>
        </motion.h2>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 [animation-duration:70s] hover:[animation-play-state:paused] sm:gap-6">
            {[0, 1].flatMap((k) =>
              Array.from({ length: 11 }, (_, i) => (
                <Phone key={`${k}-${i}`} src={`/screens/s${i + 1}.png`} className="w-36 shrink-0 shadow-none sm:w-48 lg:w-56" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* PRIVACY STRIP */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <motion.div {...fade} className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Guest mode", d: "Use it without an account" },
            { icon: CloudOff, t: "Works offline", d: "Your lists stay on your device" },
            { icon: RefreshCw, t: "Optional sync", d: "Sign in to sync your devices" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition hover:border-brand/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><Icon size={20} /></span>
              <div>
                <p className="font-semibold text-white">{t}</p>
                <p className="text-sm text-zinc-500">{d}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <motion.div
          {...fade}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-brand/30 bg-card px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-10 sm:py-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,228,117,0.2),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">Ready for movie night?</h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">Find your next favorite in seconds.</p>
            <div className="mt-8 flex justify-center">
              <PrimaryCTA label="Get StreamOrbit" />
            </div>
            <p className="mt-8 text-sm text-zinc-500">Made with passion by <span className="text-zinc-300">{SITE.developer}</span></p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
