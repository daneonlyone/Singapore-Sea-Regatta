// Post-event replacement for the pre-event countdown.
export default function RecapPanel() {
  return (
    <div className="glass-blaze rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Event Concluded · 6 September 2026</span>
      </div>
      <h4 className="font-heading font-bold text-white text-lg">That's a wrap on Head Above Water</h4>
      <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
        Two days, one bay, and a whole community keeping its head above water. Thank you for paddling with us.
      </p>
    </div>
  );
}