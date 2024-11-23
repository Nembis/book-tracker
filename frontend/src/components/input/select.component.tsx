import { FC, SelectHTMLAttributes } from "react";

export interface SelectOption {
  display: string;
  value: any;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
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
