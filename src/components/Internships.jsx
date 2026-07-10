import React from 'react';
import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="relative w-full rounded-[2rem] p-2 bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.10)] hover:shadow-[0_30px_70px_rgba(255,42,42,0.18)] hover:scale-[1.01] transition-all duration-500 group"
  >
    {/* Hole punch at top-center */}
    <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 left-1/2 -translate-x-1/2 border border-gray-300 z-10 flex items-center justify-center">
      <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
    </div>

    {/* Inner card */}
    <div className="w-full h-full rounded-[1.5rem] mt-8 p-6 md:p-8 bg-[#f4f4f4] group-hover:bg-red-50 transition-colors duration-500">

      {/* Top row: duration + badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <span className="text-gray-400 text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-[#ff2a2a] text-white text-[10px] font-black tracking-widest uppercase py-1 px-4 rounded-full shadow-md">
          Internship
        </span>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">

        {/* Left: role + org + tech */}
        <div className="md:w-[38%] flex-shrink-0 flex flex-col justify-between gap-5">
          <div>
            <h3 className="text-gray-900 text-xl md:text-2xl font-black tracking-tight leading-snug mb-1">
              {intern.role}
            </h3>
            <p className="text-[#ff2a2a] text-sm font-black tracking-wide uppercase">
              @ {intern.organization}
            </p>
          </div>

          {/* Tech pills */}
          <div>
            <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Tech Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {intern.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 text-[11px] font-mono font-bold text-gray-600 bg-white border border-gray-200 rounded-full hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200 self-stretch"></div>

        {/* Right: responsibilities */}
        <div className="flex-1">
          <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">Key Responsibilities</h4>
          <ul className="space-y-2">
            {intern.skills.map((skill, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] flex-shrink-0"></span>
                <span className="text-gray-600 text-sm font-medium leading-relaxed">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </div>
);

const Internships = () => {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Practical Work where I applied engineering principles and built real-world assets.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative star */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;

