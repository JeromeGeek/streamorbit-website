import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy — StreamOrbit" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="mt-6">
        This Privacy Policy explains how the <strong>StreamOrbit</strong> Android application (package{" "}
        <code>{SITE.packageId}</code>) (&quot;the App&quot;), developed by <strong>{SITE.developer}</strong> (&quot;we&quot;, &quot;us&quot;), collects, uses and protects your information.
        By using the App, you agree to this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>Guest mode (no account):</strong> You can use StreamOrbit without signing in. In guest mode, your watchlist, favorites and playlists are stored only on your device (local Room database) and are not sent to us.</p>
      <p><strong>Optional account (cloud sync):</strong> If you choose to sign in (e.g. with Google via Firebase Authentication), we collect:</p>
      <ul>
        <li>Your name, email address and profile photo (as provided by your sign-in provider)</li>
        <li>A unique user ID</li>
        <li>Your watchlists, favorites, custom playlists and app preferences, so they can sync across your devices</li>
      </ul>
      <p><strong>Automatically collected data:</strong> Our service providers may process basic technical information such as device model, OS version, app version, IP address and crash diagnostics to keep the App running reliably.</p>
      <p><strong>Downloaded images:</strong> When you use the 1-tap image download feature, images are saved to your device storage. We do not access your other files or photos.</p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide core features: discovery, watchlists, playlists and cross-device sync</li>
        <li>To authenticate you and secure your account</li>
        <li>To diagnose crashes and improve performance</li>
      </ul>
      <p>We <strong>do not sell</strong> your personal data, and we do not use it for third-party advertising.</p>

      <h2>3. Third-Party Services</h2>
      <p>The App relies on the following services, each with its own privacy policy:</p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Play Services</a></li>
        <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase (Authentication, Cloud Firestore)</a></li>
        <li><a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noreferrer">The Movie Database (TMDB)</a> for movie/TV metadata and images. Search queries and title requests are sent to TMDB&apos;s API, but no personal account information is shared with TMDB.</li>
      </ul>
      <p>Streaming provider links open the official third-party app or website. Their own privacy policies apply once you leave StreamOrbit.</p>

      <h2>4. Data Sharing</h2>
      <p>We share data only with the service providers listed above to operate the App, or when required by law.</p>

      <h2>5. Data Security</h2>
      <p>All data is transmitted over encrypted HTTPS connections. Cloud data is stored on Google Firebase infrastructure, protected by authentication-based security rules.</p>

      <h2>6. Data Retention &amp; Deletion</h2>
      <p>Local data stays on your device until you clear it or uninstall the App. Cloud data is kept while your account is active. You can delete your account and all associated cloud data at any time. See our <a href="/delete-account">Account Deletion page</a> or email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Deletion requests are completed within 30 days.</p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>The App is not directed to children under 13, and we do not knowingly collect personal data from children. If you believe a child has provided us data, contact us and we will delete it.</p>

      <h2>8. Your Rights</h2>
      <p>Depending on where you live (e.g. under GDPR or CCPA), you may have the right to access, correct, export or delete your personal data. Contact us to exercise these rights.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>

      <h2>10. Contact</h2>
      <p>{SITE.developer}<br />Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalPage>
  );
}
