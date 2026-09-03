import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ClarityMark from "./ClarityMark";

const links = [
  { href: "#biography", label: "Biography" },
  { href: "#discography", label: "Music" },
  { href: "#clarity-room", label: "The Clarity Room" },
  { href: "#booking", label: "Booking" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-night-deep/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <ClarityMark className="w-7 h-7" />
          <span className="font-display text-lg text-parchment">
            Alangasa Bawa
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate hover:text-amber-soft transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="border border-amber/40 px-4 py-2 text-sm text-amber-soft hover:bg-amber/10 transition-colors"
            >
              Book an event
            </a>
          </li>
        </ul>

        <button
          className="md:hidden border border-parchment/15 p-2 text-parchment"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-night-deep/95 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href} className="border-b border-parchment/10">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-parchment/90"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block py-3 text-amber-soft"
            >
              Book an event
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
