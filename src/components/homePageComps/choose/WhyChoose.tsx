import { Grid } from "@mui/material";
import React from "react";

import { whyChooseGomechanic } from "./Data";

import { BigData } from "../../reusable/bigDataComp/BigData";
export const WhyChoose = () => {
  return (
    <>
      <BigData data={whyChooseGomechanic} />
    </>
  );
};
