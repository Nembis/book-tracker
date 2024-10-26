import { FC, HTMLAttributes } from "react";

interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export const H1: FC<H1Props> = ({ text, ...props }) => {
  return (
    <h1 {...props} className="p-2 text-center text-4xl font-bold">
      {text}
    </h1>
  );
};
