import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
              <rect x="10" y="16" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
              <polygon points="12,2 19,12 5,12" fill="currentColor" opacity="0.9"/>
              <polygon points="12,5 21,15 3,15" fill="currentColor" opacity="0.7"/>
              <circle cx="9" cy="9" r="1" fill="hsl(152 60% 36%)"/>
              <circle cx="15" cy="9" r="1" fill="hsl(152 60% 36%)"/>
              <circle cx="12" cy="6.5" r="1" fill="hsl(152 60% 36%)"/>
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
