import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "blue" | "red";
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, color, ...props }) => {
  let buttonColor: string;
  switch (color) {
    case "blue":
      buttonColor = "bg-blue-700 hover:bg-blue-900";
      break;
    case "red":
      buttonColor = "bg-red-700 hover:bg-red-900";
      break;
    default:
      buttonColor = "bg-blue-700 hover:bg-blue-900";
      break;
  }

  return (
    <button
      {...props}
      className={`p-2 rounded-md text-white hover:cursor-pointer ${buttonColor}`}
    >
      {text}
    </button>
  );
};
