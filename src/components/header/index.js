import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Logo from "../../assets/logo.png";
import { HeaderWrapper } from "./style";
import { Menus } from "../Menu";
import Data from "./data";
import { useLocation } from "react-router-dom";
import MenuIcon from "../../assets/menuIcon.png";
//import { Menu as MenuIcon } from "@material-ui/icons";

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitpathname = pathname.split("/");
  console.log(splitpathname[1]);
  const [toggle, setToggle] = useState(0);
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="head-inner">
            <Grid xs={4}>
              <a href="/nettbonuksia" className="logo">
                <img src={Logo} alt="Site Logo" />
              </a>
            </Grid>
            <Grid xs={8}>
              <div className="header-links">
                <img src={MenuIcon} alt="menu icon" onClick={() => setToggle(1)}/>
                <div className={toggle === 1 ? 'menu-items open' : 'menu-items'}>
                <span className="close" onClick={() => setToggle(0)}>X</span>
                <ul className="menu">
                  {Data?.map((item, index) => {
                    return (
                      <Menus
                        data={item}
                        key={index}
                        activeMenu={splitpathname[1]}
                      />
                    );
                  })}
                </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </HeaderWrapper>
  );
};
