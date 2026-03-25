import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, Globe2, Ship, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-map-routes.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const MarketSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: DollarSign, value: t("market.s1.value"), label: t("market.s1.label"), sublabel: t("market.s1.sub"), trend: "+38%", trendLabel: t("market.s1.trend") },
    { icon: Users, value: t("market.s2.value"), label: t("market.s2.label"), sublabel: t("market.s2.sub"), trend: "+12%", trendLabel: t("market.s2.trend") },
    { icon: ShoppingCart, value: t("market.s3.value"), label: t("market.s3.label"), sublabel: t("market.s3.sub"), trend: "+8pp", trendLabel: t("market.s3.trend") },
    { icon: Ship, value: t("market.s4.value"), label: t("market.s4.label"), sublabel: t("market.s4.sub"), trend: "↑", trendLabel: t("market.s4.trend") },
  ];

  const growthData = [
    { year: "2020", value: 18, ecom: 20 },
    { year: "2021", value: 28, ecom: 30 },
    { year: "2022", value: 35, ecom: 38 },
    { year: "2023", value: 45, ecom: 48 },
    { year: "2024", value: 60, ecom: 60 },
    { year: "2025E", value: 78, ecom: 75 },
  ];

  const maxVal = 80;

  const importCategories = [
    { name: t("market.import.electronics"), share: 32, color: "bg-primary" },
    { name: t("market.import.clothing"), share: 24, color: "bg-accent" },
    { name: t("market.import.home"), share: 18, color: "bg-primary/70" },
    { name: t("market.import.cosmetics"), share: 14, color: "bg-accent/70" },
    { name: t("market.import.other"), share: 12, color: "bg-muted-foreground/30" },
  ];

  return (
    <section id="market" className="relative py-24 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-semibold mb-5 border border-primary/10">
              <BarChart3 className="w-4 h-4" />
              {t("market.badge")}
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
              {t("market.title1")} <br />
              <span className="text-gradient">{t("market.title2")}</span> {t("market.title3")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("market.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="group relative rounded-2xl p-6 border glass-card card-shadow hover:card-shadow-hover transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.trend}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground/80 mb-0.5">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel} · {stat.trendLabel}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid lg:grid-cols-5 gap-6">
          <ScrollReveal variant="slideLeft" className="lg:col-span-3">
            <div className="rounded-2xl border glass-card p-6 md:p-8 card-shadow h-full">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t("market.growth.title")}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t("market.growth.sub")}</p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-primary" />
                    <span className="text-muted-foreground">{t("market.growth.legend1")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-primary/30" />
                    <span className="text-muted-foreground">{t("market.growth.legend2")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-2 sm:gap-3 md:gap-5 h-44 sm:h-56">
                {growthData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-foreground">${d.value}B</span>
                    <div className="w-full relative flex flex-col items-center">
                      <div className="w-full rounded-t-lg bg-primary/[0.12] absolute bottom-0" style={{ height: `${(d.ecom / maxVal) * 180}px` }} />
                      <div className="w-[70%] rounded-t-lg bg-primary relative z-10" style={{ height: `${(d.value / maxVal) * 180}px` }} />
                    </div>
                    <span className="text-[11px] text-muted-foreground font-medium mt-1">{d.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" className="lg:col-span-2">
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-2xl border glass-card p-6 card-shadow flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="w-5 h-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">{t("market.geo.title")}</h3>
                </div>
                <div className="relative h-32 mb-4 rounded-xl bg-primary/[0.04] border border-primary/[0.08] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 70% 40%, hsl(var(--accent)) 0%, transparent 40%)' }} />
                  <div className="relative text-center">
                    <div className="text-3xl font-extrabold text-primary">146M+</div>
                    <div className="text-xs text-muted-foreground font-medium">{t("market.geo.population")}</div>
                  </div>
                  <div className="absolute top-6 left-[25%] w-2.5 h-2.5 rounded-full bg-primary/60 animate-pulse" />
                  <div className="absolute top-10 left-[30%] w-2 h-2 rounded-full bg-primary/40" />
                  <div className="absolute top-14 left-[55%] w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <div className="absolute top-8 left-[70%] w-1.5 h-1.5 rounded-full bg-primary/25" />
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="text-lg font-bold text-foreground">11</div>
                    <div className="text-[11px] text-muted-foreground">{t("market.geo.tz")}</div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="text-lg font-bold text-foreground">85</div>
                    <div className="text-[11px] text-muted-foreground">{t("market.geo.regions")}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border glass-card p-6 card-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-base font-bold text-foreground">{t("market.import.title")}</h3>
                </div>
                <div className="space-y-3">
                  {importCategories.map((cat, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-foreground/80 font-medium">{cat.name}</span>
                        <span className="text-muted-foreground font-bold">{cat.share}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full rounded-full ${cat.color} transition-all duration-500`} style={{ width: `${cat.share * 2.5}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
