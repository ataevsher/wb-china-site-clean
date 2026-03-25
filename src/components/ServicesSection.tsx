import { BarChart3, Rocket, Megaphone, Truck, ShieldCheck, Headphones, Palette, FileText, Globe2 } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgHeroLogistics from "@/assets/bg-hero-logistics.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const proofItems = [
    { value: t("services.proof1.value"), label: t("services.proof1.label") },
    { value: t("services.proof2.value"), label: t("services.proof2.label") },
    { value: t("services.proof3.value"), label: t("services.proof3.label") },
  ];

  const services = [
    { icon: BarChart3, title: t("services.s1.title"), description: t("services.s1.desc"), metrics: [{ label: t("services.s1.m1.label"), value: t("services.s1.m1.value") }, { label: t("services.s1.m2.label"), value: t("services.s1.m2.value") }] },
    { icon: Rocket, title: t("services.s2.title"), description: t("services.s2.desc"), metrics: [{ label: t("services.s2.m1.label"), value: t("services.s2.m1.value") }, { label: t("services.s2.m2.label"), value: t("services.s2.m2.value") }] },
    { icon: Megaphone, title: t("services.s3.title"), description: t("services.s3.desc"), metrics: [{ label: t("services.s3.m1.label"), value: t("services.s3.m1.value") }, { label: t("services.s3.m2.label"), value: t("services.s3.m2.value") }] },
    { icon: Truck, title: t("services.s4.title"), description: t("services.s4.desc"), metrics: [{ label: t("services.s4.m1.label"), value: t("services.s4.m1.value") }, { label: t("services.s4.m2.label"), value: t("services.s4.m2.value") }] },
    { icon: ShieldCheck, title: t("services.s5.title"), description: t("services.s5.desc"), metrics: [{ label: t("services.s5.m1.label"), value: t("services.s5.m1.value") }, { label: t("services.s5.m2.label"), value: t("services.s5.m2.value") }] },
    { icon: Palette, title: t("services.s6.title"), description: t("services.s6.desc"), metrics: [{ label: t("services.s6.m1.label"), value: t("services.s6.m1.value") }, { label: t("services.s6.m2.label"), value: t("services.s6.m2.value") }] },
    { icon: Globe2, title: t("services.s7.title"), description: t("services.s7.desc"), metrics: [{ label: t("services.s7.m1.label"), value: t("services.s7.m1.value") }, { label: t("services.s7.m2.label"), value: t("services.s7.m2.value") }] },
    { icon: Headphones, title: t("services.s8.title"), description: t("services.s8.desc"), metrics: [{ label: t("services.s8.m1.label"), value: t("services.s8.m1.value") }, { label: t("services.s8.m2.label"), value: t("services.s8.m2.value") }] },
    { icon: FileText, title: t("services.s9.title"), description: t("services.s9.desc"), metrics: [{ label: t("services.s9.m1.label"), value: t("services.s9.m1.value") }, { label: t("services.s9.m2.label"), value: t("services.s9.m2.value") }] },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <SectionBg src={bgHeroLogistics} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("services.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("services.title1")} <br /> <span className="text-gradient">{t("services.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("services.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
            {proofItems.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl border border-border p-5 card-shadow">
                <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{item.value}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.07}>
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="glass-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.metrics.map((m, j) => (
                    <div key={j} className="rounded-lg bg-muted/50 p-2.5 text-center">
                      <div className="text-base font-extrabold text-foreground">{m.value}</div>
                      <div className="text-[10px] text-muted-foreground font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
