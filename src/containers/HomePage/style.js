import styled from "styled-components";


export const TextSection = styled.section`
    position:relative;
    padding: 50px 0;
    &.text-sec{
        background: rgb(221 221 221 / 17%);
        margin-top: 50px;
    }
    h2{
        font-size:30px;
        font-weight:500;
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