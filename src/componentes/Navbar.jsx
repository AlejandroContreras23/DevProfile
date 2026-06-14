import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>DevProfile CV</h2>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/preview">Vista Previa</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;