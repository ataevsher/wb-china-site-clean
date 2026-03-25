import { Calendar, Package, Award, BarChart3, Warehouse, Store, CalendarDays, Building2, TrendingUp, Handshake } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const ProvenSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: CalendarDays, value: t("proven.s1.value"), label: t("proven.s1.label"), desc: t("proven.s1.desc") },
    { icon: Package, value: t("proven.s2.value"), label: t("proven.s2.label"), desc: t("proven.s2.desc") },
    { icon: Building2, value: t("proven.s3.value"), label: t("proven.s3.label"), desc: t("proven.s3.desc") },
    { icon: TrendingUp, value: t("proven.s4.value"), label: t("proven.s4.label"), desc: t("proven.s4.desc") },
    { icon: Warehouse, value: t("proven.s5.value"), label: t("proven.s5.label"), desc: t("proven.s5.desc") },
    { icon: Handshake, value: t("proven.s6.value"), label: t("proven.s6.label"), desc: t("proven.s6.desc") },
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("proven.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("proven.title1")} <br /> <span className="text-gradient">{t("proven.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("proven.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
          {stats.map((s, i) => (
            <StaggerItem key={i}>
              <div className="glass-card rounded-2xl p-8 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-none mb-1">{s.value}</div>
                <div className="text-sm font-bold text-foreground mb-1">{s.label}</div>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProvenSection;
