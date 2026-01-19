import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1a0a2e] text-white relative overflow-hidden px-6 pt-32">

      {/* Cosmic background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* LEFT COLUMN */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Glass Card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_0_40px_rgba(0,212,255,0.25)]">
            <h1 className="text-4xl font-bold text-cyan-400 tracking-wide">
              Syed Faiz
            </h1>
            <p className="mt-2 text-lg text-cyan-200">
              Full Stack Developer | Junior Data Scientist
            </p>
            <p className="mt-2 text-sm text-purple-300">
              Python DSA • React • ML • CMR University CS
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Building scalable web applications and intelligent data solutions using modern technologies.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN – MIND MAP */}
        <motion.div
          className="lg:col-span-3 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full h-[520px] flex items-center justify-center">

            {/* Center Node */}
            <Node title="Technical Skills" size="lg" />

            {/* Full Stack */}
            <Branch x="-220px" y="-120px" color="cyan">
              <Node title="Full Stack Web" />
              <SmallNodes items={["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]} />
            </Branch>

            {/* Data Science */}
            <Branch x="220px" y="-120px" color="green">
              <Node title="Data Science" />
              <SmallNodes items={["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]} />
            </Branch>

            {/* DSA */}
            <Branch x="-220px" y="140px" color="purple">
              <Node title="DSA Foundations" />
              <SmallNodes items={["Arrays", "Strings", "Stacks", "Queues", "HashMaps", "Binary Search"]} />
            </Branch>

            {/* Tools */}
            <Branch x="220px" y="140px" color="cyan">
              <Node title="Tools" />
              <SmallNodes items={["Tailwind", "Git/GitHub", "Docker", "Jupyter", "Neovim"]} />
            </Branch>

          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        className="relative max-w-5xl mx-auto mt-32 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-300">
          Open for Full Stack / Data Roles 2026+
        </h2>
        <p className="mt-4 text-gray-300">
          Web apps. Data insights. Scalable solutions ↓
        </p>
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">Email</a>
          <a className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition">LinkedIn</a>
          <a className="px-6 py-3 rounded-full border border-purple-400 text-purple-300 hover:bg-purple-400/10 transition">GitHub</a>
        </div>
      </motion.div>

    </section>
  );
}

function Node({ title, size = "md" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 6 }}
      className={`absolute rounded-full flex items-center justify-center text-center backdrop-blur-xl border border-white/30 shadow-lg
      ${size === "lg" ? "w-40 h-40 text-lg bg-white/15" : "w-28 h-28 text-sm bg-white/10"}`}
    >
      {title}
    </motion.div>
  );
}

function Branch({ children, x, y }) {
  return (
    <motion.div
      className="absolute"
      style={{ transform: `translate(${x}, ${y})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

function SmallNodes({ items }) {
  return (
    <div className="mt-32 flex flex-wrap gap-3 justify-center">
      {items.map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.15 }}
          className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs"
        >
          {i}
        </motion.div>
      ))}
    </div>
  );
}
