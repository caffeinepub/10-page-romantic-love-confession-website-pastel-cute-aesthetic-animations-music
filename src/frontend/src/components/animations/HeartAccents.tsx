interface HeartAccentsProps {
  count?: number;
}

export function HeartAccents({ count = 6 }: HeartAccentsProps) {
  return (
    <div className="relative inline-block">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-pulse-heart text-romantic-peach/40"
          style={{
            left: `${-20 + Math.random() * 140}%`,
            top: `${-20 + Math.random() * 140}%`,
            animationDelay: `${i * 0.3}s`,
            fontSize: `${0.8 + Math.random() * 0.6}rem`,
          }}
        >
          💕
        </span>
      ))}
    </div>
  );
}
