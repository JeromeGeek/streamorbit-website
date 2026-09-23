import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Delete Account — StreamOrbit" };

export default function DeleteAccount() {
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent("StreamOrbit account deletion request")}&body=${encodeURIComponent("Please delete my StreamOrbit account and all associated data.\n\nAccount email: ")}`;
  return (
    <LegalPage title="Delete Your Account & Data">
      <p className="mt-6">This page explains how to delete your <strong>StreamOrbit</strong> account (developed by {SITE.developer}) and the data associated with it.</p>

      <h2>Option 1: In the app</h2>
      <ul>
        <li>Open StreamOrbit and go to <strong>Profile / Settings</strong></li>
        <li>Tap <strong>Delete account</strong> and confirm</li>
      </ul>

      <h2>Option 2: By email</h2>
      <p>Send a request from the email address linked to your account to <a href={mail}>{SITE.email}</a> with the subject &quot;StreamOrbit account deletion request&quot;.</p>
      <p><a href={mail} className="!no-underline inline-block rounded-full bg-brand px-6 py-3 font-semibold !text-black">Request deletion by email</a></p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your account profile (name, email, profile photo, user ID)</li>
        <li>Your cloud-synced watchlists, favorites, playlists and preferences</li>
      </ul>

      <h2>What may be retained</h2>
      <p>Anonymous crash and diagnostic logs may be kept by our service providers for up to 90 days. Nothing else is kept. Data stored locally on your device is removed when you clear app data or uninstall the App.</p>

      <h2>Timeline</h2>
      <p>Requests are processed within <strong>30 days</strong>.</p>
    </LegalPage>
  );
}
