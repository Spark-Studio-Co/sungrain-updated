import type { SVGProps } from "react";

interface GrainFallIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export const GrainFallIcon = ({
  size = 48,
  color = "#F38810",
  className,
  ...props
}: GrainFallIconProps) => (
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
      {/* Grain particles */}
      <circle cx="12" cy="8" r="2" fill={color} opacity="0.9" />
      <circle cx="36" cy="12" r="1.5" fill={color} opacity="0.7" />
      <circle cx="24" cy="16" r="2.5" fill={color} opacity="0.8" />
      <circle cx="8" cy="20" r="1.5" fill={color} opacity="0.6" />
      <circle cx="40" cy="24" r="2" fill={color} opacity="0.9" />
      <circle cx="16" cy="28" r="2" fill={color} opacity="0.8" />
      <circle cx="32" cy="32" r="1.5" fill={color} opacity="0.7" />
      <circle cx="20" cy="36" r="2.5" fill={color} opacity="0.9" />
      <circle cx="28" cy="40" r="2" fill={color} opacity="0.8" />
      <circle cx="12" cy="44" r="1.5" fill={color} opacity="0.6" />

      {/* Additional smaller grains */}
      <circle cx="30" cy="8" r="1" fill={color} opacity="0.5" />
      <circle cx="18" cy="12" r="1" fill={color} opacity="0.4" />
      <circle cx="42" cy="16" r="1" fill={color} opacity="0.5" />
      <circle cx="6" cy="32" r="1" fill={color} opacity="0.4" />
      <circle cx="38" cy="36" r="1" fill={color} opacity="0.5" />
    </g>
  </svg>
);
