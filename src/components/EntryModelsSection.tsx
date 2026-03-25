import { Package, Award, Warehouse, Factory, Ship, ShieldCheck, Store, Truck, Users, FileCheck, Megaphone, ArrowDown, Clock, Building2, Handshake } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-map-routes.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const EntryModelsSection = () => {
  const { t } = useLanguage();

  const models = [
    {
      icon: Package,
      title: t("entry.m1.title"),
      description: t("entry.m1.desc"),
      benefits: [t("entry.m1.b1"), t("entry.m1.b2"), t("entry.m1.b3"), t("entry.m1.b4")],
    },
    {
      icon: Award,
      title: t("entry.m2.title"),
      description: t("entry.m2.desc"),
      benefits: [t("entry.m2.b1"), t("entry.m2.b2"), t("entry.m2.b3"), t("entry.m2.b4")],
    },
    {
      icon: Warehouse,
      title: t("entry.m3.title"),
      description: t("entry.m3.desc"),
      benefits: [t("entry.m3.b1"), t("entry.m3.b2"), t("entry.m3.b3"), t("entry.m3.b4")],
    },
  ];

  const model1Steps = [
    { icon: Factory, label: t("entry.m1s1.label"), desc: t("entry.m1s1.desc") },
    { icon: Warehouse, label: t("entry.m1s2.label"), desc: t("entry.m1s2.desc") },
    { icon: Ship, label: t("entry.m1s3.label"), desc: t("entry.m1s3.desc") },
    { icon: ShieldCheck, label: t("entry.m1s4.label"), desc: t("entry.m1s4.desc") },
    { icon: Building2, label: t("entry.m1s5.label"), desc: t("entry.m1s5.desc") },
    { icon: Store, label: t("entry.m1s6.label"), desc: t("entry.m1s6.desc") },
    { icon: Truck, label: t("entry.m1s7.label"), desc: t("entry.m1s7.desc") },
  ];

  const model1Timelines = [
    { label: t("entry.m1t1.label"), time: t("entry.m1t1.time") },
    { label: t("entry.m1t2.label"), time: t("entry.m1t2.time") },
    { label: t("entry.m1t3.label"), time: t("entry.m1t3.time") },
    { label: t("entry.m1t4.label"), time: t("entry.m1t4.time") },
  ];

  const model2Steps = [
    { icon: Factory, label: t("entry.m2s1.label"), desc: t("entry.m2s1.desc") },
    { icon: Ship, label: t("entry.m2s2.label"), desc: t("entry.m2s2.desc") },
    { icon: Handshake, label: t("entry.m2s3.label"), desc: t("entry.m2s3.desc") },
    { icon: FileCheck, label: t("entry.m2s4.label"), desc: t("entry.m2s4.desc") },
    { icon: Store, label: t("entry.m2s5.label"), desc: t("entry.m2s5.desc") },
    { icon: Megaphone, label: t("entry.m2s6.label"), desc: t("entry.m2s6.desc") },
    { icon: Users, label: t("entry.m2s7.label"), desc: t("entry.m2s7.desc") },
  ];

  const model2Timelines = [
    { label: t("entry.m2t1.label"), time: t("entry.m2t1.time") },
    { label: t("entry.m2t2.label"), time: t("entry.m2t2.time") },
    { label: t("entry.m2t3.label"), time: t("entry.m2t3.time") },
  ];

  const sharedServices = [
    t("entry.ss1"), t("entry.ss2"), t("entry.ss3"), t("entry.ss4"),
    t("entry.ss5"), t("entry.ss6"), t("entry.ss7"), t("entry.ss8"),
  ];

  interface ModelCardProps {
    number: number;
    title: string;
    steps: typeof model1Steps;
    timelines: typeof model1Timelines;
    accent: "primary" | "accent";
  }

  const ModelCard = ({ number, title, steps, timelines, accent }: ModelCardProps) => {
    const colorMap = {
      primary: { iconBg: "bg-primary/10 border-primary/20", iconColor: "text-primary", arrow: "text-primary/30", timelineBg: "bg-primary/5 border-primary/10", dot: "bg-primary", numBg: "bg-primary text-primary-foreground" },
      accent: { iconBg: "bg-accent/10 border-accent/20", iconColor: "text-accent", arrow: "text-accent/30", timelineBg: "bg-accent/5 border-accent/10", dot: "bg-accent", numBg: "bg-accent text-accent-foreground" },
    };
    const c = colorMap[accent];

    return (
      <div className="glass-card rounded-2xl border border-border p-6 lg:p-8 card-shadow flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl ${c.numBg} flex items-center justify-center font-bold text-lg`}>{number}</div>
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${c.iconColor}`}>{t("entry.modelLabel")} {number}</span>
            <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${c.iconBg} border flex items-center justify-center flex-shrink-0`}>
                  <step.icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center ml-5 py-0.5">
                  <ArrowDown className={`w-4 h-4 ${c.arrow}`} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={`mt-6 rounded-xl ${c.timelineBg} border p-5`}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className={`w-4 h-4 ${c.iconColor}`} />
            <span className="text-sm font-semibold text-foreground">{t("entry.timeline.label")}</span>
          </div>
          <div className="space-y-3">
            {timelines.map((tl, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  <span className="text-sm text-muted-foreground">{tl.label}</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{tl.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="model" className="relative py-24 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("entry.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("entry.title1")} <span className="text-gradient">{t("entry.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("entry.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((m) => (
            <StaggerItem key={m.title}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col shadow-lg border border-border/60 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <m.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{m.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{m.description}</p>
                <ul className="mt-auto space-y-3">
                  {m.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal variant="slideLeft">
            <ModelCard number={1} title={t("entry.detail1.title")} steps={model1Steps} timelines={model1Timelines} accent="primary" />
          </ScrollReveal>
          <ScrollReveal variant="slideRight">
            <ModelCard number={2} title={t("entry.detail2.title")} steps={model2Steps} timelines={model2Timelines} accent="accent" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 glass-card rounded-2xl border border-border p-8 max-w-5xl mx-auto card-shadow">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">{t("entry.shared")}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sharedServices.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EntryModelsSection;
