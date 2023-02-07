import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import DisplayLottie from "./Lottie";
import Coding from "./lottie.json";
import styled from "@emotion/styled";
import ResponsiveAppBar from "./AppBar";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const StyledH1 = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
        >
          <Grid xs={6}>
            <StyledH1>Haris Livieratos</StyledH1>
          </Grid>
          <Grid xs={6}>
            <Container maxWidth="sm">
              <DisplayLottie animationData={Coding} />
            </Container>
          </Grid>
        </Grid>

        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
