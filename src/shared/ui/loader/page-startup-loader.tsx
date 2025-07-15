import React, { useState, useEffect } from "react";
import { SunIcon } from "../../icons/sun-icon";
import { GrainFallIcon } from "../../icons/grain-fall-icon";

interface PageStartupLoaderProps {
  duration?: number; // Duration in milliseconds
  minDisplayTime?: number; // Minimum display time in milliseconds
  onComplete?: () => void;
}

export const PageStartupLoader: React.FC<PageStartupLoaderProps> = ({
  duration = 2000,
  minDisplayTime = 1000,
  onComplete,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    // Minimum display time
    const minTimer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false);
      }
    }, minDisplayTime);

    // Maximum duration
    const maxTimer = setTimeout(() => {
      setIsLoading(false);
      setProgress(100);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [duration, minDisplayTime, progress]);

  useEffect(() => {
    if (!isLoading && progress >= 100) {
      // Fade out animation
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }, 500);

      return () => clearTimeout(fadeTimer);
    }
  }, [isLoading, progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-yellow-50 transition-opacity duration-500 ${
        !isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Main loader animation */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Rotating sun rays */}
          <div className="absolute inset-0 animate-spin-slow">
            <SunIcon size={160} color="#F38810" />
          </div>

          {/* Falling grain particles */}
          <div className="absolute inset-0 animate-grain-fall">
            <GrainFallIcon size={160} color="#F38810" />
          </div>

          {/* Central pulsing grain */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 rounded-full shadow-lg animate-pulse"></div>
          </div>

          {/* Progress ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-44 h-44 transform -rotate-90"
              viewBox="0 0 200 200"
            >
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgba(243, 136, 16, 0.1)"
                strokeWidth="4"
              />
              {/* Progress circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#F38810"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={565.48}
                strokeDashoffset={565.48 - (565.48 * progress) / 100}
                className="transition-all duration-300 ease-out"
              />
            </svg>
          </div>
        </div>
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-gotham font-black text-[#223137] mb-3 tracking-wide">
            SUN GRAIN
          </h1>
        </div>
        {/* Loading text with animation */}
        <div className="text-center">
          <p className="text-[#223137] font-montserrat font-medium text-base mb-4 animate-pulse">
            {progress < 30
              ? "Initializing..."
              : progress < 60
              ? "Loading resources..."
              : progress < 90
              ? "Preparing content..."
              : "Almost ready..."}
          </p>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
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

        {/* Grain particles background animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#F38810] rounded-full opacity-20 animate-grain-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
