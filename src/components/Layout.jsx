import { NavLink } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="Gayatri Sawant" />
        </NavLink>

        <nav className="site-nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <div className="nav-dropdown">
            <button type="button" className="nav-dropdown-label">
              Projects
            </button>
            <div className="dropdown-menu">
              <NavLink to="/projects">Product Projects</NavLink>
              <NavLink to="/engineering-portfolio">Engineering Projects</NavLink>
            </div>
          </div>

          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default Layout;