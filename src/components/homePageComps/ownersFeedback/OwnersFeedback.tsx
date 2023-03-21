import React from "react";
import { feedback } from "./feedback";
import Indicator from "../../reusable/indicatorComponent/Indicator";
export default function OwnersFeedback() {
  return (
    <>
      <Indicator data={feedback} />
    </>
  );
}
