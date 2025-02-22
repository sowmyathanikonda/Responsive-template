import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center px-6 sm:px-10 py-12 md:py-16 bg-[#E5F0F1]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1740')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-4xl text-left px-4 sm:px-8 lg:px-16">
        <p className="text-lg sm:text-xl md:text-4xl font-light italic text-white mb-4">
          Start earning what you're worth
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
          HIGH REVENUE <br />
          <span className="text-[#C2F970] font-serif tracking-wide italic drop-shadow-md">
            DESIGNER
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-xl text-white">
          Elevate Your Career with Professional Insights into Growing Your Income, 
          Cultivating a Wealth Mindset, and Crafting a Rewarding Business from Home.
        </p>
        <button className="mt-8 bg-[#C2F970] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-[#B1E860] transition-colors shadow-lg">
          GET STARTED
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
