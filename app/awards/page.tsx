import AwardsCertificates from "@/components/awards-certificates";
import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

export default function AwardsPage() {
  return (
    <section className="min-h-screen px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.primaryColor }}
          >
            Awards
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Recognitions that celebrate ESRDC&apos;s research excellence and
            innovation.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            These awards highlight how {CENTER_NAME} continues to advance
            environmental sustainability through research productivity,
            innovation, publication, and collaborative scientific work.
          </p>
        </div>

        <AwardsCertificates />

        <div className="mt-12 rounded-[28px] bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Continuing Impact
          </p>
          <p className="mt-4 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
            ESRDC&apos;s awards reflect a growing body of work built through
            research leadership, partner collaboration, and meaningful
            environmental action.
          </p>
        </div>
      </div>
    </section>
  );
}
