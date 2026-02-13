export interface LovePage {
  id: number;
  path: string;
  title: string;
  shortTitle: string;
}

export const lovePages: LovePage[] = [
  {
    id: 1,
    path: '/',
    title: 'From My Heart to Yours 💌',
    shortTitle: 'Home',
  },
  {
    id: 2,
    path: '/the-first-moment',
    title: 'The First Moment ✨',
    shortTitle: 'First Moment',
  },
  {
    id: 3,
    path: '/how-i-fell-for-you',
    title: 'How I Fell for You 🌸',
    shortTitle: 'How I Fell',
  },
  {
    id: 4,
    path: '/your-kindness',
    title: 'Your Kindness 💕',
    shortTitle: 'Your Kindness',
  },
  {
    id: 5,
    path: '/the-little-things',
    title: 'The Little Things 💫',
    shortTitle: 'Little Things',
  },
  {
    id: 6,
    path: '/when-i-realized-it-was-love',
    title: 'When I Realized It Was Love 🌷',
    shortTitle: 'Realized Love',
  },
  {
    id: 7,
    path: '/what-you-mean-to-me',
    title: 'What You Mean to Me 💌',
    shortTitle: 'What You Mean',
  },
  {
    id: 8,
    path: '/my-true-confession',
    title: 'My True Confession 💖',
    shortTitle: 'True Confession',
  },
  {
    id: 9,
    path: '/my-promise-to-you',
    title: 'My Promise to You ✨',
    shortTitle: 'My Promise',
  },
  {
    id: 10,
    path: '/will-you-be-mine',
    title: 'Will You Be Mine? 💍💌',
    shortTitle: 'Final Page',
  },
];

export function getCurrentPageIndex(pathname: string): number {
  return lovePages.findIndex((page) => page.path === pathname);
}

export function getNextPage(pathname: string): LovePage | null {
  const currentIndex = getCurrentPageIndex(pathname);
  if (currentIndex === -1 || currentIndex === lovePages.length - 1) {
    return null;
  }
  return lovePages[currentIndex + 1];
}

export function getPreviousPage(pathname: string): LovePage | null {
  const currentIndex = getCurrentPageIndex(pathname);
  if (currentIndex <= 0) {
    return null;
  }
  return lovePages[currentIndex - 1];
}
