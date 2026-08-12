import type {
  Clients,
  Footer,
  Hero,
  Highlight,
  Intro,
  Navigation,
  Pillar,
  Showcase,
  Showreel,
  TechStack,
} from 'metatech-data';
import { useApi } from 'metatech-state';

export const useNavigationState = () => useApi<Navigation>('/navigation');

export const useHeroState = () => useApi<Hero>('/hero');

export const useShowreelState = () => useApi<Showreel>('/showreel');

export const useClientsState = () => useApi<Clients>('/clients');

export const useIntroState = () => useApi<Intro>('/intro');

export const usePillarsState = () => useApi<Pillar[]>('/pillars');

export const useHighlightsState = () => useApi<Highlight[]>('/highlights');

export const useShowcaseState = () => useApi<Showcase>('/showcase');

export const useTechStackState = () => useApi<TechStack>('/tech-stack');

export const useFooterState = () => useApi<Footer>('/footer');
