import stripePartnerBadge from "@/assets/stripe-partner-badge.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none" className="text-primary-foreground">
                <polygon points="16,3 12,9 20,9" fill="currentColor" opacity="0.5"/>
                <polygon points="16,6 11,12 21,12" fill="currentColor" opacity="0.6"/>
                <polygon points="16,9 10,15 22,15" fill="currentColor" opacity="0.7"/>
                <polygon points="16,12 9,18 23,18" fill="currentColor" opacity="0.8"/>
                <polygon points="16,15 8,21 24,21" fill="currentColor" opacity="0.85"/>
                <polygon points="16,18 7,24 25,24" fill="currentColor" opacity="0.9"/>
                <rect x="14" y="24" width="4" height="4" rx="1" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-display font-bold text-foreground">AppTree</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://marketplace.stripe.com/apps/invoice-and-customer-uploader" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
              Stripe Marketplace
            </a>
            <a href="/support" className="hover:text-foreground transition-colors duration-200">
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
