import { TrendingUp, DollarSign, Target, Headphones, Package, Truck, Store, BadgePercent, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const EconomicsSection = () => {
  const { t } = useLanguage();

  const costBreakdown = [
    { label: t("econ.cost.china"), value: "$6", percent: 31.6, icon: Package, color: "bg-primary" },
    { label: t("econ.cost.logistics"), value: "$3", percent: 15.8, icon: Truck, color: "bg-accent" },
    { label: t("econ.cost.commission"), value: "$2", percent: 10.5, icon: Store, color: "bg-primary/70" },
    { label: t("econ.cost.ops"), value: "$3", percent: 15.8, icon: BadgePercent, color: "bg-muted-foreground/50" },
  ];

  const revenueProjection = [
    { year: t("econ.rev.y1"), revenue: "$120K", bar: 10 },
    { year: t("econ.rev.y2"), revenue: "$480K", bar: 40 },
    { year: t("econ.rev.y3"), revenue: "$1.2M", bar: 100 },
  ];

  const roiTimeline = [
    { month: t("econ.roi.m1"), label: t("econ.roi.invest"), status: "invest" },
    { month: t("econ.roi.m2"), label: t("econ.roi.breakeven"), status: "breakeven" },
    { month: t("econ.roi.m3"), label: t("econ.roi.profit"), status: "profit" },
  ];

  return (
    <section id="economics" className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("econ.badge")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t("econ.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("econ.subtitle")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: DollarSign, label: t("econ.invest.label"), value: "$8,000", sub: t("econ.invest.sub") },
            { icon: Target, label: t("econ.breakeven.label"), value: t("econ.breakeven.value"), sub: t("econ.breakeven.sub") },
            { icon: TrendingUp, label: t("econ.profit.label"), value: t("econ.profit.value"), sub: t("econ.profit.sub") },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <div className="glass-card rounded-2xl border border-border p-6 card-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ScrollReveal variant="slideLeft">
            <div className="glass-card rounded-2xl border border-border p-8 card-shadow h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t("econ.case.title")}</h3>
                  <p className="text-xs text-muted-foreground">{t("econ.case.sub")}</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {costBreakdown.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.value}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-primary/20 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">{t("econ.sellPrice")}</span>
                  <span className="text-lg font-bold text-foreground">$19</span>
                </div>
                <div className="flex justify-between items-center bg-primary/5 rounded-xl p-3">
                  <span className="font-bold text-foreground">{t("econ.netProfit")}</span>
                  <span className="text-xl font-bold text-accent">$5+ (26%)</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <div className="glass-card rounded-2xl border border-border p-8 card-shadow h-full">
              <h3 className="text-lg font-bold text-foreground mb-6">{t("econ.revenue.title")}</h3>
              <div className="space-y-6 mb-8">
                {revenueProjection.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-foreground">{item.year}</span>
                      <span className="text-lg font-bold text-foreground">{item.revenue}</span>
                    </div>
                    <div className="h-4 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <h4 className="text-sm font-bold text-foreground mb-4">{t("econ.roi.title")}</h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                {roiTimeline.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1">
                    <div className={`flex-1 rounded-lg p-3 text-center ${item.status === "invest" ? "bg-muted" : item.status === "breakeven" ? "bg-primary/10" : "bg-accent/10"}`}>
                      <div className={`text-xs font-bold mb-0.5 ${item.status === "profit" ? "text-accent" : "text-foreground"}`}>{item.month}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{item.label}</div>
                    </div>
                    {i < roiTimeline.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 hidden sm:block" />}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="scaleIn">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl border border-border p-8 card-shadow">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">{t("econ.priceBar")}</h3>
              <div className="flex h-8 sm:h-10 rounded-xl overflow-hidden text-[9px] sm:text-xs">
                <div className="bg-primary flex items-center justify-center text-primary-foreground font-semibold" style={{ width: "31.6%" }}>$6</div>
                <div className="bg-accent flex items-center justify-center text-accent-foreground font-semibold" style={{ width: "15.8%" }}>$3</div>
                <div className="bg-primary/60 flex items-center justify-center text-primary-foreground font-semibold" style={{ width: "10.5%" }}>$2</div>
                <div className="bg-muted-foreground/40 flex items-center justify-center text-foreground font-semibold" style={{ width: "15.8%" }}>$3</div>
                <div className="bg-accent flex items-center justify-center text-accent-foreground font-bold" style={{ width: "26.3%" }}>$5</div>
              </div>
              <div className="flex mt-2 text-[9px] sm:text-[10px] text-muted-foreground">
                <div style={{ width: "31.6%" }}>{t("econ.priceBar.product")}</div>
                <div style={{ width: "15.8%" }}>{t("econ.priceBar.logistics")}</div>
                <div style={{ width: "10.5%" }}>{t("econ.priceBar.commission")}</div>
                <div style={{ width: "15.8%" }}>{t("econ.priceBar.ops")}</div>
                <div style={{ width: "26.3%" }} className="text-accent font-semibold">{t("econ.priceBar.profit")}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EconomicsSection;
