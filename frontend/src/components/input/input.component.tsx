import { InputHTMLAttributes, FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="resize-none rounded-md p-2 border border-gray-500"
    />
  );
};
