import CardLists from "@/components/cardLists";
import { ExternalLink } from "lucide-react";
import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

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
            Milestones that reflect {CENTER_NAME}&apos;s work in research and
            sustainability.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            These focus areas highlight how {CENTER_NAME} supports environmental
            protection, student engagement, and evidence-based action across
            Samar and beyond.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <div className="relative aspect-video overflow-hidden bg-slate-950">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/nr8vmB0bVmg?autoplay=1&playsinline=1"
              title={`${CENTER_NAME} achievements video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            For more updates, featured activities, and ongoing initiatives from{" "}
            {CENTER_NAME}, visit our official{" "}
            <a
              href="https://www.facebook.com/SSU.ESRDC"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-slate-950 transition-colors hover:text-slate-700"
            >
              <span className="underline decoration-slate-400 underline-offset-4">
                Facebook page
              </span>
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <CardLists />
        </div>
      </div>
    </section>
  );
}
