import Image from "next/image";
import Link from "next/link";
import { colors } from "@/utils/colors";
import {
  CENTER_ACRONYM,
  CENTER_NAME,
  HEADER_BRAND_NAME,
} from "@/utils/site";
import NavList from "./ui/navlist";

type HeaderProps = {
  brandName?: string;
};

const Header = ({ brandName = HEADER_BRAND_NAME }: HeaderProps) => {
  return (
    <header className="w-full border-b border-black/8 bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 sm:gap-6">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
          aria-label="Go to homepage"
        >
          <Image
            src="/ssu.png"
            alt="SSU Logo"
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <Image
            src="/esrdc-logo.png"
            alt={`${CENTER_NAME} Logo`}
            width={44}
            height={44}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <div className="flex min-w-0 items-center gap-2">
            <span className="hidden text-sm font-semibold tracking-[0.08em] text-slate-950 uppercase min-[420px]:inline sm:hidden">
              SSU - {CENTER_ACRONYM}
            </span>
            <span className="hidden max-w-xs text-xs leading-tight font-semibold tracking-[0.04em] text-slate-950 uppercase sm:inline md:max-w-sm lg:max-w-md lg:text-sm">
              {brandName}
            </span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-[10px] px-3 text-sm font-bold whitespace-nowrap !text-white transition-transform hover:-translate-y-0.5 sm:h-auto sm:px-5 sm:py-2.5 sm:text-base lg:px-7 lg:py-3"
          style={{
            backgroundColor: colors.primaryColor,
            borderColor: colors.primaryColor,
          }}
        >
          CONTACT
        </Link>
      </div>

      <div className="mx-auto mt-3 flex w-full max-w-6xl justify-center">
        <div className="w-full overflow-x-auto rounded-full [-ms-overflow-style:none] [scrollbar-width:none] md:w-auto [&::-webkit-scrollbar]:hidden">
          <NavList />
        </div>
      </div>
    </header>
  );
};

export default Header;
