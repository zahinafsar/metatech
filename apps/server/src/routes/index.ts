import { Router } from 'express';

import {
  getClients,
  getFooter,
  getHero,
  getHighlights,
  getIntro,
  getNavigation,
  getPillars,
  getShowcase,
  getShowreel,
  getTechStack,
} from '../controllers/index.ts';

const router = Router();

router.get('/navigation', getNavigation);
router.get('/hero', getHero);
router.get('/showreel', getShowreel);
router.get('/clients', getClients);
router.get('/intro', getIntro);
router.get('/pillars', getPillars);
router.get('/highlights', getHighlights);
router.get('/showcase', getShowcase);
router.get('/tech-stack', getTechStack);
router.get('/footer', getFooter);

export { router };
