import ParallaxSection from "./ParallaxSection";
import GlassCard from "./GlassCard";

export default function Sections() {
  return (
    <section className="mt-40 space-y-48">

      <ParallaxSection offset={120}>
        <GlassCard
          title="Full Stack Developer"
          desc="React • Node • APIs • Databases"
        />
      </ParallaxSection>

      <ParallaxSection offset={80}>
        <GlassCard
          title="Projects"
          desc="Real-world • Scalable • Clean Architecture"
        />
      </ParallaxSection>

      <ParallaxSection offset={140}>
        <GlassCard
          title="Data Scientist"
          desc="Python • Machine Learning • Data Visualization"
        />
      </ParallaxSection>

    </section>
  );
}
