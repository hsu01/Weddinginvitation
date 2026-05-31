import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'venue', label: 'Venue' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'registry', label: 'Registry' },
];

export function TopNavbar() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] border-b border-white/40 bg-[#F7F2EC]/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto px-4 py-3 md:px-8">
        {navItems.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 rounded-full px-4 py-2 font-['Inter'] text-[11px] uppercase tracking-[0.18em] transition-all duration-300 active:scale-95 ${
                isActive
                  ? 'bg-[#2D1F1B] text-white shadow-lg shadow-[#2D1F1B]/20'
                  : 'bg-white/65 text-[#5C4A3F] hover:-translate-y-[1px] hover:bg-white hover:text-[#2D1F1B]'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
