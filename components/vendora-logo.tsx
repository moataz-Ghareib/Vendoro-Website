import React from 'react';

export function VendoraLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Standalone V Emblem with Indigo Neon Glow */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-9 w-9 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
      >
        {/* Outer V (White/Dark responsive) */}
        <path 
          d="M15 15 L50 85 L85 15" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="stroke-slate-900 dark:stroke-white transition-colors" 
        />
        {/* Inner V (Electric Indigo) */}
        <path 
          d="M35 15 L50 45 L65 15" 
          stroke="#6366F1" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      <span className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight leading-none transition-colors">
        Vendora
      </span>
    </div>
  );
}
