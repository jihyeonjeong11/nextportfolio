'use client';
import { useEffect, useState } from 'react';
import { useWindowSize } from '.';
import { TAILWIND_XL } from '@/constants/resoultions';

export function useResolutions() {
  const { width, height } = useWindowSize();
  const [isXL, setIsXL] = useState<boolean>(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      let hasTouchScreen = false;
      if ('maxTouchPoints' in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
      } else if ('msMaxTouchPoints' in navigator) {
        hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
      } else {
        const mQ = matchMedia?.('(pointer:coarse)');
        if (mQ?.media === '(pointer:coarse)') {
          hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
          hasTouchScreen = true; // deprecated, but good fallback
        } else {
          // Only as a last resort, fall back to user agent sniffing
          const UA = (navigator as any).userAgent;
          hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }
      if (hasTouchScreen) {
        return;
      }
      if (width >= TAILWIND_XL) {
        setIsXL(true);
      } else {
        setIsXL(false);
      }
    });
  }, [width]);

  return {
    isXL,
  };
}
