import React from 'react';

export function InteractiveGrid() {
  return (
    <div className="relative overflow-visible w-[1055px] h-[633px] mx-auto">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="relative w-[1055px] h-[633px]">
          <div className="grid absolute inset-0" style={{ gridTemplateColumns: 'repeat(5, 211px)', gridTemplateRows: 'repeat(3, 211px)', gap: '0px' }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} style={{ width: '211px', height: '211px', opacity: 0 }}></div>
            ))}
          </div>
          <svg className="absolute inset-0 pointer-events-none z-30" width="1055" height="633" style={{ overflow: 'visible' }}>
            <line x1="211" y1="0" x2="211" y2="633" stroke="white" strokeWidth="4"></line>
            <line x1="422" y1="0" x2="422" y2="633" stroke="white" strokeWidth="4"></line>
            <line x1="633" y1="0" x2="633" y2="633" stroke="white" strokeWidth="4"></line>
            <line x1="844" y1="0" x2="844" y2="633" stroke="white" strokeWidth="4"></line>
            <line x1="0" y1="211" x2="1055" y2="211" stroke="white" strokeWidth="4"></line>
            <line x1="0" y1="422" x2="1055" y2="422" stroke="white" strokeWidth="4"></line>
          </svg>
        </div>
      </div>
      <div className="relative z-10" style={{ opacity: 1 }}>
        <div className="flex items-center justify-center w-[1055px] h-[633px]">
          <canvas 
            width="2110" 
            height="1266" 
            style={{ 
              background: 'white', 
              display: 'block', 
              cursor: 'pointer', // Simplified cursor for now
              width: '1055px', 
              height: '633px' 
            }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}
