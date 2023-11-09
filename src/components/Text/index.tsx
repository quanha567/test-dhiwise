import React from "react";

const sizeClasses = {
  txtInterMedium12: "font-inter font-medium",
  txtInterBold24Gray900: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular8: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium12Pink300: "font-inter font-medium",
  txtInterBold2772: "font-bold font-inter",
  txtInterBold10: "font-bold font-inter",
  txtInterBold12: "font-bold font-inter",
  txtInterRegular8Teal300: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
