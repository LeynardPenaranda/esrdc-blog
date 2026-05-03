import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

const teamMembers = [
  {
    name: "Research Coordinators",
    description:
      "Lead the development of environmental studies, field assessments, and knowledge-sharing initiatives.",
  },
  {
    name: "Faculty and Mentors",
    description:
      "Guide student researchers and strengthen interdisciplinary collaboration across academic programs.",
  },
  {
    name: "Student Researchers",
    description:
      "Support biodiversity surveys, ecological monitoring, and sustainability projects through hands-on learning.",
  },
  {
    name: "Community Partners",
    description:
      `Work with ${CENTER_NAME} to translate research into practical environmental action and awareness programs.`,
  },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.primaryColor }}
          >
            Team
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            People working together for science, stewardship, and community
            impact.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {CENTER_NAME} brings together educators, researchers, students, and
            partner communities to build solutions rooted in collaboration and
            shared environmental responsibility.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div
                className="mb-5 h-14 w-14 rounded-2xl"
                style={{ backgroundColor: `${colors.primaryColor}18` }}
              />
              <h2 className="text-2xl font-semibold text-slate-900">
                {member.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
