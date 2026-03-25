import { ExternalLink, Package, Truck, Star, BarChart3, ShoppingBag, Layers, ArrowRight, Eye, ShoppingCart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import imgEarbuds from "@/assets/products/earbuds.jpg";
import imgPowerbank from "@/assets/products/powerbank.jpg";
import imgLedLamp from "@/assets/products/led-lamp.jpg";
import imgRobotVacuum from "@/assets/products/robot-vacuum.jpg";
import imgFitnessBand from "@/assets/products/fitness-band.jpg";
import imgHumidifier from "@/assets/products/humidifier.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const MarketplacesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-primary text-sm font-semibold mb-5 border border-primary/10">
              <ShoppingBag className="w-4 h-4" />
              {t("mp.badge")}
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
              {t("mp.title1")}<span className="text-gradient"> {t("mp.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("mp.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Wildberries */}
          <ScrollReveal variant="slideLeft">
            <div className="glass-card rounded-2xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300 group">
              <div className="bg-[hsl(280,55%,50%)] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(280,60%,55%)] to-[hsl(300,45%,35%)]" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-white text-lg">W</div>
                      <h3 className="text-2xl font-extrabold text-white">Wildberries</h3>
                    </div>
                    <p className="text-white/70 text-sm">{t("mp.wb.sub")}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/50" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                  {[
                    { icon: BarChart3, value: "$25B+", label: t("mp.wb.s1.label") },
                    { icon: Package, value: t("mp.wb.s2.value"), label: t("mp.wb.s2.label") },
                    { icon: Truck, value: t("mp.wb.s3.value"), label: t("mp.wb.s3.label") },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-2 sm:p-3 rounded-xl bg-muted/50">
                      <s.icon className="w-4 h-4 text-muted-foreground mx-auto mb-1.5" />
                      <div className="text-lg sm:text-xl font-extrabold text-foreground">{s.value}</div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">{t("mp.wb.dashboard")}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: t("mp.wb.d1.label"), val: "₽2.4M", change: "+18%" },
                      { label: t("mp.wb.d2.label"), val: "1,240", change: "+12%" },
                      { label: t("mp.wb.d3.label"), val: "87%", change: "+3%" },
                      { label: t("mp.wb.d4.label"), val: "4.8", change: "★" },
                    ].map((d, i) => (
                      <div key={i} className="p-2 rounded-lg bg-card border border-border/50">
                        <div className="text-[10px] text-muted-foreground">{d.label}</div>
                        <div className="text-sm font-bold text-foreground">{d.val}</div>
                        <div className="text-[10px] text-accent font-semibold">{d.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-3">{t("mp.cards")}</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { name: t("mp.wb.p1.name"), price: "₽2,490", rating: "4.7", reviews: "12K", img: imgEarbuds },
                      { name: t("mp.wb.p2.name"), price: "₽1,890", rating: "4.8", reviews: "8K", img: imgPowerbank },
                      { name: t("mp.wb.p3.name"), price: "₽1,290", rating: "4.6", reviews: "5K", img: imgLedLamp },
                    ].map((p, i) => (
                      <div key={i} className={`rounded-lg border border-border bg-muted/20 p-3 ${i === 2 ? 'hidden sm:block' : ''}`}>
                        <div className="w-full h-20 rounded-md overflow-hidden mb-2">
                          <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[11px] font-medium text-foreground truncate">{p.name}</div>
                        <div className="text-sm font-bold text-foreground mt-0.5">{p.price}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[10px] text-muted-foreground">{p.rating} · {p.reviews}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {[t("mp.wb.c1"), t("mp.wb.c2"), t("mp.wb.c3"), t("mp.wb.c4"), t("mp.wb.c5")].map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-muted text-[11px] font-medium text-muted-foreground">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Ozon */}
          <ScrollReveal variant="slideRight">
            <div className="glass-card rounded-2xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300 group">
              <div className="bg-primary p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center font-extrabold text-primary-foreground text-lg">O</div>
                      <h3 className="text-2xl font-extrabold text-primary-foreground">Ozon</h3>
                    </div>
                    <p className="text-primary-foreground/70 text-sm">{t("mp.ozon.sub")}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary-foreground/50" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: BarChart3, value: "$18B+", label: t("mp.ozon.s1.label") },
                    { icon: Package, value: t("mp.ozon.s2.value"), label: t("mp.ozon.s2.label") },
                    { icon: Layers, value: t("mp.ozon.s3.value"), label: t("mp.ozon.s3.label") },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                      <s.icon className="w-4 h-4 text-muted-foreground mx-auto mb-1.5" />
                      <div className="text-xl font-extrabold text-foreground">{s.value}</div>
                      <div className="text-[11px] text-muted-foreground font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">{t("mp.ozon.dashboard")}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: t("mp.ozon.d1.label"), val: "₽3.1M", change: "+24%" },
                      { label: t("mp.ozon.d2.label"), val: "2,180", change: "+15%" },
                      { label: t("mp.ozon.d3.label"), val: "6.2%", change: "+1.1%" },
                      { label: t("mp.ozon.d4.label"), val: "340%", change: "↑" },
                    ].map((d, i) => (
                      <div key={i} className="p-2 rounded-lg bg-card border border-border/50">
                        <div className="text-[10px] text-muted-foreground">{d.label}</div>
                        <div className="text-sm font-bold text-foreground">{d.val}</div>
                        <div className="text-[10px] text-accent font-semibold">{d.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-3">{t("mp.cards")}</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { name: t("mp.ozon.p1.name"), price: "₽8,990", rating: "4.9", reviews: "22K", img: imgRobotVacuum },
                      { name: t("mp.ozon.p2.name"), price: "₽3,490", rating: "4.7", reviews: "15K", img: imgFitnessBand },
                      { name: t("mp.ozon.p3.name"), price: "₽2,690", rating: "4.8", reviews: "9K", img: imgHumidifier },
                    ].map((p, i) => (
                      <div key={i} className={`rounded-lg border border-border bg-muted/20 p-3 ${i === 2 ? 'hidden sm:block' : ''}`}>
                        <div className="w-full h-20 rounded-md overflow-hidden mb-2">
                          <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[11px] font-medium text-foreground truncate">{p.name}</div>
                        <div className="text-sm font-bold text-foreground mt-0.5">{p.price}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                          <span className="text-[10px] text-muted-foreground">{p.rating} · {p.reviews}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {[t("mp.ozon.c1"), t("mp.ozon.c2"), t("mp.ozon.c3"), t("mp.ozon.c4"), t("mp.ozon.c5")].map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-muted text-[11px] font-medium text-muted-foreground">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Order flow */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground">{t("mp.flow.title")}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t("mp.flow.sub")}</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 sm:gap-2">
              {[
                { icon: Eye, label: t("mp.flow.show"), sub: t("mp.flow.show.sub") },
                { icon: ShoppingCart, label: t("mp.flow.order"), sub: t("mp.flow.order.sub") },
                { icon: Package, label: t("mp.flow.pick"), sub: t("mp.flow.pick.sub") },
                { icon: Truck, label: t("mp.flow.delivery"), sub: t("mp.flow.delivery.sub") },
                { icon: Star, label: t("mp.flow.review"), sub: t("mp.flow.review.sub") },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
                  <div className="flex flex-col items-center text-center flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-1 sm:mb-2">
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground truncate w-full">{step.label}</div>
                    <div className="text-[10px] sm:text-[11px] text-muted-foreground truncate w-full">{step.sub}</div>
                  </div>
                  {i < 4 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/40 shrink-0 mt-[-16px]" />}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MarketplacesSection;
