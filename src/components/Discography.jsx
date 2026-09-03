import { ExternalLink } from "lucide-react";
import { discography, dspLinks } from "../data/content";

export default function Discography() {
  return (
    <section id="discography" className="px-6 py-24 md:py-32 bg-indigo">
      <div className="max-w-6xl mx-auto">
        <div className="dawn-rule mb-16" />

        <div className="max-w-2xl mb-14">
          <p className="font-display italic text-lg text-amber-soft mb-3">
            Discography
          </p>
          <h2 className="font-display text-4xl text-parchment mb-4">
            Songs written to be sung in Hausa and remembered in every
            language
          </h2>
          <p className="text-slate leading-relaxed">
            Stream the full catalog on your platform of choice, or browse the
            release list below for the records that shaped his ministry.
          </p>
        </div>

        <ol className="border-t border-parchment/10 mb-16">
          {discography.map((song, i) => (
            <li
              key={song.title}
              className="group flex items-baseline gap-6 py-6 border-b border-parchment/10 pl-4 -ml-4 border-l-2 border-l-transparent hover:border-l-amber transition-colors"
            >
              <span className="font-display text-amber-soft/80 text-sm w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="text-parchment font-display text-xl">{song.title}</p>
                <p className="text-sm text-slate mt-1">{song.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div>
          <p className="text-sm text-slate mb-5">Listen on your platform</p>
          <div className="flex flex-wrap gap-4">
            {dspLinks.map((dsp) => (
              <a
                key={dsp.name}
                href={dsp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-parchment/15 px-5 py-3 flex items-center gap-2 text-parchment/90 hover:border-amber/50 hover:text-amber-soft transition-colors"
              >
                {dsp.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
