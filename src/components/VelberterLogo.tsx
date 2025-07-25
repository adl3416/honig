import React from 'react';

interface VelberterLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const VelberterLogo: React.FC<VelberterLogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: { width: 40, height: 40, centerFontSize: '9px' },
    md: { width: 60, height: 60, centerFontSize: '13px' },
    lg: { width: 80, height: 80, centerFontSize: '17px' },
    xl: { width: 120, height: 120, centerFontSize: '24px' }
  };

  const { width, height, centerFontSize } = sizes[size];

  return (
    <div className={`inline-block ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 120 120" 
        className="drop-shadow-md"
      >
        {/* Professional Gradient Definitions */}
        <defs>
          <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="30%" stopColor="#f2940a" />
            <stop offset="70%" stopColor="#f2940a" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          
          <linearGradient id="honeycombGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
          </linearGradient>

          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#00000025"/>
          </filter>

          <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.5" dy="0.5" stdDeviation="1" floodColor="#00000030"/>
          </filter>
        </defs>

        {/* Main Hexagon with professional gradient */}
        <polygon
          points="60,8 90,26 90,62 60,80 30,62 30,26"
          fill="url(#honeyGradient)"
          stroke="#d97706"
          strokeWidth="1.5"
          filter="url(#shadow)"
        />

        {/* Inner hexagon for depth */}
        <polygon
          points="60,15 83,28 83,56 60,69 37,56 37,28"
          fill="none"
          stroke="url(#honeycombGradient)"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Honeycomb Pattern - more refined */}
        <g fill="none" stroke="url(#honeycombGradient)" strokeWidth="0.8" opacity="0.4">
          {/* Center hexagon */}
          <polygon points="60,35 70,30 80,35 80,45 70,50 60,45" />
          <polygon points="60,45 70,40 80,45 80,55 70,60 60,55" />
          <polygon points="40,35 50,30 60,35 60,45 50,50 40,45" />
          <polygon points="40,45 50,40 60,45 60,55 50,60 40,55" />
        </g>

        {/* Professional Center Logo */}
        <circle 
          cx="60" 
          cy="44" 
          r="16" 
          fill="white" 
          fillOpacity="0.98"
          stroke="#f2940a"
          strokeWidth="0.5"
          filter="url(#shadow)"
        />
        
        {/* VH monogram with better typography */}
        <text
          x="60"
          y="50"
          textAnchor="middle"
          fill="#d97706"
          fontSize={centerFontSize}
          fontFamily="Inter, sans-serif"
          fontWeight="700"
          letterSpacing="-0.5px"
        >
          VH
        </text>

        {/* Small decorative elements */}
        <circle cx="45" cy="25" r="1" fill="#fbbf24" opacity="0.7" />
        <circle cx="75" cy="25" r="1" fill="#fbbf24" opacity="0.7" />
        <circle cx="45" cy="63" r="1" fill="#fbbf24" opacity="0.7" />
        <circle cx="75" cy="63" r="1" fill="#fbbf24" opacity="0.7" />
      </svg>
    </div>
  );
};

export default VelberterLogo;
