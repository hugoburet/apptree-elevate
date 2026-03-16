import edubexLogo from "@/assets/logos/edubex.png";
import mindfulcareLogo from "@/assets/logos/mindfulcare.png";
import logo6 from "@/assets/logos/logo6.png";

const logos = [
  { name: "Edubex", src: edubexLogo },
  { name: "Uscreen", src: null },
  { name: "Revel", src: null },
  { name: "Mindful Care", src: mindfulcareLogo },
  { name: "Inspired", src: null },
  { name: "", src: logo6 },
];

const LogoMarquee = () => {
  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by businesses using Stripe worldwide
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-12 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name || "Customer logo"}
                  className="h-8 w-auto object-contain max-w-[160px]"
                />
              ) : (
                <span className="text-lg font-bold text-muted-foreground font-display tracking-tight">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
