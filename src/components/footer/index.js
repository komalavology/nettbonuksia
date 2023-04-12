import { FooterWrapper } from "./style";
import { Container } from "@mui/material";
import Logo from "../../assets/logo.png";
import Data from "./data";
import { Menus } from "../Menu";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-inner">
            <a href="/" className="logo">
              <img src={Logo} alt="Site Logo" />
            </a>
            <ul class="menu">
              {Data?.map((item, index) => {
                return <Menus data={item} key={index} />;
              })}
            </ul>
            <p class="copyright">
              Copyright © 2023 Nettbonuksia
            </p>
        </div>
      </Container>
    </FooterWrapper>
  );
};
