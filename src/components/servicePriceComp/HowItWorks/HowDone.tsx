import * as React from "react";
import Grid from "@mui/material/Grid";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";

export const HowDone = () => {
    return (
        <>

            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 6, md: 12 }}

            ></Grid>
            <Dash_saperator />
        </>
    );
};
