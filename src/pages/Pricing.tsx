import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Check } from "lucide-react";

const SLACK_MARKETPLACE_URL = "https://marketplace.stripe.com/apps/slack-connector";

const monthlyFeatures = [
  "Unlimited Slack workspaces",
  "Real-time Stripe event notifications",
  "Customizable channel routing",
  "Email support",
];

const yearlyFeatures = [
  "Everything in Monthly",
  "2 months free ($16 savings)",
  "Priority email support",
  "Early access to new features",
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-5">
              Slack Connector Pricing
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple pricing for{" "}
              <span className="gradient-text">Slack Connector</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start with 50 free notifications per account. Upgrade anytime to keep your team in sync with Stripe.
            </p>
          </div>

          {/* Free trial banner */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-7 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Free trial included
              </h3>
              <p className="text-sm text-muted-foreground">
                Every account gets <span className="text-foreground font-medium">50 notifications free</span> — no credit card required.
              </p>
            </div>
            <a
              href={SLACK_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline whitespace-nowrap"
            >
              Start free trial
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Monthly */}
            <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">Monthly</h3>
                <p className="text-sm text-muted-foreground">Flexible, cancel anytime</p>
              </div>
              <div className="mb-6">
                <span className="font-display text-5xl font-extrabold text-foreground">$5</span>
                <span className="text-muted-foreground ml-2">/ month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {monthlyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SLACK_MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-foreground bg-muted hover:bg-muted/80 transition-colors duration-200"
              >
                Install from Stripe
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Yearly */}
            <div
              className="rounded-2xl p-[1px] relative"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground" style={{ backgroundImage: "var(--gradient-primary)" }}>
                Best value — Save 27%
              </div>
              <div className="rounded-2xl bg-card p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">Yearly</h3>
                  <p className="text-sm text-muted-foreground">Billed annually</p>
                </div>
                <div className="mb-6">
                  <span className="font-display text-5xl font-extrabold text-foreground">$44</span>
                  <span className="text-muted-foreground ml-2">/ year</span>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <span className="line-through">$60</span>{" "}
                    <span className="text-primary font-medium">— $16 off</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {yearlyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={SLACK_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Install from Stripe
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* AppTree user discount */}
          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Already an AppTree customer?
            </h3>
            <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
              Existing AppTree users get an additional discount on the Slack Connector. Just send us a quick email and we'll set you up.
            </p>
            <a
              href="mailto:support@apptree.biz?subject=AppTree%20user%20discount%20—%20Slack%20Connector"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-foreground bg-card border border-border hover:bg-muted transition-colors duration-200"
            >
              Email support@apptree.biz
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
