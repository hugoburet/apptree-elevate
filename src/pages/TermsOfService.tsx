import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using AppTree, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">2. Description of Service</h2>
              <p>
                AppTree provides tools and integrations for the Stripe platform, including but not limited to customer and invoice data import functionality. All services are provided on an "as is" and "as available" basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">3. Stripe Account Required</h2>
              <p>
                To use AppTree, you must have an active Stripe account and comply with Stripe’s Terms of Service. AppTree acts solely as an integration partner and does not replace or override any Stripe agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">4. Data Handling & Privacy</h2>
              <p>
                We take data privacy seriously. AppTree does not store or retain any sensitive customer or financial data processed through our integrations. For more details, please refer to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">5. Intellectual Property</h2>
              <p>
                All content, branding, and software related to AppTree are the intellectual property of AppTree. You may not reproduce, distribute, or create derivative works without express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, AppTree shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">8. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@apptree.biz" className="text-primary hover:underline">
                  support@apptree.biz
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
