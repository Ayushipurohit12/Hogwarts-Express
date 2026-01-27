import { useState, useEffect } from 'react'
import Pages from './pages/pages'
import './index.scss'
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  // Apply theme to html and body elements for global CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
console.log(theme);
  return (
    <div data-theme={theme} className="app-container">
      <Pages changeTheme={changeTheme} currentTheme={theme} />
    </div>
  )
}

export default App
