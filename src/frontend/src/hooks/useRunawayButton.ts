import { useState, useRef, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseRunawayButtonOptions {
  dodgeDistance?: number;
  containerPadding?: number;
}

export function useRunawayButton(options: UseRunawayButtonOptions = {}) {
  const { dodgeDistance = 150, containerPadding = 20 } = options;
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateNewPosition = useCallback(
    (mouseX: number, mouseY: number) => {
      if (!buttonRef.current || !containerRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const distanceX = mouseX - buttonCenterX;
      const distanceY = mouseY - buttonCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Only dodge if mouse is within dodge distance
      if (distance < dodgeDistance) {
        // Calculate direction away from mouse
        const angle = Math.atan2(distanceY, distanceX);
        const moveDistance = dodgeDistance - distance + 50;

        // Calculate new position
        let newX = position.x - Math.cos(angle) * moveDistance;
        let newY = position.y - Math.sin(angle) * moveDistance;

        // Keep button within container bounds
        const maxX = containerRect.width - buttonRect.width - containerPadding;
        const maxY = containerRect.height - buttonRect.height - containerPadding;

        newX = Math.max(containerPadding, Math.min(maxX, newX));
        newY = Math.max(containerPadding, Math.min(maxY, newY));

        setPosition({ x: newX, y: newY });
      }
    },
    [position, dodgeDistance, containerPadding]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      calculateNewPosition(e.clientX, e.clientY);
    },
    [calculateNewPosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        calculateNewPosition(touch.clientX, touch.clientY);
      }
    },
    [calculateNewPosition]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handlePointerMove, handleTouchMove]);

  return {
    buttonRef,
    containerRef,
    position,
  };
}
