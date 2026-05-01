import { FileText, Zap, Shield, BarChart3, Users } from "lucide-react";
import uploaderIcon from "@/assets/app-icons/uploader.png";
import zendeskIcon from "@/assets/app-icons/zendesk.png";
import slackIcon from "@/assets/app-icons/slack.png";

const features = [
  {
    image: uploaderIcon,
    title: "Invoice & Customer Bulk Upload",
    description: "Move all your data to Stripe using this simple-to-use app. Upload invoices, customers, and line items in bulk with CSV imports.",
    badge: "Live",
    link: "https://marketplace.stripe.com/apps/invoice-and-customer-uploader",
  },
  {
    image: zendeskIcon,
    title: "Zendesk Connector for Stripe",
    description: "Bring Stripe customer and billing data directly into Zendesk. Give your support team instant context on payments, invoices, and subscriptions.",
    badge: "Live",
    link: "https://marketplace.stripe.com/apps/apptree-invoice-template-builder",
  },
  {
    image: slackIcon,
    title: "Slack Connector for Stripe",
    description: "Get real-time Stripe notifications and customer lookups in Slack. Keep your team in the loop on payments, disputes, and new customers.",
    badge: "Live",
    link: "https://marketplace.stripe.com/apps/slack-connector",
  },
  {
    icon: FileText,
    title: "Invoice Template Builder",
    description: "Build custom templates for Stripe Invoicing with a visual editor. Brand your invoices, add custom fields, and save reusable templates.",
    badge: "Coming Soon",
  },
  {
    icon: Zap,
    title: "Instant Data Migration",
    description: "Migrate your existing billing data to Stripe in minutes, not days. No coding required — just upload and go.",
  },
  {
    icon: Shield,
    title: "Stripe Verified Partner",
    description: "Built by a Stripe Verified Partner. Our apps meet Stripe's highest standards for security, reliability, and user experience.",
  },
  {
    icon: BarChart3,
    title: "Smart Validation",
    description: "Automatic data validation catches errors before they hit Stripe. Preview your imports and fix issues inline.",
  },
  {
    icon: Users,
    title: "Team Ready",
    description: "Works with Stripe's team permissions. Your whole team can manage uploads and templates with the right access controls.",
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Everything you need to{" "}
            <span className="gradient-text">scale on Stripe</span>
          </h2>
          <p className="text-lg text-body">
            Purpose-built tools that integrate directly into your Stripe Dashboard. No context switching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card-elevated p-6 group">
              {feature.image ? (
                <div className="w-12 h-12 rounded-lg overflow-hidden mb-4 ring-1 ring-border">
                  <img src={feature.image} alt={`${feature.title} icon`} className="w-full h-full object-cover" />
                </div>
              ) : feature.icon ? (
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              ) : null}

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display font-bold text-lg text-foreground">{feature.title}</h3>
                {feature.badge && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    feature.badge === "Live"
                      ? "bg-accent/10 text-accent"
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    {feature.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-body leading-relaxed">{feature.description}</p>

              {feature.link && (
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  View on Stripe Marketplace →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
