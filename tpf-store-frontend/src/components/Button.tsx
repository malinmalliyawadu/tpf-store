import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
}) => {
  return (
    <button
      className={`transition px-${size === "large" ? "5" : "3"} py-${
        size === "large" ? "4" : "2"
      } bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-red-900`}
    >
      {children}
    </button>
  );
};
