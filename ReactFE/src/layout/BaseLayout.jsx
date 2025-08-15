import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Admin-Dashboard";

const BaseLayout = ({ toggleTheme, theme }) => {
  return (
    <main className="page-wrapper">
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
