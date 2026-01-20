import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6"
        >
          Contact
        </motion.h1>

        <p className="text-white/70 mb-12">
          I’m open to internships, collaborations, and learning opportunities.
          Feel free to reach out.
        </p>

        <div className="grid gap-6">
          <a
            href="mailto:your-email@gmail.com"
            className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl py-4 hover:bg-white/20 transition"
          >
            <Mail /> your-email@gmail.com
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl py-4 hover:bg-white/20 transition"
          >
            <Linkedin /> LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl py-4 hover:bg-white/20 transition"
          >
            <Github /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
