import { profile, bio } from "../data/content";

export default function Biography() {
  return (
    <section id="biography" className="px-6 py-24 md:py-32 bg-night">
      <div className="max-w-6xl mx-auto">
        <div className="dawn-rule mb-16" />

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-14">
          <aside className="h-fit md:sticky md:top-28">
            <p className="text-xs text-slate mb-1">Profile</p>
            <h3 className="font-display text-2xl text-parchment mb-6">
              {profile.name}
            </h3>

            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-slate mb-1">Also known as</dt>
                <dd className="text-parchment/90">{profile.alias}</dd>
              </div>
              <div>
                <dt className="text-slate mb-1">Base / origin</dt>
                <dd className="text-parchment/90">{profile.locality}</dd>
              </div>
              <div>
                <dt className="text-slate mb-2">Roles</dt>
                <dd className="flex flex-col gap-2">
                  {profile.roles.map((r) => (
                    <span
                      key={r}
                      className="border-l-2 border-amber/60 pl-3 py-0.5 text-parchment/85"
                    >
                      {r}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>

          <div>
            <p className="font-display italic text-lg text-amber-soft mb-3">
              Biography
            </p>
            <h2 className="font-display text-4xl text-parchment mb-8 max-w-[18ch]">
              A life split evenly between the altar and the whiteboard
            </h2>
            <div className="space-y-5 text-slate leading-relaxed text-[1.05rem] max-w-[64ch]">
              {bio.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "drop-cap" : undefined}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 grid sm:grid-cols-3 gap-8 border-t border-parchment/10 pt-8">
              {[
                { label: "Worship & Music", body: "Written to be sung, in Hausa and English." },
                { label: "Digital Ministry", body: "Sermons, songs and coaching, wherever people are." },
                { label: "Purpose Coaching", body: "Conviction with a plan attached." },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-parchment font-medium mb-1.5">{item.label}</p>
                  <p className="text-sm text-slate leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
