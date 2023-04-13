import styled from "styled-components";

export const CardHeading = styled.h3`
    position:relative;
    margin:0 0 10px;
    text-transform:capitalize;
    font-size:21px;
    color:#b6142c;
`;

export const CardLink = styled.a`
    position:relative;
    background:var(--primary-color);
    display:block;
    text-align:center;
    padding:10px 0;
    width:100%;
    color: var(--white);
    font-weight:600;
    transition: .5s;
    &:hover{
        color: var(--white);
        background: var(--secondary-color);
    }
`;

export const Address = styled.div`
    b{
        display:block;
        margin-bottom:5px;
    }
    font-size:16px;
    p{
        margin:0;
        min-height:65px;
        font-size:14px;
        line-height:22px;
    }
`;

export const CardBottom = styled.div`
        padding: 0 10px 10px;
        margin-top: -80px;
        background: rgb(249 252 255);
        width: 80%;
        margin-left: auto;
        margin-right: auto; 
        border-radius:15px;         
`;