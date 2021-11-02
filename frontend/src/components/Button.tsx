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
      className={`transition inline-block px-5 py-4 bg-gray-800 text-white text-sm font-bold uppercase rounded hover:bg-red-900`}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
