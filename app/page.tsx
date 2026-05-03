import Image from "next/image";
import PartnersCarousel from "@/components/partners-carousel";
import Reveal from "@/components/ui/reveal";
import ScrollButton from "@/components/ui/scroll-button";
import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

const homeHighlights = [
  "Environmental Research",
  "Biodiversity Conservation",
  "Climate Action",
  "Community Collaboration",
  "Sustainability Education",
  "Evidence-Based Solutions",
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <section
        id="home"
        className="scroll-mt-28 overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12"
        style={{
          background: `linear-gradient(180deg, ${colors.primaryColor}40 0%, ${colors.primaryColor}20 56%, ${colors.secondColor}24 100%)`,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="max-w-4xl">
            <Reveal
              as="p"
              delay={0}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.35em]"
              style={{ color: colors.primaryColor }}
            >
              {CENTER_NAME}
            </Reveal>
            <Reveal
              as="h1"
              delay={120}
              className="font-serif-display mt-5 text-4xl leading-[0.95] font-normal text-black sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Welcoming a New Era of Environmental Research and Sustainability
            </Reveal>
            <Reveal
              as="p"
              delay={220}
              className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-800 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl"
            >
              The Launch of the {CENTER_NAME} Initiative In a time when
              environmental challenges continue to intensify across the globe,
              the need for science-based action, community collaboration, and
              sustainability education has never been more important.
            </Reveal>
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <ScrollButton
              label="Introduction"
              targetId="introduction"
              className="w-full cursor-pointer px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
              style={{
                color: "#ffffff",
                border: `1px solid ${colors.primaryColor}`,
                backgroundColor: colors.primaryColor,
              }}
            />
            <ScrollButton
              label="Explore ESRDC MORE"
              targetId="esrdc-banner"
              className="w-full cursor-pointer px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
              style={{
                color: "#ffffff",
                border: `1px solid ${colors.secondColor}`,
                backgroundColor: colors.secondColor,
              }}
            />
          </div>

          <div
            className="text-marquee-mask mt-10 w-full max-w-5xl overflow-hidden rounded-full border border-black/10 bg-white/70 px-3 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-12 sm:px-4"
            aria-label={`${CENTER_NAME} highlights`}
          >
            <div className="text-marquee-track flex w-max items-center gap-4 sm:gap-5">
              {[...homeHighlights, ...homeHighlights].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex shrink-0 items-center gap-4 sm:gap-5"
                  aria-hidden={index >= homeHighlights.length}
                >
                  <span
                    className="text-sm font-semibold whitespace-nowrap uppercase sm:text-base"
                    style={{ color: colors.primaryColor }}
                  >
                    {item}
                  </span>
                  <span
                    className="text-lg leading-none sm:text-xl"
                    style={{ color: colors.secondColor }}
                  >
                    •
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PartnersCarousel
          title="Meet Our Partners"
          subtitle={`Collaborating institutions, agencies, and organizations that support ${CENTER_NAME}'s work in environmental research, education, and sustainability.`}
        />

        <div
          id="esrdc-banner"
          className="mx-auto mt-4 w-full scroll-mt-28 sm:mt-8 lg:mt-10 lg:w-[70vw] xl:w-[65vw]"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-black/15 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:rounded-4xl">
            <Image
              src="/esrdc-banner.png"
              alt={`${CENTER_NAME} sustainability dashboard preview`}
              width={3364}
              height={1245}
              quality={100}
              priority
              className="block h-auto w-full"
            />
          </div>
          <Reveal
            as="p"
            delay={100}
            className="mt-4 text-center text-xl font-bold tracking-[0.08em] sm:mt-5 sm:text-2xl lg:text-3xl"
            style={{ color: colors.primaryColor }}
          >
            SSU Environmental Sustainability Research and Development Center
          </Reveal>
        </div>
      </section>

      <section
        id="achievements"
        className="scroll-mt-28 px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      >
        <div className="mx-auto mb-14 max-w-6xl sm:mb-16 lg:mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <Image
              src="/ssu.png"
              alt="SSU Logo"
              width={96}
              height={96}
              quality={100}
              className="mx-auto mb-4 h-20 w-20 object-contain sm:mb-5 sm:h-24 sm:w-24"
            />
            <Reveal
              as="p"
              delay={0}
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: colors.primaryColor }}
            >
              University Leadership
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Dedicated Leaders for Academic Excellence and Sustainability
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <div className="bg-slate-50">
                <Image
                  src="/ssu-president.png"
                  alt="Samar State University President"
                  width={1200}
                  height={1500}
                  quality={100}
                  className="block h-auto w-full object-contain object-center"
                />
              </div>
              <div className="px-5 py-5 sm:px-6">
                <Reveal
                  as="p"
                  delay={80}
                  className="text-sm font-semibold uppercase tracking-[0.22em]"
                  style={{ color: colors.primaryColor }}
                >
                  President
                </Reveal>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <div className="bg-slate-50">
                <Image
                  src="/ssu-vice-president.png"
                  alt="Samar State University Vice President"
                  width={1200}
                  height={1500}
                  quality={100}
                  className="block h-auto w-full object-contain object-center"
                />
              </div>
              <div className="px-5 py-5 sm:px-6">
                <Reveal
                  as="p"
                  delay={120}
                  className="text-sm font-semibold uppercase tracking-[0.22em]"
                  style={{ color: colors.primaryColor }}
                >
                  Vice President
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div
          id="introduction"
          className="mx-auto mb-14 max-w-4xl rounded-[28px] border border-black/10 bg-white px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:mb-16 sm:px-8 sm:py-10 lg:mb-20 lg:px-10 lg:py-12"
        >
          <div className="mx-auto max-w-3xl">
            <Reveal
              as="div"
              delay={0}
              className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white"
              style={{ backgroundColor: colors.primaryColor }}
            >
              Introduction
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl"
            >
              A center built for research, conservation, and sustainable
              development
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
            >
              {CENTER_NAME} was established with a vision to become a leading hub
              for environmental research, biodiversity conservation, climate
              action, and sustainable development initiatives in Samar and
              beyond.
            </Reveal>
            <Reveal
              as="div"
              delay={260}
              className="mt-8 border-l-4 pl-5 sm:pl-6"
              style={{ borderColor: colors.primaryColor }}
            >
              <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The center serves as a platform where researchers, students,
                educators, partner institutions, and local communities can work
                together to address pressing environmental concerns through
                innovation, scientific inquiry, and community engagement.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <Reveal
              as="h3"
              delay={0}
              className="text-xl font-semibold text-slate-950 sm:text-2xl"
            >
              Advancing Research for Nature and Communities
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
            >
              {CENTER_NAME} aims to strengthen environmental and sustainability
              research that contributes to evidence-based decision-making and
              long-term ecological protection. The center supports studies
              related to:
            </Reveal>
            <ul className="mt-6 grid gap-3 text-base text-slate-800 sm:grid-cols-2 sm:gap-4 sm:text-lg">
              {[
                "Biodiversity assessment and conservation",
                "Watershed and forest ecosystem management",
                "Climate change adaptation and resilience",
                "Geographic Information Systems (GIS) and environmental mapping",
                "Wildlife documentation and species monitoring",
                "Environmental education and citizen science",
                "Sustainable resource management and ecological restoration",
              ].map((item, index) => (
                <Reveal
                  key={item}
                  as="li"
                  delay={140 + index * 70}
                  className="rounded-2xl border border-black/8 bg-slate-50 px-4 py-3 sm:px-5 sm:py-4"
                >
                  {item}
                </Reveal>
              ))}
            </ul>
            <Reveal
              as="p"
              delay={220}
              className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
            >
              Through these initiatives, {CENTER_NAME} seeks to bridge the gap
              between research and real-world environmental solutions.
            </Reveal>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <div>
              <Reveal
                as="h3"
                delay={0}
                className="text-xl font-semibold text-slate-950 sm:text-2xl"
              >
                Empowering Future Environmental Leaders
              </Reveal>
              <Reveal as="p" delay={100} className="mt-4">
                One of the core missions of {CENTER_NAME} is to empower students
                and young researchers through experiential learning and
                field-based environmental activities. By participating in
                biodiversity surveys, ecological monitoring, conservation
                campaigns, and sustainability projects, students gain practical
                skills while developing a deeper appreciation for nature and
                environmental stewardship.
              </Reveal>
              <Reveal as="p" delay={180} className="mt-4">
                The center also promotes interdisciplinary collaboration by
                engaging faculty members, academic institutions, government
                agencies, and environmental organizations in meaningful
                partnerships.
              </Reveal>
            </div>

            <div>
              <Reveal
                as="h3"
                delay={0}
                className="text-xl font-semibold text-slate-950 sm:text-2xl"
              >
                Strengthening Partnerships for Sustainability
              </Reveal>
              <Reveal as="p" delay={100} className="mt-4">
                Environmental protection requires collective action.
                {CENTER_NAME} recognizes the importance of partnerships in
                creating lasting impact. The center actively collaborates with
                local communities, academic institutions, conservation groups,
                and development organizations to promote sustainable practices
                and environmental awareness.
              </Reveal>
              <Reveal as="p" delay={180} className="mt-4">
                These partnerships help strengthen conservation programs,
                support environmental education, and encourage community
                participation in protecting natural ecosystems.
              </Reveal>
            </div>

            <div>
              <Reveal
                as="h3"
                delay={0}
                className="text-xl font-semibold text-slate-950 sm:text-2xl"
              >
                A Commitment to the Future
              </Reveal>
              <Reveal as="p" delay={100} className="mt-4">
                As {CENTER_NAME} begins its journey, it carries a strong
                commitment to research excellence, environmental responsibility, and
                sustainable development. The center envisions a future where
                science, education, and community action work hand in hand to
                conserve biodiversity, protect ecosystems, and build
                climate-resilient communities.
              </Reveal>
              <Reveal as="p" delay={180} className="mt-4">
                This blog will serve as a platform for sharing research updates,
                field experiences, environmental insights, student activities,
                conservation stories, and sustainability initiatives from
                {CENTER_NAME} and its partners.
              </Reveal>
              <Reveal as="p" delay={260} className="mt-4">
                Together, we move forward toward a more sustainable and
                environmentally conscious future.
              </Reveal>
              <Reveal
                as="p"
                delay={340}
                className="mt-4 font-medium text-slate-900"
              >
                For collaborations, research partnerships, and environmental
                initiatives, stay connected with {CENTER_NAME} through our official
                platforms and upcoming activities.
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-14 grid max-w-6xl overflow-hidden bg-white sm:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div
            className="min-h-105 bg-[#dceaf8] lg:min-h-170"
            style={{
              background: `linear-gradient(180deg, #dceaf8 0%, ${colors.primaryColor}18 100%)`,
            }}
          >
            <Image
              src="/maam-eds.png"
              alt="Edelyn Oliverio-Echapare, PhD"
              width={1200}
              height={1500}
              quality={100}
              className="block h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-20 lg:text-left">
            <Reveal
              as="p"
              delay={0}
              className="text-5xl leading-none font-semibold sm:text-6xl"
              style={{ color: `${colors.primaryColor}33` }}
            >
              &ldquo;
            </Reveal>
            <Reveal
              as="blockquote"
              delay={100}
              className="mt-6 text-3xl leading-[1.02] font-semibold text-slate-950 sm:text-4xl lg:text-5xl"
            >
              “Knowledge becomes meaningful when transformed into action for
              people, communities, and the environment.”
            </Reveal>
            <Reveal
              as="h3"
              delay={180}
              className="mt-10 text-xl font-bold text-slate-950 sm:text-2xl"
            >
              Edelyn Oliverio-Echapare, Ph.D
            </Reveal>
            <Reveal
              as="p"
              delay={240}
              className="mt-2 text-base font-medium text-slate-600 sm:text-lg"
              style={{ color: colors.primaryColor }}
            >
              Head of {CENTER_NAME}
            </Reveal>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-3">
          {[
            "Research-driven sustainability reporting",
            "Community-centered environmental initiatives",
            "Practical frameworks for long-term impact",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <Reveal
                as="p"
                delay={80}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: colors.primaryColor }}
              >
                Achievement
              </Reveal>
              <Reveal
                as="h2"
                delay={140}
                className="text-xl font-semibold text-slate-900 sm:text-2xl"
              >
                {item}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal
            as="p"
            delay={0}
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.secondColor }}
          >
            About {CENTER_NAME}
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl"
          >
            Building environmental progress through research, collaboration, and
            action.
          </Reveal>
          <Reveal
            as="p"
            delay={180}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8"
          >
            {CENTER_NAME} supports organizations and communities with clear
            insights, sustainability education, and measurable strategies that
            turn ideas into meaningful outcomes.
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 px-5 py-8 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <Reveal
            as="p"
            delay={0}
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "#cde7d5" }}
          >
            Contact
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mt-4 text-3xl font-semibold sm:text-4xl"
          >
            Let&apos;s build a more sustainable future together.
          </Reveal>
          <Reveal
            as="p"
            delay={180}
            className="mt-5 text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
          >
            Reach out to explore partnerships, research opportunities, or
            sustainability programs tailored to your goals.
          </Reveal>
          <div className="mt-8 flex justify-center">
            <Reveal
              as="a"
              delay={240}
              href="mailto:esrdc@ssu.edu.ph"
              className="rounded-[10px] px-5 py-3 text-sm font-semibold text-white sm:px-6 sm:text-base"
              style={{ backgroundColor: colors.primaryColor }}
            >
              esrdc@ssu.edu.ph
            </Reveal>
          </div>
        </div>
      </section>

      <ScrollButton
        label="Back to Top"
        targetId="home"
        ariaLabel="Scroll back to top"
        className="absolute right-4 bottom-4 z-20 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(15,23,42,0.2)] transition-transform hover:-translate-y-1 sm:right-6 sm:bottom-6"
        style={{ backgroundColor: colors.primaryColor }}
      />
    </div>
  );
}
