import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

export default function AboutPage() {
  return (
    <section className="min-h-screen px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-black/10 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:px-10 sm:py-12">
        <p
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: colors.secondColor }}
        >
          About {CENTER_NAME}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-slate-950 sm:text-5xl">
          Building environmental progress through research, collaboration, and
          action.
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p>
              The Environmental Sustainability Research and Development Center
              was established to serve as a leading hub for biodiversity
              conservation, climate action, environmental research, and
              sustainable development initiatives.
            </p>
            <p>
              {CENTER_NAME} connects researchers, educators, students,
              institutions, and communities through programs that strengthen
              scientific inquiry, environmental awareness, and long-term
              ecological care.
            </p>
            <p>
              By combining research excellence with local engagement, the center
              supports evidence-based decision-making and practical solutions
              that respond to today&apos;s environmental challenges.
            </p>
          </div>

          <div className="rounded-[28px] bg-slate-950 p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Mission Focus
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/85">
              <li>Advance sustainability and environmental research</li>
              <li>Support biodiversity and ecosystem protection</li>
              <li>Empower students through experiential learning</li>
              <li>Strengthen partnerships for community impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
