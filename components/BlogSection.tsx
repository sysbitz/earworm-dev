import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface BlogPost {
	id: string;
	image: string;
	date: string;
	readTime: string;
	title: string;
}

const blogPosts: BlogPost[] = [
	{
		id: "1",
		image: "/face (1).png",
		date: "June 12th, 2025",
		readTime: "8 min read",
		title: "Harnessing Podcast Power, Engaging Your Audience",
	},
	{
		id: "2",
		image: "/face (2).png",
		date: "June 12th, 2025",
		readTime: "8 min read",
		title: "The Power of Storytelling in Podcasts",
	},
	{
		id: "3",
		image: "/face (3).png",
		date: "June 12th, 2025",
		readTime: "8 min read",
		title: "Future of Podcasting: Key Trends to Watch",
	},
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="group cursor-pointer flex flex-col h-full rounded-[32px] p-4 transition-all duration-300 relative"
			style={{
				background: "rgba(255, 255, 255, 0.10)",
				backdropFilter: "blur(10px)",
				WebkitBackdropFilter: "blur(10px)",
				border: isHovered
					? "1px solid rgba(255,255,255,0.20)"
					: "1px solid rgba(255,255,255,0.10)",
				boxShadow: isHovered
					? "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.18)"
					: "0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10)",
				isolation: "isolate",
			}}>
			{/* Top specular highlight */}
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none rounded-t-[32px]"
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.4) 75%, transparent 100%)",
					opacity: isHovered ? 0.9 : 0.55,
					transition: "opacity 0.3s ease",
				}}
			/>

			{/* Mouse-reactive shimmer */}
			<div
				className="absolute inset-0 pointer-events-none rounded-[32px] transition-opacity duration-500"
				style={{
					opacity: isHovered ? 1 : 0,
					background: `radial-gradient(ellipse 60% 50% at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.07), transparent 60%)`,
				}}
			/>

			{/* Image Container */}
			<div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#000]">
				<img
					src={post.image}
					alt={post.title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col items-start flex-grow px-2 pb-2 relative z-10">
				<div className="text-gray-500 text-[12px] font-medium mb-3 flex items-center gap-2 uppercase tracking-wider">
					<span>{post.date}</span>
					<span className="w-px h-3 bg-gray-700"></span>
					<span>{post.readTime}</span>
				</div>

				<h3 className="text-[20px] md:text-[24px] font-display font-bold text-white leading-tight mb-4 transition-colors">
					{post.title}
				</h3>

				<div className="mt-auto pt-2">
					<div
						className="flex items-center font-bold text-sm group/link transition-colors duration-300"
						style={{
							color: isHovered ? "#00D26A" : "rgba(255,255,255,0.85)",
						}}>
						Read more
						<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
					</div>
				</div>
			</div>
		</div>
	);
};

const ViewAllButton: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="group flex items-center pl-6 pr-2 py-2 rounded-full font-bold relative overflow-hidden hover:scale-105"
			style={{
				/* Solid dark glass base — always visible */
				background: "#111111",
				border: "1px solid rgba(255,255,255,0.12)",
				boxShadow:
					"0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
				transition:
					"transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
			}}>
			{/* Top specular highlight line — glass feel */}
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none"
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.35) 60%, transparent)",
					opacity: isHovered ? 0 : 1,
					transition: "opacity 0.4s ease",
					zIndex: 10,
				}}
			/>

			{/* Gradient sweep — clips left→right on hover using clipPath */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: "linear-gradient(90deg, #00D26A 0%, #D4FF00 100%)",
					clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
					transition: "clip-path 0.5s ease",
					borderRadius: "9999px",
					zIndex: 1,
				}}
			/>

			<span
				className="mr-4 text-sm font-display tracking-wide relative z-10 transition-colors duration-300"
				style={{
					color: isHovered ? "#000" : "rgba(255,255,255,0.9)",
					transitionDelay: isHovered ? "0.15s" : "0s",
				}}>
				View All Articles
			</span>

			{/* Icon circle — clips overflow so arrow slides in from top */}
			<div
				className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 flex-shrink-0 transition-all duration-300 overflow-hidden"
				style={{
					background: isHovered ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.08)",
					border: "1px solid rgba(255,255,255,0.15)",
					boxShadow:
						"inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)",
				}}>
				<ArrowRight
					className="w-5 h-5"
					style={{
						color: "#fff",
						transform: isHovered ? "translateY(0)" : "translateY(-140%)",
						transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
					}}
				/>
			</div>
		</button>
	);
};

const BlogSection: React.FC = () => {
	return (
		<div className="bg-[#050505] py-24 border-t border-white/5 relative z-10">
			<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
					<div className="max-w-xl">
						<h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2]">
							From the blog
						</h2>
						<p className="text-gray-400 text-[16px] md:text-[20px] leading-[1.5] max-w-sm mx-auto md:mx-0">
							Latest thinking on podcast strategy, guest booking, and B2B
							content.
						</p>
					</div>

					<ViewAllButton />
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
					{blogPosts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
