import React from 'react';

export const SplineBackground = ({ src, title = "Spline Background", scale = 1, interactive = true }: { src: string; title?: string; scale?: number; interactive?: boolean }) => {
  return (
    <div className={`spline-container absolute inset-0 overflow-hidden flex items-center justify-center ${!interactive ? 'pointer-events-none' : ''}`}>
      <div className="w-full h-full" style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
        <iframe 
          src={src}
          frameBorder="0" 
          width="100%" 
          height="100%" 
          id="aura-spline"
          title={title}
        ></iframe>
      </div>
    </div>
  );
};
