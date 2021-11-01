import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "medium" | "large";
  submit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  submit = undefined,
}) => {
  return (
    <button
      className={`transition inline-block px-${
        size === "large" ? "5" : "3"
      } py-${
        size === "large" ? "4" : "2"
      } bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-red-900`}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
