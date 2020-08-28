import React, { useState, useEffect } from 'react'

export default function ThemeMode() {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [themeState]);

  return (
    <div>
      <button class="color-toggle" onClick={() => setThemeState(!themeState)}>{themeState ? 
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-contrast" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#42B9A6" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 17a5 5 0 0 0 0 -10v10" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-contrast" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 17a5 5 0 0 0 0 -10v10" />
        </svg> }
      </button>
    </div>
  );
}