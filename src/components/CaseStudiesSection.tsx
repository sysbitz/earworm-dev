import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlassIconButton from "./ui/GlassIconButton";

interface CaseStudy {
	id: string;
	clientLogo: React.ReactNode;
	image: string;
	video: string;
	title: string;
	description: string;
}

const ClientLogo: React.FC<{
	src: string;
	alt: string;
	className?: string;
}> = ({ src, alt, className = "" }) => (
	<img
		src={src}
		alt={alt}
		className={`h-8 w-auto object-contain ${className}`}
	/>
);

// Play Button / Circular Progress Component
const PlayProgressButton: React.FC<{
	progress: number;
	isPlaying: boolean;
	onClick: () => void;
}> = ({ progress, isPlaying, onClick }) => {
	const radius = 10;
	const strokeWidth = 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<button
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
			className="w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full cursor-pointer hover:bg-black/70 transition-all">
			<AnimatePresence mode="wait">
				{!isPlaying ? (
					<motion.div
						key="play"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.2 }}>
						<Play className="w-3 h-3 text-white fill-white ml-0.5" />
					</motion.div>
				) : (
					<motion.svg
						key="progress"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.2 }}>
						{/* Background ring */}
						<circle
							cx="12"
							cy="12"
							r={radius}
							fill="none"
							stroke="rgba(255,255,255,0.3)"
							strokeWidth={strokeWidth}
						/>
						{/* Progress ring */}
						<motion.circle
							cx="12"
							cy="12"
							r={radius}
							fill="none"
							stroke="#ffffff"
							strokeWidth={strokeWidth}
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							strokeLinecap="round"
							transform="rotate(-90 12 12)"
							initial={{ strokeDashoffset: circumference }}
							animate={{ strokeDashoffset }}
							transition={{ duration: 0.1, ease: "linear" }}
						/>
					</motion.svg>
				)}
			</AnimatePresence>
		</button>
	);
};

const caseStudies: CaseStudy[] = [
	{
		id: "1",
		clientLogo: <ClientLogo src="/logos/fntv-logo.png" alt="FNTV" />,
		image: "/podcast/FNTV.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "Carrier 2.0",
		description: "Reimagining the logistics conversation.",
	},
	{
		id: "2",
		clientLogo: <ClientLogo src="/logos/polly-logo.png" alt="Polly" />,
		image: "/podcast/Polly.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "Pretty Covered",
		description: "Insurance doesn't have to be boring.",
	},
	{
		id: "3",
		clientLogo: <ClientLogo src="/logos/wenodo-logo.png" alt="Wanodo" />,
		image: "/podcast/Wenodo.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "Dig In",
		description: "A culinary journey exploring hidden stories.",
	},
	{
		id: "4",
		clientLogo: <ClientLogo src="/logos/pulsetto-logo.png" alt="Pulsetto" />,
		image: "/podcast/Pulsetto.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "No Stress",
		description: "Health-tech meets real talk.",
	},
	{
		id: "5",
		clientLogo: <ClientLogo src="/logos/soldo-logo.png" alt="Soldo" />,
		image: "/podcast/Soldo.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "The CFO Playbook",
		description: "Targeting the C-Suite with high-value insights.",
	},
	{
		id: "6",
		clientLogo: (
			<ClientLogo src="/logos/collyer-bristow-logo.png" alt="Collyer Bristow" />
		),
		image: "/podcast/Collyer.png",
		video: "https://www.w3schools.com/html/mov_bbb.mp4",
		title: "UK/US Tax Talk",
		description: "Complex legal topics made accessible.",
	},
];

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const cardRef = useRef<HTMLDivElement>(null);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
		}
	};

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setIsPlaying(true);
		}
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
			setIsPlaying(false);
			setProgress(0);
		}
	};

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleTimeUpdate = () => {
			const percent = (video.currentTime / video.duration) * 100;
			setProgress(percent);
		};

		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleEnded = () => {
			setIsPlaying(false);
			setProgress(0);
		};

		video.addEventListener("timeupdate", handleTimeUpdate);
		video.addEventListener("play", handlePlay);
		video.addEventListener("pause", handlePause);
		video.addEventListener("ended", handleEnded);

		return () => {
			video.removeEventListener("timeupdate", handleTimeUpdate);
			video.removeEventListener("play", handlePlay);
			video.removeEventListener("pause", handlePause);
			video.removeEventListener("ended", handleEnded);
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className="group relative rounded-3xl overflow-hidden cursor-pointer"
			style={{ width: '413px', height: '580px' }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* Glass Border Frame */}
			<div className="absolute inset-0 rounded-3xl border border-[#707070]/30 z-20 pointer-events-none"></div>
			<div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 z-20 pointer-events-none"></div>

			{/* Background Image (shows when video not playing) */}
			<img
				src={study.image}
				alt={study.title}
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
			/>

			{/* Video Element */}
			<video
				ref={videoRef}
				className="w-full h-full object-cover"
				src={study.video}
				playsInline
				muted
			/>

			{/* Top Elements */}
			<div className="absolute top-5 left-5 z-10">{study.clientLogo}</div>
			<div className="absolute top-5 right-5 z-10">
				<PlayProgressButton
					progress={progress}
					isPlaying={isPlaying}
					onClick={togglePlay}
				/>
			</div>

			{/* Progressive blur glassmorphism overlay (Bottom) with very minimal blur */}
			<div
				className="absolute left-0 bottom-0 w-full z-20 pointer-events-none"
				style={{
					height: '35%',
					background: 'linear-gradient(to top, rgba(30,64,175,0.18) 0%, rgba(0,0,0,0.14) 68%, transparent 100%)',
					backdropFilter: 'blur(2.5px)',
					WebkitBackdropFilter: 'blur(2.5px)',
					borderBottomLeftRadius: '1.5rem',
					borderBottomRightRadius: '1.5rem',
					maskImage: 'linear-gradient(to top, black 90%, transparent 100%)',
					WebkitMaskImage: 'linear-gradient(to top, black 90%, transparent 100%)',
				}}
			/>

			{/* Bottom Content - Glass Panel with Fade */}
			<div className="absolute bottom-0 left-0 right-0 z-30">
				<div className="relative p-5 group">
					<h3 className="text-[32px] font-display font-semibold text-white mb-3 tracking-wide">
						{study.title}
					</h3>

					<div className="flex justify-between items-end gap-6">
						<p className="text-white text-[20px] font-normal">
							Body text describing the services offered in a summary. Body text
							describing the service
						</p>

						<button
							className="w-8 h-8 min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out bg-white group-hover:bg-[#8266FF] group-hover:scale-110 group-hover:shadow-lg"
						>
							<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="32" height="32" rx="16" fill="white" fillOpacity="0" />
								<g className="transition-transform duration-500 ease-in-out group-hover:rotate-45" style={{ transformOrigin: '50% 50%' }}>
									<path
										d="M13.5016 11.5415C13.5016 11.5415 19.2836 11.0893 20.0978 11.9035C20.912 12.7177 20.4597 18.4996 20.4597 18.4996M19.7516 12.2496L11.4183 20.5829"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="transition-colors duration-500 ease-in-out group-hover:stroke-white"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const CaseStudiesSection: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
		);
	};

	return (
		<div className="py-15 relative" style={{ overflowX: "clip" }}>
			<div className="px-20 relative z-10 max-w-360 mx-auto">
				<div className="relative z-10">
				{/* Header */}
				<div className="flex flex-row justify-between items-start mb-17.5">
					<div>
						<h2 className="text-[32px] lg:text-[56px] nohemi font-medium text-white mb-5 tracking-tight leading-[1.2]">
							Case studies
						</h2>
						<p className="text-[#E0E0E0] text-[20px] geist">
							We've launched hundreds of shows and measured the impact
						</p>
					</div>

					<div
						className="relative group p-px geist rounded-[50px]"
						style={{
							background:
								"linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.25) 100%)",
						}}>
						<button
							className="
			  flex items-center gap-3
			  h-[56px] w-[215px]
			  px-4
			  rounded-full
			  text-white whitespace-nowrap overflow-hidden
			  relative
			  bg-[#1A1A1A]
			  hover:bg-[#2A2A2A]
			  shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.3)]
			  transition-all duration-300
            ">
							<span className="font-semibold text-[20px] relative z-10">
								View All Work
							</span>
							<GlassIconButton
								h={48}
								w={48}
								iconSize={26}
								openIcon={
									<ArrowUpRight className="duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								}
							/>
						</button>
					</div>
				</div>

				{/* Desktop Grid */}
				<div className="hidden geist md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{caseStudies.map((study) => (
						<CaseStudyCard key={study.id} study={study} />
					))}
				</div>

				{/* Mobile Carousel */}
				<div className="md:hidden geist">
					<div className="mb-8 transition-all duration-300 transform">
						<CaseStudyCard study={caseStudies[currentIndex]} />
					</div>

					{/* Controls */}
					<div className="flex items-center justify-center gap-6">
						<button
							onClick={prevSlide}
							className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
							aria-label="Previous slide">
							<ChevronLeft className="w-5 h-5" />
						</button>

						<div className="flex gap-2">
							{caseStudies.map((_, idx) => (
								<button
									key={idx}
									onClick={() => setCurrentIndex(idx)}
									className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-gray-700"}`}
									aria-label={`Go to slide ${idx + 1}`}
								/>
							))}
						</div>

						<button
							onClick={nextSlide}
							className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
							aria-label="Next slide">
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesSection;