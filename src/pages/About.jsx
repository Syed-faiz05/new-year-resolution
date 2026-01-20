import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen pt-32 px-6 flex justify-center">
      <div className="w-full max-w-6xl space-y-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            A Computer Science graduate focused on building scalable web
            applications and data-driven solutions.
          </p>
        </motion.div>

        {/* MAIN ABOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-10 py-12
          "
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">
            Professional Summary
          </h2>

          <p className="text-white/75 leading-relaxed">
            I am a Full Stack Web Developer and Junior Data Scientist with a
            strong foundation in computer science fundamentals. I specialize
            in building clean, responsive user interfaces, scalable backend
            systems, and data-driven features that solve real-world problems.
            I value clarity, performance, and maintainability in every project
            I work on.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/15
            px-10 py-12
          "
        >
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
            Education
          </h2>

          <h3 className="text-xl font-medium text-white">
            Bachelor of Technology – Computer Science
          </h3>

          <p className="text-white/70 mb-4">
            CMR University
          </p>

          <p className="text-white/80 font-medium mb-3">
            Key Coursework:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/70">
            <li>• Data Structures & Algorithms</li>
            <li>• Database Management Systems</li>
            <li>• Operating Systems</li>
            <li>• Machine Learning Fundamentals</li>
          </ul>
        </motion.div>

        {/* HOW I WORK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-10 py-12
          "
        >
          <h2 className="text-2xl font-semibold mb-8 text-purple-300">
            How I Work
          </h2>

          <ol className="space-y-4 text-white/80">
            <li>
              <span className="text-cyan-400 font-medium">1.</span>{" "}
              Understand the problem deeply and clarify requirements
            </li>
            <li>
              <span className="text-cyan-400 font-medium">2.</span>{" "}
              Design clean, intuitive, and user-focused interfaces
            </li>
            <li>
              <span className="text-cyan-400 font-medium">3.</span>{" "}
              Build scalable and reusable frontend components
            </li>
            <li>
              <span className="text-cyan-400 font-medium">4.</span>{" "}
              Implement efficient and maintainable backend logic
            </li>
            <li>
              <span className="text-cyan-400 font-medium">5.</span>{" "}
              Analyze data, optimize performance, and reduce bottlenecks
            </li>
            <li>
              <span className="text-cyan-400 font-medium">6.</span>{" "}
              Test thoroughly, iterate, and deploy with confidence
            </li>
          </ol>
        </motion.div>

      </div>
    </section>
  );
}
