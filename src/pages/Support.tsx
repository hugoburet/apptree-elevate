import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ArrowUpRight } from "lucide-react";

const supportSchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  subject: z.string().trim().nonempty({ message: "Please enter a subject" }).max(150),
  message: z.string().trim().nonempty({ message: "Please enter a message" }).max(2000),
});

const Support = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = supportSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = result.data;
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:support@apptree.biz?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast({ title: "Opening your email app", description: "Your message is ready to send." });
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How can we help?
            </h1>
            <p className="text-muted-foreground text-lg">
              Send us a message and our team will get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={update("name")} maxLength={100} />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={update("email")} maxLength={255} />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" value={form.subject} onChange={update("subject")} maxLength={150} />
              {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} value={form.message} onChange={update("message")} maxLength={2000} />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send message
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            <p className="text-sm text-muted-foreground pt-2">
              Prefer email? Reach us directly at{" "}
              <a href="mailto:support@apptree.biz" className="text-primary hover:underline">
                support@apptree.biz
              </a>
              .
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
