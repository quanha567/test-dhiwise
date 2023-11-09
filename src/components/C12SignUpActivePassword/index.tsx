import React from "react";

import { Img, Text } from "components";

type C12SignUpActivePasswordProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "errormessage"
> &
  Partial<{ errormessage: string }>;

const C12SignUpActivePassword: React.FC<C12SignUpActivePasswordProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-pink-300 border-solid flex flex-row gap-3 h-14 md:h-auto items-center justify-between px-4 py-2 rounded-[12px] w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
            <Img
              className="h-4 w-[90px]"
              src="images/img_frame3.svg"
              alt="frameThree"
            />
          </div>
          <Img
            className="h-6 w-6"
            src="images/img_location.svg"
            alt="location"
          />
        </div>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
          <Img
            className="h-5 w-5"
            src="images/img_alertcircle.svg"
            alt="alertcircle"
          />
          <Text
            className="flex-1 text-pink-300 text-xs w-auto"
            size="txtInterMedium12Pink300"
          >
            {props?.errormessage}
          </Text>
        </div>
      </div>
    </>
  );
};

C12SignUpActivePassword.defaultProps = {
  errormessage: "Your password is not strong enough. Use at least 8 characters",
};

export default C12SignUpActivePassword;
