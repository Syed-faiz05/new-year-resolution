import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Info"];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-8
          px-10 py-4
          rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`
              text-sm font-medium transition
              ${
                active === link
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }
            `}
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}
