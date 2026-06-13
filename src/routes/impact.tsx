import { createFileRoute } from "@tanstack/react-router";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { Users, Clock, CalendarCheck, HeartHandshake, Building2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { IMPACT_TRENDS, IMPACT_BY_PROGRAM } from "@/lib/site-data";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact Dashboard — Disha For India" },
      { name: "description", content: "See Disha For India's measurable impact: students reached, training hours, events conducted, volunteers and communities impacted — with interactive charts." },
      { property: "og:title", content: "Impact Dashboard — Disha For India" },
      { property: "og:description", content: "Transparent, measurable social impact across India." },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

const KPIS = [
  { icon: Users, label: "Students Reached", value: 25000, suffix: "+" },
  { icon: Clock, label: "Training Hours", value: 14800, suffix: "+" },
  { icon: CalendarCheck, label: "Events Conducted", value: 188, suffix: "+" },
  { icon: HeartHandshake, label: "Volunteers", value: 1200, suffix: "+" },
  { icon: Building2, label: "Communities Impacted", value: 40, suffix: "+" },
];

const ORANGE = "#F97316";
const GREEN = "#16A34A";
const PIE_COLORS = ["#F97316", "#16A34A", "#111827", "#FB923C", "#4ADE80"];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact Dashboard"
        title="Impact you can measure"
        description="We believe in transparency. Here's the real, growing footprint of Disha For India across students, communities and the country."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {KPIS.map((k, i) => (
              <Reveal key={k.label} delay={i * 0.06}>
                <div className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-soft text-primary">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-2xl font-extrabold text-foreground">
                    <AnimatedCounter value={k.value} suffix={k.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-semibold text-foreground">Students reached over time</h3>
                <p className="text-sm text-muted-foreground">Year-on-year growth since 2021</p>
                <div className="mt-5 h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={IMPACT_TRENDS}>
                      <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={ORANGE} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={ORANGE} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickLine={false} axisLine={false} fontSize={12} />
                      <Tooltip />
                      <Area type="monotone" dataKey="students" stroke={ORANGE} strokeWidth={3} fill="url(#g1)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="font-semibold text-foreground">Training hours & events</h3>
                <p className="text-sm text-muted-foreground">Activity scaling each year</p>
                <div className="mt-5 h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={IMPACT_TRENDS}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} fontSize={12} />
                      <YAxis tickLine={false} axisLine={false} fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="hours" fill={GREEN} radius={[6, 6, 0, 0]} />
                      <Bar dataKey="events" fill={ORANGE} radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
                <h3 className="font-semibold text-foreground">Reach by program</h3>
                <p className="text-sm text-muted-foreground">Students touched across our key programs</p>
                <div className="mt-5 grid items-center gap-6 md:grid-cols-2">
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={IMPACT_BY_PROGRAM} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} paddingAngle={3}>
                          {IMPACT_BY_PROGRAM.map((_, i) => (
                            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {IMPACT_BY_PROGRAM.map((p, i) => (
                      <div key={p.name} className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-2.5">
                        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                          {p.name}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">{p.value.toLocaleString("en-IN")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
