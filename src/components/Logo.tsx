
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full bg-globoo animate-pulse-slow border-2 border-globoo-light"></div>
        <div className="absolute inset-1/4 rounded-full bg-white flex items-center justify-center">
          <span className="text-globoo font-bold text-lg">G</span>
        </div>
      </div>
      <div className="text-xl font-bold bg-gradient-to-r from-globoo to-globoo-accent bg-clip-text text-transparent">
        GlobooMail
      </div>
    </div>
  );
};

export default Logo;
