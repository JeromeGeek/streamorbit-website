import { Footer, Header } from "@/components/Chrome";
import { SITE } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <section className="glow px-6 pb-24 pt-36">
        <article className="prose-legal mx-auto max-w-3xl rounded-3xl border border-line bg-card p-8 md:p-12">
          <h1 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: {SITE.lastUpdated}</p>
          {children}
        </article>
      </section>
      <Footer />
    </main>
  );
}
