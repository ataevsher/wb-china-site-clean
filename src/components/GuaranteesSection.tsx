import { FileCheck, ClipboardList, RotateCcw, HeadphonesIcon, BarChart3, Warehouse } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const GuaranteesSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: FileCheck, title: t("guarantees.g1") },
    { icon: ClipboardList, title: t("guarantees.g2") },
    { icon: RotateCcw, title: t("guarantees.g3") },
    { icon: HeadphonesIcon, title: t("guarantees.g4") },
    { icon: BarChart3, title: t("guarantees.g5") },
    { icon: Warehouse, title: t("guarantees.g6") },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("guarantees.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("guarantees.title1")} <br /> <span className="text-gradient">{t("guarantees.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("guarantees.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card rounded-2xl p-5 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground leading-snug">{item.title}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default GuaranteesSection;
