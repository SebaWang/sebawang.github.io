import React, { useEffect, useState } from 'react';
import {ReactComponent as ScrollUp} from "../../assets/img/icon_scrollUp.svg"

interface SectionDict {
    [key: string]: string;
}

interface Props {
    sections: SectionDict;
}

const SideNav: React.FC<Props> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState<string>('');

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScrollChange = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Check the middle of the screen

            const closestSection = Object.entries(sections).reduce((closest, [name, id]) => {
                const element = document.getElementById(id);
                if (!element) return closest;
                const bounds = element.getBoundingClientRect();
                const position = bounds.top + window.pageYOffset;
                
                if (position < scrollPosition && position + bounds.height > scrollPosition) {
                    return id;
                }

                return closest;
            }, '');

            setActiveSection(closestSection);
        };

        window.addEventListener('scroll', handleScrollChange);
        return () => {
            window.removeEventListener('scroll', handleScrollChange);
        };
    }, [sections]);

    return (
        <div className="fixed right-[1%] bottom-[3%] flex flex-col bg-white font-light w-[250px] z-50  py-4 pl-4 bg-opacity-70 rounded-md">
            {Object.entries(sections).map(([name, id]) => (
                <button
                    key={id}
                    className={`p-2 text-left box-border duration-300 hover:bg-gray-100 ${activeSection === id ? 'font-bold border-l-[4px] border-l-black' : ''}`}
                    onClick={() => handleScroll(id)}
                >
                    {name}
                </button>
            ))}
            <div className='rounded-full flex flex-col items-center justify-center shadow-md w-[40px] h-[40px] mt-4 bg-white duration-300 hover:scale-[1.1] cursor-pointer' onClick={scrollToTop}>
                <ScrollUp />
            </div>
        </div>
    );
};

export default SideNav;
