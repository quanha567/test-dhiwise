import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";

import "react-circular-progressbar/dist/styles.css";

const SignUpEmptyPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-blue-A700 flex flex-col justify-start p-12 md:px-5 w-1/2 md:w-full">
          <div className="flex flex-row gap-[11px] items-start justify-start pr-[3px] w-[28%] md:w-full">
            <Img
              className="h-[33px] mb-0.5 w-[33px]"
              src="images/img_rewind.svg"
              alt="rewind"
            />
            <Text
              className="mt-[3px] sm:text-[23.72px] md:text-[25.72px] text-[27.72px] text-white-A700 tracking-[-0.35px]"
              size="txtInterBold2772"
            >
              Hiphonic
            </Text>
          </div>
          <div className="bg-gradient  md:h-[424px] h-[524px] mt-[57px] mx-auto p-9 sm:px-5 relative rounded-[50%] w-[524px] sm:w-full">
            <div className="absolute bg-gradient1  h-[367px] inset-[0] justify-center m-auto rounded-[183px] w-[367px]"></div>
            <div className="absolute bottom-[7%] md:h-[274px] h-[409px] inset-x-[0] mx-auto w-[66%]">
              <div className="absolute bg-white-A700 flex flex-col gap-3 items-center justify-end left-[0] pt-[13px] rounded-[12px] top-[0] w-[62%]">
                <Img
                  className="h-2.5"
                  src="images/img_group8.svg"
                  alt="groupEight"
                />
                <div className="bg-gray-100 flex flex-col gap-3 items-start justify-center p-4 rounded-bl-[12px] rounded-br-[12px] w-full">
                  <Img
                    className="h-5 mt-1"
                    src="images/img_group6.svg"
                    alt="groupSix"
                  />
                  <div className="flex flex-col gap-2 items-center justify-start mb-[11px] w-full">
                    <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start p-2.5 rounded-lg w-full">
                      <Img
                        className="h-7 md:h-auto ml-0.5 rounded-[50%] w-7"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix"
                      />
                      <Img
                        className="h-[18px]"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start p-2.5 rounded-lg w-full">
                      <Img
                        className="h-7 md:h-auto ml-0.5 rounded-[50%] w-7"
                        src="images/img_ellipse6_28x28.png"
                        alt="ellipseSix_One"
                      />
                      <Img
                        className="h-[18px]"
                        src="images/img_menu.svg"
                        alt="menu_One"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start p-2.5 rounded-lg w-full">
                      <Img
                        className="h-7 md:h-auto ml-0.5 rounded-[50%] w-7"
                        src="images/img_ellipse6_1.png"
                        alt="ellipseSix_Two"
                      />
                      <Img
                        className="h-[18px]"
                        src="images/img_menu.svg"
                        alt="menu_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-start justify-end p-[11px] right-[0] rounded-[12px] shadow-bs top-[13%] w-[57%]">
                <Text
                  className="md:ml-[0] ml-[3px] mt-1 text-gray-900 text-xs"
                  size="txtInterBold12"
                >
                  Activity
                </Text>
                <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
                  <Img
                    className="h-[53px]"
                    src="images/img_group11.svg"
                    alt="groupEleven"
                  />
                  <div className="flex flex-row gap-1.5 items-center justify-between mt-1 w-[166px]">
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      M
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      T
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      W
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      T
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      F
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      S
                    </Text>
                    <Text
                      className="text-[8px] text-blue_gray-500 text-center tracking-[0.30px] w-auto"
                      size="txtInterRegular8"
                    >
                      S
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[210px] h-[230px] right-[0] w-[57%]">
                <Img
                  className="absolute h-[210px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_group22.svg"
                  alt="groupTwentyTwo"
                />
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[88%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[9px] rounded-lg w-[48%]">
                        <div className="h-[60px] relative w-[60px]">
                          <div className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible"
                              value={38}
                              strokeWidth={10}
                              styles={{
                                trail: { strokeWidth: 10, stroke: "#f1f5f9" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                  stroke: "#2563eb",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible"
                              value={31}
                              strokeWidth={10}
                              styles={{
                                trail: { strokeWidth: 10, stroke: "#f1f5f9" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(138deg)",
                                  stroke: "#38bdf8",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[60px] absolute h-[60px] inset-[0] justify-center m-auto overflow-visible"
                              value={9}
                              strokeWidth={10}
                              styles={{
                                trail: { strokeWidth: 10, stroke: "#f1f5f9" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(255deg)",
                                  stroke: "#8b5cf6",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-900 text-xs w-max"
                            size="txtInterMedium12"
                          >
                            70%
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-[49%]">
                        <div className="bg-white-A700 flex flex-col items-center justify-start p-[9px] rounded-lg w-full">
                          <div className="bg-gray-300 h-2 rounded w-full"></div>
                        </div>
                        <Img
                          className="h-7"
                          src="images/img_menu_indigo_50.svg"
                          alt="menu_Three"
                        />
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-2 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 flex flex-1 flex-row gap-[37px] items-center justify-between p-2 rounded-lg w-full">
                        <Img
                          className="h-6"
                          src="images/img_menu_indigo_50_24x67.svg"
                          alt="menu"
                        />
                        <div className="flex flex-col gap-0.5 items-end justify-start w-auto">
                          <Text
                            className="text-[10px] text-gray-900 text-right w-auto"
                            size="txtInterBold10"
                          >
                            $1,235,00
                          </Text>
                          <Text
                            className="text-[8px] text-right text-teal-300 w-auto"
                            size="txtInterRegular8Teal300"
                          >
                            Completed
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-row gap-9 items-center justify-between p-2 rounded-lg w-full">
                        <Img
                          className="h-6"
                          src="images/img_menu_indigo_50_24x67.svg"
                          alt="menu"
                        />
                        <div className="flex flex-col gap-0.5 items-end justify-start w-auto">
                          <Text
                            className="text-[10px] text-gray-900 text-right w-auto"
                            size="txtInterBold10"
                          >
                            $2,266,70
                          </Text>
                          <Text
                            className="text-[8px] text-right text-teal-300 w-auto"
                            size="txtInterRegular8Teal300"
                          >
                            Completed
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[73px] mt-12 w-auto sm:w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[0.20px] w-auto"
              size="txtInterBold24"
            >
              Customizable Multipurpose Dashboard
            </Text>
            <Text
              className="text-center text-gray-50_99 text-sm w-auto"
              size="txtInterRegular14"
            >
              Everything you need in an easily customizable dashboard.
            </Text>
          </div>
          <PagerIndicator
            className="flex gap-4 h-2.5 items-start justify-start mb-6 md:ml-[0] ml-[275px] mt-10 w-[62px]"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700 w-2.5"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700_6c w-2.5"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="flex flex-col items-start justify-end p-[105px] md:px-5 w-[51%] md:w-full">
          <Text
            className="md:ml-[0] ml-[58px] mt-[57px] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.20px]"
            size="txtInterBold24Gray900"
          >
            Sign Up for an Account
          </Text>
          <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[58px] mt-[29px] w-[404px] sm:w-full">
            <Input
              name="username"
              placeholder="Username"
              className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="text"
              prefix={
                <Img
                  className="h-6 mr-3"
                  src="images/img_user.svg"
                  alt="user"
                />
              }
            ></Input>
            <Input
              name="email"
              placeholder="Email"
              className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="email"
              prefix={
                <Img
                  className="h-6 mr-3"
                  src="images/img_mail.svg"
                  alt="mail"
                />
              }
            ></Input>
            <Input
              name="password"
              placeholder="Password"
              className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="flex w-full"
              type="password"
              prefix={
                <Img
                  className="h-6 mr-3"
                  src="images/img_lock.svg"
                  alt="lock"
                />
              }
              suffix={
                <Img
                  className="h-6 ml-[35px]"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
            ></Input>
          </div>
          <Text
            className="md:ml-[0] ml-[58px] mt-[15px] text-blue_gray-500 text-xs"
            size="txtInterRegular12"
          >
            Your password must have at least 8 characters
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[58px] mt-6 w-[340px]">
            <div className="border border-gray-300 border-solid h-5 rounded w-5"></div>
            <Text
              className="flex-1 leading-[160.00%] text-blue_gray-500 text-xs"
              size="txtInterRegular12"
            >
              <span className="text-blue_gray-500 font-inter text-left font-normal">
                By creating an account means you agree to the{" "}
              </span>
              <span className="text-gray-900 font-inter text-left font-semibold">
                <>
                  Terms
                  <br />& Conditions
                </>
              </span>
              <span className="text-blue_gray-500 font-inter text-left font-normal">
                {" "}
                and our{" "}
              </span>
              <span className="text-gray-900 font-inter text-left font-semibold">
                Privacy Policy
              </span>
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold h-14 md:ml-[0] ml-[58px] mt-[31px] text-base text-center tracking-[0.20px] w-[404px]"
            shape="round"
            color="blue_A700"
          >
            Sign Up
          </Button>
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[58px] mt-8 w-[404px] sm:w-full">
            <Line className="bg-gray-300 h-px w-[36%]" />
            <Text
              className="text-blue_gray-500 text-center text-xs w-auto"
              size="txtInterRegular12"
            >
              Or sign up with
            </Text>
            <Line className="bg-gray-300 h-px w-[36%]" />
          </div>
          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[59px] mt-8 w-[403px] sm:w-full">
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[193px]"
              leftIcon={
                <Img
                  className="h-5 mb-px"
                  src="images/img_google.svg"
                  alt="google"
                />
              }
              shape="round"
            >
              <div className="font-semibold text-base text-left tracking-[0.20px]">
                Google
              </div>
            </Button>
            <Button
              className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[193px]"
              leftIcon={
                <div className="h-5 mb-px w-5 bg-blue-A700">
                  <Img
                    className="h-5"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </div>
              }
              shape="round"
            >
              <div className="font-semibold text-base text-left tracking-[0.20px]">
                Facebook
              </div>
            </Button>
          </div>
          <Text
            className="md:ml-[0] ml-[152px] mt-[35px] text-center text-gray-900 text-sm tracking-[0.20px]"
            size="txtInterMedium14"
          >
            <span className="text-gray-900 font-inter font-normal">
              Already have an account?
            </span>
            <span className="text-gray-900 font-inter font-medium"> </span>
            <span className="text-blue-A700 font-inter font-bold">Log In</span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default SignUpEmptyPage;
