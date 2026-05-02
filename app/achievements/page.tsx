import { colors } from "@/utils/colors";

const achievements = [
  "Research-driven sustainability reporting",
  "Community-centered environmental initiatives",
  "Practical frameworks for long-term impact",
  "Biodiversity field studies and species documentation",
  "Environmental mapping through GIS-based analysis",
  "Climate resilience projects for local communities",
];

export default function AchievementsPage() {
  return (
    <section className="min-h-screen px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.primaryColor }}
          >
            Achievements
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Milestones that reflect ESRDC&apos;s work in research and
            sustainability.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            These focus areas highlight how ESRDC supports environmental
            protection, student engagement, and evidence-based action across
            Samar and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <article
              key={item}
              className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: colors.primaryColor }}
              >
                0{index + 1}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {item}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A growing part of ESRDC&apos;s commitment to connect research,
                fieldwork, and local impact through strong environmental
                practice.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
