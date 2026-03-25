import { ArrowRight, FileText, Rocket, Search, Send, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HowToStartSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Send, title: t("howto.s1.title"), desc: t("howto.s1.desc") },
    { icon: Search, title: t("howto.s2.title"), desc: t("howto.s2.desc") },
    { icon: FileText, title: t("howto.s3.title"), desc: t("howto.s3.desc") },
    { icon: Rocket, title: t("howto.s4.title"), desc: t("howto.s4.desc") },
  ];

  const metrics = [
    { value: t("howto.metric1.value"), label: t("howto.metric1.label") },
    { value: t("howto.metric2.value"), label: t("howto.metric2.label") },
    { value: t("howto.metric3.value"), label: t("howto.metric3.label") },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("howto.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("howto.title1")} <span className="text-gradient">{t("howto.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("howto.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="max-w-5xl mx-auto mb-10">
            <div className="glass-card rounded-[28px] border border-border p-6 md:p-8 card-shadow">
              <div className="grid md:grid-cols-3 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border/70 bg-background/75 p-5">
                    <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative glass-card rounded-[28px] p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 h-full">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-extrabold text-primary/20 leading-none">{`${i + 1}`.padStart(2, "0")}</div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-4 w-8 h-8 rounded-full bg-background border border-border items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-primary/60" />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.25}>
          <div className="glass-card rounded-2xl border border-border max-w-4xl mx-auto p-5 md:p-6 card-shadow">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              <p className="text-sm font-medium text-foreground text-center">{t("howto.note")}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowToStartSection;
