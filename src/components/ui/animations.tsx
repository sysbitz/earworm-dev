"use client";
import React, { useRef, useEffect } from "react";

import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
		image?: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);

	const getSpeed = () => {
		switch (speed) {
			case "fast":
				return "20s";
			case "normal":
				return "40s";
			case "slow":
				return "80s";
			default:
				return "40s";
		}
	};

	useEffect(() => {
		if (!containerRef.current || !scrollerRef.current) return;

		const scroller = scrollerRef.current;

		// Duplicate items for seamless infinite scroll
		const scrollerContent = Array.from(scroller.children);
		scrollerContent.forEach((item) => {
			const duplicatedItem = (item as Element).cloneNode(true);
			scroller.appendChild(duplicatedItem);
		});

		// FIX: directly mutate DOM classes instead of calling setState inside an
		// effect — setState here was causing synchronous cascading renders.
		scroller.classList.add("animate-scroll");
		if (pauseOnHover) {
			scroller.classList.add("pause-on-hover");
		}
	}, [pauseOnHover]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}>
			<ul
				ref={scrollerRef}
				className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
				style={{
					["--animation-duration" as string]: getSpeed(),
					["--animation-direction" as string]:
						direction === "left" ? "forwards" : "reverse",
				}}>
				{items.map((item, idx) => (
					<li
						key={idx}
						className="w-[350px] max-w-full relative rounded-2xl border border-white/10 bg-brand-gray/50 px-8 py-6 backdrop-blur-sm">
						<blockquote>
							<p className="text-sm leading-relaxed text-gray-300">
								{item.quote}
							</p>
							<div className="mt-6 flex items-center gap-4">
								{item.image && (
									<img
										src={item.image}
										alt={item.name}
										className="h-10 w-10 rounded-full object-cover"
									/>
								)}
								<div>
									<p className="text-sm font-semibold text-white">
										{item.name}
									</p>
									<p className="text-xs text-gray-500">{item.title}</p>
								</div>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
			<style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-50% - 0.5rem)); }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
		</div>
	);
};

export const MovingBorder = ({
	children,
	duration = 2000,
	className,
	containerClassName,
	borderRadius = "1.5rem",
	colors = ["#00D26A", "#6C5CE7", "#00D26A"],
}: {
	children: React.ReactNode;
	duration?: number;
	className?: string;
	containerClassName?: string;
	borderRadius?: string;
	colors?: string[];
}) => {
	return (
		<div
			className={cn("relative p-[1px] overflow-hidden", containerClassName)}
			style={{ borderRadius }}>
			<div
				className="absolute inset-0"
				style={{
					borderRadius,
					background: `conic-gradient(from 0deg, ${colors.join(", ")})`,
					animation: `movingBorderSpin ${duration}ms linear infinite`,
				}}
			/>
			<div
				className={cn("relative bg-brand-black", className)}
				style={{ borderRadius: `calc(${borderRadius} - 1px)` }}>
				{children}
			</div>
			<style>{`
        @keyframes movingBorderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	);
};

export const BackgroundGradientAnimation = ({
	children,
	className,
	containerClassName,
	gradientBackgroundStart = "rgb(8, 8, 8)",
	gradientBackgroundEnd = "rgb(8, 8, 8)",
	interactive = true,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
	gradientBackgroundStart?: string;
	gradientBackgroundEnd?: string;
	firstColor?: string;
	secondColor?: string;
	thirdColor?: string;
	fourthColor?: string;
	fifthColor?: string;
	pointerColor?: string;
	size?: string;
	blendingValue?: string;
	interactive?: boolean;
}) => {
	const interactiveRef = useRef<HTMLDivElement>(null);

	// FIX: all cursor tracking uses refs — zero state, zero re-renders.
	// Previous version used useState for curX/curY/tgX/tgY which caused
	// setState calls inside the animation loop, triggering cascading renders.
	const curX = useRef(0);
	const curY = useRef(0);
	const tgX = useRef(0);
	const tgY = useRef(0);
	const animFrameRef = useRef<number | null>(null);

	useEffect(() => {
		if (!interactive) return;

		const move = () => {
			curX.current += (tgX.current - curX.current) / 20;
			curY.current += (tgY.current - curY.current) / 20;
			if (interactiveRef.current) {
				interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;
			}
			animFrameRef.current = requestAnimationFrame(move);
		};

		animFrameRef.current = requestAnimationFrame(move);

		return () => {
			if (animFrameRef.current !== null) {
				cancelAnimationFrame(animFrameRef.current);
			}
		};
	}, [interactive]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!interactive) return;
		const rect = e.currentTarget.getBoundingClientRect();
		tgX.current = e.clientX - rect.left;
		tgY.current = e.clientY - rect.top;
	};

	return (
		<div
			className={cn("relative overflow-hidden", containerClassName)}
			onMouseMove={handleMouseMove}>
			<div
				className="absolute inset-0 blur-3xl"
				style={{
					background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
				}}
			/>
			<svg className="hidden">
				<defs>
					<filter id="blurMe">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div ref={interactiveRef} className={cn("relative", className)}>
				{children}
			</div>
		</div>
	);
};
