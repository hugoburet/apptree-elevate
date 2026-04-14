import stripePartnerBadge from "@/assets/stripe-partner-badge.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="4 1 24 30" fill="none" className="text-primary-foreground">
                <rect x="14" y="25" width="4" height="4.5" rx="0.8" fill="currentColor" opacity="0.85"/>
                <polygon points="16,2 21,10 11,10" fill="currentColor" opacity="0.95"/>
                <polygon points="16,6 22.5,15 9.5,15" fill="currentColor" opacity="0.82"/>
                <polygon points="16,10 24.5,20 7.5,20" fill="currentColor" opacity="0.7"/>
                <polygon points="16,14 26.5,25 5.5,25" fill="currentColor" opacity="0.58"/>
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
