import React from "react";
import { SunIcon } from "../../icons/sun-icon";
import { GrainFallIcon } from "../../icons/grain-fall-icon";

interface SunGrainLoaderProps {
  size?: "small" | "medium" | "large";
  showText?: boolean;
  text?: string;
  className?: string;
}

export const SunGrainLoader: React.FC<SunGrainLoaderProps> = ({
  size = "medium",
  showText = true,
  text = "Loading...",
  className = "",
}) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const iconSizes = {
    small: 32,
    medium: 48,
    large: 64,
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} mb-4`}>
        {/* Sun rotating animation */}
        <div className="absolute inset-0 animate-spin-slow">
          <SunIcon size={iconSizes[size]} color="#F38810" />
        </div>

        {/* Grain falling animation */}
        <div className="absolute inset-0 animate-grain-fall">
          <GrainFallIcon size={iconSizes[size]} color="#F38810" />
        </div>

        {/* Central grain icon */}
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
        </div>
      </div>

      {showText && (
        <div className="text-center">
          <p className="text-[#F38810] font-montserrat font-medium text-sm md:text-base animate-pulse">
            {text}
          </p>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#F38810] rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-[#F38810] rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#F38810] rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
