import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary" />
              <span className="text-lg font-bold text-primary-foreground font-display">RuMarket</span>
            </div>
            <p className="text-sm text-primary-foreground/40 leading-relaxed max-w-xs">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary-foreground/60 mb-4 uppercase tracking-wider font-display">{t("footer.sections")}</h4>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/40">
              <a href="#market" className="hover:text-primary-foreground/70 transition-colors">{t("footer.market")}</a>
              <a href="#model" className="hover:text-primary-foreground/70 transition-colors">{t("footer.models")}</a>
              <a href="#process" className="hover:text-primary-foreground/70 transition-colors">{t("footer.process")}</a>
              <a href="#economics" className="hover:text-primary-foreground/70 transition-colors">{t("footer.economics")}</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary-foreground/60 mb-4 uppercase tracking-wider font-display">{t("footer.contacts")}</h4>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/40">
              <a href="#services" className="hover:text-primary-foreground/70 transition-colors">{t("footer.services")}</a>
              <a href="#infrastructure" className="hover:text-primary-foreground/70 transition-colors">{t("footer.infrastructure")}</a>
              <a href="#team" className="hover:text-primary-foreground/70 transition-colors">{t("footer.team")}</a>
              <a href="#contact" className="hover:text-primary-foreground/70 transition-colors">{t("footer.contactLink")}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/30">{t("footer.rights")}</p>
          <div className="flex gap-6 text-xs text-primary-foreground/30">
            <span>WeChat: RuMarket_Official</span>
            <span>partners@rumarket.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
