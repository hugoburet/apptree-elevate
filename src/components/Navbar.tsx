import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="text-primary-foreground">
              <polygon points="16,2 10,12 22,12" fill="currentColor" opacity="0.6"/>
              <polygon points="16,5 9,15 23,15" fill="currentColor" opacity="0.7"/>
              <polygon points="16,8 8,18 24,18" fill="currentColor" opacity="0.8"/>
              <polygon points="16,11 7,21 25,21" fill="currentColor" opacity="0.9"/>
              <rect x="14" y="21" width="4" height="5" rx="1" fill="currentColor" opacity="0.9"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl text-foreground">AppTree</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="https://marketplace.stripe.com/apps/invoice-and-customer-uploader" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Apps
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
            Features
          </a>
          <a href="mailto:support@apptree.biz" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors duration-200">
            Contact Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
