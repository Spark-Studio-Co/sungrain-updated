import React, { useState } from "react";
import { SunGrainLoader, FullscreenLoader } from "./index";

export const LoaderDemo: React.FC = () => {
  const [showFullscreen, setShowFullscreen] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-gotham font-bold text-[#223137] mb-2">
          Sun Grain Loader Demo
        </h1>
      </div>

      {/* Small loader */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-gotham font-semibold text-[#223137] mb-4">
          Small Loader
        </h2>
        <SunGrainLoader size="small" text="Loading..." />
      </div>

      {/* Medium loader */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-gotham font-semibold text-[#223137] mb-4">
          Medium Loader
        </h2>
        <SunGrainLoader size="medium" text="Processing..." />
      </div>

      {/* Large loader */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-gotham font-semibold text-[#223137] mb-4">
          Large Loader
        </h2>
        <SunGrainLoader size="large" text="Please wait..." />
      </div>

      {/* Loader without text */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-gotham font-semibold text-[#223137] mb-4">
          Loader without text
        </h2>
        <SunGrainLoader size="medium" showText={false} />
      </div>

      {/* Fullscreen loader trigger */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-gotham font-semibold text-[#223137] mb-4">
          Fullscreen Loader
        </h2>
        <button
          onClick={() => setShowFullscreen(true)}
          className="bg-[#F38810] text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-[#d67209] transition-colors"
        >
          Show Fullscreen Loader
        </button>
      </div>

      {/* Fullscreen loader */}
      <FullscreenLoader
        isVisible={showFullscreen}
        text="Loading SUN GRAIN..."
      />

      {/* Auto-hide fullscreen loader after 3 seconds */}
      {showFullscreen && (
        <div className="hidden">
          {setTimeout(() => setShowFullscreen(false), 3000)}
        </div>
      )}
    </div>
  );
};
