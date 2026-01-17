export default function GlassCard({ title, desc }) {
  return (
    <div
      className="
        w-full max-w-md
        rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-8
        shadow-[0_15px_40px_rgba(0,0,0,0.5)]
        text-center
      "
    >
      <h3 className="text-cyan-300 font-semibold text-xl">
        {title}
      </h3>
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
