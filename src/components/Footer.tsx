import stripePartnerBadge from "@/assets/stripe-partner-badge.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 32 32" fill="none" className="text-primary-foreground">
                <rect x="14.5" y="22" width="3" height="6" rx="0.8" fill="currentColor" opacity="0.9"/>
                <polygon points="16,3 23,13 9,13" fill="currentColor" opacity="0.9"/>
                <polygon points="16,7 25,17 7,17" fill="currentColor" opacity="0.75"/>
                <polygon points="16,11 27,21 5,21" fill="currentColor" opacity="0.6"/>
                <line x1="12" y1="16" x2="8" y2="14" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
                <line x1="20" y1="16" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
                <circle cx="8" cy="14" r="1.5" fill="currentColor" opacity="0.9"/>
                <circle cx="24" cy="14" r="1.5" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-display font-bold text-foreground">AppTree</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://marketplace.stripe.com/apps/invoice-and-customer-uploader" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
              Stripe Marketplace
            </a>
            <a href="mailto:support@apptree.biz" className="hover:text-foreground transition-colors duration-200">
              Support
            </a>
          </div>

          <div className="flex items-center gap-6">
            <img src={stripePartnerBadge} alt="Stripe Certified Partner" className="h-8" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AppTree LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
