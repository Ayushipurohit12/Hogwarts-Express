import { useState, useEffect } from 'react'
import './index.scss'
import AppRoutes from './routes/route';
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
console.log(theme);
  return (
    <div data-theme={theme} className="app-container">
      <AppRoutes changeTheme={changeTheme} currentTheme={theme} />
    </div>
  )
}

export default App
