"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles, Compass, SlidersHorizontal, ListVideo, Images, Download, CloudOff, RefreshCw,
  ShieldCheck, Star, Heart, ArrowRight, Film, Tv, Database, Cloud,
} from "lucide-react";
import { AndroidIcon, Footer, Header } from "@/components/Chrome";
import { SITE } from "@/lib/site";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const PROVIDERS = ["Netflix", "Prime Video", "Disney+", "Apple TV+", "HBO Max", "Hulu", "Paramount+", "Peacock", "JioHotstar", "Crunchyroll"];

const PILLARS = [
  { icon: Compass, title: "Unlimited Discovery & In Theaters", text: "Explore Trending Today, In Theaters and Upcoming releases with dynamic filters for genre, language, provider and year.", span: "md:col-span-2" },
  { icon: SlidersHorizontal, title: "Smart Recommendations & Filtering", text: "Discover by mood, popularity, minimum rating or a specific provider catalog, so you never run out of options.", span: "" },
  { icon: ListVideo, title: "Personal Watchlists & Playlists", text: "Build custom lists and toggle favorites, stored locally first and synced to the cloud in real time.", span: "" },
  { icon: Images, title: "Cinematic Details & HD Downloader", text: "Cast and director filmographies, user reviews, official trailers and full-screen backdrop galleries with 1-tap image downloads.", span: "md:col-span-2" },
];

type Item = { t: string; y: number; r: number; g: string[]; c: string };
const CATALOG: Record<"Movies" | "TV Series", Item[]> = {
  Movies: [
    { t: "Orbital Drift", y: 2025, r: 8.4, g: ["Sci-Fi", "Thriller"], c: "from-emerald-500/40 to-cyan-900/60" },
    { t: "Iron Horizon", y: 2026, r: 7.6, g: ["Action", "Sci-Fi"], c: "from-orange-500/40 to-red-900/60" },
    { t: "The Quiet Year", y: 2024, r: 8.1, g: ["Drama"], c: "from-amber-400/30 to-stone-900/60" },
    { t: "Night Signal", y: 2025, r: 7.3, g: ["Thriller"], c: "from-indigo-500/40 to-slate-900/60" },
    { t: "Last Run", y: 2026, r: 6.9, g: ["Action"], c: "from-rose-500/40 to-zinc-900/60" },
    { t: "Paper Lanterns", y: 2023, r: 7.9, g: ["Drama"], c: "from-yellow-300/30 to-orange-900/60" },
  ],
  "TV Series": [
    { t: "Deep Relay", y: 2025, r: 8.7, g: ["Sci-Fi", "Drama"], c: "from-teal-400/40 to-blue-900/60" },
    { t: "Undercurrent", y: 2024, r: 8.2, g: ["Thriller", "Drama"], c: "from-sky-500/40 to-slate-900/60" },
    { t: "Strikeforce", y: 2026, r: 7.4, g: ["Action"], c: "from-red-500/40 to-neutral-900/60" },
    { t: "Glass City", y: 2025, r: 7.8, g: ["Sci-Fi"], c: "from-fuchsia-500/40 to-violet-900/60" },
    { t: "Harbor Lights", y: 2023, r: 8.0, g: ["Drama"], c: "from-lime-400/30 to-green-900/60" },
    { t: "Cold Case Files", y: 2024, r: 7.5, g: ["Thriller"], c: "from-slate-400/40 to-zinc-900/60" },
  ],
};
const GENRES = ["All", "Sci-Fi", "Action", "Drama", "Thriller"];

function Phone({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2.2rem] border-[6px] border-zinc-800 bg-black shadow-[0_0_60px_rgba(0,228,117,0.18)] ${className}`}>
      <Image src={src} alt="StreamOrbit app screen" width={600} height={1300} className="h-auto w-full" />
    </div>
  );
}

function Showcase() {
  const [tab, setTab] = useState<"Movies" | "TV Series">("Movies");
  const [genre, setGenre] = useState("All");
  const [liked, setLiked] = useState<string[]>([]);
  const items = CATALOG[tab].filter((i) => genre === "All" || i.g.includes(genre));
  return (
    <section id="discovery" className="px-6 py-24">
      <motion.div {...fade} className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-5xl">Try the discovery feed</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">Switch catalogs and tap a genre, just like in the app.</p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex rounded-full border border-line bg-card p-1">
            {(["Movies", "TV Series"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${tab === t ? "bg-brand text-black" : "text-zinc-400 hover:text-white"}`}>
                {t === "Movies" ? <Film size={16} /> : <Tv size={16} />} {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {GENRES.map((g) => (
              <button key={g} onClick={() => setGenre(g)} className={`rounded-full border px-4 py-1.5 text-sm transition ${genre === g ? "border-brand bg-brand/10 text-brand" : "border-line text-zinc-400 hover:border-zinc-500"}`}>
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((i) => (
            <motion.div layout key={tab + i.t} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="group">
              <div className={`relative aspect-[2/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${i.c} transition duration-300 group-hover:-translate-y-1 group-hover:border-brand/60`}>
                <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-xs font-semibold text-white">
                  <Star size={11} className="fill-brand text-brand" /> {i.r}
                </span>
                <button onClick={() => setLiked((l) => (l.includes(i.t) ? l.filter((x) => x !== i.t) : [...l, i.t]))} className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5" aria-label="Add to watchlist">
                  <Heart size={13} className={liked.includes(i.t) ? "fill-brand text-brand" : "text-white"} />
                </button>
                <span className="absolute inset-x-3 bottom-3 text-lg font-bold leading-tight text-white/90">{i.t}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-white">{i.t}</p>
              <p className="text-xs text-zinc-500">{i.y} · {i.g.join(", ")}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-600">Sample titles for demo only. The app shows live data from TMDB.</p>
      </motion.div>
    </section>
  );
}

export default function Landing() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="glow relative px-6 pb-20 pt-36 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-sm text-mint">
              <Sparkles size={14} /> The Ultimate Entertainment Companion
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Lost in the Streaming Void? <span className="text-gradient">Find Your Next Watch.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              Spend less time aimlessly scrolling and more time enjoying top-rated movies, TV series, and hidden cinematic gems across all your favorite streaming platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.playUrl} className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(0,228,117,0.35)] transition hover:bg-mint">
                <AndroidIcon /> Download for Android
              </a>
              <a href="#features" className="flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 font-medium text-white transition hover:border-zinc-500">
                Explore Features <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto flex h-[560px] w-full max-w-md items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-brand/20 blur-[100px]" />
            <Phone src="/screens/s2.png" className="absolute left-0 top-12 w-[46%] -rotate-[8deg] opacity-70" />
            <Phone src="/screens/s3.png" className="absolute right-0 top-12 w-[46%] rotate-[8deg] opacity-70" />
            <Phone src="/screens/s1.png" className="animate-floaty relative z-10 w-[54%]" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-[#09090b] py-10">
        <p className="mb-6 text-center text-sm text-zinc-400">Know instantly where every title is streaming.</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-4">
            {[...PROVIDERS, ...PROVIDERS].map((p, i) => (
              <span key={i} className="whitespace-nowrap rounded-2xl border border-line bg-card px-6 py-3 text-lg font-bold text-zinc-300">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Everything you need for movie night</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">Four pillars, one beautifully dark app.</p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text, span }) => (
              <div key={title} className={`group relative overflow-hidden rounded-3xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/50 ${span}`}>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition group-hover:bg-brand/20" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30"><Icon size={22} /></div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-8">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-6 [animation-duration:60s]">
            {[0, 1].flatMap((k) =>
              Array.from({ length: 11 }, (_, i) => <Phone key={`${k}-${i}`} src={`/screens/s${i + 1}.png`} className="w-52 shrink-0 shadow-none" />)
            )}
          </div>
        </div>
      </section>

      <section id="sync" className="px-6 py-24">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-5xl">Zero-latency cloud &amp; offline sync</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">A local-first Room database means your watchlist loads instantly, even on a plane. Sign in and Firebase keeps every device in sync.</p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: Database, t: "Local-first storage", d: "Everything saves to your device first. No spinners, no waiting." },
              { icon: CloudOff, t: "Works offline", d: "Browse saved lists and details with no internet connection." },
              { icon: RefreshCw, t: "Two-way cloud sync", d: "Changes sync in real time across all your signed-in devices." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-line bg-card p-7 transition hover:border-brand/50">
                <Icon className="text-brand" />
                <h3 className="mt-4 font-semibold text-white">{t}</h3>
                <p className="mt-2 text-sm text-zinc-400">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-center gap-4 rounded-3xl border border-brand/30 bg-brand/5 p-7 md:flex-row">
            <ShieldCheck className="shrink-0 text-brand" size={32} />
            <p className="text-zinc-300"><strong className="text-white">Privacy first:</strong> Full guest mode is supported. Browse and save without giving any personal data. Cloud sync is completely optional.</p>
            <Cloud className="hidden shrink-0 text-brand/50 md:block" size={32} />
          </div>
        </motion.div>
      </section>

      <Showcase />

      <section id="about" className="px-6 py-24">
        <motion.div {...fade} className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">About</p>
            <h3 className="mt-3 text-2xl font-bold">A passion project for movie lovers</h3>
            <p className="mt-4 text-zinc-400">StreamOrbit started from a simple frustration: too many services, too much scrolling. It brings discovery, availability and watchlists together in one fast AMOLED-dark app.</p>
            <p className="mt-6 font-medium text-white">Developed with passion by <span className="text-brand">{SITE.developer}</span>.</p>
          </div>
          <div className="rounded-3xl border border-line bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Data attribution</p>
            <h3 className="mt-3 text-2xl font-bold">Powered by TMDB</h3>
            <p className="mt-4 text-zinc-400">Movie and TV metadata, images and streaming availability come from The Movie Database (TMDB) and its community. This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-brand hover:text-mint">themoviedb.org <ArrowRight size={16} /></a>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-24">
        <motion.div {...fade} className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-brand/30 bg-card px-8 py-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,228,117,0.18),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-5xl">Ready to elevate your movie nights?</h2>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400">Download StreamOrbit and find your next favorite in seconds.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={SITE.playUrl} className="flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(0,228,117,0.4)] transition hover:bg-mint">
                <Download size={18} /> Get StreamOrbit
              </a>
              <a href={`mailto:${SITE.email}?subject=StreamOrbit%20Beta%20Tester`} className="rounded-full border border-line px-7 py-3.5 font-medium text-white transition hover:border-zinc-500">
                Join the beta
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
