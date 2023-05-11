import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ small, gray, className = "", ...props }: ButtonProps) {
  const sizeClasses = small ? "px-2 py-2" : "px-4 py-2 font-bold";
  const colourClasses = gray
    ? "bg-gray-400 hover:bg-gray-200 focus-visible:bg-gray-200"
    : "bg-blue-400 hover:bg-blue-200 focus-visible:bg-blue-200";
  return <button className={`rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 text-white ${sizeClasses} ${colourClasses} ${className}`}>Tweet</button>;
}
