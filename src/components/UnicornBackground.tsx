import React, { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export const UnicornBackground = ({ projectId }: { projectId: string }) => {
  useEffect(() => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const i = document.createElement("script");
      i.async = true;
      i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
      
      i.onload = function() {
        const initUS = () => {
          if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        };

        if (document.readyState === "complete" || document.readyState === "interactive") {
          initUS();
        } else {
          document.addEventListener("DOMContentLoaded", initUS);
        }
      };
      (document.head || document.body).appendChild(i);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div data-us-project={projectId} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};
