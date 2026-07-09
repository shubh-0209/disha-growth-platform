import { useMemo, useState } from "react";
import { Search, Award, Calendar, MapPin, X } from "lucide-react";
import { SCHOLARSHIPS, type Scholarship } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CLASS_OPTS = ["All", "Class 10", "Class 12", "Undergraduate", "Postgraduate"];
const STREAM_OPTS = ["All", "Science", "Commerce", "Arts", "Any"];
const STATE_OPTS = ["All", "All India", "Punjab", "Delhi", "Maharashtra", "Karnataka"];
const CAT_OPTS = ["All", "Merit", "Need-based", "Girls", "SC/ST/OBC", "Minority"];

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export function ScholarshipExplorer({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [cls, setCls] = useState("All");
  const [stream, setStream] = useState("All");
  const [state, setState] = useState("All");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const list = SCHOLARSHIPS.filter((s: Scholarship) => {
      if (query && !s.name.toLowerCase().includes(query.toLowerCase()) && !s.provider.toLowerCase().includes(query.toLowerCase())) return false;
      if (cls !== "All" && s.classLevel !== cls) return false;
      if (stream !== "All" && s.stream !== stream && s.stream !== "Any") return false;
      if (state !== "All" && s.state !== state) return false;
      if (cat !== "All" && s.category !== cat) return false;
      return true;
    });
    return limit ? list.slice(0, limit) : list;
  }, [query, cls, stream, state, cat, limit]);

  const reset = () => { setQuery(""); setCls("All"); setStream("All"); setState("All"); setCat("All"); };

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-border bg-card p-5 shadow-soft lg:sticky lg:top-24 lg:self-start">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scholarships…"
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div className="mt-4 space-y-3">
          <Select label="Class" value={cls} options={CLASS_OPTS} onChange={setCls} />
          <Select label="Stream" value={stream} options={STREAM_OPTS} onChange={setStream} />
          <Select label="State" value={state} options={STATE_OPTS} onChange={setState} />
          <Select label="Category" value={cat} options={CAT_OPTS} onChange={setCat} />
        </div>
        <button
          onClick={reset}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <X className="h-3.5 w-3.5" /> Clear filters
        </button>
      </aside>

      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> scholarships found
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((s) => (
            <div key={s.id} className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-soft text-green">
                  <Award className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">{s.amount}</span>
              </div>
              <h4 className="mt-3 font-display font-semibold leading-snug text-foreground">{s.name}</h4>
              <p className="text-sm text-muted-foreground">{s.provider}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[s.classLevel, s.stream, s.category].map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70">{t}</span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {s.state}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(s.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className={cn("rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground")}>
            No scholarships match your filters. Try clearing some.
          </div>
        )}
      </div>
    </div>
  );
}
