import styled from "styled-components";

export const AboutInner = styled.section`
        position:realtive;
        padding:60px 0;
        background: rgba(221, 221, 221, 0.17);
        h2{
            position:relative;
            margin-bottom:44px;
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
        img {
            width: 100%;
            height: 100%;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 10px;
            padding: 5px;
            object-fit:cover;
        }
        
`;