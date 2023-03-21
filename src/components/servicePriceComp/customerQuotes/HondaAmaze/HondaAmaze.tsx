import React from "react";
import Indicator from "../../../reusable/indicatorComponent/Indicator";
import { customerQuotes } from "./data";
export const HondaAmaze = () => {
  return (
    <>
      <Indicator data={customerQuotes} />
    </>
  );
};
