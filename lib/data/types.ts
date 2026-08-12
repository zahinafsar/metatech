import type {
  clients,
  footer,
  hero,
  highlights,
  home,
  intro,
  navigation,
  pillars,
  showcase,
  showreel,
  techStack,
} from './home.ts';

export type Home = typeof home;
export type SectionKey = keyof Home;

export type Navigation = typeof navigation;
export type NavigationLink = Navigation['links'][number];
export type NavigationCard = Navigation['solutions']['cards'][number];

export type Hero = typeof hero;
export type Showreel = typeof showreel;

export type Clients = typeof clients;
export type ClientLogo = Clients['logos'][number];

export type Intro = typeof intro;
export type Pillar = (typeof pillars)[number];
export type Highlight = (typeof highlights)[number];

export type Showcase = typeof showcase;
export type ShowcaseSlide = Showcase['slides'][number];

export type TechStack = typeof techStack;
export type TechItem = TechStack['rows'][number][number];

export type Footer = typeof footer;
export type FooterLink = Footer['links'][number];

export type ApiErrorBody = {
  error: {
    message: string;
    status: number;
  };
};
