import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const Navbar: React.FC = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
	const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const resourcesRef = useRef<HTMLDivElement>(null);
	const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
		null
	);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsServicesDropdownOpen(false);
			}
			if (
				resourcesRef.current &&
				!resourcesRef.current.contains(event.target as Node)
			) {
				setIsResourcesDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleServicesEnter = () => {
		if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
		setIsServicesDropdownOpen(true);
	};

	const handleServicesLeave = () => {
		servicesTimeoutRef.current = setTimeout(() => {
			setIsServicesDropdownOpen(false);
		}, 150);
	};

	const handleResourcesEnter = () => {
		if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
		setIsResourcesDropdownOpen(true);
	};

	const handleResourcesLeave = () => {
		resourcesTimeoutRef.current = setTimeout(() => {
			setIsResourcesDropdownOpen(false);
		}, 150);
	};

	const isAnyDropdownOpen = isServicesDropdownOpen || isResourcesDropdownOpen;

	return (
		<>
			{/* Full-screen blur overlay */}
			{isAnyDropdownOpen && (
				<div
					className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20 transition-all duration-300 pointer-events-none"
					style={{ backdropFilter: "blur(6px)" }}
				/>
			)}
			<div className="fixed w-full z-50 top-6  pointer-events-none">
				<nav
					className="max-w-[1280px] w-full mx-auto rounded-full p-3 relative pointer-events-auto overflow-visible"
					style={{
						background:
							"linear-gradient(135deg, rgba(15,15,15,0.35) 0%, rgba(10,10,10,0.40) 100%)",
						backdropFilter: "blur(24px) saturate(180%)",
						WebkitBackdropFilter: "blur(24px) saturate(180%)",
						border: "1px solid rgba(255,255,255,0.13)",
						boxShadow:
							"inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.3)",
					}}>
					<div className="flex items-center justify-between h-12">
						{/* Logo */}
						<div className="flex-shrink-0 cursor-pointer mr-2 lg:mr-8">
							<img
								src="/earworm_logo_white_rgb_1080px_w_300ppi 1.png"
								alt="Earworm"
								className="h-8 w-auto"
							/>
						</div>

						{/* Desktop Menu */}
						<div className="hidden lg:flex items-center justify-center flex-1">
							<div className="flex items-center space-x-1">
								<div
									ref={dropdownRef}
									className="relative inline-block"
									onMouseEnter={handleServicesEnter}
									onMouseLeave={handleServicesLeave}>
									<button className="flex items-center text-white hover:text-white px-4 py-2 text-[15px] font-medium transition-colors whitespace-nowrap">
										Our service{" "}
										<ChevronDown
											className={`w-3.5 h-3.5 ml-1.5 opacity-60 mt-0.5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
										/>
									</button>
									{/* Invisible bridge to fill gap between navbar and dropdown */}
									{isServicesDropdownOpen && (
										<div
											className="fixed top-[72px] left-0 w-full h-6 z-[998]"
											onMouseEnter={handleServicesEnter}
											onMouseLeave={handleServicesLeave}
										/>
									)}
									<div
										onMouseEnter={handleServicesEnter}
										onMouseLeave={handleServicesLeave}>
										<ServicesDropdown isOpen={isServicesDropdownOpen} />
									</div>
								</div>

								<div
									ref={resourcesRef}
									className="relative inline-block"
									onMouseEnter={handleResourcesEnter}
									onMouseLeave={handleResourcesLeave}>
									<button className="flex items-center text-white bg-white/10 hover:bg-white/20 rounded-full px-5 py-2 text-[15px] font-medium transition-all whitespace-nowrap">
										Resources{" "}
										<ChevronDown
											className={`w-3.5 h-3.5 ml-1.5 opacity-60 mt-0.5 transition-transform duration-300 ${isResourcesDropdownOpen ? "rotate-180" : ""}`}
										/>
									</button>
									<ResourcesDropdown isOpen={isResourcesDropdownOpen} />
								</div>

								<a
									href="#"
									className="text-white hover:text-white px-4 py-2 text-[15px] font-medium transition-colors whitespace-nowrap">
									Case Studies
								</a>
								<a
									href="#"
									className="text-white hover:text-white px-4 py-2 text-[15px] font-medium transition-colors whitespace-nowrap">
									Our Story
								</a>
							</div>
						</div>

						{/* Right Side Actions */}
						<div className="hidden lg:flex items-center space-x-6 pl-4">
							<a
								href="#"
								className="text-white hover:text-white text-[15px] font-medium transition-colors whitespace-nowrap">
								Client Portal
							</a>
							<button className="bg-[#6359EA] hover:bg-[#5558DD] text-white px-7 py-2.5 rounded-[31px] text-[15px] font-medium transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap">
								Lets Talk
							</button>
						</div>

						{/* Mobile menu button */}
						<div className="flex lg:hidden ml-auto">
							<button
								onClick={() => setIsMobileOpen(!isMobileOpen)}
								className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-white hover:bg-white/10 focus:outline-none">
								{isMobileOpen ? (
									<X className="block h-6 w-6" />
								) : (
									<Menu className="block h-6 w-6" />
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu Dropdown with Glass Effect */}
					{isMobileOpen && (
						<div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl lg:hidden">
							<div className="space-y-1 p-2">
								<a
									href="#"
									className="text-white hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-medium">
									Our service
								</a>
								<a
									href="#"
									className="text-white bg-white/10 block px-4 py-3 rounded-xl text-base font-medium">
									Resources
								</a>
								<a
									href="#"
									className="text-white hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-medium">
									Case Studies
								</a>
								<a
									href="#"
									className="text-white hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-medium">
									Our Story
								</a>
								<a
									href="#"
									className="text-white hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-base font-medium">
									Client Portal
								</a>
								<button className="w-full text-center bg-[#6366F1] text-white px-4 py-3 rounded-xl text-base font-bold mt-2">
									Lets Talk
								</button>
							</div>
						</div>
					)}
				</nav>
			</div>
		</>
	);
};

export default Navbar;
