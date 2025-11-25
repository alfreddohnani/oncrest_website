"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export default function DesktopNav() {
  const pathname = usePathname();

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorDone, setIndicatorDone] = useState(false);

  useEffect(() => {
    const el = linkRefs.current[pathname];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement!.getBoundingClientRect();

      setIndicatorDone(false); // Reset before animating
      setIndicatorLeft(rect.left - parentRect.left);
      setIndicatorWidth(rect.width);
    }
  }, [pathname]);

  return (
    <nav className="relative hidden min-[920px]:flex bg-[#F5F5F5] p-2 gap-x-8 rounded-full font-medium text-gray-400 text-lg lg:text-xl">
      {/* Sliding Pill Indicator */}
      <span
        className={cn(
          "absolute top-2 bottom-2 rounded-full bg-white shadow-pill transition-all duration-500 scale-100",
          "[transition-timing-function:cubic-bezier(0.4,0,0.2,1)] animate-pill-bounce"
        )}
        style={{
          left: indicatorLeft,
          width: indicatorWidth,
        }}
        onTransitionEnd={() => setIndicatorDone(true)}
      ></span>

      {NAV_ITEMS.map(({ link, title }) => {
        const isActive = pathname === link;

        return (
          <Link
            key={link}
            href={link}
            ref={(el: HTMLAnchorElement) => (linkRefs.current[link] = el)}
            className={cn(
              "relative z-10 py-2 px-4 transition-colors duration-300 flex items-center gap-2",
              isActive && "text-primary-600 font-semibold"
            )}
          >
            {/* Green Dot — appears AFTER pill finishes moving */}
            {isActive && (
              <div
                className={cn(
                  "size-3 bg-[#30927E] rounded-full",
                  "transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
                  indicatorDone ? "opacity-100 scale-100" : "opacity-0 scale-0"
                )}
              ></div>
            )}
            {title}
          </Link>
        );
      })}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pill-bounce {
          0% {
            transform: translateX(0) scaleX(1) scaleY(1);
            box-shadow: 0 0 0px rgba(48, 146, 126, 0);
          }
          40% {
            transform: translateX(0) scaleX(1.05) scaleY(1.05);
            box-shadow: 0 0 12px rgba(48, 146, 126, 0.3);
          }
          60% {
            transform: translateX(0) scaleX(0.95) scaleY(0.95);
            box-shadow: 0 0 8px rgba(48, 146, 126, 0.2);
          }
          80% {
            transform: translateX(0) scaleX(1.02) scaleY(1.02);
            box-shadow: 0 0 6px rgba(48, 146, 126, 0.15);
          }
          100% {
            transform: translateX(0) scaleX(1) scaleY(1);
            box-shadow: 0 0 4px rgba(48, 146, 126, 0.1);
          }
        }

        .animate-pill-bounce {
          animation: pill-bounce 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .shadow-pill {
          box-shadow: 0 0 6px rgba(48, 146, 126, 0.2);
        }
      `}</style>
    </nav>
  );
}
