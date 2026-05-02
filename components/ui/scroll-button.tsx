"use client";

import type { CSSProperties } from "react";

type ScrollButtonProps = {
  label: string;
  targetId: string;
  className: string;
  style?: CSSProperties;
  ariaLabel?: string;
};

const ScrollButton = ({
  label,
  targetId,
  className,
  style,
  ariaLabel,
}: ScrollButtonProps) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel ?? label}
      className={className}
      style={style}
    >
      {label}
    </button>
  );
};

export default ScrollButton;
