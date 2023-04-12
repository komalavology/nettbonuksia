import styled from "styled-components";
import BG from "../../../assets/banner.png";

export const BannerWrapper = styled.section`
    position:relative;
    background: url(${BG}) no-repeat;
    background-size:cover;
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;

    h1{
        color: var(--white);
        font-size: 40px;
        max-width: 800px;
        text-align: center;
    }
`;

