'use client';

import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(themes.winter);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => {
      if (prev === themes.winter) {
        return themes.dracula;
      }

      return themes.winter;
    });
  }

  return (
    <button className='btn btn-sm btn-outline' onClick={toggleTheme}>
      {theme === themes.winter ? (
        <BsMoonFill className='h-4 w-4' />
      ) : (
        <BsSunFill className='h-4 w-4' />
      )}
    </button>
  );
}
