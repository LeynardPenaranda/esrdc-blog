import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { colors } from "@/utils/colors";
import {
  KALIKASCAN_BROCHURE_DOWNLOAD_NAME,
  KALIKASCAN_BROCHURE_PATH,
} from "@/utils/site";

const KALIKASCAN_BROCHURE_VIEWER_PATH = `${KALIKASCAN_BROCHURE_PATH}#toolbar=1&navpanes=0&scrollbar=1&pagemode=none&view=FitH`;

export const metadata: Metadata = {
  title: "KalikaScan Brochure | ESRDC Blog",
  description: "View and download the KalikaScan trifold brochure.",
};

export default function KalikaScanBrochurePage() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: colors.primaryColor }}
            >
              KalikaScan
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              KalikaScan Brochure
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Preview the KalikaScan trifold brochure below or download a copy
              for offline sharing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={KALIKASCAN_BROCHURE_PATH}
              download={KALIKASCAN_BROCHURE_DOWNLOAD_NAME}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-bold whitespace-nowrap !text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: colors.primaryColor }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Brochure
            </a>
            <a
              href={KALIKASCAN_BROCHURE_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-black/10 bg-white px-5 py-3 text-sm font-bold whitespace-nowrap text-slate-900 transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open PDF
            </a>
          </div>
        </div>

        <div className="mt-8 hidden overflow-hidden rounded-[8px] border border-black/10 bg-slate-100 shadow-sm md:block">
          <iframe
            src={KALIKASCAN_BROCHURE_VIEWER_PATH}
            title="KalikaScan brochure PDF preview"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="brochure-pdf-frame h-[70dvh] min-h-[480px] w-full"
          >
            Open or download the KalikaScan brochure PDF.
          </iframe>
        </div>

        <div className="mt-8 rounded-[8px] border border-black/10 bg-white px-5 py-6 text-center shadow-sm md:hidden">
          <p className="mx-auto max-w-xl text-base leading-7 text-slate-700">
            The brochure PDF is large, so it opens more smoothly in your
            browser&apos;s PDF viewer on smaller screens.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={KALIKASCAN_BROCHURE_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-black/10 bg-white px-5 py-3 text-sm font-bold whitespace-nowrap text-slate-900 transition-transform hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open PDF
            </a>
            <a
              href={KALIKASCAN_BROCHURE_PATH}
              download={KALIKASCAN_BROCHURE_DOWNLOAD_NAME}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-bold whitespace-nowrap !text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: colors.primaryColor }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
