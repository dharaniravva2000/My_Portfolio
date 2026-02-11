export default function SkeletonCard() {
  return (
    <div className="h-full animate-pulse overflow-hidden rounded-3xl border border-ink/15 bg-base-800/70">
      <div className="h-48 bg-base-700/80" />
      <div className="space-y-4 p-6">
        <div className="h-5 w-3/4 rounded bg-base-700/80" />
        <div className="h-4 w-full rounded bg-base-700/80" />
        <div className="h-4 w-2/3 rounded bg-base-700/80" />
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-full bg-base-700/80" />
          <div className="h-6 w-16 rounded-full bg-base-700/80" />
          <div className="h-6 w-16 rounded-full bg-base-700/80" />
        </div>
      </div>
    </div>
  );
}
