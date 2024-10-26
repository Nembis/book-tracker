import { FC, HTMLAttributes } from "react";

interface H2Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export const H2: FC<H2Props> = ({ text, ...props }) => {
  return (
    <h1 {...props} className="p-2 text-center text-2xl font-semibold">
      {text}
    </h1>
  );
};
