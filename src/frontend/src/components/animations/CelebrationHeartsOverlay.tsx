import { useEffect, useState } from 'react';

interface CelebrationHeartsOverlayProps {
  show: boolean;
}

export function CelebrationHeartsOverlay({ show }: CelebrationHeartsOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center animate-fade-in">
      <img
        src="/assets/generated/celebration-hearts-overlay.dim_1920x1080.png"
        alt="Celebration hearts"
        className="w-full h-full object-cover animate-celebration-burst"
      />
      {/* Additional floating hearts for extra celebration */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-celebration-float text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          {['💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
}
