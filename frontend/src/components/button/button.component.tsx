import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "blue" | "red";
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, color, ...props }) => {
  let buttonColor: string;
  switch (color) {
    case "blue":
      buttonColor = "bg-blue-700";
      break;
    case "red":
      buttonColor = "bg-red-700";
    default:
      buttonColor = "bg-blue-700";
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
