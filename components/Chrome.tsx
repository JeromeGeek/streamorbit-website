"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-brand/10 ring-1 ring-brand/40">
        <span className="h-3 w-3 rounded-full bg-brand shadow-[0_0_12px_#00e475]" />
        <span className="absolute inset-0 rotate-[-25deg] scale-x-[1.35] rounded-full border border-brand/60" />
      </span>
      <span className="text-lg font-bold text-white">StreamOrbit</span>
    </Link>
  );
}

export function AndroidIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 00-.66-.38l-1.87 3.23a11.4 11.4 0 00-9.82 0L5.22 5.92a.38.38 0 00-.66.38L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  );
}

const NAV = [
  ["Features", "/#features"],
  ["Discovery", "/#discovery"],
  ["Playlists", "/#sync"],
  ["Downloader", "/#features"],
  ["About", "/#about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-black/60 px-5 py-3 backdrop-blur-xl">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map(([l, h]) => (
            <Link key={l} href={h} className="text-sm text-zinc-400 transition hover:text-white">
              {l}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={SITE.playUrl}
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(0,228,117,0.3)] transition hover:bg-mint sm:inline-block"
          >
            Get the App
          </a>
          <button onClick={() => setOpen(!open)} className="p-1 text-white md:hidden" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-black/90 p-4 backdrop-blur-xl md:hidden">
          {NAV.map(([l, h]) => (
            <Link key={l} href={h} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-zinc-300 hover:bg-card">
              {l}
            </Link>
          ))}
          <a href={SITE.playUrl} className="mt-2 block rounded-full bg-brand py-3 text-center font-semibold text-black">
            Get the App
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#09090b] px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-zinc-400">{SITE.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-white">Legal</span>
          <Link href="/privacy" className="text-zinc-400 hover:text-brand">Privacy Policy</Link>
          <Link href="/terms" className="text-zinc-400 hover:text-brand">Terms of Use</Link>
          <Link href="/delete-account" className="text-zinc-400 hover:text-brand">Delete Account &amp; Data</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-white">Contact</span>
          <a href={`mailto:${SITE.email}`} className="text-zinc-400 hover:text-brand">{SITE.email}</a>
          <span className="text-zinc-500">Developed by {SITE.developer}</span>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs leading-relaxed text-zinc-500">
        <p>© {new Date().getFullYear()} StreamOrbit. All rights reserved.</p>
        <p className="mt-2">
          StreamOrbit does not host, stream, or distribute any media files. It is a discovery guide that shows publicly
          available metadata and links to official streaming services. This product uses the TMDB API but is not endorsed
          or certified by TMDB. All trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
