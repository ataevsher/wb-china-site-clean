import {
  ClipboardList,
  Factory,
  Megaphone,
  Search,
  ShieldCheck,
  Ship,
  Store,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgMapRoutes from "@/assets/bg-map-routes.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const LaunchProcessSection = () => {
  const { t } = useLanguage();

  const summarySteps = [
    { title: t("launch.summary.s1.title"), desc: t("launch.summary.s1.desc") },
    { title: t("launch.summary.s2.title"), desc: t("launch.summary.s2.desc") },
    { title: t("launch.summary.s3.title"), desc: t("launch.summary.s3.desc") },
    { title: t("launch.summary.s4.title"), desc: t("launch.summary.s4.desc") },
  ];

  const phases = [
    {
      phase: t("launch.phase1"),
      color: "primary",
      steps: [
        { icon: Search, title: t("launch.p1s1.title"), desc: t("launch.p1s1.desc"), time: t("launch.p1s1.time") },
        { icon: ClipboardList, title: t("launch.p1s2.title"), desc: t("launch.p1s2.desc"), time: t("launch.p1s2.time") },
      ],
    },
    {
      phase: t("launch.phase2"),
      color: "accent",
      steps: [
        { icon: Factory, title: t("launch.p2s1.title"), desc: t("launch.p2s1.desc"), time: t("launch.p2s1.time") },
        { icon: Ship, title: t("launch.p2s2.title"), desc: t("launch.p2s2.desc"), time: t("launch.p2s2.time") },
        { icon: ShieldCheck, title: t("launch.p2s3.title"), desc: t("launch.p2s3.desc"), time: t("launch.p2s3.time") },
      ],
    },
    {
      phase: t("launch.phase3"),
      color: "primary",
      steps: [
        { icon: Store, title: t("launch.p3s1.title"), desc: t("launch.p3s1.desc"), time: t("launch.p3s1.time") },
        { icon: Megaphone, title: t("launch.p3s2.title"), desc: t("launch.p3s2.desc"), time: t("launch.p3s2.time") },
        { icon: TrendingUp, title: t("launch.p3s3.title"), desc: t("launch.p3s3.desc"), time: t("launch.p3s3.time") },
      ],
    },
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <SectionBg src={bgMapRoutes} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("launch.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("launch.title1")} <span className="text-gradient">{t("launch.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("launch.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="glass-card rounded-[28px] border border-border p-6 md:p-8 card-shadow">
              <div className="max-w-3xl mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t("launch.summary.title")}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t("launch.summary.subtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                {summarySteps.map((step, index) => (
                  <div key={step.title} className="relative rounded-2xl border border-border/70 bg-background/70 p-5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto space-y-8">
          {phases.map((phase, phaseIndex) => (
            <ScrollReveal key={phase.phase} delay={phaseIndex * 0.12}>
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl ${phase.color === "primary" ? "bg-primary" : "bg-accent"} flex items-center justify-center`}>
                    <span className="text-sm font-bold text-primary-foreground">{phaseIndex + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                  {phaseIndex < phases.length - 1 && <div className="flex-1 h-px bg-border ml-4" />}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pl-0 sm:pl-12">
                  {phase.steps.map((step) => (
                    <div key={step.title} className="glass-card rounded-2xl border border-border p-5 card-shadow hover:card-shadow-hover transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${phase.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center shrink-0`}>
                          <step.icon className={`w-5 h-5 ${phase.color === "primary" ? "text-primary" : "text-accent"}`} />
                        </div>
                        <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${phase.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                          {step.time}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-foreground mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="max-w-5xl mx-auto mt-12">
            <div className="glass-card rounded-2xl border border-border p-6 card-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h4 className="text-sm font-bold text-foreground">{t("launch.total")}</h4>
                <span className="text-lg font-extrabold text-primary">{t("launch.total.value")}</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
                <div className="bg-primary/80 rounded-l-full" style={{ width: "20%" }} />
                <div className="bg-accent/80" style={{ width: "50%" }} />
                <div className="bg-primary rounded-r-full" style={{ width: "30%" }} />
              </div>
              <div className="flex mt-2 text-[10px] text-muted-foreground">
                <div style={{ width: "20%" }}>{t("launch.bar.prep")}</div>
                <div style={{ width: "50%" }}>{t("launch.bar.log")}</div>
                <div style={{ width: "30%" }}>{t("launch.bar.launch")}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LaunchProcessSection;
