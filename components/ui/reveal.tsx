"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  threshold?: number;
} & Record<string, unknown>;

export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  style,
  threshold = 0.18,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const Component = as as ElementType;
  const elementProps = rest as Record<string, unknown>;

  return (
    <Component
      {...elementProps}
      ref={ref}
      className={`scroll-reveal${isVisible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
