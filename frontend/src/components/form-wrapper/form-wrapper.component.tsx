import { FormHTMLAttributes, PropsWithChildren } from "react";

interface FormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {}

export const FormWrapper = ({
  children,
  ...props
}: PropsWithChildren<FormWrapperProps>) => {
  return (
    <form
      {...props}
      className="border border-gray-700 rounded-md shadow-md shadow-gray-400 p-4 flex flex-col gap-2"
    >
      {children}
    </form>
  );
};
