import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from "@mui/material";
import Logo from "../../assets/logo.png";
import { HeaderWrapper} from "./style";
import { Menus } from "../Menu";
import Data from "./data";

export const Header = () => {
  return (
    <HeaderWrapper>
    <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} className="head-inner">
      <Grid xs={4}>
       <a href="/" className="logo">
        <img src={Logo} alt="Site Logo"/>
       </a>
      </Grid>
      <Grid xs={8}>
      <ul className="menu">
      {Data?.map((item, index) => {
        return (
          <Menus data={item} key={index}/>
        );
      })}
      </ul>
      </Grid>
    </Grid>
  </Box>
  </Container>
  </HeaderWrapper>
  );
};
