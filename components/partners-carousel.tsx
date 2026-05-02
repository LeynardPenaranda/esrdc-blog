import Image from "next/image";
import { colors } from "@/utils/colors";

const partners = [
  { name: "APSI", src: "/partners/apsi.png" },
  { name: "Bayan ng Sta. Rita", src: "/partners/bayan-ng-sta-rita.png" },
  { name: "Catbalogan", src: "/partners/catbalogan.png" },
  {
    name: "Center for Conservation",
    src: "/partners/center-for-conservation.png",
  },
  { name: "DENR", src: "/partners/DENR.png" },
  {
    name: "Department of Education",
    src: "/partners/department-of-education.png",
  },
  { name: "DLE", src: "/partners/dle.png" },
  {
    name: "Eastern Samar State University",
    src: "/partners/eastern-samar-state-university.png",
  },
  {
    name: "Municipality of Calbiga",
    src: "/partners/municipality-of-calbiga.png",
  },
  {
    name: "Municipality of Matuguinao",
    src: "/partners/municipality-of-matuguinao.png",
  },
  {
    name: "Municipality of Paranas",
    src: "/partners/municipality-of-paranas.png",
  },
  { name: "NLC", src: "/partners/nlc.png" },
  {
    name: "Northwest Samar State University",
    src: "/partners/northwest-samar-state-university.png",
  },
  {
    name: "Philippine Eagle Foundation",
    src: "/partners/philippine-eagle-foundation.png",
  },
  {
    name: "Samar Island Natural Park",
    src: "/partners/samar-island-natural-park.png",
  },
  { name: "Samar", src: "/partners/samar.png" },
  {
    name: "School Division of Catbalogan",
    src: "/partners/school-devision-of-catbalogan.png",
  },
  {
    name: "University of Eastern Philippines",
    src: "/partners/university-of-eastern-philippines.png",
  },
];

type PartnersCarouselProps = {
  title?: string;
  subtitle?: string;
};

const loopedPartners = [...partners, ...partners];

export default function PartnersCarousel({
  title = "Partners and Collaborators",
  subtitle = "Organizations and institutions supporting ESRDC's environmental and sustainability initiatives.",
}: PartnersCarouselProps) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[80vw]">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.primaryColor }}
          >
            Network
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {partners.map((partner) => (
              <div
                key={`avatar-${partner.name}`}
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white p-2 shadow-[0_8px_20px_rgba(15,23,42,0.06)] sm:h-14 sm:w-14"
                title={partner.name}
                aria-label={partner.name}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={40}
                  height={40}
                  sizes="56px"
                  className="max-h-8 w-auto object-contain sm:max-h-9"
                />
              </div>
            ))}
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div
          className="partners-carousel-mask mt-10 overflow-hidden rounded-[28px] border border-black/10 bg-transparent px-4 py-6 sm:px-6 sm:py-8"
          aria-label="Partner logos carousel"
        >
          <div className="partners-carousel-track flex w-max items-center gap-4 sm:gap-5">
            {loopedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-36 w-[14rem] shrink-0 items-center justify-center px-4 py-3 sm:h-40 sm:w-[16rem]"
                aria-hidden={index >= partners.length}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={290}
                  height={145}
                  sizes="(max-width: 640px) 224px, 256px"
                  className="max-h-24 w-auto object-contain sm:max-h-28"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
