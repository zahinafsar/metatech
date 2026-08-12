import type { Request, Response } from 'express';
import {
  clients,
  footer,
  hero,
  highlights,
  intro,
  navigation,
  pillars,
  showcase,
  showreel,
  techStack,
} from 'metatech-data';

export const getNavigation = (_req: Request, res: Response) => {
  res.json(navigation);
};

export const getHero = (_req: Request, res: Response) => {
  res.json(hero);
};

export const getShowreel = (_req: Request, res: Response) => {
  res.json(showreel);
};

export const getClients = (_req: Request, res: Response) => {
  res.json(clients);
};

export const getIntro = (_req: Request, res: Response) => {
  res.json(intro);
};

export const getPillars = (_req: Request, res: Response) => {
  res.json(pillars);
};

export const getHighlights = (_req: Request, res: Response) => {
  res.json(highlights);
};

export const getShowcase = (_req: Request, res: Response) => {
  res.json(showcase);
};

export const getTechStack = (_req: Request, res: Response) => {
  res.json(techStack);
};

export const getFooter = (_req: Request, res: Response) => {
  res.json(footer);
};
