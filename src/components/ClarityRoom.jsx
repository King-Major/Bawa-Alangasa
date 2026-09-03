import { clarityFramework } from "../data/content";

export default function ClarityRoom() {
  return (
    <section id="clarity-room" className="px-6 py-24 md:py-32 bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start mb-16">
          <div>
            <p className="font-display italic text-lg text-clay mb-3">
              Coaching hub
            </p>
            <h2 className="font-display text-4xl text-ink mb-5">
              The Clarity Room
            </h2>
            <p className="text-umber leading-relaxed text-[1.05rem] max-w-[58ch]">
              {clarityFramework.intro}
            </p>
          </div>

          <div className="rounded-[2rem] bg-parchment border border-ink/10 p-8">
            <p className="text-sm text-ink mb-2 font-medium">
              Book a one-on-one session
            </p>
            <p className="text-sm text-umber mb-5 leading-relaxed">
              Scheduling is handled through our booking calendar. Connect a
              Calendly or HubSpot embed here to let visitors reserve a slot
              instantly.
            </p>
            <div className="rounded-2xl bg-sand-deep/60 h-40 flex items-center justify-center text-xs text-umber/80">
              Calendar scheduling embed placeholder
            </div>
            <a
              href="#booking"
              className="mt-5 inline-block rounded-full bg-amber px-5 py-3 text-night-deep text-sm font-medium hover:bg-amber-soft transition-colors"
            >
              Request a session
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {clarityFramework.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-parchment/70 border border-ink/10 p-6"
            >
              <h3 className="font-display text-lg text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-umber leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
