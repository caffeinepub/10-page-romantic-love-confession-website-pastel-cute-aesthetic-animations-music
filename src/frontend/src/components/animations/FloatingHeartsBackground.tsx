export function FloatingHeartsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-heart text-romantic-peach/20"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}
