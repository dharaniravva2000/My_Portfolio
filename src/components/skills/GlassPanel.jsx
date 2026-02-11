export default function GlassPanel({ className = "", children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[#3a2c1f]/80 bg-[#120d0a]/90 p-6 shadow-[0_32px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-24 before:w-56 before:rounded-full before:bg-gradient-to-br before:from-[#c9a16b]/30 before:via-[#c9a16b]/10 before:to-transparent before:opacity-50 before:blur-2xl before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] after:content-[''] ${className}`}
    >
      {children}
    </div>
  );
}
