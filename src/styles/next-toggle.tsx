import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdNightsStay } from 'react-icons/md';
import { RxSun } from 'react-icons/rx';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Set the initial state of the theme based on the theme provided by next-themes.
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      className={`rounded-md transition-all duration-500 w-7 h-7 flex items-center justify-center`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className={`flex items-center justify-center ml-3 ${theme}`}>
        {theme === 'light' ? (
          <RxSun className='w-7 h-7 text-firefly-100 sun' />
        ) : (
          <MdNightsStay className='w-7 h-7 text-asparagus-400 moon' />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
