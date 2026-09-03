import ClarityMark from "./ClarityMark";
import { profile, dspLinks } from "../data/content";

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.24 4.32 15.36 4.25 14.34 4.25c-2.13 0-3.6 1.3-3.6 3.68V10.5H8.25v3H10.74V21h2.76Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="px-6 py-16 bg-night-deep">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ClarityMark className="w-7 h-7" />
            <span className="font-display text-lg text-parchment">
              {profile.alias}
            </span>
          </div>
          <p className="text-sm text-slate leading-relaxed max-w-xs">
            Gospel minister and purpose coach based in {profile.locality}.
            Founder of The Clarity Room.
          </p>
        </div>

        <div>
          <p className="text-xs text-slate mb-4">Connect</p>
          <a
            href={profile.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-parchment/90 hover:text-amber-soft transition-colors"
          >
            <FacebookIcon size={16} /> Official Facebook page
          </a>
        </div>

        <div>
          <p className="text-xs text-slate mb-4">Digital audio footprints</p>
          <ul className="space-y-2">
            {dspLinks.map((d) => (
              <li key={d.name}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-parchment/90 hover:text-amber-soft transition-colors"
                >
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-parchment/10 text-xs text-slate/70">
        © {new Date().getFullYear()} {profile.name} ({profile.alias}). All
        rights reserved.
      </div>
    </footer>
  );
}
