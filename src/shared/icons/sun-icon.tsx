import type { SVGProps } from "react";

interface SunIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export const SunIcon = ({
  size = 48,
  color = "#F38810",
  className,
  ...props
}: SunIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g>
      {/* Sun rays */}
      <path
        d="M24 4V8M24 40V44M8 24H4M44 24H40M35.36 12.64L38.18 9.82M9.82 38.18L12.64 35.36M12.64 12.64L9.82 9.82M38.18 38.18L35.36 35.36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sun center */}
      <circle
        cx="24"
        cy="24"
        r="10"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      {/* Inner sun detail */}
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1"
      />
    </g>
  </svg>
);
