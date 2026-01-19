import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive ? "text-cyan-400" : "text-white/70 hover:text-white"
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50
      backdrop-blur-xl bg-white/10 border border-white/20
      rounded-full px-8 py-3 flex gap-8 shadow-lg">
      
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/info" className={linkClass}>Info</NavLink>
    </nav>
  );
}
