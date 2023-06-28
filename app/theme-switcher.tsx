'use client';
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs';
import { motion, useAnimate } from 'framer-motion';

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
      {theme === 'light' ? (
        <motion.button
          ref={scope}
          onClick={() =>
            handleThemeChange(theme === 'light' ? 'dark' : 'light')
          }
          initial={{ opacity: 0, rotate: -120 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-white hover:text-text-light dark:hover:text-text-green duration-300"
        >
          <BsSun size="25" />
        </motion.button>
      ) : (
        <motion.button
          ref={scope}
          onClick={() =>
            handleThemeChange(theme === 'light' ? 'dark' : 'light')
          }
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-white hover:text-text-light dark:hover:text-text-green duration-300"
        >
          <BsMoon size="25" />
        </motion.button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
