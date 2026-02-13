import { type ReactNode } from 'react';

interface PageFadeInProps {
  children: ReactNode;
  className?: string;
}

export function PageFadeIn({ children, className = '' }: PageFadeInProps) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
}
