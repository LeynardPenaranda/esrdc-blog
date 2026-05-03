import { colors } from "@/utils/colors";
import { CENTER_NAME } from "@/utils/site";

export default function ContactPage() {
  return (
    <section className="min-h-screen px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-black/10 bg-white px-6 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:px-10 sm:py-12">
        <div className="max-w-3xl">
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: colors.primaryColor }}
          >
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Connect with {CENTER_NAME} for collaborations, research, and
            environmental initiatives.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            We welcome conversations with academic institutions, development
            organizations, local communities, and environmental partners who
            share our commitment to sustainability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] bg-slate-950 p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Email
            </p>
            <a
              href="mailto:esrdc@ssu.edu.ph"
              className="mt-4 block text-2xl font-semibold text-white"
            >
              esrdc@ssu.edu.ph
            </a>
            <p className="mt-4 text-base leading-7 text-white/75">
              For research partnerships, sustainability programs, and official
              collaboration inquiries.
            </p>
          </div>

          <div className="rounded-[24px] border border-black/10 bg-slate-50 p-7">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: colors.secondColor }}
            >
              Stay Connected
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Follow {CENTER_NAME} through its official platforms and upcoming
              activities to stay informed about environmental research updates,
              student engagement, and conservation work.
            </p>
            <div className="mt-6">
              <a
                href="mailto:esrdc@ssu.edu.ph"
                className="inline-flex rounded-[10px] px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: colors.primaryColor }}
              >
                Send an Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
