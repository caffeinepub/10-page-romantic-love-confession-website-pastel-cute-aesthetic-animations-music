import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

interface RomanticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const RomanticButton = React.forwardRef<HTMLButtonElement, RomanticButtonProps>(
  ({ className, variant = 'default', size, ...props }, ref) => {
    // Map variant to romantic styling classes
    const romanticClasses = {
      default: 'bg-romantic-peach hover:bg-romantic-peach text-white hover:scale-105 active:scale-95',
      secondary: 'bg-romantic-pink hover:bg-romantic-pink text-romantic-lavender hover:scale-105 active:scale-95',
      outline: 'border-2 border-romantic-lavender text-romantic-lavender hover:bg-romantic-pink/30 hover:scale-105 active:scale-95',
      ghost: 'text-romantic-lavender hover:text-romantic-peach hover:bg-romantic-pink/30',
      destructive: '',
      link: '',
    };

    const variantClass = variant ? romanticClasses[variant] || '' : romanticClasses.default;

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'font-rounded rounded-full transition-all duration-300',
          'shadow-md hover:shadow-romantic-glow',
          'focus-visible:ring-2 focus-visible:ring-romantic-lavender focus-visible:ring-offset-2',
          'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
          variantClass,
          className
        )}
        {...props}
      />
    );
  }
);

RomanticButton.displayName = 'RomanticButton';

export { RomanticButton };
