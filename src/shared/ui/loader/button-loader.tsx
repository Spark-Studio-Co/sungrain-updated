import React from "react";

interface ButtonLoaderProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  size = 16,
  color = "#ffffff",
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        {/* Sun rays */}
        <path
          d="M12 2V4M12 20V22M4 12H2M22 12H20M17.66 6.34L19.07 4.93M4.93 19.07L6.34 17.66M6.34 6.34L4.93 4.93M19.07 19.07L17.66 17.66"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Sun center */}
        <circle cx="12" cy="12" r="3" fill={color} opacity="0.8" />
      </svg>
    </div>
  );
};
