import { ArrowUpRight, CheckCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(239 84% 67% / 0.12), transparent 70%)" }} />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            Stripe Verified Partner
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Powerful apps for the{" "}
            <span className="gradient-text">Stripe Ecosystem</span>
          </h1>

          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Simplify your business operations with specialized tools built natively for Stripe. Upload invoices, manage customers, and automate workflows — all from your Stripe Dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a
              href="https://marketplace.stripe.com/apps/invoice-uploader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              View on Stripe Marketplace
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:support@apptree.biz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-foreground bg-card border border-border hover:bg-muted transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-glow), var(--shadow-elevated)" }}>
            <img
              src={heroDashboard}
              alt="AppTree Dashboard - Invoice management for Stripe"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
