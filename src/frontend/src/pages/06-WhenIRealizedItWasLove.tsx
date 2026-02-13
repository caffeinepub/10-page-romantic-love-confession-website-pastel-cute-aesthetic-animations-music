import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function WhenIRealizedItWasLove() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-white via-romantic-lavender/10 to-romantic-white">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          When I Realized It Was Love 🌷
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            I was thinking about you and caught myself smiling 💕 Not just admiration—I was imagining a future with you ✨ My heart had already made its choice 💖 This feeling wasn't going away 🌸
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            That's when I knew: I was in love with you 💫💕
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
