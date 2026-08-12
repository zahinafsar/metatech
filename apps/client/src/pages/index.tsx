import {
  Clients,
  Hero,
  Highlights,
  Intro,
  Pillars,
  Showcase,
  Showreel,
  SiteFooter,
  SiteHeader,
  TechStack,
} from '../sections';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-btn focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        <div className="bg-deep text-deep-foreground">
          <Hero />
          <Showreel />
          <Clients />
        </div>

        <Intro />

        <Pillars>
          <Highlights />
          <Showcase />
        </Pillars>

        <TechStack />
      </main>

      <SiteFooter />
    </div>
  );
}
