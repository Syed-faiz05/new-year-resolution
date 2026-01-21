import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0a0a1a] pt-32 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-2xl w-full text-center
          rounded-3xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          px-10 py-16
        "
      >
        {/* Title */}
        <h1 className="text-4xl font-semibold text-white mb-4">
          Projects
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 mb-8 leading-relaxed">
          I’m currently working on real-world projects focused on
          full stack development and data-driven solutions.
        </p>

        {/* Highlight */}
        <div
          className="
            inline-block
            px-6 py-3 rounded-full
            bg-cyan-500/10
            border border-cyan-400/30
            text-cyan-400
            text-sm
          "
        >
          🚧 Projects coming soon
        </div>

        {/* Footer text */}
        <p className="mt-10 text-sm text-white/40">
          Meanwhile, feel free to explore my skills, background, and contact me.
        </p>
      </motion.div>
    </section>
  );
}
