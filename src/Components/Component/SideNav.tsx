import React, { useEffect, useState } from "react";
import { ReactComponent as ScrollUp } from "../../assets/img/icon_scrollUp.svg";
import { motion, AnimatePresence } from "framer-motion";

interface SectionDict {
  [key: string]: string;
}

interface Props {
  sections: SectionDict;
}

const SideNav: React.FC<Props> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
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
    const targetSection = document.getElementById("content_section");

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
      }, 100); 

      setTimer(newTimer);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
    };

    window.addEventListener('scroll', handleScroll2);

    const observer = new IntersectionObserver(
      (entries) => {
          setIsVisible(entries[0].isIntersecting);
        
      },
      {
        threshold: 0.05,
      }
    );

    if (targetSection) {
      observer.observe(targetSection);
    }

    return () => {
      if (targetSection) {
        observer.unobserve(targetSection);
      }
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

  const sidebarVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed right-[1%] bottom-[30%] flex flex-col font-light w-[250px] z-50  py-4 pl-4 bg-opacity-70 rounded-md transform-gpu transition-transform duration-1000 ${
            isVisible ? "block" : "hidden"
          }`}
          style={{ transform: `translateY(${positionY}%)`}}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
          transition={{ duration: 0.5 }}

        >
          {Object.entries(sections).map(([name, id]) => (
            <button
              key={id}
              className={`p-2 text-left box-border duration-300 hover:scale-[1.05] ${
                activeSection === id
                  ? "font-bold border-l-[4px] border-l-black"
                  : ""
              }`}
              onClick={() => handleScroll(id)}
            >
              {name}
            </button>
          ))}
          <div
            className="rounded-full flex flex-col items-center justify-center shadow-md w-[40px] h-[40px] mt-4 bg-white duration-300 hover:scale-[1.1] cursor-pointer"
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
