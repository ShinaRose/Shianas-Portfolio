import { actionLinks, navLinks } from "../data/portfolioData.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href={actionLinks.home} onClick={(e) => scrollToSection(e, actionLinks.home)} className="text-base font-extrabold tracking-tight text-slate-950 focus:outline-none focus:ring-4 focus:ring-rose-200 sm:text-lg">
          Shina Rose Dsouza
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="rounded-lg transition hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="border-t border-rose-50 bg-white/80 px-4 py-3 md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1 text-sm font-semibold" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="whitespace-nowrap rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-rose-800">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
