import React from "react";

import {
  Column,
  Row,
  Stack,
  Image,
  Button,
  Input,
  Line,
  Text,
  List,
} from "components";

const MainlightPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-mulish items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-start justify-evenly w-[100%]">
          <aside className="bg-white_A700 items-center justify-start lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] w-[14%]">
            <Column className="">
              <Stack className="bg-gray_200 lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] lg:px-[37px] xl:px-[42px] px-[48px] 3xl:px-[57px] w-[100%]">
                <Image
                  src={"images/img_frame.png"}
                  className="absolute lg:h-[29px] xl:h-[33px] h-[37px] 2xl:h-[38px] 3xl:h-[45px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                  alt="Frame"
                />
              </Stack>
              <Image
                src={"images/img_menulight.png"}
                className="lg:h-[274px] xl:h-[314px] h-[352px] 2xl:h-[353px] 3xl:h-[423px] object-cover w-[100%]"
                alt="Menulight"
              />
              <Button className="border border-black_900 border-solid font-semibold lg:mt-[339px] xl:mt-[387px] mt-[436px] 3xl:mt-[523px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius8 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 text-center w-[76%]">
                Dark Mode
              </Button>
            </Column>
          </aside>
          <Column className="items-center justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] w-[86%]">
            <header className="w-[100%]">
              <Row className="bg-white_A700 items-center justify-between lg:px-[37px] xl:px-[42px] px-[48px] 3xl:px-[57px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] shadow-bs w-[100%]">
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  WrapClassName="3xl:pl-[24px] 3xl:py-[20px] bg-gray_200 flex lg:my-[1px] lg:pl-[15px] lg:py-[13px] my-[2px] pl-[20px] pr-[0] py-[17px] rounded-radius54 w-[23%] xl:my-[1px] xl:pl-[17px] xl:py-[15px]"
                  name="Search"
                  placeholder="Search"
                  prefix={
                    <Image
                      src={"images/img_vector.svg"}
                      className="w-[12px] h-[12px] lg:w-[9px] lg:h-[10px] xl:w-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:w-[14px] 3xl:h-[15px] my-[auto]"
                      alt="Vector"
                    />
                  }
                ></Input>
                <Row className="items-center justify-center lg:ml-[509px] xl:ml-[582px] ml-[655px] 3xl:ml-[786px] w-[20%]">
                  <Image
                    src={"images/img_iconnotifica.svg"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                    alt="iconnotifica"
                  />
                  <Line className="bg-gray_200 h-[1px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[1px]" />
                  <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 tracking-ls1 w-[auto]">
                    Matt Appleyard
                  </Text>
                  <Image
                    src={"images/img_avatarcircle.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Avatarcircle"
                  />
                </Row>
              </Row>
            </header>
            <Row className="items-center justify-start lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[92%]">
              <Row className="bg-teal_A400 gap-[0] grid grid-cols-2 items-center justify-start xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 w-[63%]">
                <Column className="items-start lg:pb-[42px] xl:pb-[48px] pb-[55px] 3xl:pb-[66px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Welcome to your dashboard!
                  </Text>
                  <Text className="font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_800 text-left w-[100%]">
                    Try our new Admin Dashboard Template, build with live
                    Ant-Design components. Customize it to your needs and
                    release to production!
                  </Text>
                </Column>
                <Image
                  src={"images/img_rightcolumnimg.png"}
                  className="lg:h-[157px] xl:h-[179px] h-[201px] 2xl:h-[202px] 3xl:h-[242px] object-contain w-[100%]"
                  alt="rightColumnImg"
                />
              </Row>
              <Column className="bg-white_A700 items-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius8 w-[35%]">
                <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Chart Title
                </Text>
                <Column className="items-center lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                  <Image
                    src={"images/img_tinybarchart.svg"}
                    className="lg:h-[109px] xl:h-[125px] h-[140px] 2xl:h-[141px] 3xl:h-[169px] object-contain w-[100%]"
                    alt="TinyBarChart"
                  />
                </Column>
              </Column>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[92%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center justify-start lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="items-start pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[51%]">
                  <Text className="font-semibold opacity-op7 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    CHART TITLE
                  </Text>
                  <Text className="font-bold xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    2,643
                  </Text>
                  <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_arrowupward.svg"}
                        className="lg:h-[12px] h-[14.7px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:my-[2px] my-[3.65px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain lg:w-[11px] xl:w-[13px] w-[14.7px] 2xl:w-[14px] 3xl:w-[17px]"
                        alt="arrowupward"
                      />
                      <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        1.10% Since yesterday
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Image
                  src={"images/img_tinylinechart.svg"}
                  className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain w-[47%]"
                  alt="TinyLineChart"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="items-start pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[51%]">
                  <Text className="font-semibold opacity-op7 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    CHART TITLE
                  </Text>
                  <Text className="font-bold xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    2,643
                  </Text>
                  <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Row className="items-center justify-start w-[100%]">
                      <Image
                        src={"images/img_arrowupward_1.svg"}
                        className="lg:h-[12px] h-[14.7px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:my-[2px] my-[3.65px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain lg:w-[11px] xl:w-[13px] w-[14.7px] 2xl:w-[14px] 3xl:w-[17px]"
                        alt="arrowupward"
                      />
                      <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                        1.10% Since yesterday
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Image
                  src={"images/img_tinylinechart_1.svg"}
                  className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain w-[47%]"
                  alt="TinyLineChart"
                />
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="items-start pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pr-[40px] xl:pr-[46px] pr-[52px] 3xl:pr-[62px] w-[58%]">
                  <Text className="font-semibold opacity-op7 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    CHART TITLE
                  </Text>
                  <Text className="font-bold xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    2,643
                  </Text>
                  <Row className="items-center justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Image
                      src={"images/img_arrowupward_2.svg"}
                      className="lg:h-[12px] h-[14.7px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:my-[2px] my-[3.65px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain lg:w-[11px] xl:w-[13px] w-[14.7px] 2xl:w-[14px] 3xl:w-[17px]"
                      alt="arrowupward"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      1.10% Since yesterday
                    </Text>
                  </Row>
                </Column>
                <Image
                  src={"images/img_tinylinechart_2.svg"}
                  className="3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain w-[40%]"
                  alt="TinyLineChart"
                />
              </Row>
            </List>
            <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[92%]">
              <Column className="bg-white_A700 items-start lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius8 w-[63%]">
                <Column className="items-start lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    Chart Title
                  </Text>
                </Column>
                <Stack className="lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[90%]">
                  <Text className="absolute font-semibold inset-x-[0] mx-[auto] text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_801 top-[4%] w-[max-content]">
                    Preview in Anima
                  </Text>
                  <Stack className="absolute lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] inset-[0] w-[100%]">
                    <Image
                      src={"images/img_group.svg"}
                      className="absolute lg:h-[209px] xl:h-[239px] h-[268px] 2xl:h-[269px] 3xl:h-[322px] inset-[0] object-cover w-[100%]"
                      alt="Group"
                    />
                    <Stack className="absolute bottom-[0] lg:h-[183px] xl:h-[209px] h-[234.5px] 2xl:h-[235px] 3xl:h-[282px] inset-x-[0] mx-[auto] w-[97%]">
                      <Image
                        src={"images/img_group_1.svg"}
                        className="absolute lg:h-[183px] xl:h-[209px] h-[234.5px] 2xl:h-[235px] 3xl:h-[282px] left-[0] object-contain w-[93%]"
                        alt="Group"
                      />
                      <Image
                        src={"images/img_group_2.svg"}
                        className="absolute bottom-[0] lg:h-[131px] xl:h-[150px] h-[167.5px] 2xl:h-[168px] 3xl:h-[202px] object-contain right-[0] w-[93%]"
                        alt="Group"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Column>
              <Column className="bg-white_A700 items-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[112px] lg:pb-[73px] xl:pb-[83px] pb-[94px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius8 w-[35%]">
                <Column className="items-center lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                      Chart Title
                    </Text>
                    <Image
                      src={"images/img_arrowupward_3.svg"}
                      className="lg:h-[12px] h-[14.7px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[86.74px] 2xl:ml-[86px] lg:my-[2px] my-[3.65px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain lg:w-[11px] xl:w-[13px] w-[14.7px] 2xl:w-[14px] 3xl:w-[17px]"
                      alt="arrowupward"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                      1.10% Since yesterday
                    </Text>
                  </Row>
                </Column>
                <Stack className="font-inter lg:h-[129px] xl:h-[147px] h-[165.15px] 2xl:h-[166px] 3xl:h-[199px] 3xl:ml-[112px] lg:ml-[72px] xl:ml-[83px] ml-[93.85px] 2xl:ml-[93px] lg:mt-[41px] xl:mt-[47px] mt-[52.85px] 2xl:mt-[52px] 3xl:mt-[63px] w-[48%]">
                  <Image
                    src={"images/img_group_3.svg"}
                    className="absolute bottom-[0] lg:h-[109px] xl:h-[125px] h-[140px] 2xl:h-[141px] 3xl:h-[169px] object-contain right-[9%] lg:w-[108px] xl:w-[124px] w-[140px] 3xl:w-[168px]"
                    alt="Group"
                  />
                  <Column className="absolute items-start justify-start right-[15%] top-[0] w-[16%]">
                    <Column className="items-end lg:pl-[5px] xl:pl-[6px] pl-[7.65px] 2xl:pl-[7px] 3xl:pl-[9px] w-[100%]">
                      <Text className="font-normal mr-[0] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_A100 w-[auto]">
                        300
                      </Text>
                    </Column>
                    <Image
                      src={"images/img_vector_1.svg"}
                      className="lg:h-[15px] xl:h-[17px] h-[18.48px] 2xl:h-[19px] 3xl:h-[23px] object-contain w-[25%]"
                      alt="Vector"
                    />
                  </Column>
                  <Row className="absolute bottom-[20%] items-start justify-evenly left-[0] w-[22%]">
                    <Text className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-teal_A400 w-[auto]">
                      300
                    </Text>
                    <Image
                      src={"images/img_vector_2.svg"}
                      className="3xl:h-[10px] lg:h-[6px] h-[7.65px] xl:h-[7px] 2xl:h-[8px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[3px] lg:mt-[3px] mt-[4.35px] 2xl:mt-[4px] 3xl:mt-[5px] object-contain w-[45%]"
                      alt="Vector"
                    />
                  </Row>
                  <Row className="absolute bottom-[2%] items-start justify-evenly right-[0] w-[19%]">
                    <Image
                      src={"images/img_vector_3.svg"}
                      className="lg:h-[11px] xl:h-[13px] h-[14.14px] 2xl:h-[15px] 3xl:h-[17px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[10px] xl:w-[12px] w-[14.14px] 2xl:w-[14px] 3xl:w-[16px]"
                      alt="Vector"
                    />
                    <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2.14px] 3xl:mt-[2px] 2xl:mt-[2px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-deep_purple_400 w-[auto]">
                      200
                    </Text>
                  </Row>
                </Stack>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MainlightPage;
