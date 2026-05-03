import Image from "next/image";
import Link from "next/link";
import { colors } from "@/utils/colors";
import NavList from "./ui/navlist";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/8 bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
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
            alt="ESRDC Logo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-sm font-semibold tracking-[0.08em] text-slate-950 uppercase sm:text-lg">
              SSU - ESRDC
            </span>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <NavList />
        </div>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-[10px] px-4 py-2.5 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-base lg:px-7 lg:py-3"
          style={{
            backgroundColor: colors.primaryColor,
            borderColor: colors.primaryColor,
          }}
        >
          CONTACT
        </Link>
      </div>

      <div className="mx-auto mt-3 flex w-full max-w-6xl md:hidden">
        <div className="w-full overflow-x-auto rounded-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <NavList />
        </div>
      </div>
    </header>
  );
};

export default Header;
