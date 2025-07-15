import React from "react";
import { SunGrainLoader } from "./sun-grain-loader";

interface FullscreenLoaderProps {
  isVisible?: boolean;
  text?: string;
  className?: string;
}

export const FullscreenLoader: React.FC<FullscreenLoaderProps> = ({
  isVisible = true,
  text = "Loading...",
  className = "",
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-95 backdrop-blur-sm transition-opacity duration-300 ${className}`}
    >
      <div className="text-center">
        <SunGrainLoader size="large" showText={true} text={text} />

        {/* Optional brand name */}
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl font-gotham font-bold text-[#223137] mb-2">
            SUN GRAIN
          </h2>
        </div>
      </div>
    </div>
  );
};
