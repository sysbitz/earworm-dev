import React, { useState, useEffect, useRef } from "react";

type TabId = "marketing" | "sales" | "hr" | "partnership";

interface DepartmentData {
  id: TabId;
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const departments: DepartmentData[] = [
  {
    id: "marketing",
    title: "Marketing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M24.0003 24.0001C26.9458 24.0001 29.3337 19.2245 29.3337 13.3334C29.3337 7.44238 26.9458 2.66675 24.0003 2.66675C21.0548 2.66675 18.667 7.44238 18.667 13.3334C18.667 19.2245 21.0548 24.0001 24.0003 24.0001Z"
          stroke="#0D0D0D"
          stroke-width="2"
        />
        <path
          d="M24.0003 2.66675C19.8629 2.66675 11.2872 5.8369 6.36173 7.80504C4.10622 8.70632 2.66699 10.9045 2.66699 13.3334C2.66699 15.7623 4.10622 17.9605 6.36173 18.8618C11.2872 20.8299 19.8629 24.0001 24.0003 24.0001"
          stroke="#0D0D0D"
          stroke-width="2"
        />
        <path
          d="M14.6667 29.3333L12.0757 27.9071C9.25462 26.3543 7.66205 23.2179 8.06063 20"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    description:
      "Turn one video episode into weeks of content across 15+ channels, while building brand authority, supporting demand gen, and giving your team clear insight into what actually drives engagement and pipeline.",
    image: "/lion.png",
  },
  {
    id: "sales",
    title: "Sales",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M23.333 6.66675C24.4375 6.66675 25.333 7.56217 25.333 8.66675C25.333 9.77132 24.4375 10.6667 23.333 10.6667C22.2285 10.6667 21.333 9.77132 21.333 8.66675C21.333 7.56217 22.2285 6.66675 23.333 6.66675Z"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.6993 14.8586C2.36177 16.3525 2.333 18.6062 3.56054 20.1917C5.99648 23.3378 8.66265 26.0039 11.8088 28.4398C13.3942 29.6674 15.6479 29.6386 17.1418 28.3011C21.1975 24.6697 24.9117 20.8746 28.4962 16.7039C28.8506 16.2917 29.0722 15.7863 29.1219 15.2449C29.3419 12.8507 29.7939 5.95297 27.9207 4.07973C26.0474 2.20649 19.1497 2.65844 16.7555 2.87843C16.2141 2.92819 15.7087 3.14985 15.2963 3.50423C11.1258 7.08869 7.33074 10.8029 3.6993 14.8586Z"
          stroke="#0D0D0D"
          stroke-width="2"
        />
        <path
          d="M18.3842 16.4888C18.4126 15.9541 18.5626 14.976 17.7497 14.2327M17.7497 14.2327C17.4981 14.0027 17.1543 13.7951 16.6862 13.63C15.0107 13.0395 12.9528 15.016 14.4086 16.8252C15.1911 17.7976 15.7945 18.0968 15.7377 19.2011C15.6977 19.978 14.9346 20.7896 13.9289 21.0988C13.0551 21.3673 12.0914 21.0117 11.4818 20.3305C10.7374 19.4989 10.8126 18.7148 10.8062 18.3731M17.7497 14.2327L18.6671 13.3152M11.5481 20.4343L10.6768 21.3056"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    description:
      "Equip your sales team with high-quality content clips to overcome objections, personalize outreach, and close deals faster. Let your prospects see the expertise before they even sign the contract.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "hr",
    title: "HR/People",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M22.0003 26.6667V23.9606C22.0003 22.3042 21.2546 20.6799 19.7474 19.9929C17.909 19.1549 15.7042 18.6667 13.3337 18.6667C10.9632 18.6667 8.75833 19.1549 6.9199 19.9929C5.41269 20.6799 4.66699 22.3042 4.66699 23.9606V26.6667"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.3333 26.668V23.9618C27.3333 22.3054 26.5876 20.6812 25.0804 19.9942C24.7329 19.8358 24.3723 19.6898 24 19.5574"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3337 14.6668C15.911 14.6668 18.0003 12.5775 18.0003 10.0002C18.0003 7.42283 15.911 5.3335 13.3337 5.3335C10.7563 5.3335 8.66699 7.42283 8.66699 10.0002C8.66699 12.5775 10.7563 14.6668 13.3337 14.6668Z"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 5.52612C21.9276 6.09983 23.3333 7.88552 23.3333 9.99954C23.3333 12.1136 21.9276 13.8993 20 14.473"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    description:
      "Showcase company culture and attract top talent by sharing authentic stories from your team and leadership. Build an employer brand that people actually want to be a part of.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "partnership",
    title: "Partnership",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M29.3337 8.99992H25.6151C24.8137 8.99992 24.4129 8.99992 24.035 8.88549C23.6571 8.77108 23.3237 8.54878 22.6567 8.10418C21.6565 7.43729 20.5153 6.67652 19.9483 6.50488C19.3815 6.33325 18.7803 6.33325 17.5781 6.33325C15.9431 6.33325 14.8893 6.33325 14.1542 6.63773C13.4191 6.94221 12.8411 7.52028 11.685 8.6764L10.6675 9.69384C10.407 9.95439 10.2767 10.0847 10.1963 10.2133C9.89812 10.6901 9.93117 11.3027 10.2788 11.7446C10.3726 11.8638 10.5162 11.9793 10.8032 12.2103C11.8643 13.0642 13.3939 12.979 14.3547 12.0125L16.0003 10.3571H17.3337L25.3337 18.4047C26.0701 19.1455 26.0701 20.3464 25.3337 21.0872C24.5973 21.828 23.4034 21.828 22.667 21.0872L22.0003 20.4165M22.0003 20.4165L18.0003 16.3928M22.0003 20.4165C22.7367 21.1573 22.7367 22.3584 22.0003 23.0991C21.2639 23.8399 20.0701 23.8399 19.3337 23.0991L18.0003 21.7579M18.0003 21.7579C18.7367 22.4985 18.7367 23.6996 18.0003 24.4404C17.2639 25.1811 16.0701 25.1811 15.3337 24.4404L13.3337 22.4284M18.0003 21.7579L15.3337 19.0912M13.3337 22.4284L12.667 21.7579M13.3337 22.4284C14.0701 23.1692 14.0701 24.3703 13.3337 25.1111C12.5973 25.8517 11.4034 25.8517 10.667 25.1111L6.90215 21.2677C6.12853 20.478 5.74171 20.0832 5.24613 19.8748C4.75054 19.6665 4.19777 19.6665 3.09225 19.6665H2.66699"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.3333 19.6667H26"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M11.3337 9H2.66699"
          stroke="#0D0D0D"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    ),
    description:
      "Strengthen relationships with partners and industry leaders by co-creating valuable content that serves both audiences. Double your reach by tapping into their networks.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
  },
];

// Scroll distance (px) consumed per tab transition
const STEP_HEIGHT = 400;

const DepartmentsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const wrapperTop = wrapper.offsetTop;

      // Tab transitions begin only once the section title has reached top:0.
      // The section title hits top:0 when scrollY === wrapperTop,
      // so we measure progress from that exact moment.
      const scrolledInto = window.scrollY - wrapperTop;

      if (scrolledInto < 0) {
        setActiveIndex(0);
        return;
      }

      const totalScrollRange = STEP_HEIGHT * (departments.length - 1);

      if (scrolledInto >= totalScrollRange) {
        setActiveIndex(departments.length - 1);
        return;
      }

      const index = Math.floor(scrolledInto / STEP_HEIGHT);
      setActiveIndex(Math.min(index, departments.length - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Wrapper height:
  // The sticky element is h-screen, so we need exactly that for the "dwell" time,
  // plus one STEP_HEIGHT per additional tab beyond the first.
  const totalHeight = `calc(100vh + ${STEP_HEIGHT * departments.length}px)`;

  return (
    <div
      ref={wrapperRef}
      className="bg-[#E6E8EB] relative z-10 px-20 py-15"
      style={{ height: totalHeight }}
    >
      {/* Sticky shell — pins when the section TOP (title) reaches top:0 */}
      <div className="sticky top-0 flex flex-col justify-center py-2 overflow-visible">
        <div className="px-2 lg:px-2 w-full">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-[32px] lg:text-[56px] nohemi font-medium text-[#0D0D0D] mb-7.5 tracking-tight leading-[1.2]">
              Video content that supports <br />
              your entire organisation
            </h2>
            <p className="text-[#373737] text-[20px] geist">
              We do two things: launch video podcasts properly, and run them as
              long-term business assets.
            </p>
          </div>

          {/* Glass Wrapper */}
          <div
            className="p-8"
            style={{
              borderRadius: "48px",
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Main Content Card */}
            <div
              className="bg-white shadow-xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row h-[min(600px,calc(100vh-280px))]"
              style={{ borderRadius: "24px" }}
            >
              {/* Left Side: Tabs */}
              <div className="lg:w-[70%] p-6 lg:p-10 flex flex-col justify-center">
                <div className="space-y-2">
                  {departments.map((dept, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <div
                        key={dept.id}
                        onClick={() => setActiveIndex(index)}
                        className="cursor-pointer transition-all duration-300 py-4"
                      >
                        <div className="flex items-start gap-4 md:gap-6">
                          <div
                            className={`w-1 self-stretch rounded-full transition-colors duration-300 shrink-0 ${
                              isActive ? "bg-[#AB7AFF]" : "bg-transparent"
                            }`}
                          ></div>

                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                                style={{
                                  background: "rgba(13, 13, 13, 0.10)",
                                  color: "#0D0D0D",
                                }}
                              >
                                {dept.icon}
                              </div>
                              <h3
                                className={`text-[32px] geist font-semibold font-display tracking-tight ${
                                  isActive ? "text-black" : "text-gray-700"
                                }`}
                              >
                                {dept.title}
                              </h3>
                            </div>

                            <div
                              className={`grid transition-all duration-500 ease-in-out ${
                                isActive
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <p className="text-[#373737] geist text-[20px] leading-relaxed pl-14 pb-1">
                                  {dept.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {!isActive && (
                          <div className="ml-15 mt-4 h-px bg-gray-100"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Crossfade Images */}
              <div
                className="lg:w-[55%] relative h-full min-h-100 bg-gray-100 overflow-hidden"
                style={{ borderRadius: "0 24px 24px 0" }}
              >
                {departments.map((dept, index) => (
                  <img
                    key={dept.id}
                    src={dept.image}
                    alt={dept.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      activeIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsSection;
