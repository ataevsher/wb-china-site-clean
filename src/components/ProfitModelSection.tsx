import { Rocket, TrendingUp, Percent, Globe2, DollarSign } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-hero-logistics.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const ProfitModelSection = () => {
  const { t } = useLanguage();

  const metrics = [
    { icon: Rocket, value: t("profit.m1.value"), label: t("profit.m1.label"), desc: t("profit.m1.desc") },
    { icon: TrendingUp, value: t("profit.m2.value"), label: t("profit.m2.label"), desc: t("profit.m2.desc") },
    { icon: Percent, value: t("profit.m3.value"), label: t("profit.m3.label"), desc: t("profit.m3.desc") },
    { icon: Globe2, value: t("profit.m4.value"), label: t("profit.m4.label"), desc: t("profit.m4.desc") },
  ];

  const profitRows = [
    { label: t("profit.cost"), value: "$10", pct: 56, color: "bg-muted-foreground/60" },
    { label: t("profit.retail"), value: "$18", pct: 100, color: "bg-accent" },
    { label: t("profit.commission"), value: "−$3", pct: 17, color: "bg-destructive/70" },
    { label: t("profit.logistics"), value: "−$2", pct: 11, color: "bg-destructive/50" },
    { label: t("profit.profit"), value: "$3", pct: 17, color: "bg-green-500" },
  ];

  return (
    <section className="relative py-24 bg-secondary/40 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("profit.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("profit.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("profit.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16" staggerDelay={0.08}>
          {metrics.map((m, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl bg-card border border-border p-7 card-shadow hover:card-shadow-hover transition-all duration-300 text-center h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-none mb-1">{m.value}</div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">{m.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{m.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="max-w-2xl mx-auto rounded-2xl bg-card border border-border p-8 md:p-10 card-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{t("profit.example")}</h3>
            </div>
            <div className="space-y-5">
              {profitRows.map((row, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${i === profitRows.length - 1 ? "text-foreground font-bold" : "text-muted-foreground"}`}>{row.label}</span>
                    <span className={`font-bold tabular-nums ${i === profitRows.length - 1 ? "text-green-600 text-base" : "text-foreground"}`}>{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${row.color} transition-all duration-700`} style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfitModelSection;
