import { FC, SelectHTMLAttributes } from "react";

export interface Option {
  display: string;
  value: any;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select
      {...props}
      className="resize-none rounded-md p-2 border border-gray-500"
    >
      {options.map(({ display, value }) => (
        <option key={value} value={value} className="p-2">
          {display}
        </option>
      ))}
    </select>
  );
};
