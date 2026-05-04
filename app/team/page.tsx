import Image from "next/image";
import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

const universityPresident = {
  name: "Dr. Redentor S. Palencia",
  role: "University President",
  image: "/team/dr-redentor.png",
};

const vicePresident = {
  name: "Dr. Felisa E. Gomba",
  role: "VP for Research & Extension Services",
  image: "/team/dr-felisa2.png",
};

const executiveDirectors = [
  {
    name: "Dr. Sherrie Ann C. Labid",
    role: "Executive Director for Research",
    image: "/team/dr-sherrie2.png",
  },
  {
    name: "Dr. Florabelle B. Patosa",
    role: "Executive Director for Extension",
    image: "/team/dr-patosa.png",
  },
];

const director = {
  name: "Edelyn Oliverio-Echapare, Ph.D",
  role: "Director of ESRDC",
  image: "/team/dr-eds.png",
};

const facultyResearcher = {
  name: "Andres III B. Sequito, MB",
  role: "Faculty Researcher",
  image: "/team/Andress-Faculty-Researcher.png",
};

const staffMembers = [
  {
    name: "Gladys C. Colandog",
    role: "ESRDC Staff",
    image: "/team/gladys-ESRDC-staff.png",
    imageClassName: "object-top",
    imageScaleClassName: "scale-115",
    imageHoverScaleClassName: "group-hover:scale-125",
  },
  {
    name: "Justyne Maye D. Nabablit, RCA, MICB",
    role: "ESRDC Staff",
    image: "/team/justyne-ESRDC-staff.png",
  },
  {
    name: "Madel G. Babalcon",
    role: "ESRDC Staff",
    image: "/team/maam-madel.png",
  },
  {
    name: "Rio C. Cecogo",
    role: "ESRDC Staff",
    image: "/team/rio-ESRDC-staff.png",
    imageClassName: "object-[center_36%]",
  },
];

type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageClassName?: string;
  imageScaleClassName?: string;
  imageHoverScaleClassName?: string;
};

function TeamCard({
  member,
  featured = false,
  compact = false,
  imageClassName = "object-top",
  imageScaleClassName = "scale-100",
  imageHoverScaleClassName = "group-hover:scale-110",
}: {
  member: TeamMember;
  featured?: boolean;
  compact?: boolean;
  imageClassName?: string;
  imageScaleClassName?: string;
  imageHoverScaleClassName?: string;
}) {
  return (
    <article
      className={`group mx-auto w-full max-w-sm overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
        featured ? "sm:max-w-md" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? "h-96 sm:h-112" : compact ? "h-72" : "h-80"
        }`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          quality={100}
          className={`object-cover transition-transform duration-500 ease-out ${imageScaleClassName} ${imageHoverScaleClassName} ${imageClassName}`}
          sizes={featured ? "(min-width: 640px) 448px, 100vw" : "384px"}
          priority={featured}
        />
      </div>
      <div
        className={`px-5 py-5 text-center sm:px-6 ${
          compact ? "flex min-h-32 flex-col items-center justify-start" : ""
        }`}
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.24em]"
          style={{ color: colors.primaryColor }}
        >
          {member.role}
        </p>
        <h2
          className={`mt-2 font-semibold text-slate-950 ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {member.name}
        </h2>
      </div>
    </article>
  );
}

function VerticalConnector({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-12 w-px ${className}`}
      style={{ backgroundColor: `${colors.primaryColor}55` }}
      aria-hidden="true"
    />
  );
}

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

        <div className="mt-14">
          <div className="flex justify-center">
            <TeamCard member={universityPresident} featured />
          </div>

          <VerticalConnector />

          <div className="flex justify-center">
            <TeamCard member={vicePresident} />
          </div>

          <div className="mx-auto max-w-4xl" aria-hidden="true">
            <VerticalConnector />
            <div
              className="hidden h-px md:block"
              style={{ backgroundColor: `${colors.primaryColor}55` }}
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {executiveDirectors.map((member) => (
              <div key={member.name} className="relative">
                <div
                  className="absolute left-1/2 top-[-2rem] hidden h-8 w-px -translate-x-1/2 md:block"
                  style={{ backgroundColor: `${colors.primaryColor}55` }}
                  aria-hidden="true"
                />
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          <VerticalConnector className="mt-0" />

          <div className="flex justify-center">
            <TeamCard member={director} />
          </div>

          <VerticalConnector />

          <div className="flex justify-center">
            <TeamCard member={facultyResearcher} />
          </div>

          <div className="mx-auto max-w-5xl" aria-hidden="true">
            <VerticalConnector />
            <div
              className="hidden h-px md:block"
              style={{ backgroundColor: `${colors.primaryColor}55` }}
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staffMembers.map((member) => (
              <div key={member.name} className="relative">
                <div
                  className="absolute left-1/2 top-[-2rem] hidden h-8 w-px -translate-x-1/2 md:block"
                  style={{ backgroundColor: `${colors.primaryColor}55` }}
                  aria-hidden="true"
                />
                <TeamCard
                  member={member}
                  compact
                  imageClassName={member.imageClassName ?? "object-center"}
                  imageScaleClassName={member.imageScaleClassName}
                  imageHoverScaleClassName={member.imageHoverScaleClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
