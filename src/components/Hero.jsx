import { motion } from "framer-motion";
import { profile } from "../data/content";
import portrait from "../images/alangasa-bawa.webp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 bg-night overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-8%] w-[560px] h-[560px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, #d98c3f, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={line}
            className="font-display italic text-lg text-slate mb-6"
          >
            Salka, Nigeria
          </motion.p>

          <motion.h1
            variants={line}
            className="font-display font-medium text-5xl sm:text-6xl lg:text-[4.75rem] leading-[1.03] text-parchment"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={line}
            className="font-display italic text-2xl sm:text-3xl text-amber-soft mt-3"
          >
            known as {profile.alias}
          </motion.p>

          <motion.p
            variants={line}
            className="mt-7 max-w-lg text-slate text-lg leading-relaxed"
          >
            Gospel minister. Purpose coach. Founder of The Clarity Room. His
            music carries prophetic worship in Hausa and English; his
            coaching gives people the structure to live what they've heard.
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#discography"
              className="bg-amber px-7 py-3.5 text-night-deep font-medium hover:bg-amber-soft transition-colors"
            >
              Listen to the music
            </a>
            <a
              href="#booking"
              className="border border-parchment/25 px-7 py-3.5 text-parchment/90 hover:border-amber/50 hover:text-parchment transition-colors"
            >
              Book Alangasa
            </a>
          </motion.div>

          <motion.ul variants={line} className="mt-11 flex flex-wrap gap-x-6 gap-y-2">
            {profile.roles.map((r) => (
              <li key={r} className="text-xs text-slate/80 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber inline-block" />
                {r}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5]"
        >
          <img
            src={portrait}
            alt={`${profile.name} portrait`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-parchment/10" />
          {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute w-8 h-8 border-amber ${pos}`}
                aria-hidden="true"
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
