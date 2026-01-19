import PageSkeleton from "../components/PageSkeleton";

export default function Info() {
  return (
    <PageSkeleton>
      <section className="pt-32 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-cyan-300">Info</h1>
        <p className="mt-6 text-white/70 leading-relaxed">
          This portfolio is built using React, Tailwind CSS, Framer Motion, and
          modern UI patterns with performance in mind.
        </p>
      </section>
    </PageSkeleton>
  );
}
