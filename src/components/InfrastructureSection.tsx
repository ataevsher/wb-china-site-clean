import { CheckCircle2, MapPin, Server } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-map-routes.jpg";
import imgWarehouse from "@/assets/infrastructure-warehouse.jpg";
import imgTeam from "@/assets/infrastructure-team.jpg";
import imgFulfillment from "@/assets/infrastructure-fulfillment.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const InfrastructureSection = () => {
  const { t } = useLanguage();

  const offices = [
    { city: t("infra.office1.city"), flag: "🇨🇳", role: t("infra.office1.role") },
    { city: t("infra.office2.city"), flag: "🇨🇳", role: t("infra.office2.role") },
    { city: t("infra.office3.city"), flag: "🇷🇺", role: t("infra.office3.role") },
    { city: t("infra.office4.city"), flag: "🇷🇺", role: t("infra.office4.role") },
  ];

  const metrics = [
    { value: t("infra.metric1.value"), label: t("infra.metric1.label") },
    { value: t("infra.metric2.value"), label: t("infra.metric2.label") },
    { value: t("infra.metric3.value"), label: t("infra.metric3.label") },
  ];

  const infraCards = [
    { title: t("infra.f1.title"), desc: t("infra.f1.desc"), img: imgWarehouse, label: t("infra.photo1.label") },
    { title: t("infra.f2.title"), desc: t("infra.f2.desc"), img: bgMapRoutes, label: t("infra.photo2.label") },
    { title: t("infra.f3.title"), desc: t("infra.f3.desc"), img: imgTeam, label: t("infra.photo3.label") },
    { title: t("infra.f4.title"), desc: t("infra.f4.desc"), img: imgFulfillment, label: t("infra.photo4.label") },
  ];

  const infraFeatures = [
    { icon: Server, title: t("infra.f5.title"), desc: t("infra.f5.desc") },
    { icon: MapPin, title: t("infra.f6.title"), desc: t("infra.f6.desc") },
  ];

  const marketplaces = [
    { name: "Wildberries", color: "hsl(316 70% 50%)" },
    { name: "Ozon", color: "hsl(210 100% 50%)" },
    { name: t("infra.yandex"), color: "hsl(45 100% 50%)" },
  ];

  const trustItems = [t("infra.trust1"), t("infra.trust2"), t("infra.trust3"), t("infra.trust4")];

  return (
    <section id="infrastructure" className="relative py-24 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("infra.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("infra.title1")} <br /> <span className="text-gradient">{t("infra.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("infra.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="glass-card rounded-[28px] border border-border p-6 md:p-8 card-shadow">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6">{t("infra.offices")}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {offices.map((office) => (
                      <div key={office.city} className="rounded-2xl bg-muted/40 border border-border/60 p-4 text-center">
                        <span className="text-2xl mb-2 block">{office.flag}</span>
                        <div className="text-sm font-bold text-foreground">{office.city}</div>
                        <div className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{office.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-border/70 bg-background/75 p-5">
                      <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12" staggerDelay={0.08}>
          {infraCards.map((card, index) => (
            <StaggerItem key={card.title}>
              <div className="glass-card rounded-[28px] border border-border card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225_65%_12%_/_0.92)] via-[hsl(225_65%_12%_/_0.28)] to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 backdrop-blur-sm">
                        {card.label}
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-primary-foreground">{card.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/12 border border-primary-foreground/14 flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12" staggerDelay={0.08}>
          {infraFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="glass-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="glass-card rounded-2xl border border-border p-6 max-w-4xl mx-auto card-shadow mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center mb-5">{t("infra.partners")}</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {marketplaces.map((mp) => (
                <div key={mp.name} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: mp.color }}>
                    <span className="text-white font-bold text-sm">{mp.name[0]}</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">{mp.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.28}>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InfrastructureSection;
