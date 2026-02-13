import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { LoveSiteLayout } from './components/LoveSiteLayout';
import HomePage from './pages/01-Home';
import TheFirstMoment from './pages/02-TheFirstMoment';
import HowIFellForYou from './pages/03-HowIFellForYou';
import YourKindness from './pages/04-YourKindness';
import TheLittleThings from './pages/05-TheLittleThings';
import WhenIRealizedItWasLove from './pages/06-WhenIRealizedItWasLove';
import WhatYouMeanToMe from './pages/07-WhatYouMeanToMe';
import MyTrueConfession from './pages/08-MyTrueConfession';
import MyPromiseToYou from './pages/09-MyPromiseToYou';
import FinalPage from './pages/10-FinalPage';

const rootRoute = createRootRoute({
  component: LoveSiteLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const firstMomentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/the-first-moment',
  component: TheFirstMoment,
});

const howIFellRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/how-i-fell-for-you',
  component: HowIFellForYou,
});

const yourKindnessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/your-kindness',
  component: YourKindness,
});

const littleThingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/the-little-things',
  component: TheLittleThings,
});

const realizedLoveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/when-i-realized-it-was-love',
  component: WhenIRealizedItWasLove,
});

const whatYouMeanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/what-you-mean-to-me',
  component: WhatYouMeanToMe,
});

const trueConfessionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-true-confession',
  component: MyTrueConfession,
});

const myPromiseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-promise-to-you',
  component: MyPromiseToYou,
});

const finalPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/will-you-be-mine',
  component: FinalPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  firstMomentRoute,
  howIFellRoute,
  yourKindnessRoute,
  littleThingsRoute,
  realizedLoveRoute,
  whatYouMeanRoute,
  trueConfessionRoute,
  myPromiseRoute,
  finalPageRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
