import { Flag } from "lucide-react";

// Subtle honesty banner shown on pages whose content is now a historical record.
export default function ConcludedBanner({ year = "2026", label = "edition" }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24">
      <div className="glass card-lift rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2.5 flex-1">
          <Flag className="w-4 h-4 text-primary shrink-0" />
          <p className="text-sm text-foreground/80">
            <span className="font-semibold text-white">{year} {label} — concluded.</span>{" "}
            This page remains available as a record of the {year} event.
          </p>
        </div>
      </div>
    </div>
  );
}