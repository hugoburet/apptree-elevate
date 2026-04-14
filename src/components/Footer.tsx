import stripePartnerBadge from "@/assets/stripe-partner-badge.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <rect x="10" y="16" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
                <polygon points="12,2 19,12 5,12" fill="currentColor" opacity="0.9"/>
                <polygon points="12,5 21,15 3,15" fill="currentColor" opacity="0.7"/>
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
