import stripePartnerBadge from "@/assets/stripe-partner-badge.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-display font-bold text-foreground">AppTree</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://marketplace.stripe.com/apps/invoice-uploader" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors duration-200">
              Stripe Marketplace
            </a>
            <a href="mailto:support@apptree.biz" className="hover:text-foreground transition-colors duration-200">
              Support
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AppTree LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
