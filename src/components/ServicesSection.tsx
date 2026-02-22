import React from "react";

const glassStyle: React.CSSProperties = {
	borderRadius: "48px",
	background: "rgba(255, 255, 255, 0.35)",
	backdropFilter: "blur(20px)",
	WebkitBackdropFilter: "blur(20px)",
	border: "1px solid rgba(255, 255, 255, 0.6)",
	boxShadow:
		"0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
};

const ServicesSection: React.FC = () => {
	return (
    <div className="bg-[#E4E5E9] py-15 relative z-0">
      <div className="px-20 max-w-360 mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-[32px] lg:text-[56px] nohemi text-[#0D0D0D] tracking-tight font-medium leading-[1.2]">
            Our Services
          </h2>
          <p className="text-[#373737] max-w-xl text-xl geist">
            We do two things: launch video podcasts properly, and run them as
            long-term business assets.
          </p>
        </div>

        {/* Card 1: Launch */}
        <div className="relative p-8 geist mb-16" style={{ ...glassStyle }}>
          <div className="rounded-2xl bg-white overflow-hidden flex flex-col md:flex-row border-2 border-white gap-10 h-118">
            <div className="self-stretch overflow-hidden rounded-l-2xl">
              <img
                src="./services_launch.png"
                alt="Launch Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:max-w-175 py-6 md:py-8 flex flex-col justify-center">
              <h3 className="text-[40px] font-semibold text-[#0A0A0A] mb-2 leading-tight geist">
                Launch
              </h3>
              <h4 className="text-[24px] font-semibold text-[#373737] mb-19.5 geist">
                Incubating and launching video podcasts built to lead
                conversations.
              </h4>
              <p className="text-[#373737] text-[20px] leading-relaxed mb-6 geist">
                We shape the idea, define the format, and build the foundations
                for launch, covering strategy, creative direction, host
                sourcing, and production setup so your podcast starts with
                clarity, confidence, and intent.
              </p>
              <div>
                <button className="relative pl-5 pr-1 py-1.5 rounded-full font-semibold text-[20px] text-[#0D0D0D] flex items-center gap-5.5 duration-300 overflow-hidden bg-[#EDEDED] group">
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"
                    style={{
                      background:
                        "linear-gradient(267deg, #CDFFE1 18.74%, #1CF975 94.61%)",
                    }}
                  />
                  <span className="relative z-10 geist">Read More</span>
                  <span className="relative z-10 w-12 h-12 rounded-full bg-[#0D0D0D] flex items-center justify-center p-2  duration-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M4.5 12.6562C4.27622 12.6562 4.06161 12.7451 3.90338 12.9034C3.74514 13.0616 3.65625 13.2762 3.65625 13.5C3.65625 13.7238 3.74514 13.9384 3.90338 14.0966C4.06161 14.2549 4.27622 14.3438 4.5 14.3438V12.6562ZM4.5 14.3438H22.5V12.6562H4.5V14.3438Z"
                        fill="white"
                      />
                      <path
                        d="M15.75 20.25L22.5 13.5L15.75 6.75"
                        stroke="white"
                        stroke-width="1.6875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Run & Scale */}
        <div className="relative p-8 geist" style={{ ...glassStyle }}>
          <div className="rounded-2xl bg-white overflow-hidden flex flex-col md:flex-row border-2 border-white gap-10 h-118">
            <div className="self-stretch overflow-hidden rounded-l-2xl">
              <img
                src="/Frame .png"
                alt="Launch Service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:max-w-175 py-6 md:py-8 flex flex-col justify-center">
              <h3 className="text-[40px] font-semibold text-[#0A0A0A] mb-2 leading-tight geist">
                Run & Scale
              </h3>
              <h4 className="text-[24px] font-semibold text-[#373737] mb-19.5 geist">
                End-to-end management of podcasts as long-term business
                channels.
              </h4>
              <p className="text-[#373737] text-[20px] leading-relaxed mb-6 geist">
                Once a podcast is live, we manage the entire system around it
                planning, production, distribution, and reporting turning each
                episode into consistent, quality content that supports
                marketing, sales, and the wider organization.
              </p>
              <div>
                <button className="relative pl-5 pr-1 py-1.5 rounded-full font-semibold text-[20px] text-[#0D0D0D] flex items-center gap-5.5 duration-300 overflow-hidden bg-[#EDEDED] group">
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out origin-left scale-x-0 group-hover:scale-x-100"
                    style={{
                      background:
                        "linear-gradient(267deg, #CDFFE1 18.74%, #1CF975 94.61%)",
                    }}
                  />
                  <span className="relative z-10 geist">Read More</span>
                  <span className="relative z-10 w-12 h-12 rounded-full bg-[#0D0D0D] flex items-center justify-center p-2  duration-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M4.5 12.6562C4.27622 12.6562 4.06161 12.7451 3.90338 12.9034C3.74514 13.0616 3.65625 13.2762 3.65625 13.5C3.65625 13.7238 3.74514 13.9384 3.90338 14.0966C4.06161 14.2549 4.27622 14.3438 4.5 14.3438V12.6562ZM4.5 14.3438H22.5V12.6562H4.5V14.3438Z"
                        fill="white"
                      />
                      <path
                        d="M15.75 20.25L22.5 13.5L15.75 6.75"
                        stroke="white"
                        stroke-width="1.6875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
