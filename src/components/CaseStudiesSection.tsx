import { Home, Cpu, Watch, TrendingUp, Clock, CalendarCheck, Percent } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-map-routes.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudiesSection = () => {
  const { t } = useLanguage();

  const cases = [
    { icon: Home, category: t("cases.c1"), launch: t("cases.c1.launch"), payback: t("cases.c1.payback"), margin: 32, color: "hsl(var(--primary))" },
    { icon: Cpu, category: t("cases.c2"), launch: t("cases.c2.launch"), payback: t("cases.c2.payback"), margin: 28, color: "hsl(var(--accent))" },
    { icon: Watch, category: t("cases.c3"), launch: t("cases.c3.launch"), payback: t("cases.c3.payback"), margin: 35, color: "hsl(142, 70%, 45%)" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("cases.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("cases.title1")} <span className="text-gradient">{t("cases.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("cases.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((c) => (
            <StaggerItem key={c.category}>
              <div className="glass-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground">{c.category}</div>
                    <div className="text-xs text-muted-foreground">{t("cases.mpLaunch")}</div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {t("cases.launch")}
                    </div>
                    <span className="text-sm font-bold text-foreground">{c.launch}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarCheck className="w-4 h-4" />
                      {t("cases.payback")}
                    </div>
                    <span className="text-sm font-bold text-foreground">{c.payback}</span>
                  </div>
                </div>
                <div className="rounded-xl bg-muted/50 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Percent className="w-4 h-4 text-primary" />
                      {t("cases.margin")}
                    </div>
                    <span className="text-xl font-extrabold text-foreground">{c.margin}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-border overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${c.margin}%`, backgroundColor: c.color }} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: c.color }}>
                  <TrendingUp className="w-4 h-4" />
                  {t("cases.growth")}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
