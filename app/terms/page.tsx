import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use — StreamOrbit" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <h2>1. Acceptance</h2>
      <p>By downloading or using StreamOrbit, you agree to these Terms. If you do not agree, please do not use the App.</p>
      <h2>2. What StreamOrbit Is</h2>
      <p>StreamOrbit is a discovery guide for movies and TV shows. It <strong>does not host, stream or distribute any video content</strong>. Availability information and links point to official third-party services, which have their own terms and subscriptions.</p>
      <h2>3. Content &amp; Attribution</h2>
      <p>Metadata and images are provided by TMDB. This product uses the TMDB API but is not endorsed or certified by TMDB. All trademarks, posters and logos belong to their respective owners. Downloaded images are for personal, non-commercial use only.</p>
      <h2>4. Acceptable Use</h2>
      <p>You agree not to misuse the App, reverse engineer it, or use it for any unlawful purpose.</p>
      <h2>5. Disclaimer</h2>
      <p>The App is provided &quot;as is&quot; without warranties. We do not guarantee that availability data is always accurate or complete.</p>
      <h2>6. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, {SITE.developer} is not liable for any indirect or consequential damages arising from your use of the App.</p>
      <h2>7. Changes</h2>
      <p>We may update these Terms. Continued use of the App means you accept the updated Terms.</p>
      <h2>8. Contact</h2>
      <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalPage>
  );
}
