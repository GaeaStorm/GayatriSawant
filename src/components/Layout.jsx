import { NavLink } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Gayatri Sawant" />
        </NavLink>

        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default Layout;