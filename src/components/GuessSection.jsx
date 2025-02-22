import React from 'react';

const GuessSection = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-black text-2xl font-light italic">Let me take a lucky guess...</h3>
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            YOU'RE EAGERLY SEEKING THE FLEXIBILITY TO EARN MORE MONEY IN A SATISFYING WORK FROM HOME CAREER
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If the daily routine of a job that doesn't fulfill you leaves you feeling trapped and overwhelmed, we understand the challenges you face. Balancing client demands with your aspirations for financial growth can be daunting for many graphic designers working from home. But fear not, because you're about to embark on a transformative journey that directly addresses these challenges.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800"
            alt="Designer Portrait"
            className="w-full rounded-lg grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default GuessSection;