import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const langLabels: Record<Lang, string> = { ru: "RU", en: "EN", zh: "中文" };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#market", label: t("nav.market") },
    { href: "#model", label: t("nav.models") },
    { href: "#process", label: t("nav.process") },
    { href: "#economics", label: t("nav.economics") },
    { href: "#services", label: t("nav.services") },
    { href: "#infrastructure", label: t("nav.infrastructure") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg hero-gradient" />
          <span className="text-lg font-bold text-foreground tracking-tight font-display">RuMarket</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors duration-200"
              onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center rounded-lg border border-border bg-background/60 overflow-hidden text-xs font-semibold">
            {(Object.keys(langLabels) as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          <Button size="sm" className="rounded-lg hidden sm:inline-flex" asChild>
            <a href="#contact">{t("nav.cta")}</a>
          </Button>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t("nav.menu.close") : t("nav.menu.open")}
          >
            {menuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-card border-t animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-4 sm:hidden">
              <Button size="sm" className="rounded-lg w-full" asChild>
                <a href="#contact" onClick={() => setMenuOpen(false)}>{t("nav.cta")}</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
