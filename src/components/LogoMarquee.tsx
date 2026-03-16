const logos = [
  { name: "Notion", svg: "M7.5 2.5h9v19l-9-6.5V2.5zm-3 0h3v12.5l-3-2.17V2.5z" },
  { name: "Linear", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" },
  { name: "Vercel", svg: "M12 2L2 22h20L12 2z" },
  { name: "Figma", svg: "M12 2H8.5A3.5 3.5 0 005 5.5 3.5 3.5 0 008.5 9H12V2zm0 7H8.5A3.5 3.5 0 005 12.5 3.5 3.5 0 008.5 16H12V9zm0 7h-3.5A3.5 3.5 0 005 19.5 3.5 3.5 0 008.5 23 3.5 3.5 0 0012 19.5V16zm0-7h3.5A3.5 3.5 0 0019 12.5 3.5 3.5 0 0015.5 16H12V9z" },
  { name: "Slack", svg: "M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" },
  { name: "Stripe", svg: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.918 3.757 7.076c0 4.072 2.486 5.851 6.387 7.283 2.576 1.004 3.462 1.672 3.462 2.712 0 .981-.846 1.595-2.293 1.595-1.86 0-4.726-.89-6.64-2.12l-.894 5.555C5.376 23.237 8.268 24 11.37 24c2.645 0 4.828-.647 6.35-1.87 1.688-1.353 2.523-3.267 2.523-5.604 0-4.147-2.546-5.912-6.267-7.376z" },
  { name: "Shopify", svg: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.035-.03-.066-.042-.1-.053l-.982 22.914z" },
  { name: "HubSpot", svg: "M16.75 7.637V4.462a2.587 2.587 0 001.528-2.355A2.603 2.603 0 0015.681 0a2.603 2.603 0 00-2.597 2.107 2.587 2.587 0 001.528 2.355v3.175a6.26 6.26 0 00-3.037 1.37L4.6 3.585A2.63 2.63 0 004.67 3a2.598 2.598 0 10-2.597 2.597c.425 0 .823-.108 1.177-.292l6.843 5.426a6.247 6.247 0 00-.834 3.117c0 1.225.355 2.37.962 3.337l-2.17 2.17a2.09 2.09 0 00-.662-.116 2.13 2.13 0 102.13 2.13c0-.234-.046-.458-.117-.663l2.13-2.13A6.262 6.262 0 0022 13.848c0-3.017-2.14-5.54-4.993-6.136z" },
];

const LogoMarquee = () => {
  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by teams using Stripe worldwide
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              <div className="flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
                  <path d={logo.svg} />
                </svg>
                <span className="text-base font-semibold text-muted-foreground font-display">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
