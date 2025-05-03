import { Outlet } from "react-router-dom/dist";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
};
