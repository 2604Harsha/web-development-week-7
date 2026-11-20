import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container">
        <Link to="/" className="brand" onClick={close} aria-label="DG Interns Hub home">
          <span className="brand-mark">dg<span>.</span></span>
          <span className="brand-name">interns hub</span>
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/jobs" onClick={close}>Explore jobs</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <Link to="/jobs" className="nav-cta" onClick={close}>Find your start <ArrowUpRight size={16} /></Link>
        </div>
      </nav>
    </header>
  );
}