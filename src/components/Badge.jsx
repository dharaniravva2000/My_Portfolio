export default function Badge({ label }) {
  return (
    <span className="border border-ink/20 px-3 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-ink/60">
      {label}
    </span>
  );
}
