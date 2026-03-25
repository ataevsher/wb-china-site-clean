import { PackageOpen, SearchCheck, Truck, ShieldCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const FlexibleStartSection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: PackageOpen, title: t("flex.c1.title"), desc: t("flex.c1.desc") },
    { icon: SearchCheck, title: t("flex.c2.title"), desc: t("flex.c2.desc") },
    { icon: Truck, title: t("flex.c3.title"), desc: t("flex.c3.desc") },
    { icon: ShieldCheck, title: t("flex.c4.title"), desc: t("flex.c4.desc") },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("flex.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("flex.title1")} <br /> <span className="text-gradient">{t("flex.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("flex.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <div className="glass-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FlexibleStartSection;
