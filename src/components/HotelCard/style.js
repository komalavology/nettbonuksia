import styled from "styled-components";

export const CardHeading = styled.h3`
    position:relative;
    margin:0 0 20px;
    text-transform:capitalize;
`;

export const CardLink = styled.a`
    position:relative;
    background:var(--yellow);
    display:block;
    text-align:center;
    padding:10px 0;
    width:100%;
    color: var(--secondary-color);
    font-weight:600;
    transition: .5s;
    &:hover{
        color: var(--white);
        background: var(--secondary-color);
    }
`;

export const Address = styled.div`
    font-size:16px;
    p{
        margin:0;
    }
`;