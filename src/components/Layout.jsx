import { NavLink } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          Home
        </NavLink>

        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>{children}</main>

      {/* <footer className="site-footer">
        <p>© {new Date().getFullYear()} Gayatri Sawant</p>
      </footer> */}
    </div>
  );
}

export default Layout;