import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { RomanticButton } from '@/components/RomanticButton';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ChevronLeft, ChevronRight, Menu, Heart } from 'lucide-react';
import { lovePages, getNextPage, getPreviousPage } from '@/lib/lovePages';
import { MusicProvider } from './music/MusicProvider';
import { MusicControl } from './music/MusicControl';

export function LoveSiteLayout() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const nextPage = getNextPage(currentPath);
  const prevPage = getPreviousPage(currentPath);

  return (
    <MusicProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background pattern overlay */}
        <div
          className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/assets/generated/pattern-hearts-sparkles.dim_1024x1024.png)',
            backgroundSize: '512px 512px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Navigation header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-romantic-pink/80 backdrop-blur-md border-b border-romantic-lavender/20">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <RomanticButton variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </RomanticButton>
              </SheetTrigger>
              <SheetContent side="left" className="bg-romantic-white border-romantic-lavender/20">
                <SheetHeader>
                  <SheetTitle className="font-cursive text-2xl text-romantic-lavender flex items-center gap-2">
                    <Heart className="h-5 w-5 fill-current" />
                    Pages 💕
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-2">
                  {lovePages.map((page) => (
                    <RomanticButton
                      key={page.id}
                      variant={currentPath === page.path ? 'default' : 'ghost'}
                      className="w-full justify-start font-rounded"
                      onClick={() => {
                        navigate({ to: page.path });
                      }}
                    >
                      <span className="mr-2">{page.id}.</span>
                      {page.shortTitle}
                    </RomanticButton>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <div className="flex-1 text-center">
              <h1 className="font-cursive text-lg sm:text-xl text-romantic-lavender">
                A Love Letter 💕✨
              </h1>
            </div>

            <MusicControl />
          </div>
        </header>

        {/* Main content */}
        <main className="relative z-10 pt-16">
          <Outlet />
        </main>

        {/* Navigation footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-romantic-pink/80 backdrop-blur-md border-t border-romantic-lavender/20">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <RomanticButton
                variant="ghost"
                size="sm"
                onClick={() => prevPage && navigate({ to: prevPage.path })}
                disabled={!prevPage}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Previous</span>
              </RomanticButton>

              <div className="flex gap-1">
                {lovePages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => navigate({ to: page.path })}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentPath === page.path
                        ? 'bg-romantic-lavender w-6'
                        : 'bg-romantic-lavender/30 hover:bg-romantic-lavender/50'
                    }`}
                    aria-label={`Go to ${page.shortTitle}`}
                  />
                ))}
              </div>

              <RomanticButton
                variant="ghost"
                size="sm"
                onClick={() => nextPage && navigate({ to: nextPage.path })}
                disabled={!nextPage}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </RomanticButton>
            </div>

            <div className="text-center text-xs text-romantic-lavender/60 font-rounded">
              © {new Date().getFullYear()} · Built with{' '}
              <Heart className="inline h-3 w-3 fill-romantic-peach text-romantic-peach" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  window.location.hostname
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-romantic-lavender transition-colors"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MusicProvider>
  );
}
