import { PageFadeIn } from '@/components/animations/PageFadeIn';
import { FloatingHeartsBackground } from '@/components/animations/FloatingHeartsBackground';
import { RomanticButton } from '@/components/RomanticButton';
import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <FloatingHeartsBackground />
      <div
        className="min-h-[calc(100vh-8rem)] relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(/assets/generated/home-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-romantic-pink/60 via-romantic-white/80 to-romantic-lavender/60" />
        
        <PageFadeIn className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-8 inline-block">
            <Heart className="h-20 w-20 text-romantic-peach fill-romantic-peach animate-pulse-slow" />
          </div>
          
          <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-romantic-lavender mb-6 drop-shadow-lg">
            From My Heart to Yours 💌
          </h1>
          
          <p className="font-rounded text-lg sm:text-xl text-romantic-lavender/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Every page holds a piece of my heart 💕 Written with pure sincerity ✨ Come journey with me through these feelings 🌸
          </p>
          
          <RomanticButton
            size="lg"
            onClick={() => navigate({ to: '/the-first-moment' })}
          >
            Click to Enter My Heart 💖
          </RomanticButton>
        </PageFadeIn>
      </div>
    </>
  );
}
