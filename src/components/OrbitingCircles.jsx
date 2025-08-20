import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 100,
  iconSize = 30,
  ...props
}) {
  const calculatedDuration = duration;

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        const animationStyle = {
          "--angle": `${angle}deg`,
          "--radius": `${radius}px`,
          "--icon-size": `${iconSize}px`,
          animation: `orbit ${calculatedDuration}s linear infinite ${reverse ? "reverse" : "normal"}`,
        };

        return (
          <div
            style={animationStyle}
            className={twMerge(
              `absolute flex w-[var(--icon-size)] h-[var(--icon-size)] items-center justify-center rounded-full`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}

      {/* optional circle path */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute inset-0 pointer-events-none w-full h-full"
      >
        <circle
          className="stroke-1 stroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
        />

        <circle
          className="stroke-1 stroke-white/10"
          cx="50%"
          cy="50%"
          r={70} 
          fill="none"
        />  
      </svg>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes orbit {
            0% {
              transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)));
            }
            100% {
              transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--angle) + 360deg)));
            }
          }
        `}
      </style>
    </>
  );
}
