import React, { useEffect, useState } from "react";
import { ReactComponent as ScrollUp } from "../../assets/img/icon_scrollUp.svg";
import { motion, AnimatePresence } from "framer-motion";

interface SectionDict {
  [key: string]: string;
}

interface Props {
  sections: SectionDict;
}

// Sampled just left of the nav's own bounding box, so the probe never
// hits the nav itself while reading whatever section sits behind it.
const probePoint = () => ({
  x: Math.max(window.innerWidth - 280, 0),
  y: Math.round(window.innerHeight * 0.6),
});

const readBackgroundLuminance = (el: Element | null): number | null => {
  let node: HTMLElement | null = el as HTMLElement | null;
  while (node) {
    const bg = getComputedStyle(node).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match && !(bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
      const [, r, g, b] = match.map(Number);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    node = node.parentElement;
  }
  return null;
};

const SideNav: React.FC<Props> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  // Shown from the top of the page, not gated on scrolling into #content_section.
  const [isVisible] = useState(true);
  // Hidden while scrolling through a page's hover-image process overview
  // collage, which the fixed nav would otherwise sit on top of.
  const [isOverVisual, setIsOverVisual] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll2 = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (timer) clearTimeout(timer);

      if (scrollTop > lastScrollTop) {
        setPositionY(-60);
      } else {
        setPositionY(60);
      }
      const newTimer = setTimeout(() => {
        setPositionY(0);
      }, 50);

      setTimer(newTimer);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll2);
      if (timer) clearTimeout(timer);
    };
  }, [sections[0],lastScrollTop, timer]);

  useEffect(() => {
    const handleScrollChange = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const closestSection = Object.entries(sections).reduce(
        (closest, [name, id]) => {
          const element = document.getElementById(id);
          if (!element) return closest;
          const bounds = element.getBoundingClientRect();
          const position = bounds.top + window.pageYOffset;

          if (
            position < scrollPosition &&
            position + bounds.height > scrollPosition
          ) {
            return id;
          }

          return closest;
        },
        ""
      );

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, [sections]);

  // Auto-detect light vs dark background behind the nav's current position.
  // Forced light-on-dark over the cover/hero: it's a background-image, not
  // a CSS background-color, so there is nothing for the luminance probe to
  // read there and it would otherwise fall through to the page's own
  // (usually light) background.
  useEffect(() => {
    let ticking = false;
    const detect = () => {
      const { x, y } = probePoint();
      const el = document.elementFromPoint(x, y);
      if (el && el.closest("#hero_cover")) {
        setIsDarkBg(true);
        ticking = false;
        return;
      }
      const luminance = readBackgroundLuminance(el);
      if (luminance !== null) setIsDarkBg(luminance < 0.5);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(detect);
      }
    };
    detect();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Temporarily hide the nav while a page's #process_overview_visual
  // collage is in view (pages without one simply never toggle this).
  useEffect(() => {
    const target = document.getElementById("process_overview_visual");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => setIsOverVisual(entries[0].isIntersecting),
      // Scrolling down, the collage exits via the viewport's top edge —
      // a negative top margin shrinks the effective viewport there, so
      // the nav is treated as "past" it, and reappears, a bit sooner
      // than when its bottom edge actually clears the real viewport top.
      { threshold: 0, rootMargin: "-200px 0px 0px 0px" }
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, []);

  const sidebarVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  // Pure white + a shadow on dark backgrounds: a near-white #E5E5E5 with no
  // shadow still reads as muddy against a busy, bright photo like the hero.
  const textColor = isDarkBg ? "text-white" : "text-[#5A5A5A]";
  const activeBorderColor = isDarkBg ? "border-l-white" : "border-l-[#5A5A5A]";

  return (
    <AnimatePresence>
      {isVisible && !isOverVisual && (
        <motion.div
          className={`fixed right-[1%] bottom-[30%] flex flex-col ${textColor} font-light w-[250px] z-50 py-4 pl-10 bg-opacity-70 rounded-md transform-gpu transition-transform duration-1000 hidden ${
            isVisible ? "md:flex" : "hidden"
          }`}
          style={{
            fontSize: "90%",
            textShadow: isDarkBg ? "0 1px 5px rgba(0,0,0,0.85)" : "none",
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(sections).map(([name, id]) => (
            <button
              key={id}
              className={`p-2 text-left box-[border] duration-300 hover:scale-[1.05] ${
                activeSection === id ? `font-bold ${activeBorderColor} border-l-[3.5px]` : ""
              }`}
              onClick={() => handleScroll(id)}
            >
              {name}
            </button>
          ))}
          <div
            className={`rounded-full flex flex-col items-center justify-center shadow-md w-[40px] h-[40px] mt-4 bg-white/30 backdrop-blur-md border border-white/50 duration-300 hover:scale-[1.1] hover:bg-white/50 cursor-pointer ${
              isDarkBg ? "text-white" : "text-black"
            }`}
            onClick={scrollToTop}
          >
            <ScrollUp />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
