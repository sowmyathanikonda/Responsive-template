import React from 'react';
import { Circle } from 'lucide-react';

const FeelSection = () => {
  const challenges = [
    "Feeling trapped and overwhelmed by the monotonous routine of a job you despise.",
    "Balancing the demands of graphic design work within the constraints of a conventional 9-5 schedule.",
    "Constantly battling the cycle of financial uncertainty, limiting your ability to plan for the future.",
    "Seeking a solution that not provides financial stability but also allows for a balanced work-life equation."
  ];

  return (
    <div className="bg-[#cad1c5] py-20 px-4"> {/* Medium Olive Green */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
            alt="Understanding Portrait"
            className="w-full rounded-lg"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-black text-4xl md:text-5xl font-bold">
            I KNOW EXACTLY HOW YOU FEEL
          </h2>
          <p className="text-black text-xl italic">
            Navigating <span className="font-serif">the</span> balance between <span className="font-serif">the</span> demands of graphic design and the desire for financial independence is <span className="font-serif">a challenge</span>.
          </p>
          <p className="font-medium text-black">I FELT JUST LIKE YOU DID...</p>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3">
                <Circle className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSection;
