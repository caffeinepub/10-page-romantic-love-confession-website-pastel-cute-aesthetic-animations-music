export function SparklesOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle text-romantic-lavender/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${0.5 + Math.random() * 1}rem`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
