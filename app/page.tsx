export default function Home() {
  return (
    <main data-testid="portfolio-root" className="min-h-screen flex flex-col items-center justify-center p-8 bg-portfolio-bg">
      <div className="max-w-2xl text-center space-y-6 p-12 border border-portfolio-sand bg-portfolio-cream shadow-sm">
        <h1 data-testid="design-system-title" className="text-4xl font-fell tracking-wide">
          Portfolio Design System Ready
        </h1>
        <p data-testid="design-system-subtitle" className="text-lg font-serif text-portfolio-muted">
          Fonts, CSS variables, breakpoints, layout, and project structure are successfully initialized.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <span className="px-3 py-1 bg-portfolio-sand text-xs font-sans tracking-wider uppercase" data-testid="tag-fonts">
            Custom Fonts Configured
          </span>
          <span className="px-3 py-1 bg-portfolio-sand text-xs font-sans tracking-wider uppercase" data-testid="tag-tailwind">
            Tailwind 3 + TypeScript
          </span>
          <span className="px-3 py-1 bg-portfolio-sand text-xs font-sans tracking-wider uppercase" data-testid="tag-motion">
            Framer Motion Ready
          </span>
        </div>
      </div>
    </main>
  );
}
