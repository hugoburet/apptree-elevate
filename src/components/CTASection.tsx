import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-2xl p-12 md:p-16 relative overflow-hidden" style={{ backgroundImage: "var(--gradient-primary)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              Ready to streamline your Stripe workflow?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join hundreds of businesses using AppTree to manage their Stripe data more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://marketplace.stripe.com/apps/invoice-and-customer-uploader"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-card text-foreground hover:bg-card/90 transition-colors duration-200"
              >
                Install from Stripe
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@apptree.biz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors duration-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
