import styled from "styled-components";


export const TextSection = styled.section`
    position:relative;
    padding: 50px 0;
    &.text-sec{
        background: rgb(249 252 255);
        margin-top: 50px;
    }
    h2{
        font-size:30px;
        font-weight:500;
        position: relative;
        margin-bottom: 44px;
        color:#b6142c;
        &:after{
            position: absolute;
            bottom: -22px;
            content: "";
            left: 0;
            height: 4px;
            width: 70px;
            background: #b6142c;
        }
    }
    .text-img {
        width: 450px;
        border-radius: 100%;
        height: 450px;
        object-fit: cover;
        padding: 5px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 10px;
    }
`