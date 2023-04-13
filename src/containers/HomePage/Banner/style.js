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
    background-attachment: fixed;

    h1{
        color: var(--white);
        font-size: 40px;
        max-width: 800px;
        text-align: center;
        position: relative;
        &:after{
            position: absolute;
            bottom: -22px;
            content: "";
            left: 50%;
            transform: translateX(-50%);
            height: 4px;
            width: 70px;
            background: #b6142c;
        }
    }
`;

