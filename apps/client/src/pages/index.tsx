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
      <SiteHeader />

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

      <SiteFooter />
    </div>
  );
}
