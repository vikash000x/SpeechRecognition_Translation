import React from "react";

const SvgDecorations: React.FC = () => {
  return (
    <>
      {/* Top-right corner decoration */}
      <div className="hidden md:block absolute top-0 end-0 -translate-y-10 translate-x-10">
        <svg
          className="w-20 h-auto text-purple-500"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="8" />
          <line x1="10" y1="10" x2="110" y2="110" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Bottom-left corner decoration */}
      <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-10">
        <svg
          className="w-32 h-auto text-green-500"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 140 Q75 50 140 140"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            fill="transparent"
          />
          <rect x="40" y="40" width="30" height="30" stroke="currentColor" strokeWidth="6" fill="transparent" />
        </svg>
      </div>
    </>
  );
};

export default SvgDecorations;