import Image from "next/image";
import PartnersCarousel from "@/components/partners-carousel";
import { colors } from "@/utils/colors";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        id="home"
        className="scroll-mt-28 overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12"
        style={{
          background: `linear-gradient(180deg, ${colors.primaryColor}40 0%, ${colors.primaryColor}20 56%, ${colors.secondColor}24 100%)`,
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="max-w-4xl">
            <p
              className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.35em]"
              style={{ color: colors.primaryColor }}
            >
              ESRDC
            </p>
            <h1 className="font-serif-display mt-5 text-4xl leading-[0.95] font-normal text-black sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Welcoming a New Era of Environmental Research and Sustainability
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-800 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
              The Launch of the ESRDC Initiative In a time when environmental
              challenges continue to intensify across the globe, the need for
              science-based action, community collaboration, and sustainability
              education has never been more important.
            </p>
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <button
              className="w-full px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
              style={{
                border: `1px solid ${colors.primaryColor}`,
                backgroundColor: colors.primaryColor,
              }}
            >
              Introduction
            </button>
            <button
              className="w-full px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition sm:w-auto sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
              style={{
                border: `1px solid ${colors.secondColor}`,
                backgroundColor: colors.secondColor,
              }}
            >
              Explore the platform
            </button>
          </div>
        </div>

        <PartnersCarousel
          title="Meet Our Partners"
          subtitle="Collaborating institutions, agencies, and organizations that support ESRDC's work in environmental research, education, and sustainability."
        />

        <div className="mx-auto mt-4 w-full sm:mt-8 lg:mt-10 lg:w-[70vw] xl:w-[65vw]">
          <div className="overflow-hidden rounded-[1.75rem] border border-black/15 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:rounded-4xl">
            <Image
              src="/esrdc-banner.png"
              alt="ESRDC sustainability dashboard preview"
              width={3364}
              height={1245}
              quality={100}
              priority
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="scroll-mt-28 px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      >
        <div className="mx-auto mb-14 max-w-4xl rounded-[28px] border border-black/10 bg-white px-5 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:mb-16 sm:px-8 sm:py-10 lg:mb-20 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-3xl">
            <div
              className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white"
              style={{ backgroundColor: colors.primaryColor }}
            >
              Introduction
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              A center built for research, conservation, and sustainable
              development
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              The ESRDC was established with a vision to become a leading hub
              for environmental research, biodiversity conservation, climate
              action, and sustainable development initiatives in Samar and
              beyond.
            </p>
            <div
              className="mt-8 border-l-4 pl-5 sm:pl-6"
              style={{ borderColor: colors.primaryColor }}
            >
              <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                The center serves as a platform where researchers, students,
                educators, partner institutions, and local communities can work
                together to address pressing environmental concerns through
                innovation, scientific inquiry, and community engagement.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
              Advancing Research for Nature and Communities
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              ESRDC aims to strengthen environmental and sustainability research
              that contributes to evidence-based decision-making and long-term
              ecological protection. The center supports studies related to:
            </p>
            <ul className="mt-6 grid gap-3 text-base text-slate-800 sm:grid-cols-2 sm:gap-4 sm:text-lg">
              {[
                "Biodiversity assessment and conservation",
                "Watershed and forest ecosystem management",
                "Climate change adaptation and resilience",
                "Geographic Information Systems (GIS) and environmental mapping",
                "Wildlife documentation and species monitoring",
                "Environmental education and citizen science",
                "Sustainable resource management and ecological restoration",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-black/8 bg-slate-50 px-4 py-3 sm:px-5 sm:py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Through these initiatives, ESRDC seeks to bridge the gap between
              research and real-world environmental solutions.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                Empowering Future Environmental Leaders
              </h3>
              <p className="mt-4">
                One of the core missions of ESRDC is to empower students and
                young researchers through experiential learning and field-based
                environmental activities. By participating in biodiversity
                surveys, ecological monitoring, conservation campaigns, and
                sustainability projects, students gain practical skills while
                developing a deeper appreciation for nature and environmental
                stewardship.
              </p>
              <p className="mt-4">
                The center also promotes interdisciplinary collaboration by
                engaging faculty members, academic institutions, government
                agencies, and environmental organizations in meaningful
                partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                Strengthening Partnerships for Sustainability
              </h3>
              <p className="mt-4">
                Environmental protection requires collective action. ESRDC
                recognizes the importance of partnerships in creating lasting
                impact. The center actively collaborates with local communities,
                academic institutions, conservation groups, and development
                organizations to promote sustainable practices and environmental
                awareness.
              </p>
              <p className="mt-4">
                These partnerships help strengthen conservation programs,
                support environmental education, and encourage community
                participation in protecting natural ecosystems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                A Commitment to the Future
              </h3>
              <p className="mt-4">
                As ESRDC begins its journey, it carries a strong commitment to
                research excellence, environmental responsibility, and
                sustainable development. The center envisions a future where
                science, education, and community action work hand in hand to
                conserve biodiversity, protect ecosystems, and build
                climate-resilient communities.
              </p>
              <p className="mt-4">
                This blog will serve as a platform for sharing research updates,
                field experiences, environmental insights, student activities,
                conservation stories, and sustainability initiatives from ESRDC
                and its partners.
              </p>
              <p className="mt-4">
                Together, we move forward toward a more sustainable and
                environmentally conscious future.
              </p>
              <p className="mt-4 font-medium text-slate-900">
                For collaborations, research partnerships, and environmental
                initiatives, stay connected with ESRDC through our official
                platforms and upcoming activities.
              </p>
            </div>
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
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: colors.primaryColor }}
              >
                Achievement
              </p>
              <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                {item}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.secondColor }}
          >
            About ESRDC
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Building environmental progress through research, collaboration, and
            action.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            ESRDC supports organizations and communities with clear insights,
            sustainability education, and measurable strategies that turn ideas
            into meaningful outcomes.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 px-5 py-8 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:rounded-[28px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "#cde7d5" }}
          >
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let&apos;s build a more sustainable future together.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Reach out to explore partnerships, research opportunities, or
            sustainability programs tailored to your goals.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:hello@esrdc.org"
              className="rounded-[10px] px-5 py-3 text-sm font-semibold text-white sm:px-6 sm:text-base"
              style={{ backgroundColor: colors.primaryColor }}
            >
              esrdcssu@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
