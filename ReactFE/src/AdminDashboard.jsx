import { useContext, useEffect } from "react";
import "./AdminDashboardStyle.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound, AdminChatScreen } from "./screens";
import { Routes, Route } from "react-router-dom";

function AdminDashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route element={<BaseLayout toggleTheme={toggleTheme} theme={theme} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/AdminChatScreen" element={<AdminChatScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="Toggle Theme"
        />
      </button>
    </>
  );
}

export default AdminDashboard;
