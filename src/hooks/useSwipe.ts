import { useState, TouchEvent } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export default function useSwipe(onSwipe: (direction: Direction) => void) {
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

    const onTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const onTouchMove = (e: TouchEvent) => {
        if (!touchStart) return;

        const touch = e.touches[0];
        const deltaX = touchStart.x - touch.clientX;
        const deltaY = touchStart.y - touch.clientY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                onSwipe('LEFT');
            } else {
                onSwipe('RIGHT');
            }
        } else {
            if (deltaY > 0) {
                onSwipe('UP');
            } else {
                onSwipe('DOWN');
            }
        }

        setTouchStart(null);
    };

    const onTouchEnd = () => {
        setTouchStart(null);
    };

    return { onTouchStart, onTouchMove, onTouchEnd };
}

