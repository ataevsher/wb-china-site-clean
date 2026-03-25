import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useState } from "react";
import SectionBg from "./SectionBg";
import bgWarehouse from "@/assets/bg-warehouse.jpg";
import wechatQrContact from "@/assets/wechat-qr-contact.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "@/components/ui/use-toast";

const WECHAT_ID = "RuMarket_Official";
const CONTACT_EMAIL = "partner@rumarket.com";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`${t("contact.mail.subject")} — ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      [
        `${t("contact.name")}: ${formData.name}`,
        `${t("contact.company")}: ${formData.company}`,
        `${t("contact.phone")}: ${formData.phone}`,
        `${t("contact.email")}: ${formData.email}`,
        "",
        `${t("contact.mail.details")}:`,
        formData.message || "-",
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: t("contact.toast.submit.title"),
      description: t("contact.toast.submit.desc"),
    });
  };

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      toast({
        title: t("contact.toast.copy.title"),
        description: t("contact.toast.copy.desc"),
      });
    } catch {
      toast({
        title: t("contact.toast.copyError.title"),
        description: t("contact.toast.copyError.desc"),
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    { icon: Mail, value: CONTACT_EMAIL, sub: t("contact.email.sub") },
    { icon: Phone, value: "+7 (495) 123-45-67", sub: t("contact.phone.sub") },
    { icon: MapPin, value: t("contact.office.value"), sub: t("contact.office.sub") },
  ];

  const trustBadges = [
    { icon: Clock, text: t("contact.trust1") },
    { icon: Send, text: t("contact.trust2") },
    { icon: MessageCircle, text: t("contact.trust3") },
  ];

  const nextSteps = [t("contact.next.s1"), t("contact.next.s2"), t("contact.next.s3")];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <SectionBg src={bgWarehouse} opacity={0.72} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">{t("contact.badge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              {t("contact.title1")} <br /> <span className="text-gradient">{t("contact.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid xl:grid-cols-[minmax(0,1.2fr)_360px] gap-8 max-w-6xl mx-auto mb-10">
          <ScrollReveal variant="slideLeft">
            <form onSubmit={handleSubmit} className="glass-card rounded-[28px] border p-6 md:p-8 card-shadow">
              <h3 className="text-lg font-bold text-foreground mb-6 font-display">{t("contact.formTitle")}</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.name")}</label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.namePh")}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.company")}</label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.companyPh")}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.phone")}</label>
                  <input
                    type="tel"
                    required
                    placeholder={t("contact.phonePh")}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    placeholder={t("contact.emailPh")}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                <textarea
                  rows={4}
                  placeholder={t("contact.messagePh")}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full py-6 text-base rounded-xl" size="lg">
                <Send className="w-5 h-5 mr-2" />
                {t("contact.submit")}
              </Button>
              <p className="text-[11px] text-muted-foreground text-center mt-4">{t("contact.consent")}</p>
            </form>
          </ScrollReveal>

          <ScrollReveal variant="slideRight">
            <div className="space-y-6 h-full">
              <div className="bg-[hsl(142_70%_45%)] rounded-[28px] p-6 text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-7 h-7" />
                    <div>
                      <h3 className="text-lg font-bold font-display">{t("contact.wechat")}</h3>
                      <p className="text-primary-foreground/70 text-xs">{t("contact.wechat.sub")}</p>
                    </div>
                  </div>
                  <div className="bg-primary-foreground rounded-xl p-2 mb-4 flex items-center justify-center">
                    <img
                      src={wechatQrContact}
                      alt={t("contact.wechat")}
                      width={560}
                      height={560}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold">{WECHAT_ID}</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">{t("contact.wechat.desc")}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    <Button type="button" variant="secondary" className="rounded-xl" onClick={handleCopyWechat}>
                      {t("contact.action.copyWechat")}
                    </Button>
                    <Button type="button" variant="secondary" className="rounded-xl" asChild>
                      <a href={`mailto:${CONTACT_EMAIL}`}>{t("contact.action.email")}</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[28px] border border-border p-6 card-shadow">
                <h3 className="text-base font-bold text-foreground mb-4">{t("contact.next.title")}</h3>
                <div className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {contactInfo.map((item) => (
              <div key={item.value} className="glass-card rounded-2xl border p-5 card-shadow flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mt-8">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="glass-card rounded-xl border border-border px-5 py-3 card-shadow flex items-center gap-2.5">
                <badge.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;
