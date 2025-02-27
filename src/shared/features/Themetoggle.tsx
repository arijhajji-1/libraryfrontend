import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <label className="swap swap-rotate border-2 border-base-400 rounded-full p-2">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <div className="swap-on">🌙</div>
      <div className="swap-off">☀️</div>
    </label>
  );
};

export default ThemeToggle;
