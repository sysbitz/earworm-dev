import React from 'react';
import { Instagram, Mail, X } from 'lucide-react'; // swapped Twitter → X

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "#", Icon: Instagram },
    { href: "#", Icon: Mail },
    { href: "#", Icon: X },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 font-sans px-4 ">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-40 mb-20">
          
          {/* Left Column */}
          <div className="lg:w-1/3">
            <div className="mb-20">
               <img src="/earworm_logo_white_rgb_1080px_w_300ppi 1.png" alt="Earworm" className="h-10 w-auto" />
            </div>

            <p className="text-gray-400 text-[20px] leading-[1.5] mb-10 max-w-md pb-10">
              We help businesses grow through podcasting offering video production, guest booking, and strategy that drives brand reach and results.
            </p>

            <div>
              <h4 className="text-white font-medium uppercase tracking-wider mb-4 text-sm">Get Updates</h4>
              <div className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="E-MAIL" 
                  className="w-full bg-[#111] border border-white/10 rounded-full py-4 pl-6 pr-36 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors uppercase text-[16px]"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-bold rounded-full px-6 text-xs hover:bg-gray-200 transition-colors uppercase">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 lg:gap-12 ">
            
            {/* Info & Links */}
            <div>
              <h4 className="text-white font-medium text-[16px] mb-4 uppercase tracking-wider">Info & Links</h4>
              <ul className="space-y-4 text-gray-400 text-[16px]">
                <li><a href="#" className="hover:text-white transition-colors">Client Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-medium text-[16px] mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-4 text-gray-400 text-[16px]">
                <li><a href="#" className="hover:text-white transition-colors">Video Podcasts</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-medium text-[16px] mb-4 uppercase tracking-wider">Social</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ href, Icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* US Office */}
            <div className="flex items-start gap-3">
               <div className="w-12 h-12 flex-shrink-0 pt-1">
                  <img src="/us office.png" alt="US Office" className="w-12 h-12 object-contain" />
               </div>
               <div>
                  <h4 className="text-white text-lg font-medium mb-1">US Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Earworm Agency 99 Wall Street #2421, New York, NY 10005
                  </p>
               </div>
            </div>

            {/* UK Office */}
            <div className="flex items-start gap-3">
               <div className="w-12 h-12 flex-shrink-0 pt-1">
                  <img src="/uk office.png" alt="UK Office" className="w-12 h-12 object-contain" />
               </div>
               <div>
                  <h4 className="text-white text-lg font-medium mb-1">UK Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Earworm Agency Ltd Generator Building, Bristol BS1 6BX
                  </p>
               </div>
            </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10 mb-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs font-medium leading-[1.6]">
          <p>© Earworm Agency Ltd. Registered company no. 14843820. VAT no. 449 7546 43</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;