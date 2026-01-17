import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children, offset = 100 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="w-full flex justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
