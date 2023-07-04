'use client';
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useAnimate, useAnimationFrame } from 'framer-motion';

import MotionedDiv from '@/components/common/framer/MotionedDiv';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = async (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    await animate([
      newTheme === 'light'
        ? [scope.current, { rotate: -120 }]
        : [scope.current, { rotate: 0 }],
    ]);
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      {theme !== 'dark' ? (
        <MotionedDiv
          initial={{ opacity: 0, rotate: -120 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-white hover:text-text-light dark:hover:text-text-green duration-300"
        >
          <button
            aria-label="light"
            ref={scope}
            onClick={() => handleThemeChange('dark')}
          >
            <BsSun size="25" />
          </button>
        </MotionedDiv>
      ) : (
        <MotionedDiv
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-white hover:text-text-light dark:hover:text-text-green duration-300"
        >
          <button
            aria-label="dark"
            ref={scope}
            onClick={() => handleThemeChange('light')}
          >
            <BsMoon size="25" />
          </button>
        </MotionedDiv>
      )}
    </div>
  );
};

export default ThemeSwitcher;
