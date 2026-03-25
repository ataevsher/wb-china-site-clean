import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  Factory,
  Globe2,
  MessageCircle,
  Percent,
  Rocket,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import { motion } from "framer-motion";
import bgHeroImg from "@/assets/bg-map-routes.jpg";
import heroWarehouseImg from "@/assets/infrastructure-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero.stat1.value"), label: t("hero.stat1.label"), icon: Rocket },
    { value: t("hero.stat2.value"), label: t("hero.stat2.label"), icon: Clock },
    { value: t("hero.stat3.value"), label: t("hero.stat3.label"), icon: Percent },
    { value: t("hero.stat4.value"), label: t("hero.stat4.label"), icon: Award },
  ];

  const highlights = [t("hero.p1"), t("hero.p2"), t("hero.p3")];

  const routeCards = [
    { title: t("hero.route.china"), sub: t("hero.route.china.sub"), icon: Factory },
    { title: t("hero.route.warehouse"), sub: t("hero.route.warehouse.sub"), icon: Warehouse },
    { title: t("hero.route.mp"), sub: t("hero.route.mp.sub"), icon: BarChart3 },
    { title: t("hero.route.buyers"), sub: t("hero.route.buyers.sub"), icon: Globe2 },
  ];

  const connectorIcons = [Ship, Truck, BarChart3];

  return (
    <section className="relative min-h-[95vh] flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgHeroImg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.8]"
        />
        <div className="absolute inset-0 hero-gradient opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(0_0%_100%_/_0.16),transparent_32%),radial-gradient(circle_at_bottom_left,hsl(210_100%_52%_/_0.18),transparent_28%)]" />
        <div className="absolute top-12 right-[10%] w-[420px] h-[420px] rounded-full bg-primary-foreground/10 blur-[140px]" />
        <div className="absolute bottom-8 left-[6%] w-[360px] h-[360px] rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,460px)] gap-14 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary-foreground/[0.08] text-primary-foreground/90 text-sm mb-8 border border-primary-foreground/[0.14] backdrop-blur-sm"
            >
              <Globe2 className="w-4 h-4" />
              <span className="font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-primary-foreground leading-[1.04] mb-6 tracking-tight"
            >
              {t("hero.title1")}{" "}
              <span className="relative whitespace-nowrap">
                Wildberries
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary-foreground/30 rounded-full" />
              </span>{" "}
              {t("hero.title2")}{" "}
              <span className="relative whitespace-nowrap">
                Ozon
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary-foreground/30 rounded-full" />
              </span>
              <br />
              <span className="text-primary-foreground/80">{t("hero.title3")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-primary-foreground/72 mb-8 leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid sm:grid-cols-3 gap-3 mb-10 max-w-2xl"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.08] px-4 py-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary-foreground/80 shrink-0" />
                    <p className="text-sm text-primary-foreground/78 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl shadow-xl shadow-black/20" asChild>
                <a href="#contact">
                  {t("hero.cta1")}
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
                <a href="#contact">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  {t("hero.cta2")}
                </a>
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                  className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.08] p-4 backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 text-primary-foreground/45 mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">{stat.value}</div>
                  <div className="text-xs md:text-sm text-primary-foreground/58 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="w-full"
          >
            <div className="glass-card rounded-[28px] border border-primary-foreground/10 overflow-hidden shadow-2xl shadow-black/20">
              <div className="relative h-56">
                <img
                  src={heroWarehouseImg}
                  alt={t("hero.visual.imageLabel")}
                  width={960}
                  height={640}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_65%_10%_/_0.92)] via-[hsl(225_65%_10%_/_0.34)] to-transparent" />
                <div className="absolute left-6 right-6 bottom-5 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 backdrop-blur-sm">
                      {t("hero.visual.badge")}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-primary-foreground">{t("hero.visual.imageLabel")}</h3>
                  </div>
                  <div className="rounded-2xl border border-primary-foreground/14 bg-primary-foreground/10 px-4 py-3 text-right backdrop-blur-sm">
                    <div className="text-lg font-bold text-primary-foreground">{t("hero.visual.imageStat")}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t("hero.visual.title")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t("hero.visual.subtitle")}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-muted/45 border border-border/70 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">{t("hero.visual.kpi1.label")}</div>
                    <div className="text-2xl font-bold text-foreground">{t("hero.visual.kpi1.value")}</div>
                  </div>
                  <div className="rounded-2xl bg-muted/45 border border-border/70 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">{t("hero.visual.kpi2.label")}</div>
                    <div className="text-sm font-semibold text-foreground leading-relaxed">{t("hero.visual.kpi2.value")}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {routeCards.map((card, index) => {
                    const ConnectorIcon = connectorIcons[index - 1];

                    return (
                      <div key={card.title}>
                        {index > 0 && ConnectorIcon && (
                          <div className="flex items-center gap-3 px-2 py-1 text-muted-foreground/70">
                            <div className="w-px h-5 bg-border ml-5" />
                            <ConnectorIcon className="w-4 h-4" />
                            <div className="w-px h-5 bg-border" />
                          </div>
                        )}
                        <div className="flex items-center gap-4 rounded-2xl bg-muted/35 border border-border/70 px-4 py-4">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <card.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground">{card.title}</div>
                            <div className="text-xs text-muted-foreground">{card.sub}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
