import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size?: "medium" | "large";
  submit?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  submit = undefined,
  disabled = false,
}) => {
  return (
    <button
      className={`transition inline-block px-5 py-4 bg-gray-800 text-white  font-bold uppercase rounded hover:bg-red-900`}
      type={submit ? "submit" : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
