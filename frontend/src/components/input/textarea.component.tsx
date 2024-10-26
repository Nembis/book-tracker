import { TextareaHTMLAttributes, FC } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: FC<TextareaProps> = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className="resize-none rounded-md p-2 border border-gray-500"
    />
  );
};
